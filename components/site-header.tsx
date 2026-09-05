'use client'

import Link from 'next/link'
import { useState } from 'react'

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="announcement">Complimentary design consultation for your next statement piece <span>↗</span></div>
      <header className="site-header">
        <Link className="wordmark" href="/" onClick={() => setMenuOpen(false)} aria-label="Trivedi Asthetic Studio home">TRIVEDI <em>ASTHETIC</em> STUDIO</Link>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation"><span /><span /></button>
        <nav className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label="Primary navigation">
          <Link href="/products" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About us</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact us</Link>
          <Link href="/contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Start a conversation <span>↗</span></Link>
        </nav>
      </header>
    </>
  )
}
