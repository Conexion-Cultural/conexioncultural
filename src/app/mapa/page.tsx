/*
Developed by EXA
Version 1.0
Maps Page
*/
import React from "react";
import type { Metadata } from "next";
import Mapa from "@/components/Mapa";
import s from "@/styles/MapDesc.module.css";

export const metadata: Metadata = {
  title: "Mapa de Gualanday",
  description: "Navega por el mapa interactivo de Gualanday",
};

export default function MapaGualanday() {
  return (
    <main className="page">
      <div className={s.mapPage}>
        <h2>Mapa de Gualanday</h2>

        <Mapa />

        <section className={s.mapSection}>
          <h3 className={s.title}>Ubicación en el mapa</h3>

          <div className={s.descCard}>
            <p className={s.txt}>
              Aquí puedes ver la localización exacta de Gualanday, Coello Tolima
              en el mapa. Haz clic en los puntos de navegación para ver la
              descripción de cada destino y conocer más sobre el territorio.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
