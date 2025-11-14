import { Fish } from "lucide-react";
import { NavLink } from "@/components/NavLink";

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

const Classification = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-navy mb-4">Klasifikasi</h1>
        <p className="text-muted-foreground">Halaman klasifikasi ikan dalam pengembangan.</p>
      </main>
    </div>
  );
};

export default Classification;
