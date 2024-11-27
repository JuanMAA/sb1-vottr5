export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Acerca de</h3>
            <ul className="space-y-2">
              <li>
                <a href="/sobre-nosotros" className="text-muted-foreground hover:text-primary">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="/contacto" className="text-muted-foreground hover:text-primary">
                  Contacto
                </a>
              </li>
              <li>
                <a href="/privacidad" className="text-muted-foreground hover:text-primary">
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contenido</h3>
            <ul className="space-y-2">
              <li>
                <a href="/equipos" className="text-muted-foreground hover:text-primary">
                  Equipos
                </a>
              </li>
              <li hidden>
                <a href="/jugadores" className="text-muted-foreground hover:text-primary">
                  Jugadores
                </a>
              </li>
              <li>
                <a href="/torneos" className="text-muted-foreground hover:text-primary">
                  Torneos
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Comunidad</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Contribuir
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Síguenos</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://instagram.com/futboldigital.cl" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://youtube.com/@futboldigital.cl" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>© 2024 FutbolDigital.cl. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}