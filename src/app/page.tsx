import { homeTailHtml } from "@/lib/content";

const Values = [
  ["Natural Results","Refined, not obvious","✦"],
  ["Personalised Plans","Built around you","♙"],
  ["Surgical Expertise","Safety. Precision. Care.","◇"],
  ["A More Confident You","Today and for the years ahead","♡"]
];

function GoldSeam(){return <svg className="hero-seam" viewBox="0 0 260 800" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="foil" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#45230f"/><stop offset=".15" stopColor="#8d531f"/><stop offset=".34" stopColor="#d4a14f"/><stop offset=".49" stopColor="#fff0b0"/><stop offset=".62" stopColor="#d8a451"/><stop offset=".82" stopColor="#8e4f1f"/><stop offset="1" stopColor="#43220f"/></linearGradient><filter id="shadow"><feDropShadow dx="0" dy="7" stdDeviation="8" floodColor="#160612" floodOpacity=".52"/></filter></defs><path d="M210 -20C160 72 100 132 82 218C64 304 92 360 136 425C182 492 180 580 121 650C82 696 44 732 0 764L23 790C78 757 124 716 165 664C230 580 228 482 177 407C133 342 109 292 126 224C143 154 192 99 238 10Z" fill="url(#foil)" filter="url(#shadow)"/><path d="M190 -10C147 74 100 134 86 214C72 292 96 350 137 408" fill="none" stroke="#fff7d1" strokeOpacity=".82" strokeWidth="5"/></svg>}
function BottomFoil(){return <svg className="bottom-foil" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="foil2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#45230f"/><stop offset=".16" stopColor="#9a5c24"/><stop offset=".36" stopColor="#d7a654"/><stop offset=".49" stopColor="#fff0b1"/><stop offset=".63" stopColor="#d39b44"/><stop offset=".84" stopColor="#86501f"/><stop offset="1" stopColor="#40200e"/></linearGradient></defs><path d="M0 36C224 84 459 96 686 65C910 35 1098 29 1260 52C1328 62 1387 74 1440 82L1440 107C1385 100 1324 91 1254 84C1090 66 912 68 694 96C458 126 218 112 0 67Z" fill="url(#foil2)"/><path d="M0 42C225 87 460 98 687 69C911 40 1098 34 1260 57C1328 67 1386 77 1440 85" fill="none" stroke="#fff2c1" strokeOpacity=".76" strokeWidth="3"/></svg>}

export default function Home(){return <>
<section className="luxury-hero">
  <div className="hero-photo" aria-label="Design preview consultation image" />
  <div className="purple-field"><div className="purple-texture"/><div className="hero-content">
    <span className="eyebrow">Plastic · Cosmetic · Gender-Affirming Surgery</span>
    <h1>Plastic Surgery,<br/><em>Planned Around You.</em></h1>
    <p>Cosmetic, reconstructive and gender-affirming surgery in Chennai — planned around your anatomy, goals and long-term wellbeing.</p>
    <div className="hero-actions"><a className="btn btn-gold" href="https://book.vsculpt.in/" target="_blank" rel="noopener noreferrer">Book a Consultation <span>→</span></a><a className="btn btn-outline-dark" href="/procedures">Explore Procedures</a></div>
    <a className="meet-row" href="https://drcharanjc.vsculpt.in/"><span className="meet-avatar"/> <span><strong>Meet Dr. Charan →</strong><small>Expertise. Empathy. Results.</small></span></a>
    <div className="cred-line">18+ Years Surgical Experience · MCh Plastic Surgery<br/>Aesthetic Surgery Training, Belgium</div>
  </div></div>
  <GoldSeam/><BottomFoil/>
</section>
<section className="luxury-values"><div className="value-texture"/><div className="container value-grid">{Values.map(([t,d,i])=><div className="value" key={t}><span className="value-icon">{i}</span><h3>{t}</h3><p>{d}</p></div>)}</div><BottomFoil/></section>
<section className="partnership"><div className="partnership-image"><span>ARTISTRY<br/>MEETS<br/>SCIENCE</span></div><div className="partnership-copy"><span className="eyebrow gold">The VSculpt Approach</span><h2>More Than a Procedure.<br/><em>A Partnership.</em></h2><p>We combine surgical expertise with a deeply personalised approach so you look, feel and live more like yourself.</p><a href="/approach" className="btn btn-gold">Our Approach →</a></div></section>
<div className="source-content" dangerouslySetInnerHTML={{__html:homeTailHtml}} />
</>}
