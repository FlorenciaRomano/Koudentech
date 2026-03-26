"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isWaActive, setIsWaActive] = useState(false) 
  const pathname = usePathname()

  const whatsappUrl = "https://wa.me/5491124682070";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setIsWaActive(false)
  }, [pathname])

  const scrollToSection = (e: React.MouseEvent, href: string) => {
    if (href.startsWith('#') || href === '/') {
      e.preventDefault();
      setIsOpen(false);
      
      const targetId = href === '/' ? 'home' : href.replace('#', '');
      const elem = targetId === 'home' ? document.body : document.getElementById(targetId);
      
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleWaClick = (e: React.MouseEvent) => {
    if (window.innerWidth < 1024) {
      if (!isWaActive) {
        e.preventDefault();
        setIsWaActive(true);
      }
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Metodologia', href: '#metodologia' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'proyectos', href: '#proyectos' },
    { name: 'Sobre Nosotros', href: '#sobre-nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ]

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        
        .nav-link {
          position: relative;
          font-family: 'Inter', sans-serif;
          color: #FFFFFF;
          text-decoration: none;
          font-size: 12px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          cursor: pointer;
          padding: 4px 0;
          white-space: nowrap;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #0ea5e9; /* CAMBIADO: Color azul eléctrico */
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .btn-hablemos {
          background-color: #FFFFFF;
          color: #1D326F;
          padding: 8px 18px;
          font-size: 12px;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          text-transform: uppercase;
          margin-left: 15px;
          border-radius: 50px;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          white-space: nowrap;
        }

        @media (min-width: 1024px) {
            .btn-hablemos:hover {
                background-color: #25D366 !important;
                color: #FFFFFF !important;
                gap: 10px;
                transform: scale(1.05);
            }
            .btn-hablemos:hover svg {
                width: 16px;
                opacity: 1;
            }
            .nav-link { 
              margin-left: clamp(10px, 2vw, 30px); 
              opacity: 0.8; 
            }
            .desktop-menu { display: flex !important; align-items: center; }
            .hamburger-fixed { display: none !important; }
        }

        @media (min-width: 1024px) and (max-width: 1200px) {
            .nav-link { font-size: 11px; margin-left: 12px; }
            .brand-text { font-size: 17px; }
            .btn-hablemos { padding: 7px 14px; font-size: 11px; }
        }

        .brand-text {
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          font-size: 20px;
          color: #FFFFFF;
          letter-spacing: -0.5px;
          margin-left: 10px;
          white-space: nowrap;
        }

        .hamburger-fixed {
          display: flex;
          position: fixed;
          right: 20px;
          top: 15px;
          width: 30px;
          height: 40px;
          z-index: 1000001;
          background: transparent;
          border: none;
          cursor: pointer;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;
          gap: 6px;
        }

        .burger-bar {
          width: 28px;
          height: 2px;
          background-color: white;
          transition: all 0.3s ease;
          transform-origin: right center;
        }

        @media (max-width: 1023px) {
          .desktop-menu { display: none !important; }
          .hamburger-fixed { display: flex; }
          .logo-container { width: 38px !important; }
          .brand-text { font-size: 18px; }
        }

        .mobile-panel {
          position: fixed;
          top: 0;
          right: -100%;
          width: 280px;
          height: 100vh;
          background: rgba(20, 35, 80, 0.98);
          backdrop-filter: blur(20px);
          display: flex;
          flex-direction: column;
          padding: 100px 40px;
          gap: 25px;
          transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1000000;
        }

        .mobile-panel.active { right: 0; }
        
        .overlay-bg {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100vh;
          background: rgba(0,0,0,0.4);
          opacity: 0; visibility: hidden;
          transition: all 0.3s; z-index: 999999;
        }
        .overlay-bg.active { opacity: 1; visibility: visible; }
      `}} />

      <div className={`overlay-bg ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(false)} />

      <button className="hamburger-fixed" onClick={() => setIsOpen(!isOpen)}>
        <div className="burger-bar" style={{ transform: isOpen ? 'rotate(-45deg) scaleX(1.1) translateY(-2px)' : 'none' }}></div>
        <div className="burger-bar" style={{ opacity: isOpen ? 0 : 1, width: '20px' }}></div>
        <div className="burger-bar" style={{ transform: isOpen ? 'rotate(45deg) scaleX(1.1) translateY(2px)' : 'none' }}></div>
      </button>

      <nav 
        className="fixed top-0 w-full z-[100] transition-all duration-500"
        style={{
          backgroundColor: isScrolled ? 'rgba(29, 50, 111, 0.85)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          height: '75px',
          display: 'flex',
          alignItems: 'center',
          borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.05)' : 'none'
        }}
      >
        <div style={{ 
          width: '100%', 
          maxWidth: '1400px', 
          margin: '0 auto', 
          padding: '0 3%', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>

          {/* LOGO */}
          <Link href="/" onClick={(e) => scrollToSection(e, '/')} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <motion.div 
              animate={{ filter: ["drop-shadow(0 0 2px #0ea5e9)", "drop-shadow(0 0 6px #0ea5e9)", "drop-shadow(0 0 2px #0ea5e9)"] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="logo-container" 
              style={{ width: '40px' }}
            > 
              <Image src="/assets/logo_Koudentech.png" alt="Logo" width={40} height={40} priority className="w-full h-auto" />
            </motion.div>
            <span className="brand-text">Koudentech</span>
          </Link>

          {/* Menú Desktop */}
          <div className="desktop-menu" style={{ display: 'none' }}>
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="nav-link">
                {link.name}
              </a>
            ))}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-hablemos">
              <svg viewBox="0 0 448 512" style={{height: '16px', fill: 'currentColor'}}><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.1-3.2-5.5-.3-8.4 2.4-11.1 2.4-2.4 5.5-6.5 8.3-9.7 2.8-3.2 3.7-5.5 5.5-9.2 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.7 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.5 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
              <span style={{marginLeft: '8px'}}>Hablemos</span>
            </a>
          </div>
        </div>
      </nav>

      <div className={`mobile-panel ${isOpen ? 'active' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="nav-link" style={{ fontSize: '16px' }}>
            {link.name}
          </a>
        ))}
      </div>
    </>
  )
}