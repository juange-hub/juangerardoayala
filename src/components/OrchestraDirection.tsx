import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const OrchestraDirection = () => {
  // Reemplazar con el ID real del video de YouTube
  const youtubeId = "ZdTEcloOYps";
  const videoTitle = "Debut con la Orquesta Sinfónica Nacional de Paraguay";
  const videoDescription =
    "Mi debut como director invitado de la Orquesta Sinfónica Nacional de Paraguay. Visitá mi canal de YouTube para ver más presentaciones.";

  return (
    <section id="direccion" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Dirección Orquestal
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {videoDescription}
          </p>
        </div>

        {/* Video embed */}
        <div className="rounded-xl overflow-hidden shadow-lg aspect-video bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title={videoTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            loading="lazy"
          />
        </div>

        {/* CTA al canal */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <a
              href="https://www.youtube.com/@juangerardoayala"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Play className="w-5 h-5" />
              Ver más en mi canal de YouTube
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { OrchestraDirection };
