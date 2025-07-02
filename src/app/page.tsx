import AnimatedButton from "@/components/AnimatedButton";
import AnimatedElement from "@/components/AnimatedElement";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const services = [
  {
    title: "Web & Sistemas",
    icon: "💻",
    desc: "Sites, sistemas e portais sob medida para o seu negócio.",
    link: "/servicos",
  },
  {
    title: "Mobile & Delivery",
    icon: "📱",
    desc: "Apps, cardápios digitais e integrações para delivery.",
    link: "/servicos",
  },
  {
    title: "Integrações & APIs",
    icon: "🔗",
    desc: "Conecte seu negócio com iFood, ERPs e outros sistemas.",
    link: "/servicos",
  },
];

const features = [
  { icon: "⚡", title: "Agilidade", desc: "Entrega rápida e eficiente." },
  {
    icon: "🔒",
    title: "Segurança",
    desc: "Seu sistema protegido e confiável.",
  },
  {
    icon: "🤝",
    title: "Parceria",
    desc: "Atendimento próximo e suporte real.",
  },
];

const portfolio = [
  {
    title: "ERP Completo",
    desc: "Gestão empresarial integrada, módulos de vendas, estoque e financeiro.",
    icon: "🏢",
    link: "/portfolio",
  },
  {
    title: "Cardápio Delivery",
    desc: "Pedidos online, integração iFood e gestão de cardápio.",
    icon: "🍕",
    link: "/portfolio",
  },
];

const testimonial = {
  name: "João Silva",
  company: "Restaurante Sabor & Arte",
  text: "A HaruCode transformou nosso delivery. O sistema é rápido, fácil de usar e o suporte é excelente!",
};

export default function HomePage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <section className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 pt-32 pb-12">
          <AnimatedElement variant="slideUp" delay={0.1}>
            <h1 className="text-5xl sm:text-7xl font-bold mb-4">
              Haru<span className="text-purple-400">Code</span>
            </h1>
          </AnimatedElement>
          <AnimatedElement variant="fadeIn" delay={0.3}>
            <p className="text-lg sm:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Inovação, Código e Novos Começos.
              <br />
              Soluções digitais sob medida para o seu negócio crescer.
            </p>
          </AnimatedElement>
          <AnimatedElement variant="scaleIn" delay={0.5}>
            <a href="/contato">
              <AnimatedButton variant="secondary" size="lg">
                Entre em Contato
              </AnimatedButton>
            </a>
          </AnimatedElement>
        </section>

        <section className="max-w-5xl mx-auto py-16 px-4">
          <AnimatedElement variant="slideUp" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
              Nossas Soluções
            </h2>
          </AnimatedElement>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <AnimatedElement
                key={s.title}
                variant="scaleIn"
                delay={0.2 + i * 0.1}
              >
                <a
                  href={s.link}
                  className="block bg-white/5 rounded-lg border border-white/10 p-8 text-center hover:border-purple-400/40 transition-all"
                >
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-purple-400">
                    {s.title}
                  </h3>
                  <p className="text-slate-300">{s.desc}</p>
                </a>
              </AnimatedElement>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto py-12 px-4">
          <AnimatedElement variant="slideUp" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
              Por que escolher a HaruCode?
            </h2>
          </AnimatedElement>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <AnimatedElement
                key={f.title}
                variant="fadeIn"
                delay={0.2 + i * 0.1}
              >
                <div className="bg-white/5 rounded-lg border border-white/10 p-8 text-center">
                  <div className="text-4xl mb-4">{f.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-purple-400">
                    {f.title}
                  </h3>
                  <p className="text-slate-300">{f.desc}</p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto py-16 px-4">
          <AnimatedElement variant="slideUp" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
              Projetos em Destaque
            </h2>
          </AnimatedElement>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((p, i) => (
              <AnimatedElement
                key={p.title}
                variant="scaleIn"
                delay={0.2 + i * 0.1}
              >
                <a
                  href={p.link}
                  className="block bg-white/5 rounded-lg border border-white/10 p-8 text-center hover:border-purple-400/40 transition-all h-full"
                >
                  <div className="text-4xl mb-4">{p.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-purple-400">
                    {p.title}
                  </h3>
                  <p className="text-slate-300">{p.desc}</p>
                </a>
              </AnimatedElement>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="/portfolio">
              <AnimatedButton
                variant="outline"
                size="lg"
                className="text-purple-400 border-purple-400 hover:bg-purple-400 hover:text-white"
              >
                Ver Portfólio Completo
              </AnimatedButton>
            </a>
          </div>
        </section>

        <section className="max-w-3xl mx-auto py-12 px-4">
          <AnimatedElement variant="fadeIn" delay={0.1}>
            <div className="bg-white/5 rounded-lg border border-white/10 p-8 text-center">
              <div className="text-4xl mb-4">⭐</div>
              <blockquote className="text-lg text-slate-200 italic mb-4">
                “{testimonial.text}”
              </blockquote>
              <div className="text-slate-400 font-semibold">
                {testimonial.name}
              </div>
              <div className="text-slate-500 text-sm">
                {testimonial.company}
              </div>
            </div>
          </AnimatedElement>
        </section>

        <section className="max-w-3xl mx-auto py-16 px-4 text-center">
          <AnimatedElement variant="slideUp" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Pronto para inovar?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Fale com a HaruCode e descubra como podemos transformar seu
              negócio com tecnologia.
            </p>
            <a href="/contato">
              <AnimatedButton variant="secondary" size="lg">
                Solicitar Orçamento
              </AnimatedButton>
            </a>
          </AnimatedElement>
        </section>
        <Footer />
      </div>
    </PageTransition>
  );
}
