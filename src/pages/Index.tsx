import { Fish, TrendingUp, Brain, DollarSign, BarChart3, Zap, LucideIcon } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Header Component
const Header = () => {
  return (
    <header className="bg-navy text-navy-foreground sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-lg p-2">
              <Fish className="h-6 w-6 text-ocean" />
            </div>
            <h1 className="text-2xl font-bold">FishStatik</h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <NavLink 
              to="/" 
              className="flex items-center gap-2 text-sm font-medium hover:text-ocean-light transition-colors"
            >
              <span className="text-base">📊</span>
              CPUE & MSY
            </NavLink>
            <NavLink 
              to="/stock-prediction" 
              className="flex items-center gap-2 text-sm font-medium hover:text-ocean-light transition-colors"
            >
              <span className="text-base">🧠</span>
              Prediksi Stok
            </NavLink>
            <NavLink 
              to="/price-projection" 
              className="flex items-center gap-2 text-sm font-medium hover:text-ocean-light transition-colors"
            >
              <span className="text-base">💲</span>
              Proyeksi Harga
            </NavLink>
            <NavLink 
              to="/visualization" 
              className="flex items-center gap-2 text-sm font-medium hover:text-ocean-light transition-colors"
            >
              <span className="text-base">📈</span>
              Visualisasi
            </NavLink>
            <NavLink 
              to="/classification" 
              className="flex items-center gap-2 text-sm font-medium hover:text-ocean-light transition-colors"
            >
              <span className="text-base">🐟</span>
              Klasifikasi
            </NavLink>
            <NavLink 
              to="/simulation" 
              className="flex items-center gap-2 text-sm font-medium hover:text-ocean-light transition-colors"
            >
              <span className="text-base">🔮</span>
              Simulasi
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <Fish className="h-16 w-16 text-ocean mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Selamat Datang di FishStatik
          </h1>
          <p className="text-lg text-muted-foreground">
            Platform Analisis Perikanan Modern dengan Teknologi AI dan Data Science
          </p>
        </div>
      </div>
    </section>
  );
};

// FeatureCard Component
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

// Main Index Page
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <FeatureCard
            icon={TrendingUp}
            title="CPUE & MSY Analysis"
            description="Analisis Catch Per Unit Effort dan Maximum Sustainable Yield menggunakan Model Schaefer."
            status="active"
          />
          <FeatureCard
            icon={Brain}
            title="Stock Prediction"
            description="Model prediksi stok ikan berbasis ARIMA dan machine learning untuk perencanaan berkelanjutan."
            status="development"
          />
          <FeatureCard
            icon={DollarSign}
            title="Market Foresight"
            description="Prediksi harga ikan dengan AI untuk optimasi profit dan analisis pasar real-time."
            status="beta"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={BarChart3}
            title="Data Visualization"
            description="Visualisasi data perikanan interaktif dengan dashboard analitik komprehensif."
            status="active"
          />
          <FeatureCard
            icon={Fish}
            title="Fish Classification"
            description="Sistem klasifikasi spesies ikan menggunakan computer vision dan deep learning."
            status="production"
          />
          <FeatureCard
            icon={Zap}
            title="Simulation Tools"
            description="Simulasi skenario perikanan untuk pengambilan keputusan berbasis data."
            status="ready"
          />
        </div>
      </main>
    </div>
  );
};

export default Index;
