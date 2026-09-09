import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { procedures } from "@/lib/content";

const externalProcedures: Record<string,string> = {
  "gynecomastia-surgery": "https://gynecomastia.vsculpt.in/",
  "breast-augmentation": "https://breastimplant.vsculpt.in/"
};

export function generateStaticParams(){return Object.keys(procedures).map(slug=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params; const p=procedures[slug]; return p?{title:p.title,description:p.description}:{};
}
export default async function Procedure({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  if(externalProcedures[slug]) redirect(externalProcedures[slug]);
  const p=procedures[slug];
  if(!p) notFound();
  return <div className="source-content" dangerouslySetInnerHTML={{__html:p.html}}/>;
}
