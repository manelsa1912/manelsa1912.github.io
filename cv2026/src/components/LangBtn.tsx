import { Button } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const LangBtn = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(nextLang);
  };

  return (
    <Button 
      onClick={toggleLanguage}
      variant="flat" 
      radius="full"
      size="sm"
      className="font-bold border-1 border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all min-w-[60px]"
    >
      <motion.div
        key={i18n.language}
        initial={{ rotateY: 90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-2"
      >
        <span>{i18n.language === 'pt' ? '🇬🇧' : '🇵🇹'}</span>
        <span className="text-[10px] uppercase tracking-tighter">
          {i18n.language === 'pt' ? 'EN' : 'PT'}
        </span>
      </motion.div>
    </Button>
  );
};

export default LangBtn;