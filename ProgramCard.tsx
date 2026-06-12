import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  features?: string[];
}

export function ProgramCard({ title, description, image, link, features }: ProgramCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        {features && features.length > 0 && (
          <ul className="space-y-2 mb-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start text-sm">
                <span className="text-success mr-2">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
        <Button asChild variant="outline" className="w-full group">
          <Link to={link}>
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
