import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pages } from "@/lib/content";
export function generateStaticParams(){return Object.keys(pages).map(slug=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params; const p=pages[slug];return p?{title:p.title,description:p.description}:{};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=pages[slug];if(!p)notFound();return <div className="source-content" dangerouslySetInnerHTML={{__html:p.html}}/>}
