import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import { TrendingUp, Brain, DollarSign, BarChart3, Fish, Zap } from "lucide-react";

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
