import React, { useRef, useState } from "react";
import { Card, CardBody, Input, Textarea, Button, Chip } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, User, Mail, MessageSquare } from "lucide-react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const { i18n } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, setIsPending] = useState(false);
  const [isSent, setIsSent] = useState(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsPending(true);

        // Extraímos os dados diretamente do formulário
        const formData = new FormData(e.currentTarget);
        const templateParams = {
        from_name: formData.get("from_name"),
        reply_to: formData.get("reply_to"),
        message: formData.get("message"),
        };

        // Usamos 'send' em vez de 'sendForm' para garantir que os dados vão limpos
        emailjs.send(
        'service_zdeyxqi', 
        'template_ry5gak9', 
        templateParams, 
        'zeTy10QGBOmWLvUiy'
        )
        .then(() => {
        setIsSent(true);
        setIsPending(false);
        setTimeout(() => setIsSent(false), 5000);
        })
        .catch((error) => {
        console.error("Erro ao enviar:", error);
        setIsPending(false);
        alert("Erro ao enviar. Verifica a consola.");
        });
    };

    return (
        <section id="contact" className="py-20 relative bg-background">
        <div className="max-w-3xl mx-auto px-6">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            >
            <div className="text-center mb-12">
                <Chip color="primary" variant="flat" className="mb-4 uppercase font-bold text-[10px] tracking-widest">
                {i18n.language === 'pt' ? 'Conecta-te comigo' : 'Connect with me'}
                </Chip>
                <h2 className="text-4xl font-black tracking-tighter italic text-foreground">
                {i18n.language === 'pt' ? 'ENVIAR MENSAGEM' : 'SEND MESSAGE'}
                </h2>
            </div>

            <Card className="bg-content1/50 backdrop-blur-md border border-divider shadow-2xl">
                <CardBody className="p-8">
                <AnimatePresence mode="wait">
                    {!isSent ? (
                    <motion.form
                        key="form"
                        ref={formRef}
                        onSubmit={sendEmail}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col gap-y-10"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                        <Input
                            isRequired
                            name="from_name"
                            label={i18n.language === 'pt' ? "O teu nome" : "Your name"}
                            placeholder="Manuel Sá"
                            variant="bordered"
                            labelPlacement="outside"
                            size="lg"
                            classNames={{
                            base: "max-w-full",
                            label: "relative font-bold text-default-700 mb-2 block",
                            inputWrapper: "h-14 border-divider hover:border-primary focus-within:!border-primary transition-all bg-background",
                            mainWrapper: "pt-2"
                            }}
                            startContent={<User size={18} className="text-primary shrink-0 mr-2" />}
                        />
                        <Input
                            isRequired
                            type="email"
                            name="reply_to"
                            label="O teu Email"
                            placeholder="exemplo@email.com"
                            variant="bordered"
                            labelPlacement="outside"
                            size="lg"
                            classNames={{
                            base: "max-w-full",
                            label: "relative font-bold text-default-700 mb-2 block",
                            inputWrapper: "h-14 border-divider hover:border-primary focus-within:!border-primary transition-all bg-background",
                            mainWrapper: "pt-2"
                            }}
                            startContent={<Mail size={18} className="text-primary shrink-0 mr-2" />}
                        />
                        </div>

                        <Textarea
                        isRequired
                        name="message"
                        label={i18n.language === 'pt' ? "Mensagem" : "Message"}
                        placeholder={i18n.language === 'pt' ? "Descreve o teu projeto ou dúvida..." : "Describe your project or question..."}
                        variant="bordered"
                        labelPlacement="outside"
                        minRows={4}
                        size="lg"
                        classNames={{
                            base: "max-w-full",
                            label: "relative font-bold text-default-700 mb-2 block",
                            inputWrapper: "border-divider hover:border-primary focus-within:!border-primary transition-all bg-background",
                            mainWrapper: "pt-2"
                        }}
                        startContent={<MessageSquare size={18} className="text-primary mt-1 shrink-0 mr-2" />}
                        />

                        <Button
                        type="submit"
                        color="primary"
                        className="w-full font-extrabold text-lg h-16 shadow-xl shadow-primary/30 mt-4"
                        isLoading={isPending}
                        endContent={!isPending && <Send size={20} />}
                        >
                        {i18n.language === 'pt' ? 'Enviar Mensagem' : 'Send Message'}
                        </Button>
                    </motion.form>
                    ) : (
                    <motion.div
                        key="success"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="py-16 text-center flex flex-col items-center"
                    >
                        <div className="w-24 h-24 bg-success/20 text-success rounded-full flex items-center justify-center mb-8 shadow-inner">
                        <CheckCircle2 size={48} />
                        </div>
                        <h3 className="text-3xl font-black mb-3 tracking-tight">
                        {i18n.language === 'pt' ? 'Mensagem enviada!' : 'Message sent!'}
                        </h3>
                        <p className="text-default-500 text-lg">
                        {i18n.language === 'pt' 
                            ? 'Obrigado. Responderei em breve.' 
                            : 'Thanks. I will get back to you shortly.'}
                        </p>
                    </motion.div>
                    )}
                </AnimatePresence>
                </CardBody>
            </Card>
            </motion.div>
        </div>
        </section>
    );
};