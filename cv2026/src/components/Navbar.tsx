import { Navbar as HeroNavbar, NavbarContent, NavbarItem, Link, Button, NavbarBrand } from "@heroui/react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import LangBtn from "./LangBtn";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Navbar = () => {
  const { t, i18n } = useTranslation();

  return (
    <HeroNavbar 
      shouldHideOnScroll
      position="sticky" 
      maxWidth="xl"
      className="bg-background/60 backdrop-blur-xl border-b border-divider fixed z-20 p-1"
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
          <div className="bg-primary rounded-lg shadow-lg shadow-primary/20">
            <img 
              src="/logo.png" 
              alt="" 
              className="h-auto w-8" 
            />
          </div>
          <p className="font-black md:text-xl tracking-tighter uppercase">
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
        <ThemeSwitcher />
        <LangBtn />
        <Button 
          as={Link} 
          href="mailto:manelsa1912@gmail.com" 
          color="primary" 
          variant="shadow" 
          size="sm" 
          radius="full" 
          className="font-bold px-2 md:px-6" 
          startContent={<Mail size={16}/>}
        >
          <span className="hidden md:inline">
            {i18n.language === 'pt' ? 'Contacto' : 'Contact'}
          </span>
        </Button>
      </NavbarContent>
    </HeroNavbar>
  );
};