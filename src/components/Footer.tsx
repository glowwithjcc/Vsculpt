import Link from "next/link";
export default function Footer(){return <footer className="site-footer"><div className="container footer-grid">
  <div><div className="logo"><span className="brand-flame"/><span className="logo-text"><span className="name">VSCULPT</span><span className="tag">RESTORE · REFINE · EMPOWER</span></span></div><p className="footer-copy">Plastic, cosmetic and gender-affirming surgery in Chennai — planned around your anatomy, goals and long-term wellbeing.</p></div>
  <div><h5>Explore</h5><Link href="/procedures">Procedures</Link><Link href="/approach">Approach</Link><Link href="/gallery">Gallery</Link><Link href="/resources">Resources</Link></div>
  <div><h5>VSculpt</h5><Link href="/about">About</Link><Link href="/gender-affirming-care">Gender-Affirming Care</Link><Link href="/contact">Contact</Link><a href="https://drcharanjc.vsculpt.in/">Dr. Charan</a></div>
  <div><h5>Consultation</h5><a href="https://book.vsculpt.in/" target="_blank" rel="noopener noreferrer">Book Consultation</a><a href="https://wa.me/918098000443" target="_blank" rel="noopener noreferrer">WhatsApp</a><a href="tel:+918098000443">+91 80980 00443</a><a href="mailto:hello@vsculpt.in">hello@vsculpt.in</a></div>
</div><div className="container footer-bottom"><span>© {new Date().getFullYear()} VSculpt. All rights reserved.</span><span>Restore · Refine · Empower</span></div></footer>}
