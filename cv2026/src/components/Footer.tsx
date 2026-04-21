import { Code2, Mail, Github } from "lucide-react";
import { Link } from "@heroui/react";

export const Footer = () => (
  <footer className="py-16 border-t border-divider mt-20">
    <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-default-100 rounded-lg"><Code2 size={20} /></div>
        <p className="font-black uppercase tracking-tighter">Manuel Sá</p>
      </div>
      <p className="text-default-400 text-sm font-medium">
        © {new Date().getFullYear()} — Built with React, HeroUI & Framer Motion
      </p>
      <div className="flex gap-4">
        <Link href="mailto:manelsa1912@gmail.com" className="text-default-400 hover:text-primary"><Mail size={20}/></Link>
        <Link href="https://github.com/manelsa1912" className="text-default-400 hover:text-primary"><Github size={20}/></Link>
      </div>
    </div>
  </footer>
);