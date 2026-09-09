export type StaticPage = { title: string; description: string; html: string };

const page = (title:string, eyebrow:string, lead:string, body:string):StaticPage => ({
  title,
  description: lead,
  html: `<section class="hero"><div class="container hero-copy"><span class="eyebrow">${eyebrow}</span><h1>${title}</h1><p class="lead">${lead}</p><div class="hero-actions"><a class="btn btn-gold" href="https://book.vsculpt.in/" target="_blank" rel="noopener noreferrer">Book a Consultation</a></div></div></section><section class="on-light"><div class="container narrow-copy"><p>${body}</p></div></section>`
});

export const pages: Record<string, StaticPage> = {
  "about": page("About VSculpt","VSculpt","Plastic, cosmetic and gender-affirming surgery in Chennai — planned around your anatomy and goals.","VSculpt brings together surgical expertise, careful planning and long-term patient care in a private, personalised setting."),
  "approach": page("More Than a Procedure. A Partnership.","The VSculpt Approach","Every treatment plan starts with your anatomy, goals, safety and long-term wellbeing.","The VSculpt approach is anatomy-first, consultation-led and individualised. The aim is thoughtful planning, natural-looking outcomes and dependable follow-up."),
  "gallery": page("Results","VSculpt Gallery","A curated space for approved VSculpt results and patient journeys.","Production launch should use only approved, consented VSculpt before-and-after photography."),
  "contact": page("Start a Conversation","Contact VSculpt","Book a private consultation with VSculpt in Chennai.","Book through VSculpt's booking system or contact the clinic on WhatsApp."),
  "gender-affirming-care": page("Gender-Affirming Care","VSculpt","Gender-affirming surgical care planned with privacy, clarity and long-term support.","Every recommendation is individualised after consultation, anatomy review and discussion of goals, recovery and risks."),
  "resources": page("Resources","Learn","Clear information to help you understand procedures, recovery and decisions before consultation.","Educational content will be organised here around procedures, preparation, recovery and common patient questions.")
};

export const proceduresIndex: StaticPage = {
  title:"Procedures",
  description:"Explore VSculpt's plastic, cosmetic and gender-affirming surgery services.",
  html:`<section class="hero"><div class="container hero-copy"><span class="eyebrow">VSculpt Procedures</span><h1>Care, Planned Around You.</h1><p class="lead">Explore facial, breast, body, hair, non-surgical and gender-affirming options.</p></div></section><section class="on-light"><div class="container"><div class="procedure-directory">${[
    ["gynecomastia-surgery","Gynecomastia Surgery"],["breast-augmentation","Breast Augmentation"],["breast-lift","Breast Lift"],["breast-reduction","Breast Reduction"],["liposuction","Liposuction"],["tummy-tuck","Tummy Tuck"],["body-contouring-gender-affirming","Gender-Affirming Body Contouring"],["top-surgery","Top Surgery"],["vaginoplasty","Vaginoplasty"],["facial-feminization-surgery","Facial Feminization Surgery"],["facial-masculinization-surgery","Facial Masculinization Surgery"],["rhinoplasty","Rhinoplasty"],["facelift","Facelift"],["neck-lift","Neck Lift"],["blepharoplasty","Blepharoplasty"],["brow-lift","Brow Lift"],["chin-augmentation","Chin Augmentation"],["otoplasty","Otoplasty"],["buccal-fat-removal","Buccal Fat Removal"],["lip-augmentation","Lip Augmentation"],["hair-transplant","Hair Transplant"],["botox-fillers","Botox & Fillers"],["chemical-peel","Chemical Peel"],["brazilian-butt-lift","Brazilian Butt Lift"],["mommy-makeover","Mommy Makeover"],["post-bariatric-body-lift","Post-Bariatric Body Lift"],["scar-revision","Scar Revision"]
  ].map(([s,n])=>`<a class="procedure-link-card" href="/procedures/${s}"><span>${n}</span><b>→</b></a>`).join("")}</div></div></section>`
};

const procedureNames: Record<string,string> = {
  "blepharoplasty":"Blepharoplasty","body-contouring-gender-affirming":"Gender-Affirming Body Contouring","botox-fillers":"Botox & Fillers","brazilian-butt-lift":"Brazilian Butt Lift","breast-augmentation":"Breast Augmentation","breast-lift":"Breast Lift","breast-reduction":"Breast Reduction","brow-lift":"Brow Lift","buccal-fat-removal":"Buccal Fat Removal","chemical-peel":"Chemical Peel","chin-augmentation":"Chin Augmentation","facelift":"Facelift","facial-feminization-surgery":"Facial Feminization Surgery","facial-masculinization-surgery":"Facial Masculinization Surgery","gynecomastia-surgery":"Gynecomastia Surgery","hair-transplant":"Hair Transplant","lip-augmentation":"Lip Augmentation","liposuction":"Liposuction","mommy-makeover":"Mommy Makeover","neck-lift":"Neck Lift","otoplasty":"Otoplasty","post-bariatric-body-lift":"Post-Bariatric Body Lift","rhinoplasty":"Rhinoplasty","scar-revision":"Scar Revision","top-surgery":"Top Surgery","tummy-tuck":"Tummy Tuck","vaginoplasty":"Vaginoplasty"
};

export const procedures: Record<string, StaticPage> = Object.fromEntries(
  Object.entries(procedureNames).map(([slug,name]) => [slug, {
    title:name,
    description:`${name} at VSculpt — consultation-led planning in Chennai.`,
    html:`<section class="hero procedure-hero"><div class="container hero-copy"><div class="breadcrumb"><a href="/procedures">Procedures</a><span>/</span><span>${name}</span></div><span class="eyebrow">VSculpt Procedure</span><h1>${name}</h1><p class="lead">A personalised plan begins with consultation, anatomy assessment, discussion of goals, options, recovery and risks.</p><div class="hero-actions"><a class="btn btn-gold" href="https://book.vsculpt.in/" target="_blank" rel="noopener noreferrer">Book a Consultation</a></div></div></section><section class="on-light"><div class="container narrow-copy"><h2>Planned Around You.</h2><p>This route is ready for the full Claude-authored procedure content. Before production, each procedure page will be populated with the reviewed source copy, approved images and procedure-specific FAQs.</p></div></section>`
  }])
);

export const homeTailHtml = `
<section class="on-panel"><div class="container"><div class="section-head center"><span class="eyebrow">What We Offer</span><h2>Signature Procedures</h2><p>Explore VSculpt's consultation-led surgical and aesthetic care.</p></div><div class="signature-links"><a href="/procedures/gynecomastia-surgery">Gynecomastia</a><a href="/procedures/breast-augmentation">Breast Augmentation</a><a href="/procedures/liposuction">Body Contouring</a><a href="/gender-affirming-care">Gender-Affirming Care</a></div></div></section>
<section class="on-light"><div class="container cta-band"><h2>Start With a Private Consultation.</h2><p>Talk through your goals, anatomy, options and recovery with VSculpt.</p><div class="cta-actions"><a class="btn btn-gold" href="https://book.vsculpt.in/" target="_blank" rel="noopener noreferrer">Book Consultation</a><a class="btn btn-outline-dark" href="https://wa.me/918098000443" target="_blank" rel="noopener noreferrer">WhatsApp</a></div></div></section>`;
