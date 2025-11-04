import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

interface ComingSoonProps {
  title: string;
  description: string;
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-muted-foreground mt-2">{description}</p>
      </div>

      <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
        <CardContent className="pt-20 pb-20 text-center">
          <Sparkles className="h-16 w-16 mx-auto text-primary mb-4" />
          <h2 className="text-2xl font-bold mb-2">Coming Soon</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            We're working hard to bring you this feature. Stay tuned for updates!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
