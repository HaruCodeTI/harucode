import AnimatedButton from "@/components/AnimatedButton";
import AnimatedElement from "@/components/AnimatedElement";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const projects = [
  {
    title: "Sistema ERP - Gestão Completa",
    description:
      "Sistema ERP completo para gestão empresarial com módulos de vendas, financeiro, RH e estoque integrados.",
    category: "Sistema ERP",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
    icon: "🏢",
    link: "#",
    features: [
      "Gestão de Vendas",
      "Controle Financeiro",
      "Recursos Humanos",
      "Relatórios Avançados",
    ],
  },
  {
    title: "Gestão de Estoque - Controle Total",
    description:
      "Sistema especializado em gestão de estoque com controle de entrada/saída, alertas automáticos e integração com fornecedores.",
    category: "Gestão de Estoque",
    technologies: ["Next.js", "TypeScript", "MySQL", "WebSockets"],
    icon: "📦",
    link: "#",
    features: [
      "Controle de Entrada/Saída",
      "Alertas Automáticos",
      "Integração Fornecedores",
      "Relatórios de Estoque",
    ],
  },
  {
    title: "Cardápio Digital - Delivery",
    description:
      "Cardápio digital interativo para restaurantes com integração direta ao iFood e sistema de pedidos online.",
    category: "Cardápio Digital",
    technologies: ["React Native", "iFood API", "Firebase", "Stripe"],
    icon: "🍕",
    link: "#",
    features: [
      "Integração iFood",
      "Pedidos Online",
      "Gestão de Cardápio",
      "Sistema de Pagamentos",
    ],
  },
  {
    title: "Integração iFood - Automatizada",
    description:
      "Sistema de integração completa com iFood para sincronização automática de cardápios, preços e pedidos.",
    category: "Integração iFood",
    technologies: ["Node.js", "iFood API", "Webhooks", "MongoDB"],
    icon: "🚚",
    link: "#",
    features: [
      "Sincronização Automática",
      "Gestão de Pedidos",
      "Controle de Preços",
      "Relatórios de Vendas",
    ],
  },
  {
    title: "Site Institucional - Empresa Tech",
    description:
      "Site institucional moderno e responsivo para empresa de tecnologia com blog integrado e formulários de contato.",
    category: "Site Institucional",
    technologies: ["Next.js", "Tailwind CSS", "Contentful CMS", "Vercel"],
    icon: "💼",
    link: "#",
    features: [
      "Design Responsivo",
      "Blog Integrado",
      "SEO Otimizado",
      "Formulários de Contato",
    ],
  },
  {
    title: "App Delivery - Restaurante",
    description:
      "Aplicativo completo de delivery para restaurante com geolocalização, pagamentos e gestão de pedidos.",
    category: "App Delivery",
    technologies: ["React Native", "Google Maps API", "Stripe", "Firebase"],
    icon: "🍔",
    link: "#",
    features: [
      "Geolocalização",
      "Pagamentos Online",
      "Gestão de Pedidos",
      "Notificações Push",
    ],
  },
];

export default function PortfolioPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <AnimatedElement variant="slideUp" delay={0.2}>
              <h1 className="text-5xl font-bold text-center mb-8">
                Nosso <span className="text-purple-400">Portfólio</span>
              </h1>
            </AnimatedElement>

            <AnimatedElement variant="fadeIn" delay={0.4}>
              <p className="text-xl text-slate-300 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
                Conheça alguns dos projetos que desenvolvemos e que demonstram
                nossa expertise em diferentes tecnologias e soluções.
              </p>
            </AnimatedElement>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <AnimatedElement
                  key={project.title}
                  variant="scaleIn"
                  delay={0.2 + index * 0.1}
                >
                  <div className="bg-white/5 rounded-lg border border-white/10 overflow-hidden hover:border-purple-400/30 transition-all duration-300 group flex flex-col h-full">
                    <div className="h-48 bg-gradient-to-br from-purple-400/20 to-blue-400/20 flex items-center justify-center">
                      <span className="text-6xl opacity-70">
                        {project.icon}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-purple-400 font-medium bg-purple-400/10 px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-300 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-white mb-2">
                          Funcionalidades:
                        </h4>
                        <div className="space-y-1">
                          {project.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-center text-xs text-slate-400"
                            >
                              <span className="text-purple-400 mr-2">✓</span>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs bg-white/10 px-2 py-1 rounded text-slate-300 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto">
                        <AnimatedButton
                          variant="outline"
                          size="sm"
                          className="w-full text-purple-400 border-purple-400 hover:bg-purple-400 hover:text-white hover:border-purple-400 transition-colors"
                        >
                          Ver Projeto
                        </AnimatedButton>
                      </div>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>

            <AnimatedElement variant="slideUp" delay={1.0}>
              <div className="text-center mt-16">
                <h3 className="text-3xl font-bold mb-8">
                  Tem um projeto em mente?
                </h3>
                <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                  Vamos conversar sobre como podemos transformar sua ideia em
                  realidade.
                </p>
                <AnimatedButton variant="secondary" size="lg">
                  Iniciar Conversa
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
