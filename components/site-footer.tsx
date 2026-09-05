import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-top">
        <Link className="wordmark footer-mark" href="/">TRIVEDI <em>ASTHETIC</em> STUDIO</Link>
        <p>Resin art &amp; furniture<br />made with intention.</p>
        <div className="footer-links"><Link href="/products">Products</Link><Link href="/about">About us</Link><Link href="/contact">Contact us</Link></div>
        <div className="social-links"><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://pinterest.com" target="_blank" rel="noreferrer">Pinterest ↗</a></div>
      </div>
      <div className="footer-bottom"><span>© 2025 Trivedi Asthetic Studio</span><span>Handmade in Ahmedabad, India</span><span>Privacy · Terms</span></div>
    </footer>
  )
}
