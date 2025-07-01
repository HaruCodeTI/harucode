import AnimatedElement from "@/components/AnimatedElement";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

export default function SobrePage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedElement variant="slideUp" delay={0.2}>
              <h1 className="text-5xl font-bold text-center mb-8">
                Sobre a <span className="text-purple-400">HaruCode</span>
              </h1>
            </AnimatedElement>

            <AnimatedElement variant="fadeIn" delay={0.4}>
              <div className="prose prose-invert max-w-none">
                <p className="text-xl text-slate-300 text-center mb-12 leading-relaxed">
                  Somos uma empresa especializada em desenvolvimento de
                  software, focada em transformar ideias em soluções digitais
                  inovadoras.
                </p>
              </div>
            </AnimatedElement>

            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <AnimatedElement variant="slideInLeft" delay={0.6}>
                <div className="bg-white/5 p-8 rounded-lg border border-white/10">
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">
                    Nossa Missão
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Desenvolver soluções tecnológicas que impulsionem o
                    crescimento dos nossos clientes, oferecendo código de
                    qualidade e inovação em cada projeto.
                  </p>
                </div>
              </AnimatedElement>

              <AnimatedElement variant="slideInRight" delay={0.8}>
                <div className="bg-white/5 p-8 rounded-lg border border-white/10">
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">
                    Nossa Visão
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Ser referência em desenvolvimento de software, reconhecida
                    pela excelência técnica e pela capacidade de entregar
                    soluções que realmente fazem a diferença.
                  </p>
                </div>
              </AnimatedElement>
            </div>

            <AnimatedElement variant="slideUp" delay={1.0}>
              <div className="mt-16 text-center">
                <h3 className="text-3xl font-bold mb-8">Nossos Valores</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">💡</span>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Inovação</h4>
                    <p className="text-slate-300">
                      Sempre buscando as melhores soluções
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Qualidade</h4>
                    <p className="text-slate-300">
                      Código limpo e bem estruturado
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Parceria</h4>
                    <p className="text-slate-300">
                      Trabalhando juntos pelo sucesso
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
