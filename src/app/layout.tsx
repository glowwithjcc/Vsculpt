import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vsculpt.in"),
  title: {default:"VSculpt — Plastic, Cosmetic & Gender-Affirming Surgery in Chennai", template:"%s | VSculpt"},
  description:"VSculpt is Dr Charan J.C.'s Chennai practice for plastic, cosmetic and gender-affirming surgery — care planned around your anatomy and goals."
};

export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>
}
