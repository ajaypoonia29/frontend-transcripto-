import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

interface CoachCardProps {
  name: string;
  title: string;
  image: string;
  specialties: string[];
  experience: string;
}

export function CoachCard({ name, title, image, specialties, experience }: CoachCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground mb-2">{title}</p>
        <p className="text-sm text-accent mb-3">{experience}</p>
        <div className="flex flex-wrap gap-2">
          {specialties.map((specialty, index) => (
            <Badge key={index} variant="secondary">
              {specialty}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
