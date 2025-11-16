/*
Developed by EXA
Version 1.0
Map Component
*/
/*
"use client";

import { useEffect, useRef, useState } from "react";
import { setOptions, importLibrary } from "@googlemaps/js-api-loader";
import Target, { Place } from "./Target";

export type Punto = Place & { position: google.maps.LatLngLiteral };

const puntos: Punto[] = [
  {
    id: "1",
    nombre: "Viaducto de Gualanday",
    description:
      "Es la carretera que conecta a Girardot con Ibagué, para no pasar por la carretera antigua donde se encuentra Gualanday. Este viaducto ha permitido conectar a los territorios pero ha dejado de lado a Gualanday y a lo que tiene para ofrecer.",
    imageUrl: "/viaducto.jpeg",
    position: { lat: 4.291650678078798, lng: -75.03432882140002 },
  },
  {
    id: "2",
    nombre: "Plazoleta principal de Gualanday",
    description:
      "Aquí encontrarás la iglesia de Gualanday, y principales locales comerciales de algunos habitantes del pueblo.",
    imageUrl: "/plazoleta.jpg",
    position: { lat: 4.284733623989195, lng: -75.0329783252922 },
  },
  {
    id: "3",
    nombre: "Hacienda Castilla Real",
    description:
      "Es una hacienda con más de 200 hectáreas que ofrece hospedaje y turismo a la vez. En el territorio de esta hacienda se encuentra el desierto y las cascadas de Gualanday. En este lugar se grabó parte de la serie de “Cien Años de Soledad” de Netflix como parte de la Ruta Macondo.",
    imageUrl: "/hacienda.jpg",
    position: { lat: 4.282082580113469, lng: -75.01435403286057 },
  },
  {
    id: "4",
    nombre: "Río Coello",
    description:
      "¡Refréscate en este espectacular río natural! Puedes planear igualmente el famoso paseo de olla para pasar un buen rato en familia y/o amigos.",
    imageUrl: "/rio.jpg",
    position: { lat: 4.281521170490781, lng: -75.03448761504414 },
  },
  {
    id: "5",
    nombre: "Desierto de Gualanday",
    description:
      "El Desierto de Gualanday es un área árida ubicada en la Hacienda Castilla Real. Se encuentra a unos 25 minutos de Ibagué. Este desierto es único por su proximidad a un nacedero de agua cristalina con cascada.",
    imageUrl: "/desierto.jpg",
    position: { lat: 4.280857880562128, lng: -75.02337825609354 },
  },
];

export default function Mapa() {
  const divRef = useRef<HTMLDivElement>(null);
  const [seleccionado, setSeleccionado] = useState<Punto | null>(null);

  useEffect(() => {
    let map: google.maps.Map | null = null;

    const init = async () => {
      if (!divRef.current) return;

      setOptions({ key: process.env.NEXT_PUBLIC_API_KEY! });
      const mapId = process.env.NEXT_PUBLIC_GMP_MAP_ID;

      const { Map } = (await importLibrary("maps")) as google.maps.MapsLibrary;
      const { AdvancedMarkerElement } = (await importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;

      map = new Map(divRef.current, {
        center: { lat: 4.28307, lng: -75.030759 },
        zoom: 13,
        mapId,
      });

      const bounds = new google.maps.LatLngBounds();

      puntos.forEach((p) => {
        const marker = new AdvancedMarkerElement({
          map,
          position: p.position,
          title: p.nombre,
        });

        bounds.extend(p.position);
        marker.addListener("click", () => setSeleccionado(p));
      });

      if (!bounds.isEmpty()) map.fitBounds(bounds);
    };

    init();
    return () => {
      map = null;
    };
  }, []);

  return (
    <>
      <div ref={divRef} style={{ width: "100%", height: 500 }} />
      <Target place={seleccionado} onClose={() => setSeleccionado(null)} />
    </>
  );
}
*/
"use client";

import { useEffect, useRef, useState } from "react";
import Target, { Place } from "./Target";
import "leaflet/dist/leaflet.css";

export type Punto = Place & { position: { lat: number; lng: number } };

const puntos: Punto[] = [
  {
    id: "1",
    nombre: "Viaducto de Gualanday",
    description:
      "Es la carretera que conecta a Girardot con Ibagué, para no pasar por la carretera antigua donde se encuentra Gualanday. Este viaducto ha permitido conectar a los territorios pero ha dejado de lado a Gualanday y a lo que tiene para ofrecer.",
    imageUrl: "/viaducto.jpeg",
    position: { lat: 4.286896, lng: -75.037565 },
  },
  {
    id: "2",
    nombre: "Plazoleta principal de Gualanday",
    description:
      "Aquí encontrarás la iglesia de Gualanday, y principales locales comerciales de algunos habitantes del pueblo.",
    imageUrl: "/plazoleta.jpg",
    position: { lat: 4.283577, lng: -75.031710 },
  },
  {
    id: "3",
    nombre: "Hacienda Castilla Real",
    description:
      "Es una hacienda con más de 200 hectáreas que ofrece hospedaje y turismo a la vez. En el territorio de esta hacienda se encuentra el desierto y las cascadas de Gualanday. En este lugar se grabó parte de la serie de “Cien Años de Soledad” de Netflix como parte de la Ruta Macondo.",
    imageUrl: "/hacienda.jpg",
    position: { lat: 4.282082580113469, lng: -75.01435403286057 },
  },
  {
    id: "4",
    nombre: "Río Coello",
    description:
      "¡Refréscate en este espectacular río natural! Puedes planear igualmente el famoso paseo de olla para pasar un buen rato en familia y/o amigos.",
    imageUrl: "/rio.jpg",
    position: { lat: 4.294328, lng: -75.034020 },
  },
  {
    id: "5",
    nombre: "Desierto de Gualanday",
    description:
      "El Desierto de Gualanday es un área árida ubicada en la Hacienda Castilla Real. Se encuentra a unos 25 minutos de Ibagué. Este desierto es único por su proximidad a un nacedero de agua cristalina con cascada.",
    imageUrl: "/desierto.jpg",
    position: { lat: 4.284287, lng: -75.011058 },
  },
];

const MAP_ID = "leaflet-map-container";

export default function Mapa() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const layerGroupRef = useRef<any>(null);

  const [seleccionado, setSeleccionado] = useState<Punto | null>(null);

  useEffect(() => {
    let isMounted = true;

    const init = async () => {
      if (!wrapperRef.current) return;

      // 1) Obtén (o crea) el DIV del mapa con un id estable
      let container = document.getElementById(MAP_ID) as HTMLElement | null;
      if (!container) {
        container = document.createElement("div");
        container.id = MAP_ID;
        container.style.width = "100%";
        container.style.height = "500px";
        wrapperRef.current.appendChild(container);
      }

      // 2) Si el DIV ya tiene un mapa de Leaflet, clónalo y reemplázalo (hard reset)
      if ((container as any)?._leaflet_id != null) {
        const fresh = container.cloneNode(false) as HTMLElement; // sin hijos ni props
        fresh.id = MAP_ID;
        fresh.style.width = "100%";
        fresh.style.height = "500px";
        container.parentNode?.replaceChild(fresh, container);
        container = fresh; // ahora tenemos un contenedor “limpio”
      }

      // 3) Si ya tenemos un mapa activo, no crees otro
      if (mapRef.current) return;

      const Lmod = await import("leaflet");
      const L = Lmod.default ?? Lmod;

      // 4) Crea el mapa sobre el contenedor limpio
      const map = L.map(container, { center: [4.28307, -75.030759], zoom: 13 });
      mapRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);

      const layerGroup = L.layerGroup().addTo(map);
      layerGroupRef.current = layerGroup;

      const bounds = L.latLngBounds([]);

      puntos.forEach((p) => {
        const marker = L.circleMarker([p.position.lat, p.position.lng], {
          radius: 8,
          weight: 2,
          opacity: 1,
          fillOpacity: 0.8,
        }).addTo(layerGroup);

        marker.bindTooltip(p.nombre);
        marker.on("click", () => {
          if (!isMounted) return;
          setSeleccionado(p);
          map.setView([p.position.lat, p.position.lng], Math.max(map.getZoom(), 14), { animate: true });
        });

        bounds.extend([p.position.lat, p.position.lng]);
      });

      if (bounds.isValid()) map.fitBounds(bounds.pad(0.2));
    };

    init();

    return () => {
      isMounted = false;

      // Limpieza TOTAL
      try {
        if (mapRef.current) {
          mapRef.current.remove();
          mapRef.current = null;
        }
      } catch {}

      // Reemplaza el contenedor por uno vacío para borrar cualquier rastro (_leaflet_id)
      const container = document.getElementById(MAP_ID);
      if (container && container.parentNode) {
        const fresh = container.cloneNode(false) as HTMLElement;
        fresh.id = MAP_ID;
        fresh.style.width = "100%";
        fresh.style.height = "500px";
        container.parentNode.replaceChild(fresh, container);
      }

      layerGroupRef.current = null;
    };
  }, []);

  return (
    <>
      <div ref={wrapperRef} /> {/* aquí se inyecta el div #leaflet-map-container */}
      <Target place={seleccionado} onClose={() => setSeleccionado(null)} />
    </>
  );
}
