import AnimatedButton from "@/components/AnimatedButton";
import AnimatedElement from "@/components/AnimatedElement";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const services = [
  {
    title: "Desenvolvimento Web",
    description:
      "Sites e aplicações web modernas, responsivas e otimizadas para SEO.",
    icon: "🌐",
    features: ["React/Next.js", "TypeScript", "Tailwind CSS", "SEO Otimizado"],
  },
  {
    title: "Desenvolvimento Mobile",
    description: "Aplicativos nativos e híbridos para iOS e Android.",
    icon: "📱",
    features: ["React Native", "Flutter", "PWA", "App Store"],
  },
  {
    title: "APIs e Backend",
    description: "APIs robustas e escaláveis para suas aplicações.",
    icon: "⚙️",
    features: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Consultoria Técnica",
    description: "Análise e otimização de sistemas existentes.",
    icon: "🔍",
    features: ["Code Review", "Arquitetura", "Performance", "Segurança"],
  },
  {
    title: "Manutenção e Suporte",
    description: "Suporte contínuo e manutenção de sistemas.",
    icon: "🛠️",
    features: ["Monitoramento", "Backups", "Updates", "Suporte 24/7"],
  },
  {
    title: "UI/UX Design",
    description: "Design de interfaces modernas e experiências únicas.",
    icon: "🎨",
    features: ["Figma", "Prototipagem", "Design System", "User Research"],
  },
];

export default function ServicosPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <AnimatedElement variant="slideUp" delay={0.2}>
              <h1 className="text-5xl font-bold text-center mb-8">
                Nossos <span className="text-purple-400">Serviços</span>
              </h1>
            </AnimatedElement>

            <AnimatedElement variant="fadeIn" delay={0.4}>
              <p className="text-xl text-slate-300 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
                Oferecemos soluções completas em desenvolvimento de software,
                desde a concepção até a entrega e manutenção.
              </p>
            </AnimatedElement>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <AnimatedElement
                  key={service.title}
                  variant="scaleIn"
                  delay={0.2 + index * 0.1}
                >
                  <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-purple-400/30 transition-all duration-300 h-full">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-4 text-purple-400">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-slate-400 flex items-center"
                        >
                          <span className="text-purple-400 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedElement>
              ))}
            </div>

            <AnimatedElement variant="slideUp" delay={1.0}>
              <div className="text-center mt-16">
                <h3 className="text-3xl font-bold mb-8">
                  Pronto para começar seu projeto?
                </h3>
                <AnimatedButton variant="secondary" size="lg">
                  Solicitar Orçamento
                </AnimatedButton>
              </div>
            </AnimatedElement>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
