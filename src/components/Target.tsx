/*
Developed by EXA
Version 1.0
Target Component
*/

"use client";
import React, { useEffect } from "react";
import s from "@/styles/Target.module.css";

export type Place = {
  id: string;
  nombre: string;
  description: string;
  imageUrl: string;
};

type Props = {
  place: Place | null;
  onClose: () => void;
};

export default function PlacePopup({ place, onClose }: Props) {
  if (!place) return null;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className={s.container}
      role="dialog"
      aria-modal="true"
      aria-label={place.nombre}
    >
      {/* Fondo oscuro clicable para cerrar */}
      <button
        className={s.btnClose}
        onClick={onClose}
        aria-label="Cerrar"
        type="button"
      />

      {/* Tarjeta de información */}
      <div className={s.infoContainer}>
        {/* Botón X arriba a la derecha */}
        <button
          type="button"
          className={s.iconClose}
          aria-label="Cerrar tarjeta"
          onClick={onClose}
        />

        <div className={s.imgContainer}>
          <img
            src={place.imageUrl}
            alt={place.nombre}
            className={s.imgDestination}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "/rio.png";
            }}
          />
        </div>

        <div className={s.titleContainer}>
          <h3 className={s.title}>{place.nombre}</h3>
          <p className={s.description}>{place.description}</p>
        </div>
      </div>
    </div>
  );
}
