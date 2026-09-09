"use client";
import { useState } from "react";
import Link from "next/link";

const links = [
  ["Procedures", "/procedures"], ["Approach", "/approach"], ["About", "/about"],
  ["Gallery", "/gallery"], ["Gender-Affirming Care", "/gender-affirming-care"],
  ["Resources", "/resources"], ["Contact", "/contact"]
] as const;

export default function Header(){
  const [open,setOpen]=useState(false);
  return <header className="site-header">
    <div className="container header-inner">
      <Link href="/" className="logo" aria-label="VSculpt home">
        <span className="brand-flame" aria-hidden="true"><i/><i/></span>
        <span className="logo-text"><span className="name">VSCULPT</span><span className="tag">RESTORE · REFINE · EMPOWER</span></span>
      </Link>
      <nav className="nav-links" aria-label="Primary navigation">{links.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav>
      <div className="nav-cta">
        <a className="btn btn-outline-gold btn-sm" href="https://book.vsculpt.in/" target="_blank" rel="noopener noreferrer">Book a Consultation</a>
        <button className="nav-toggle" aria-label="Open menu" onClick={()=>setOpen(true)}>☰</button>
      </div>
    </div>
    <div className={`mobile-nav ${open?'open':''}`}>
      <div className="mobile-nav-top"><Link href="/" className="logo" onClick={()=>setOpen(false)}><span className="brand-flame"/><span className="logo-text"><span className="name">VSCULPT</span></span></Link><button onClick={()=>setOpen(false)} aria-label="Close menu">×</button></div>
      {links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}
      <a className="btn btn-gold" href="https://book.vsculpt.in/" target="_blank" rel="noopener noreferrer">Book a Consultation</a>
    </div>
  </header>
}
