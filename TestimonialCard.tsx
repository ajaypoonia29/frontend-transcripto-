import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  content: string;
  rating?: number;
  result?: string;
}

export function TestimonialCard({ name, role, image, content, rating = 5, result }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h4 className="font-bold">{name}</h4>
            <p className="text-sm text-muted-foreground">{role}</p>
            {result && (
              <p className="text-sm text-success font-semibold mt-1">{result}</p>
            )}
          </div>
        </div>
        <div className="flex mb-3">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-muted-foreground italic">"{content}"</p>
      </CardContent>
    </Card>
  );
}
