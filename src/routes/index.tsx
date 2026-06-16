import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { MapPin, Play, MessageCircle, Images, Menu, X, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GKM Imóveis · Empreendimentos Wunder em Estância Velha" },
      {
        name: "description",
        content:
          "Conheça os empreendimentos Wunder. Apartamentos prontos para morar em Estância Velha-RS com entrada facilitada e parcelamento em até 100x direto com a construtora.",
      },
      { property: "og:title", content: "Empreendimentos Wunder · GKM Imóveis" },
      {
        property: "og:description",
        content: "Apartamentos prontos para morar em Estância Velha-RS com condições especiais.",
      },
    ],
  }),
  component: LandingPage,
});

const WHATSAPP_URL =
  "https://wa.me/5551999999999?text=Ol%C3%A1!%20Tenho%20interesse%20nos%20Empreendimentos%20Wunder.";

const HERO_VIDEO_POSTER =
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80";

type Empreendimento = {
  nome: string;
  bairro: string;
  descricao: string;
  preco: string;
  poster: string;
  galeria: string[];
};

const empreendimentos: Empreendimento[] = [
  {
    nome: "Residencial Saint Peter",
    bairro: "Centro, Estância Velha",
    descricao:
      "Unidades de 2 e 3 dormitórios, área de lazer completa com salão de festas, piscina e portaria 24h.",
    preco: "R$ 690.000",
    poster:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    galeria: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    nome: "Sagrado Coração de Jesus",
    bairro: "Centro, Estância Velha",
    descricao:
      "Apartamentos amplos com acabamento premium, sacada com churrasqueira e vista privilegiada da cidade.",
    preco: "R$ 1.200.000",
    poster:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
    galeria: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    nome: "Residencial Floresta",
    bairro: "Floresta, Estância Velha",
    descricao:
      "Conforto e tranquilidade em meio ao verde. Plantas inteligentes e área de lazer pensada para a família.",
    preco: "R$ 620.000",
    poster:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    galeria: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
    ],
  },
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <ProntosParaMorar />
        <CallToAction />
        <SobreGKM />
        <SobreCidade />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Início", href: "#hero" },
    { label: "Empreendimentos", href: "#empreendimentos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Cidade", href: "#cidade" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-md bg-primary/15 text-primary">
            <span className="text-base font-black tracking-tight">GK</span>
          </div>
          <div className="text-lg font-black tracking-tight">
            GKM<span className="text-primary">.</span>
          </div>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex"
        >
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <MessageCircle className="mr-1.5 h-4 w-4" /> Falar agora
          </Button>
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          className="grid h-10 w-10 place-items-center rounded-md border border-white/10 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-white/5 bg-background md:hidden">
          <div className="space-y-1 px-4 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-card hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-md bg-primary px-3 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 -top-24 -z-10 mx-auto h-64 max-w-3xl rounded-full bg-primary/20 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-10 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
        <div className="flex flex-col items-center gap-6 text-center">
          <Badge className="rounded-full border-0 bg-primary px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-primary-foreground">
            Lançamento em Estância Velha
          </Badge>
          <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Conheça os <span className="text-primary">Empreendimentos Wunder</span>
          </h1>
          <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
            Facilidade total: entrada reduzida e parcelamento em até{" "}
            <span className="font-semibold text-foreground">100x direto com a construtora</span>.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto">
                <MessageCircle className="mr-2 h-5 w-5" /> Falar com um corretor
              </Button>
            </a>
            <a href="#empreendimentos">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-white/15 bg-transparent text-foreground hover:bg-card sm:w-auto"
              >
                Ver empreendimentos
              </Button>
            </a>
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-2xl border border-white/10 bg-card shadow-2xl sm:mt-14">
          <div className="absolute right-4 top-4 z-10 grid h-20 w-20 place-items-center rounded-full bg-primary text-center text-primary-foreground shadow-lg sm:right-6 sm:top-6 sm:h-24 sm:w-24">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-wider">Até</div>
              <div className="text-xl font-black leading-none sm:text-2xl">100x</div>
              <div className="text-[10px] font-semibold uppercase tracking-wider">para pagar</div>
            </div>
          </div>
          <video
            className="aspect-video w-full object-cover"
            poster={HERO_VIDEO_POSTER}
            controls
            playsInline
            preload="metadata"
          >
            <source
              src="https://cdn.coverr.co/videos/coverr-an-modern-apartment-building-2806/1080p.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
}

function ProntosParaMorar() {
  return (
    <section id="empreendimentos" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-black tracking-tight text-primary sm:text-4xl">
            Prontos para Morar
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Confira as opções com entrada facilitada e saldo em até 60x direto com a Construtora.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
          {empreendimentos.map((e) => (
            <EmpreendimentoCard key={e.nome} item={e} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EmpreendimentoCard({ item }: { item: Empreendimento }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play()
      .then(() => setPlaying(true))
      .catch(() => {});
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-card shadow-lg transition-transform hover:-translate-y-1">
      <div className="relative">
        <div className="absolute left-3 top-3 z-10">
          <Badge className="rounded-md border-0 bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
            Entrada + Saldo em até 60x
          </Badge>
        </div>
        <video
          ref={videoRef}
          className="aspect-[4/3] w-full object-cover"
          poster={item.poster}
          controls={playing}
          playsInline
          preload="metadata"
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-an-modern-apartment-building-2806/1080p.mp4"
            type="video/mp4"
          />
        </video>
        {!playing ? (
          <>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            <button
              type="button"
              onClick={handlePlay}
              aria-label={`Reproduzir vídeo de ${item.nome}`}
              className="absolute inset-0 grid place-items-center"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-primary/95 text-primary-foreground shadow-2xl ring-4 ring-primary/30 transition-transform hover:scale-110 sm:h-16 sm:w-16">
                <Play className="ml-1 h-5 w-5 fill-current sm:h-6 sm:w-6" />
              </span>
            </button>
          </>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-center gap-1.5 text-xs text-primary">
          <MapPin className="h-3.5 w-3.5" />
          <span className="truncate">{item.bairro}</span>
        </div>
        <div>
          <h3 className="border-b border-white/10 pb-3 text-lg font-bold tracking-tight">{item.nome}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {item.descricao}
          </p>
        </div>
        <div className="mt-auto">
          <div className="text-xs text-muted-foreground">A partir de</div>
          <div className="text-xl font-black text-primary">{item.preco}</div>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="flex-1"
          >
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              <MessageCircle className="mr-1.5 h-4 w-4" /> Fale com o corretor
            </Button>
          </a>
          <GaleriaDialog item={item} />
        </div>
      </div>
    </article>
  );
}

function GaleriaDialog({ item }: { item: Empreendimento }) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="flex-1 border-white/15 bg-transparent text-foreground hover:bg-background"
        >
          <Images className="mr-1.5 h-4 w-4" /> Ver imagens
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl border-white/10 bg-card p-0">
        <div className="border-b border-white/5 p-4 sm:p-5">
          <DialogTitle className="text-base font-bold sm:text-lg">{item.nome}</DialogTitle>
          <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3 text-primary" /> {item.bairro}
          </div>
        </div>
        <div className="grid max-h-[70vh] gap-2 overflow-y-auto p-3 sm:grid-cols-2 sm:p-4">
          {item.galeria.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${item.nome} - imagem ${i + 1}`}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-lg object-cover"
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function CallToAction() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-5xl px-4 py-14 text-center sm:px-6 sm:py-16 lg:px-8">
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Fale com um corretor</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm opacity-90 sm:text-base">
          Entre em contato agora mesmo e tire suas dúvidas sobre os empreendimentos.
        </p>
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-7 inline-block">
          <Button
            size="lg"
            className="border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            <MessageCircle className="mr-2 h-5 w-5" /> Entrar em Contato
          </Button>
        </a>
      </div>
    </section>
  );
}

function SobreGKM() {
  return (
    <section id="sobre" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-black tracking-tight text-primary sm:text-4xl">
            Conheça a GKM Imóveis
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Há mais de 10 anos construindo sonhos.
          </p>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-card shadow-xl">
          <div className="relative aspect-video w-full">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
              title="Apresentação GKM Imóveis"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SobreCidade() {
  return (
    <section id="cidade" className="pb-20 sm:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Um pouco sobre a cidade</h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            A oportunidade perfeita para quem busca tranquilidade.
          </p>
        </div>
        <div className="mt-10 grid gap-4 rounded-2xl border border-white/5 bg-card p-5 sm:p-7 lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="space-y-4">
            <Badge className="rounded-md border-0 bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground">
              Conheça Estância Velha-RS
            </Badge>
            <h3 className="text-2xl font-black tracking-tight sm:text-3xl">68 anos de História</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Conhecida internacionalmente como Capital Nacional do Couro, Estância Velha é um
              município charmoso localizado na Região Metropolitana de Porto Alegre, bem na encosta
              da Serra Gaúcha.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              O título de Capital do Couro não é à toa. Historicamente, a cidade se desenvolveu ao
              redor do curtume e da indústria calçadista, moldando a economia e a identidade dos
              moradores.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Mesmo estando perto da capital e de grandes centros urbanos como Novo Hamburgo,
              Estância Velha mantém seu ar de cidade acolhedora de interior, com ruas arborizadas e
              uma rotina tranquila.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1400&q=80"
              alt="Estância Velha - RS"
              className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-card/60">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-md bg-primary/15 text-primary">
                <span className="text-base font-black">GK</span>
              </div>
              <div className="text-lg font-black">
                GKM<span className="text-primary">.</span> Imóveis
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A GKM Imóveis nasceu de um sonho construído na base de coragem, trabalho e propósito.
            </p>
            <div className="mt-5 flex gap-2">
              <a
                href="#"
                aria-label="Facebook"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary">Serviços</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Crédito Pessoal</a></li>
              <li><a href="#" className="hover:text-foreground">Aprove seu Financiamento</a></li>
              <li><a href="#" className="hover:text-foreground">Indique e Ganhe</a></li>
              <li><a href="#" className="hover:text-foreground">Anuncie seu Imóvel</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary">Contato</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Rua Pça. de Queimer, 158</li>
              <li>Centro, Estância Velha-RS</li>
              <li>CEP 93600-360</li>
              <li className="flex items-center gap-2 pt-2">
                <Phone className="h-3.5 w-3.5 text-primary" /> (51) 99999-9999
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-primary" /> contato@gkmimoveis.com.br
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/5 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} GKM Imóveis · Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsapp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-2xl shadow-primary/40 transition-transform hover:scale-110 sm:bottom-7 sm:right-7"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
