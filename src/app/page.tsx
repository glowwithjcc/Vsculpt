import { homeTailHtml } from "@/lib/content";

const Values = [
  ["Natural Results","Refined, not obvious","✦"],
  ["Personalised Plans","Built around you","♙"],
  ["Surgical Expertise","Safety. Precision. Care.","◇"],
  ["A More Confident You","Today and for the years ahead","♡"]
];

export default function Home(){return <>
<section className="luxury-hero">
  <div className="hero-photo">
    <div className="photo-wall-panel panel-a"/><div className="photo-wall-panel panel-b"/>
    <div className="photo-chair"/><div className="photo-table"/>
  </div>
  <div className="hero-purple-shape"/>
  <div className="hero-foil-image"/>
  <div className="hero-bottom-foil-image"/>
  <div className="hero-content">
    <span className="eyebrow">Plastic · Cosmetic · Gender-Affirming Surgery</span>
    <h1>Plastic Surgery,<br/><em>Planned Around You.</em></h1>
    <p>Cosmetic, reconstructive and gender-affirming surgery in Chennai — planned around your anatomy, goals and long-term wellbeing.</p>
    <div className="hero-actions">
      <a className="btn btn-gold" href="https://book.vsculpt.in/" target="_blank" rel="noopener noreferrer">Book a Consultation <span>→</span></a>
      <a className="btn btn-outline-dark" href="/procedures">Explore Procedures</a>
    </div>
    <a className="meet-row" href="https://drcharanjc.vsculpt.in/"><span className="meet-avatar"/> <span><strong>Meet Dr. Charan →</strong><small>Expertise. Empathy. Results.</small></span></a>
    <div className="cred-line">18+ Years Surgical Experience · MCh Plastic Surgery<br/>Aesthetic Surgery Training, Belgium</div>
  </div>
</section>

<section className="luxury-values">
  <div className="value-clouds"/>
  <div className="container value-grid">{Values.map(([t,d,i])=><div className="value" key={t}><span className="value-icon">{i}</span><h3>{t}</h3><p>{d}</p></div>)}</div>
  <div className="value-bottom-foil-image"/>
</section>

<section className="partnership">
  <div className="partnership-image"><div className="body-silhouette"/><span>ARTISTRY<br/>MEETS<br/>SCIENCE</span></div>
  <div className="partnership-copy"><span className="eyebrow gold">The VSculpt Approach</span><h2>More Than a Procedure.<br/><em>A Partnership.</em></h2><p>We combine surgical expertise with a deeply personalised approach so you look, feel and live more like yourself.</p><a href="/approach" className="btn btn-gold">Our Approach →</a></div>
</section>

<div className="source-content" dangerouslySetInnerHTML={{__html:homeTailHtml}} />
</>}
