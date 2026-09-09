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
        <stop offset="0" stopColor="#4A165D"/>
        <stop offset=".46" stopColor="#2E0B41"/>
        <stop offset="1" stopColor="#16081D"/>
      </linearGradient>

      <radialGradient id="cloudLavender">
        <stop offset="0" stopColor="#C19BCD" stopOpacity=".20"/>
        <stop offset=".56" stopColor="#80538E" stopOpacity=".10"/>
        <stop offset="1" stopColor="#2E0B41" stopOpacity="0"/>
      </radialGradient>
      <radialGradient id="cloudPlum">
        <stop offset="0" stopColor="#75447F" stopOpacity=".23"/>
        <stop offset=".58" stopColor="#4E235B" stopOpacity=".12"/>
        <stop offset="1" stopColor="#16081D" stopOpacity="0"/>
      </radialGradient>
      <radialGradient id="cloudMist">
        <stop offset="0" stopColor="#F1E8F4" stopOpacity=".08"/>
        <stop offset=".58" stopColor="#A37AAF" stopOpacity=".035"/>
        <stop offset="1" stopColor="#2E0B41" stopOpacity="0"/>
      </radialGradient>

      <linearGradient id="foilRibbon" x1="0" y1="0" x2="1" y2=".2">
        <stop offset="0" stopColor="#3F210F"/>
        <stop offset=".16" stopColor="#7E481D"/>
        <stop offset=".34" stopColor="#B97A2E"/>
        <stop offset=".48" stopColor="#D8AE61"/>
        <stop offset=".56" stopColor="#F3DE9A"/>
        <stop offset=".66" stopColor="#D5A452"/>
        <stop offset=".84" stopColor="#8A4E1F"/>
        <stop offset="1" stopColor="#43220F"/>
      </linearGradient>

      <linearGradient id="foilBottom" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#44220F"/>
        <stop offset=".25" stopColor="#9A5C25"/>
        <stop offset=".45" stopColor="#D0A04F"/>
        <stop offset=".54" stopColor="#F1D893"/>
        <stop offset=".68" stopColor="#B97A2F"/>
        <stop offset="1" stopColor="#45230F"/>
      </linearGradient>

      <filter id="cloudSoft" x="-25%" y="-25%" width="150%" height="150%">
        <feGaussianBlur stdDeviation="36"/>
      </filter>
      <filter id="cloudSoftWide" x="-25%" y="-25%" width="150%" height="150%">
        <feGaussianBlur stdDeviation="58"/>
      </filter>
      <filter id="foilShadow" x="-40%" y="-35%" width="180%" height="180%">
        <feDropShadow dx="0" dy="6" stdDeviation="7" floodColor="#120611" floodOpacity=".28"/>
      </filter>

      <clipPath id="purpleClip">
        <path d="M0 0H887
          C852 70 798 127 765 188
          C729 252 726 302 756 350
          C790 405 845 447 854 502
          C864 559 826 614 765 662
          C709 706 645 736 575 760
          H0Z"/>
      </clipPath>
    </defs>

    <g clipPath="url(#purpleClip)">
      <rect width="930" height="760" fill="url(#purpleBase)"/>

      <ellipse cx="170" cy="118" rx="330" ry="170" fill="url(#cloudLavender)" filter="url(#cloudSoftWide)" opacity=".88"/>
      <ellipse cx="520" cy="150" rx="360" ry="150" fill="url(#cloudPlum)" filter="url(#cloudSoftWide)" opacity=".78"/>
      <ellipse cx="302" cy="405" rx="385" ry="190" fill="url(#cloudLavender)" filter="url(#cloudSoftWide)" opacity=".68"/>
      <ellipse cx="685" cy="455" rx="320" ry="195" fill="url(#cloudPlum)" filter="url(#cloudSoftWide)" opacity=".72"/>
      <ellipse cx="420" cy="652" rx="430" ry="150" fill="url(#cloudPlum)" filter="url(#cloudSoftWide)" opacity=".58"/>

      <path d="M-40 235
        C120 165 256 196 376 159
        C510 118 621 134 746 204
        C658 212 598 245 522 278
        C386 337 225 330 58 291
        C19 282 -14 264 -40 235Z"
        fill="url(#cloudMist)" filter="url(#cloudSoft)" opacity=".72"/>

      <path d="M30 545
        C188 466 328 487 449 450
        C564 415 662 421 791 487
        C689 500 602 535 521 567
        C359 632 188 622 30 575Z"
        fill="url(#cloudMist)" filter="url(#cloudSoft)" opacity=".55"/>
    </g>

    <path d="M887 0
      C850 74 798 130 765 188
      C729 252 726 302 756 350
      C790 405 845 447 854 502
      C864 559 826 614 765 662
      C709 706 645 736 575 760
      L595 760
      C661 738 720 708 774 667
      C835 620 873 561 863 499
      C853 438 796 395 766 344
      C740 299 742 257 777 197
      C808 143 858 88 898 10
      Z"
      fill="url(#foilRibbon)" filter="url(#foilShadow)"/>

    <path d="M878 9
      C842 79 793 133 762 189
      C730 248 728 292 751 332"
      fill="none" stroke="#FFF1C0" strokeOpacity=".60" strokeWidth="2.8"/>

    <path d="M846 428
      C860 454 867 481 868 507
      C870 548 851 586 823 619
      C844 572 845 534 838 498
      C832 468 817 440 797 414Z"
      fill="#673817" opacity=".34"/>

    <path d="M0 651
      C232 699 477 711 710 681
      C945 650 1133 645 1306 666
      C1393 677 1467 690 1536 700
      L1536 715
      C1468 705 1393 694 1304 686
      C1133 670 947 676 715 704
      C478 733 232 720 0 675Z"
      fill="url(#foilBottom)" filter="url(#foilShadow)"/>

    <path d="M0 655
      C232 702 478 714 711 684
      C945 654 1134 648 1305 669
      C1395 679 1468 691 1536 703"
      fill="none" stroke="#F7E5AC" strokeOpacity=".55" strokeWidth="1.8"/>
  </svg>
}
function ValueBottom(){
  return <svg className="value-bottom" viewBox="0 0 1536 54" preserveAspectRatio="none" aria-hidden="true">
    <defs>
      <linearGradient id="vb" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#45230F"/>
        <stop offset=".28" stopColor="#9B5C25"/>
        <stop offset=".47" stopColor="#D0A050"/>
        <stop offset=".56" stopColor="#E8C979"/>
        <stop offset=".72" stopColor="#A96628"/>
        <stop offset="1" stopColor="#43220F"/>
      </linearGradient>
    </defs>
    <path d="M0 14
      C266 41 506 46 739 28
      C979 9 1194 13 1536 38
      L1536 49
      C1194 28 981 26 742 44
      C506 61 266 57 0 34Z"
      fill="url(#vb)"/>
    <path d="M0 17
      C267 44 507 49 740 31
      C980 13 1193 17 1536 41"
      fill="none" stroke="#F1D99A" strokeOpacity=".52" strokeWidth="1.5"/>
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
