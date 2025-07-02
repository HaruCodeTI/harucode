"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Início", href: "/" },
    { name: "Sobre", href: "/sobre" },
    { name: "Serviços", href: "/servicos" },
    { name: "Portfólio", href: "/portfolio" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center gap-2 group focus:outline-none"
              aria-label="Ir para a página inicial"
            >
              <Image
                src="/icon-dark.png"
                alt="HaruCode Logo"
                width={350}
                height={150}
                priority
                className="h-12 w-auto transition-transform group-hover:scale-105"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            <a href="/contato">
              <Button variant="secondary" size="sm">
                Entre em Contato
              </Button>
            </a>
          </nav>

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-black/95 border-l border-white/10"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl font-bold text-white">
                      Haru<span className="text-purple-400">Code</span>
                    </h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsOpen(false)}
                      className="text-white"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>

                  <nav className="flex flex-col space-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-white/80 hover:text-white transition-colors duration-200 font-medium text-lg py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                    <div className="pt-4">
                      <a href="/contato">
                        <Button variant="secondary" className="w-full">
                          Entre em Contato
                        </Button>
                      </a>
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
