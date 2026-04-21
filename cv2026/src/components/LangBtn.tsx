import { Button } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";

export const LangBtn = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(nextLang);
  };

  return (
    <Button 
      isIconOnly={false}
      variant="flat" 
      color="primary"
      size="sm"
      onPress={toggleLanguage}
      className="font-bold"
      startContent={<Languages size={16} />}
    >
      {i18n.language.toUpperCase() === 'PT' ? 'EN' : 'PT'}
    </Button>
  );
};