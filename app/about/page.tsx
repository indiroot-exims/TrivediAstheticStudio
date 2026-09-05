import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export default function AboutPage() {
  return <main><SiteHeader /><section className="page-hero about-hero"><p className="eyebrow">The studio</p><h1>Made to be<br /><i>felt.</i></h1><p>A small, independent studio creating tactile objects for considered spaces.</p></section><section className="story-section"><div className="story-image"><Image src="/images/hero-resin-studio.png" alt="Resin furniture in the Trivedi Asthetic Studio" fill sizes="(max-width: 800px) 100vw, 50vw" className="cover-image" /></div><div className="story-copy"><p className="eyebrow">Our point of view</p><h2>Material first.<br /><i>Always human.</i></h2><p>Trivedi Asthetic Studio began with a simple curiosity: what happens when natural timber, mineral colour and liquid resin are given time to become something unexpected?</p><p>From our Ahmedabad studio, we create one-of-a-kind furniture and art with a generous amount of patience. Every pour, edge and finish is considered by hand.</p><Link href="/contact" className="text-link">Work with the studio <span>↗</span></Link></div></section><section className="quote-section"><div className="quote-mark">“</div><blockquote>Good design does not ask to be noticed.<br /><i>It asks to be remembered.</i></blockquote><p>— The Trivedi Asthetic Studio philosophy</p></section><SiteFooter /></main>
}
