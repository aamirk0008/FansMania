import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logoPic from "../assets/rcb-logo.png";
import { Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const MyNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Fixtures', path: '/fixtures' },
    { name: 'Points Table', path: '/points-table' },
    { name: 'Gallery', path: '#' },
  ];

  return (
    <nav className='w-full bg-black/80 backdrop-blur-xl text-white font-sans sticky top-0 z-50 border-b border-white/10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>
          {/* Logo */}
          <Link to="/" className='flex items-center gap-3 group'>
            <div className="relative">
              <div className="absolute -inset-2 bg-red-600 rounded-full blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
              <img src={logoPic} className='w-12 h-14 relative drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]' alt="logo" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className='text-2xl font-black tracking-tighter uppercase italic'>Fans<span className='text-red-600'>Mania</span></span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-50">Official Fan Club</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className='hidden lg:flex items-center space-x-8'>
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => 
                  `relative py-2 text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:text-red-500 ${
                    isActive ? 'text-red-500' : 'text-white/70'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-600"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right Section: Search & CTA */}
          <div className="hidden md:flex items-center gap-6">
            <div className='relative group'>
              <input 
                type="search" 
                className='bg-white/5 hover:bg-white/10 focus:bg-white/10 h-10 pl-10 pr-4 rounded-full border border-white/10 focus:border-red-500/50 outline-none text-sm w-48 lg:w-64 transition-all duration-300 placeholder-white/40' 
                placeholder='Search players, matches...'
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within:text-red-500 transition-colors" />
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-red-600/20">
              Join Club
            </button>
          </div>

          {/* Mobile menu button */}
          <div className='lg:hidden flex items-center gap-4'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all'
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='lg:hidden bg-black/95 backdrop-blur-2xl border-t border-white/10 overflow-hidden'
          >
            <div className='px-4 py-8 space-y-6'>
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => 
                    `block text-2xl font-black uppercase tracking-tighter ${
                      isActive ? 'text-red-600' : 'text-white'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              
              <div className='pt-6 border-t border-white/10'>
                <div className='relative mb-6'>
                  <input 
                    type="search" 
                    className='w-full bg-white/5 h-12 pl-12 pr-4 rounded-xl border border-white/10 outline-none text-lg' 
                    placeholder='Search...'
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                </div>
                <button className="w-full bg-red-600 py-4 rounded-xl font-bold text-lg uppercase tracking-widest">
                  Join Fan Club
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default MyNavbar