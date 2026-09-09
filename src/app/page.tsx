import { homeTailHtml } from "@/lib/content";

const Values = [
  ["Natural Results","Refined, not obvious","✦"],
  ["Personalised Plans","Built around you","♙"],
  ["Surgical Expertise","Safety. Precision. Care.","◇"],
  ["A More Confident You","Today and for the years ahead","♡"]
];

function HeroArt(){
  return <svg className="hero-art" viewBox="0 0 1536 760" preserveAspectRatio="none" aria-hidden="true">
    <defs>
      <linearGradient id="purpleBase" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#421052"/><stop offset=".5" stopColor="#2b0a3d"/><stop offset="1" stopColor="#140718"/>
      </linearGradient>
      <linearGradient id="foil" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#4a2814"/><stop offset=".14" stopColor="#8c511f"/><stop offset=".34" stopColor="#d7a651"/>
        <stop offset=".49" stopColor="#fff1b6"/><stop offset=".62" stopColor="#d9a650"/><stop offset=".82" stopColor="#915321"/><stop offset="1" stopColor="#43220f"/>
      </linearGradient>
      <linearGradient id="foilBottom" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#4a2814"/><stop offset=".22" stopColor="#b77b31"/><stop offset=".48" stopColor="#fff0b0"/>
        <stop offset=".63" stopColor="#d7a14a"/><stop offset="1" stopColor="#5b3116"/>
      </linearGradient>
      <filter id="cloud" x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence type="fractalNoise" baseFrequency=".006 .013" numOctaves="4" seed="12" result="n"/>
        <feGaussianBlur in="n" stdDeviation="16" result="b"/>
        <feColorMatrix in="b" type="matrix" values="0 0 0 0 .43  0 0 0 0 .15  0 0 0 0 .50  1.15 0 0 0 -.42 0"/>
      </filter>
      <filter id="foilShadow" x="-50%" y="-30%" width="200%" height="170%">
        <feDropShadow dx="0" dy="7" stdDeviation="8" floodColor="#140718" floodOpacity=".48"/>
      </filter>
      <clipPath id="purpleClip">
        <path d="M0 0H875C842 68 790 126 756 184C719 248 714 300 744 352C774 405 833 446 844 502C854 558 820 613 759 660C703 702 637 734 560 760H0Z"/>
      </clipPath>
    </defs>

    <g clipPath="url(#purpleClip)">
      <rect width="930" height="760" fill="url(#purpleBase)"/>
      <rect x="-20" y="-20" width="950" height="800" filter="url(#cloud)" opacity=".72"/>
      <ellipse cx="250" cy="145" rx="300" ry="190" fill="#7a4b85" opacity=".08"/>
      <ellipse cx="600" cy="430" rx="320" ry="230" fill="#67376f" opacity=".10"/>
    </g>

    <path d="M875 0C842 68 790 126 756 184C719 248 714 300 744 352C774 405 833 446 844 502C854 558 820 613 759 660C703 702 637 734 560 760"
      fill="none" stroke="#492713" strokeWidth="52" filter="url(#foilShadow)"/>
    <path d="M875 0C842 68 790 126 756 184C719 248 714 300 744 352C774 405 833 446 844 502C854 558 820 613 759 660C703 702 637 734 560 760"
      fill="none" stroke="url(#foil)" strokeWidth="34"/>
    <path d="M860 0C830 67 781 124 748 182C714 243 711 294 740 343"
      fill="none" stroke="#fff4c8" strokeOpacity=".76" strokeWidth="4.5"/>

    <path d="M0 650C230 700 476 713 710 680C945 646 1134 640 1305 661C1395 672 1468 688 1536 699L1536 724C1466 714 1392 701 1301 692C1132 676 948 683 716 713C477 744 230 729 0 680Z"
      fill="url(#foilBottom)" filter="url(#foilShadow)"/>
    <path d="M0 655C232 702 478 714 711 683C945 651 1134 645 1305 665C1396 675 1468 690 1536 703"
      fill="none" stroke="#fff2c2" strokeOpacity=".72" strokeWidth="3"/>
  </svg>
}

function ValueBottom(){
  return <svg className="value-bottom" viewBox="0 0 1536 68" preserveAspectRatio="none" aria-hidden="true">
    <defs><linearGradient id="vb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#542b13"/><stop offset=".26" stopColor="#c58b3a"/><stop offset=".48" stopColor="#ffe9a0"/><stop offset=".72" stopColor="#b8762c"/><stop offset="1" stopColor="#4b2812"/></linearGradient></defs>
    <path d="M0 13C260 44 503 49 739 29C979 8 1192 12 1536 39L1536 58C1192 34 982 31 742 51C503 71 260 65 0 36Z" fill="url(#vb)"/>
    <path d="M0 17C262 47 504 52 740 33C980 13 1192 16 1536 43" fill="none" stroke="#fff1b8" strokeOpacity=".68" strokeWidth="2.5"/>
  </svg>
}

export default function Home(){return <>
<section className="luxury-hero">
  <div className="hero-photo">
    <div className="photo-wall-panel panel-a"/><div className="photo-wall-panel panel-b"/>
    <div className="photo-chair"/><div className="photo-table"/>
  </div>
  <HeroArt/>
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
  <ValueBottom/>
</section>

<section className="partnership">
  <div className="partnership-image"><div className="body-silhouette"/><span>ARTISTRY<br/>MEETS<br/>SCIENCE</span></div>
  <div className="partnership-copy"><span className="eyebrow gold">The VSculpt Approach</span><h2>More Than a Procedure.<br/><em>A Partnership.</em></h2><p>We combine surgical expertise with a deeply personalised approach so you look, feel and live more like yourself.</p><a href="/approach" className="btn btn-gold">Our Approach →</a></div>
</section>

<div className="source-content" dangerouslySetInnerHTML={{__html:homeTailHtml}} />
</>}
