import React from "react";
import s from "@/styles/Card.module.css";
import Image from "next/image";
import Link from "next/link";

import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

const favoritosData = [
  {
    id: 1,
    title: "Comida",
    description: "Comida típica del pueblo",
    details: `Lechona: La lechona tolimense: símbolo del sabor y la celebración en la región. Acompañada de arepa y cuero crocante, perfecta en días de fiesta, 
            el tamal: Un tamal tolimense caliente al amanecer: tradición, sabor y raíces para comenzar el día en Gualanday,
            el sancocho: El sancocho puedes disfrutarlo en varios lugares de Gualanday o puedes hacer el famoso paseo de olla y prepararlo para disfrutarlo con tus acompañantes y
            los mangos: por qué no disfrutar de la fruta típica de Gualanday: El delicioso mango. Puedes disfrutarlo de muchas formas y su sabor es distintivo del resto.`,
    imageUrl: "/comida.jpeg",
  },
  {
    id: 2,
    title: "Ferias y festivales",
    description: "Eventos culturales del pueblo",
    details: `Las Fiestas del Retorno en Gualanday se celebran generalmente entre principios de enero. Estas celebran la reunificación del pueblo y su cultura: desfile, cabalgata, música y tradición en Gualanday.`,
    imageUrl: "/fiestas.jpg",
  },
  {
    id: 3,
    title: "Lugares",
    description: "Lugares del pueblo",
    details: `Laguna: Mientras caminas en La Hacienda Castilla Real, te encontrarás esta hermosa laguna que tiene flores naturales debido al clima húmedo de la zona, algo definitivamente fuera de lo común,  
          la iglesia: Visita la iglesia de Nuestra Señora del Carmen, en el corazón de Gualanday: patrimonio religioso y punto de encuentro comunitario,
          el cerro: Sube al Cerro El Fraile para ver Gualanday desde las alturas: paisaje, aire puro y un reto de caminata que vale la pena. También podrás escuchar la fauna local como los monos aulladores y
          el ferrocarril: Recorre la historia en la antigua estación del ferrocarril de Gualanday: testigo del pasado industrial y presente cultural del corregimiento.`,
    imageUrl: "/cerro.jpg",
  },
];

export default async function FavoritoPage({ params }: PageProps) {
  const { id } = await params;
  const idNumber = Number(id);

  if (!Number.isFinite(idNumber)) notFound();

  const favorito = favoritosData.find((f) => f.id === idNumber);
  if (!favorito) notFound();

  return (
    <div className={s.center}>
      <div
        className={s.cardWrapper}
        style={
          {
            "--backgroundImage": `url(${favorito.imageUrl})`,
          } as React.CSSProperties
        }
      >
        <article className={s.card}>
          <Image
            className={s.media}
            src={favorito.imageUrl}
            alt={favorito.title}
            height={350}
            width={300}
          />
          <div className={s.body}>
            <h1 className={s.title}>{favorito.title}</h1>
            <p className={s.short}>{favorito.description}</p>
            <p className={s.long}>{favorito.details}</p>
          </div>
        </article>
      </div>
    </div>
  );
}
