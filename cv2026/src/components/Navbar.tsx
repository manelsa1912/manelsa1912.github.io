import { Navbar as HeroNavbar, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import { motion } from "framer-motion";
import { Code2, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import LangBtn from "./LangBtn";

export const Navbar = () => {
  const { t, i18n } = useTranslation();

  return (
    <HeroNavbar isBlurred className="bg-background/60 backdrop-blur-xl border-b border-divider fixed">
      <NavbarContent>
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex items-center gap-2">
          <div className="p-2 bg-primary rounded-lg">
            <Code2 className="text-primary-foreground" size={20} />
          </div>
          <p className="font-black text-xl tracking-tighter uppercase">Manuel Sá</p>
        </motion.div>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {['exp', 'edu', 'skills'].map((item) => (
          <NavbarItem key={item}>
            <Link color="foreground" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors" href={`#${item}`}>
              {t(`nav_${item}`)}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end" className="gap-4">
        <LangBtn />
        <Button 
          as={Link} 
          href="mailto:manelsa1912@gmail.com" 
          color="primary" 
          variant="shadow" 
          size="sm" 
          radius="full" 
          className="hidden md:flex font-bold"
          startContent={<Mail size={16}/>}
        >
          {i18n.language === 'pt' ? 'Contacto' : 'Contact'}
        </Button>
      </NavbarContent>
    </HeroNavbar>
  );
};