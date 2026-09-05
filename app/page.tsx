'use client'

import Image from 'next/image'
import { useState } from 'react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const categories = [
  { name: 'Resin Tables', text: 'Furniture shaped by tide and timber.', image: '/images/resin-table.png' },
  { name: 'Wall Clocks', text: 'Time, made personal.', image: '/images/resin-clock.png' },
  { name: 'Wall Art', text: 'Quiet drama for considered spaces.', image: '/images/resin-art.png' },
]

const products = [
  { name: 'The Coastal Current', type: 'Resin coffee table', price: 'Enquire for price', image: '/images/resin-table.png' },
  { name: 'Moon Tide', type: 'Statement wall clock', price: 'Enquire for price', image: '/images/resin-clock.png' },
  { name: 'Blue Hour I', type: 'Abstract wall artwork', price: 'Enquire for price', image: '/images/resin-art.png' },
  { name: 'The Still Water', type: 'Custom dining table', price: 'Enquire for price', image: '/images/hero-resin-studio.png' },
]

const faqs = [
  ['How do I commission a piece?', 'Share your vision through our enquiry form. We will reply with a thoughtful proposal, material options and the next steps for bringing it to life.'],
  ['Can you create custom sizes and colours?', 'Absolutely. Every piece is made to order, so scale, palette and finish can be tailored to your space.'],
  ['How long does a piece take?', 'Most commissions take 4–8 weeks depending on size, detail and curing time. We will share a clear timeline before we begin.'],
  ['Do you ship across India?', 'Yes. We carefully crate and arrange insured delivery across India, with installation guidance where needed.'],
]

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0)
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubscribe(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (email.trim()) setSent(true)
  }

  return (
    <main>
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Handcrafted resin art · Ahmedabad, India</p>
          <h1>Objects with<br /><i>an atmosphere.</i></h1>
          <p className="hero-lede">One-of-a-kind furniture and art, shaped by water, light and the beauty of imperfection.</p>
          <a className="button button-dark" href="#collection">Explore the collection <span>↗</span></a>
          <div className="hero-note"><span className="line" /> Each piece is made slowly, deliberately, and only once.</div>
        </div>
        <div className="hero-image-wrap">
          <Image src="/images/hero-resin-studio.png" alt="Ocean teal resin table in an airy interior" fill priority className="hero-image" sizes="(max-width: 768px) 100vw, 55vw" />
          <div className="image-caption">No. 014 — The Coastal Current<br /><span>Resin &amp; reclaimed teak</span></div>
        </div>
      </section>

      <section className="intro-section" id="studio">
        <div className="section-kicker"><span>01</span><span className="kicker-line" /><span>What we make</span></div>
        <div className="intro-grid">
          <h2>Made to be<br /><i>felt.</i></h2>
          <div><p className="intro-text">Trivedi Asthetic Studio creates tactile pieces for people who want their spaces to feel like their own. We combine deep, mineral colour with natural wood and a generous amount of patience.</p><a className="text-link" href="#process">Discover our approach <span>↗</span></a></div>
        </div>
      </section>

      <section className="category-section" id="collection">
        <div className="section-heading"><div><p className="eyebrow">The collection</p><h2>Find your <i>piece.</i></h2></div><a className="text-link" href="#enquire">View all work <span>↗</span></a></div>
        <div className="category-grid">
          {categories.map((category, index) => <a className="category-card" href="#enquire" key={category.name}><div className="category-image"><Image src={category.image} alt={category.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="cover-image" /><span className="category-number">0{index + 1}</span></div><div className="category-info"><div><h3>{category.name}</h3><p>{category.text}</p></div><span className="circle-arrow">↗</span></div></a>)}
        </div>
      </section>

      <section className="product-section">
        <div className="section-heading"><div><p className="eyebrow">Selected works</p><h2>Made for the <i>everyday.</i></h2></div><p className="muted-copy">Small editions, large presence.<br />Available to commission.</p></div>
        <div className="product-grid">{products.map(product => <article className="product-card" key={product.name}><a href="#enquire" className="product-image"><Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 50vw, 25vw" className="cover-image" /><span className="enquire-label">Enquire ↗</span></a><p className="product-type">{product.type}</p><h3>{product.name}</h3><p className="product-price">{product.price}</p></article>)}</div>
      </section>

      <section className="quote-section" id="process"><div className="quote-mark">“</div><blockquote>Good design does not ask to be noticed.<br /><i>It asks to be remembered.</i></blockquote><p>— The Trivedi Asthetic Studio philosophy</p></section>

      <section className="process-section"><div className="section-kicker"><span>02</span><span className="kicker-line" /><span>From idea to heirloom</span></div><div className="process-grid"><h2>A little more<br /><i>human.</i></h2><div className="process-list"><div><span>01</span><h3>Listen</h3><p>We start with your space, your story and the feeling you want to bring home.</p></div><div><span>02</span><h3>Compose</h3><p>Colour, timber and light come together in a considered, one-off design.</p></div><div><span>03</span><h3>Make</h3><p>We pour, cure, sand and finish by hand — allowing the material to lead.</p></div></div></div></section>

      <section className="faq-section"><div><p className="eyebrow">A few things</p><h2>Before we <i>begin.</i></h2></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={openFaq === index ? 'faq-item active' : 'faq-item'} key={question}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span>{question}</span><b>{openFaq === index ? '−' : '+'}</b></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></section>

      <section className="contact-strip" id="enquire"><div><p className="eyebrow">Let&apos;s make something lasting</p><h2>Have a space<br />in mind?</h2></div><div className="contact-action"><p>Tell us what you&apos;re imagining. We&apos;ll take it from there.</p><a className="button button-light" href="/contact">Begin an enquiry <span>↗</span></a></div></section>

      <SiteFooter />
    </main>
  )
}
