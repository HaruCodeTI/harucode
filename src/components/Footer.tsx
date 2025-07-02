import Image from "next/image";
import Link from "next/link";

const company = {
  name: "HaruCode",
  cnpj: "59.153.541/0001-00",
  address:
    "Rua Geraldo Agostinho Ramos, 90, Jardim Paulista, Campo Grande - MS",
  email: "contato.harucode@gmail.com",
  year: new Date().getFullYear(),
};

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/10 text-white py-8 px-4 mt-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-6 text-sm">
        <div className="flex flex-col gap-1">
          <Link
            href="/"
            className="mb-1 inline-block"
            aria-label="Ir para a página inicial"
          >
            <Image
              src="/lodo-dark.png"
              alt="HaruCode Logo"
              width={350}
              height={150}
              className="h-10 w-auto"
              priority
            />
          </Link>
          <span className="text-white/60">CNPJ: {company.cnpj}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-white/80">{company.address}</span>
          <a
            href={`mailto:${company.email}`}
            className="text-purple-300 hover:underline"
          >
            {company.email}
          </a>
        </div>
        <div className="flex flex-col gap-1 md:items-end">
          <span className="text-white/60">
            © {company.year} HaruCode. Todos os direitos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}
