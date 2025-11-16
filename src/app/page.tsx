/*
Developed by EXA
Version 1.0
Home Page
*/

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conexión Cultural",
  description:
    "Plataforma para la promoción y difusión de la cultura local de Gualanday",
};

export default function Home() {
  return (
    <main>
      <section id="home">
        <h1>Conexión Cultural</h1>
        <p>
          "Conexión Cultural" es una plataforma interactiva que utiliza mapas y
          herramientas gráficas para revitalizar pueblos olvidados en Colombia,
          afectados por la construcción de viaductos. Conectamos a estas
          comunidades con el turismo y el comercio, fomentando su desarrollo
          económico y cultural.
        </p>
      </section>
      <section style = {{marginTop: "10px"}} id="about-us">
        <h2>Nuestro Equipo</h2>
        <div id="team-members">
          <div>
            <img src="/santiago.jpg" alt="Santiago Huerfano" />
            <h3>Santiago Huerfano</h3>
            <p>
              Especialista en gamificación y creación de contenido educativo,
              responsable del diseño de la estructura digital.
            </p>
          </div>
          <div>
            <img src="/majo.jpg" alt="María José Bermeo" />
            <h3>María José Bermeo</h3>
            <p>
              Directora de arte y marketing, a cargo de la identidad visual y
              estrategias de comunicación.
            </p>
          </div>
          <div>
            <img src="/nicolas.jpg" alt="Nicolás Barreto" />
            <h3>Nicolás Barreto</h3>
            <p>
              Especialista en animación, aportando experiencias interactivas
              dinámicas.
            </p>
          </div>
        </div>
        <div id="mision-vision" className="mv-section">
          <h2 className="mv-title">Misión y visión</h2>

          <div className="mv-grid">
            <article className="mv-card">
              <div className="mv-badge mv-badge--mision">
                <span className="mv-dot" />
                <span>Misión</span>
              </div>
              <p>
                Impulsar la memoria cultural y turística del corregimiento de
                Gualanday a través del diseño gráfico y las tecnologías
                digitales. Integramos herramientas de cartografía interactiva y
                narrativa transmedia para fortalecer el sentido de pertenencia,
                la identidad local y el turismo sostenible. Con el proyecto
                Conexión Cultural: Gualanday en el Mapa, buscamos crear
                experiencias pedagógicas e interactivas que conecten a la
                comunidad con su territorio y proyecten su riqueza natural,
                histórica y gastronómica hacia audiencias locales, nacionales e
                internacionales.
              </p>
            </article>

            <article className="mv-card">
              <div className="mv-badge mv-badge--vision">
                <span className="mv-dot" />
                <span>Visión</span>
              </div>
              <p>
                Consolidarnos como un referente nacional en el uso del diseño
                gráfico y la tecnología para la preservación y difusión de la
                cultura local. Conexión Cultural: Gualanday en el Mapa será una
                plataforma innovadora que promueva la exploración, el
                aprendizaje y el desarrollo sostenible de comunidades
                tradicionalmente invisibilizadas por el avance de las
                infraestructuras viales. A futuro, aspiramos a replicar este
                modelo en otros territorios de Colombia, fortaleciendo los
                vínculos entre cultura, tecnología y turismo responsable.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
