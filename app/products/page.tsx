import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const products = [
  { name: 'The Coastal Current', type: 'Resin coffee table', image: '/images/resin-table.png' },
  { name: 'Moon Tide', type: 'Statement wall clock', image: '/images/resin-clock.png' },
  { name: 'Blue Hour I', type: 'Abstract wall artwork', image: '/images/resin-art.png' },
  { name: 'The Still Water', type: 'Custom dining table', image: '/images/hero-resin-studio.png' },
]

export default function ProductsPage() {
  return <main><SiteHeader /><section className="page-hero"><p className="eyebrow">The collection</p><h1>Pieces with<br /><i>presence.</i></h1><p>Explore our small-batch works and commission a piece designed around your space.</p></section><section className="catalogue"><div className="section-heading"><div><p className="eyebrow">Browse the collection</p><h2>Find your <i>piece.</i></h2></div><p className="muted-copy">This is the main product hub.<br />New categories can be added here.</p></div><nav className="category-nav" aria-label="Product categories"><a href="#collection">Tables</a><a href="#collection">Wall art</a><a href="#collection">Clocks</a><a href="#collection">Custom commissions</a></nav><div id="collection" className="product-grid">{products.map(product => <article className="product-card" key={product.name}><Link href="/contact" className="product-image"><Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 50vw, 25vw" className="cover-image" /><span className="enquire-label">Enquire ↗</span></Link><p className="product-type">{product.type}</p><h3>{product.name}</h3><p className="product-price">Enquire for price</p></article>)}</div></section><section className="contact-strip"><div><p className="eyebrow">Made for your space</p><h2>Start with<br />a conversation.</h2></div><div className="contact-action"><p>Tell us what you&apos;re imagining. We&apos;ll take it from there.</p><Link className="button button-light" href="/contact">Make an enquiry <span>↗</span></Link></div></section><SiteFooter /></main>
}
