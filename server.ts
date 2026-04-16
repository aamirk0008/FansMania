import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import axios from "axios";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to parse JSON
  app.use(express.json());

  // API Route for Cricket Data
  app.get("/api/matches", async (req, res) => {
    try {
      const apiKey = process.env.CRIC_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "CRIC_API_KEY is not configured" });
      }

      // Fetching current matches from CricAPI
      // Note: Using 'currentMatches' endpoint as an example
      const response = await axios.get(`https://api.cricapi.com/v1/currentMatches?apikey=${apiKey}&offset=0`);
      
      // Filter for RCB matches if possible, or just return all
      res.json(response.data);
    } catch (error) {
      console.error("Error fetching cricket data:", error);
      res.status(500).json({ error: "Failed to fetch cricket data" });
    }
  });

  // API Route for Player Stats
  app.get("/api/player/:id", async (req, res) => {
    try {
      const apiKey = process.env.CRIC_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "CRIC_API_KEY is not configured" });
      }

      const { id } = req.params;
      const response = await axios.get(`https://api.cricapi.com/v1/players_info?apikey=${apiKey}&id=${id}`);
      res.json(response.data);
    } catch (error) {
      console.error("Error fetching player stats:", error);
      res.status(500).json({ error: "Failed to fetch player stats" });
    }
  });

let iplCache = {
  data: null,
  timestamp: 0
};

// API Route for IPL Fixtures (using series_info)
app.get("/api/ipl-fixtures", async (req, res) => {
  try {
    const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes
    const now = Date.now();

    if (iplCache.data && (now - iplCache.timestamp < CACHE_DURATION)) {
      console.log("Serving IPL fixtures from cache");
      return res.json({ status: "success", data: iplCache.data, cached: true });
    }

    let apiKey = process.env.CRIC_API_KEY;
    if (!apiKey || apiKey.trim() === "") {
      apiKey = "75d49513-2be5-46e4-8876-670ecb374422";
    }
    const seriesId = "87c62aac-bc3c-4738-ab93-19da0690488f";
    
    console.log(`Fetching IPL fixtures for series: ${seriesId}...`);
    
    const response = await axios.get(`https://api.cricapi.com/v1/series_info?apikey=${apiKey}&id=${seriesId}`);
    
    if (response.data.status !== "success") {
      console.error("CricAPI Error Response:", response.data);
      
      // If blocked but we have cache, serve stale cache
      if (iplCache.data) {
        return res.json({ 
          status: "success", 
          data: iplCache.data, 
          stale: true,
          warning: response.data.reason || "API rate limited, showing cached data"
        });
      }

      return res.status(429).json({ 
        error: "CricAPI rate limited", 
        reason: response.data.reason || "Blocked for 15 minutes",
        status: response.data.status 
      });
    }

    if (!response.data.data || !response.data.data.matchList) {
      throw new Error("Unexpected data structure from CricAPI");
    }

    // Update cache
    iplCache = {
      data: response.data.data.matchList,
      timestamp: now
    };

    res.json({ status: "success", data: iplCache.data });
  } catch (error) {
    console.error("Error fetching IPL fixtures:", error.message);
    
    if (iplCache.data) {
      return res.json({ status: "success", data: iplCache.data, stale: true });
    }

    res.status(500).json({ error: "Internal Server Error", message: error.message });
  }
});

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
