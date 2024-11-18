"use client";

import { Card } from "@/components/ui/card";
import { Trophy, Users, Star, Shield } from "lucide-react";
import { AdBanner } from "@/components/ads/ad-banner";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <AdBanner className="mb-8" />
      
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-8">Sobre Nosotros</h1>
        
        <div className="space-y-8">
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">Nuestra Misión</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              En FutbolDigital.cl, nos dedicamos a proporcionar la información más completa y actualizada sobre el fútbol chileno. 
              Nuestro objetivo es ser la plataforma digital definitiva para los aficionados, ofreciendo estadísticas detalladas, 
              resultados en tiempo real y análisis profundos de todos los aspectos del fútbol nacional.
            </p>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Excelencia</h3>
              </div>
              <p className="text-muted-foreground">
                Nos esforzamos por mantener los más altos estándares de calidad en nuestra cobertura y análisis del fútbol chileno.
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Comunidad</h3>
              </div>
              <p className="text-muted-foreground">
                Creamos un espacio donde los aficionados pueden encontrar toda la información que necesitan sobre sus equipos favoritos.
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Innovación</h3>
              </div>
              <p className="text-muted-foreground">
                Utilizamos tecnología de vanguardia para ofrecer la mejor experiencia posible a nuestros usuarios.
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Confiabilidad</h3>
              </div>
              <p className="text-muted-foreground">
                Nos comprometemos a proporcionar información precisa y actualizada sobre el fútbol chileno.
              </p>
            </Card>
          </div>
        </div>
      </div>

      <AdBanner className="mt-8" slot="bottom" />
    </div>
  );
}