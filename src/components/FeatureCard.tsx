import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  status: "active" | "development" | "beta" | "production" | "ready";
}

const statusConfig = {
  active: { label: "Active", className: "bg-status-active text-white" },
  development: { label: "Development", className: "bg-status-development text-white" },
  beta: { label: "Beta", className: "bg-status-beta text-white" },
  production: { label: "Production", className: "bg-status-production text-white" },
  ready: { label: "Ready", className: "bg-status-ready text-white" },
};

const FeatureCard = ({ icon: Icon, title, description, status }: FeatureCardProps) => {
  const statusInfo = statusConfig[status];
  
  return (
    <Card className="relative shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Badge 
        className={`absolute top-4 right-4 ${statusInfo.className} px-3 py-1 text-xs font-semibold rounded-full`}
      >
        {statusInfo.label}
      </Badge>
      <CardContent className="pt-12 pb-8 px-6 text-center">
        <div className="mb-6 flex justify-center">
          <div className="bg-ocean rounded-full p-6">
            <Icon className="h-8 w-8 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-navy mb-3">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
