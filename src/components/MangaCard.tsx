import { Badge } from "@/components/ui/badge";

interface MangaCardProps {
  title: string;
  chapter: string;
  image: string;
  genre: string;
  isNew?: boolean;
}

const MangaCard = ({ title, chapter, image, genre, isNew }: MangaCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-card shadow-card transition-all hover:scale-105 hover:shadow-blue cursor-pointer animate-fade-in">
      <div className="aspect-[2/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-foreground line-clamp-2">{title}</h3>
          {isNew && (
            <Badge className="bg-primary text-primary-foreground text-xs shrink-0">
              NOVO
            </Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground mb-1">{chapter}</p>
        <Badge variant="secondary" className="text-xs">
          {genre}
        </Badge>
      </div>
    </div>
  );
};

export default MangaCard;
