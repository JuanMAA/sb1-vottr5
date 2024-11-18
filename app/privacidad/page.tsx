"use client";

import { Card } from "@/components/ui/card";
import { AdBanner } from "@/components/ads/ad-banner";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <AdBanner className="mb-8" />
      
      <div className="container py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Política de Privacidad</h1>
          
          <Card className="p-8 prose dark:prose-invert max-w-none">
            <h2>Introducción</h2>
            <p>
              En FutbolDigital.cl, nos comprometemos a proteger la privacidad de nuestros usuarios. 
              Esta política de privacidad explica cómo recopilamos, usamos y protegemos tu información personal.
            </p>

            <h2>Información que Recopilamos</h2>
            <p>Podemos recopilar la siguiente información:</p>
            <ul>
              <li>Información básica de contacto (nombre, correo electrónico)</li>
              <li>Información de uso del sitio web</li>
              <li>Preferencias de usuario</li>
              <li>Datos analíticos anónimos</li>
            </ul>

            <h2>Uso de la Información</h2>
            <p>Utilizamos la información recopilada para:</p>
            <ul>
              <li>Mejorar nuestros servicios</li>
              <li>Personalizar la experiencia del usuario</li>
              <li>Enviar actualizaciones importantes</li>
              <li>Responder a consultas y solicitudes</li>
            </ul>

            <h2>Cookies y Tecnologías Similares</h2>
            <p>
              Utilizamos cookies y tecnologías similares para mejorar la experiencia de navegación 
              y recopilar datos analíticos. Los usuarios pueden controlar el uso de cookies a través 
              de la configuración de su navegador.
            </p>

            <h2>Compartir Información</h2>
            <p>
              No vendemos ni compartimos información personal con terceros, excepto cuando sea 
              necesario para proporcionar nuestros servicios o cuando la ley lo requiera.
            </p>

            <h2>Seguridad</h2>
            <p>
              Implementamos medidas de seguridad apropiadas para proteger la información personal 
              contra acceso no autorizado, alteración, divulgación o destrucción.
            </p>

            <h2>Cambios en la Política</h2>
            <p>
              Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. 
              Los cambios serán publicados en esta página con una nueva fecha de vigencia.
            </p>

            <h2>Contacto</h2>
            <p>
              Si tienes preguntas sobre nuestra política de privacidad, puedes contactarnos a través 
              de nuestro formulario de contacto o enviando un correo a privacidad@futboldigital.cl.
            </p>
          </Card>
        </div>
      </div>

      <AdBanner className="mt-8" slot="bottom" />
    </div>
  );
}