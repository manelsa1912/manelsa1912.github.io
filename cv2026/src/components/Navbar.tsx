import { Navbar as HeroNavbar, NavbarContent, NavbarItem, Link, Button, NavbarBrand } from "@heroui/react";
import { motion } from "framer-motion";
import { Code2, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import LangBtn from "./LangBtn";

export const Navbar = () => {
  const { t, i18n } = useTranslation();

  return (
    <HeroNavbar 
      shouldHideOnScroll
      position="sticky" 
      maxWidth="xl"
      className="bg-background/60 backdrop-blur-xl border-b border-divider fixed z-20"
      classNames={{
        wrapper: "px-6",
      }}
    >
      <NavbarBrand>
        <motion.div 
          initial={{ x: -20, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          className="flex items-center gap-2"
        >
          <div className="p-2 bg-primary rounded-lg shadow-lg shadow-primary/20">
            <Code2 className="text-primary-foreground" size={20} />
          </div>
          <p className="font-black text-xl tracking-tighter uppercase">
            Manuel Sá
          </p>
        </motion.div>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        {['exp', 'edu', 'skills'].map((item) => (
          <NavbarItem key={item}>
            <Link 
              color="foreground" 
              className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-primary transition-all relative group" 
              href={`#${item}`}
            >
              {t(`nav_${item}`)}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
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
          className="hidden md:flex font-bold px-6"
          startContent={<Mail size={16}/>}
        >
          {i18n.language === 'pt' ? 'Contacto' : 'Contact'}
        </Button>
      </NavbarContent>
    </HeroNavbar>
  );
};