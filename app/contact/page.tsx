'use client'

import { useState } from 'react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  return <main><SiteHeader /><section className="page-hero contact-hero"><p className="eyebrow">Start a conversation</p><h1>Tell us what<br /><i>you&apos;re imagining.</i></h1><p>Whether you have a clear brief or just a feeling, we would love to hear about your space.</p></section><section className="contact-form-section"><div><p className="eyebrow">The first step</p><h2>Let&apos;s make<br /><i>something lasting.</i></h2><p className="muted-copy contact-details">hello@trivediasthetic.com<br />Ahmedabad, Gujarat<br />India</p></div><form className="enquiry-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>{submitted ? <div className="form-success"><p className="eyebrow">Thank you</p><h3>Your enquiry is on its way.</h3><p>We&apos;ll be in touch soon with thoughtful next steps.</p></div> : <><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@example.com" /></label><label>What are you looking for?<select name="project"><option>Custom furniture</option><option>Wall art</option><option>Wall clock</option><option>Something else</option></select></label><label>Tell us a little more<textarea required name="message" rows={5} placeholder="Tell us about your space, dimensions and palette..." /></label><button className="button button-dark" type="submit">Send enquiry <span>↗</span></button></>}</form></section><SiteFooter /></main>
}
