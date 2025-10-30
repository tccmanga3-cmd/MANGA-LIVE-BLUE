import { Button } from "@/components/ui/button";
import { Play, TrendingUp, Clock } from "lucide-react";
import Header from "@/components/Header";
import MangaCard from "@/components/MangaCard";
import heroBg from "@/assets/hero-bg.jpg";
import manga1 from "@/assets/manga1.jpg";
import manga2 from "@/assets/manga2.jpg";
import manga3 from "@/assets/manga3.jpg";
import manga4 from "@/assets/manga4.jpg";
import manga5 from "@/assets/manga5.jpg";
import manga6 from "@/assets/manga6.jpg";

const Index = () => {
  const popularMangas = [
    { title: "Guerreiro Imbatível", chapter: "Cap. 139", image: manga1, genre: "Ação" },
    { title: "Magia Infinita", chapter: "Cap. 87", image: manga2, genre: "Fantasia" },
    { title: "Jornada Épica", chapter: "Cap. 245", image: manga3, genre: "Aventura" },
    { title: "Futuro Desconhecido", chapter: "Cap. 56", image: manga4, genre: "Sci-Fi" },
    { title: "Amor Verdadeiro", chapter: "Cap. 112", image: manga5, genre: "Romance" },
    { title: "Campeão", chapter: "Cap. 201", image: manga6, genre: "Esportes" },
  ];

  const newReleases = [
    { title: "Guerreiro Imbatível", chapter: "Cap. 140 - NOVO", image: manga1, genre: "Ação", isNew: true },
    { title: "Futuro Desconhecido", chapter: "Cap. 57 - NOVO", image: manga4, genre: "Sci-Fi", isNew: true },
    { title: "Campeão", chapter: "Cap. 202 - NOVO", image: manga6, genre: "Esportes", isNew: true },
    { title: "Magia Infinita", chapter: "Cap. 88 - NOVO", image: manga2, genre: "Fantasia", isNew: true },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-[600px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        
        <div className="relative z-10 container px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent animate-fade-in">
            Leia Mangás Grátis
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Milhares de mangás atualizados diariamente. Seus títulos favoritos em um só lugar.
          </p>
          <div className="flex gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-blue">
              <Play className="mr-2 h-5 w-5" />
              Começar a Ler
            </Button>
            <Button size="lg" variant="secondary">
              Ver Catálogo
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Section */}
      <section className="container px-4 py-16">
        <div className="flex items-center gap-3 mb-8">
          <TrendingUp className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Mangás Populares</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {popularMangas.map((manga, index) => (
            <MangaCard key={index} {...manga} />
          ))}
        </div>
      </section>

      {/* New Releases Section */}
      <section className="container px-4 py-16">
        <div className="flex items-center gap-3 mb-8">
          <Clock className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Últimos Capítulos</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newReleases.map((manga, index) => (
            <MangaCard key={index} {...manga} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="container px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p className="text-sm">© 2025 Manga Live. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
