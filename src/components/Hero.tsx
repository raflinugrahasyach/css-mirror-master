import { Fish } from "lucide-react";

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

export default Hero;
