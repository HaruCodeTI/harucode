"use client";

import AnimatedButton from "@/components/AnimatedButton";
import AnimatedElement from "@/components/AnimatedElement";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      title: "Email",
      value: "contato.harucode@gmail.com",
      icon: "📧",
      link: "mailto:contato.harucode@gmail.com",
    },
    {
      title: "WhatsApp",
      value: "+55 (67) 99958-7200",
      icon: "📱",
      link: "https://wa.me/5567999587200",
    },
    {
      title: "Endereço",
      value:
        "Rua Geraldo Agostinho Ramos, 90, Jardim Paulista, Campo Grande - MS",
      icon: "📍",
      link: "#",
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <AnimatedElement variant="slideUp" delay={0.2}>
              <h1 className="text-5xl font-bold text-center mb-8">
                Entre em <span className="text-purple-400">Contato</span>
              </h1>
            </AnimatedElement>

            <AnimatedElement variant="fadeIn" delay={0.4}>
              <p className="text-xl text-slate-300 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
                Tem um projeto em mente? Vamos conversar sobre como podemos
                transformar sua ideia em realidade.
              </p>
            </AnimatedElement>

            <div className="grid lg:grid-cols-2 gap-12">
              <AnimatedElement variant="slideInLeft" delay={0.6}>
                <div className="bg-white/5 p-8 rounded-lg border border-white/10">
                  <h3 className="text-2xl font-bold mb-6 text-purple-400">
                    Envie sua Mensagem
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-white">
                          Nome Completo
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-white">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-white">
                        Telefone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                        placeholder="(67) 99999-9999"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-white">
                        Assunto
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                        placeholder="Qual é o assunto?"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-white">
                        Mensagem
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-slate-400 resize-none"
                        placeholder="Conte-nos sobre seu projeto..."
                      />
                    </div>
                    <AnimatedButton
                      type="submit"
                      variant="secondary"
                      className="w-full"
                    >
                      Enviar Mensagem
                    </AnimatedButton>
                  </form>
                </div>
              </AnimatedElement>

              <AnimatedElement variant="slideInRight" delay={0.8}>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-purple-400">
                      Informações de Contato
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      Estamos sempre disponíveis para atender você. Entre em
                      contato através de qualquer um dos canais abaixo.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <AnimatedElement
                        key={info.title}
                        variant="fadeIn"
                        delay={1.0 + index * 0.1}
                      >
                        <div className="flex items-start space-x-4">
                          <div className="text-2xl">{info.icon}</div>
                          <div>
                            <h4 className="font-semibold text-white mb-1">
                              {info.title}
                            </h4>
                            <a
                              href={info.link}
                              className="text-slate-300 hover:text-purple-400 transition-colors"
                            >
                              {info.value}
                            </a>
                          </div>
                        </div>
                      </AnimatedElement>
                    ))}
                  </div>

                  <AnimatedElement variant="fadeIn" delay={1.4}>
                    <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                      <h4 className="font-semibold text-white mb-3">
                        Horário de Atendimento
                      </h4>
                      <p className="text-slate-300">
                        Segunda a Sexta: 8h às 18h
                        <br />
                        Sábado: 8h às 12h
                      </p>
                    </div>
                  </AnimatedElement>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
