import { motion } from "framer-motion";
import { Card, CardBody, Chip } from "@heroui/react";
import { Briefcase, ExternalLink, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Experience = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="exp" className="py-20">
      <h2 className="text-4xl font-black mb-12 flex items-center gap-4">
        <Briefcase className="text-primary" size={40} /> {t('exp_title')}
      </h2>
      <div className="space-y-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Card className="bg-background/40 backdrop-blur-md border border-divider shadow-lg group">
            <CardBody className="p-8">
              <div className="flex flex-col md:flex-row justify-between items-start mb-8">
                <div>
                  <h3 className="text-3xl font-bold group-hover:text-primary transition-colors">Full-Stack Developer</h3>
                  <p className="text-primary font-semibold flex items-center gap-2 text-lg">Wisecrop <ExternalLink size={16}/></p>
                </div>
                <div className="flex flex-col md:items-end">
                  <Chip variant="faded" color="primary" className="mb-2 p-2">Nov 2023 — {i18n.language === 'pt' ? 'Presente' : 'Present'}</Chip>
                  <span className="text-xs text-default-400 font-mono mr-2">2,000+ DAILY USERS</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-2xl bg-default-50/50 border border-divider/50 hover:border-primary/30 transition-all">
                    <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black text-sm shrink-0">0{i}</div>
                    <p className="text-sm text-default-600">{t(`wisecrop_task${i}`)}</p>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-default-100/30 border-none p-6 hover:bg-default-100/50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500"><Sparkles size={20}/></div>
              <h4 className="font-bold text-lg">{t('exp_freelance_design')}</h4>
            </div>
            <p className="text-sm text-default-500 leading-relaxed">{t('exp_freelance_design_desc')}</p>
          </Card>
          <Card className="bg-default-100/30 border-none p-6 hover:bg-default-100/50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500">✨</div>
              <h4 className="font-bold text-lg">{t('exp_magic')}</h4>
            </div>
            <p className="text-sm text-default-500 leading-relaxed">{t('exp_magic_desc')}</p>
          </Card>
        </div>
      </div>
    </section>
  );
};