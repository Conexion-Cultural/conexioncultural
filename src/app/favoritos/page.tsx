import React from "react";
import s from "@/styles/Card.module.css";
import Image from "next/image";
import Link from "next/link";

//datos quemados de favoritos
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
    details:
      `Las Fiestas del Retorno en Gualanday se celebran generalmente entre principios de enero. Estas celebran la reunificación del pueblo y su cultura: desfile, cabalgata, música y tradición en Gualanday.`,
    imageUrl: "/fiestas.jpg",
  },
  {
    id: 3,
    title: "Lugares",
    description: "Lugares del pueblo",
    details:
      `Laguna: Mientras caminas en La Hacienda Castilla Real, te encontrarás esta hermosa laguna que tiene flores naturales debido al clima húmedo de la zona, algo definitivamente fuera de lo común,  

 la iglesia: Visita la iglesia de Nuestra Señora del Carmen, en el corazón de Gualanday: patrimonio religioso y punto de encuentro comunitario,

 el cerro: Sube al Cerro El Fraile para ver Gualanday desde las alturas: paisaje, aire puro y un reto de caminata que vale la pena. También podrás escuchar la fauna local como los monos aulladores y

 el ferrocarril: Recorre la historia en la antigua estación del ferrocarril de Gualanday: testigo del pasado industrial y presente cultural del corregimiento.`,
    imageUrl: "/cerro.jpg",
  },
];

export default function Favoritos() {
  return (
    <div>
      <h1 className={s.pageTitle}>Favoritos</h1>
      <section className={s.list}>
        {favoritosData.map((favorito) => (
          <Link
            key={favorito.id}
            href={`/favoritos/${favorito.id}`}
            aria-label={`Ver detalle de ${favorito.title}`}
          >
            <article className={s.card}>
              <Image
                className={s.media}
                src={favorito.imageUrl}
                alt={favorito.title}
                width={800}
                height={500}
                priority={false}
              />
              <div className={s.body}>
                <h2 className={s.title}>{favorito.title}</h2>
                <p className={s.short}>{favorito.description}</p>
              </div>
              {/*
                <h2>{favorito.title}</h2>
                <img src={favorito.imageUrl} alt={favorito.title} width={300} />
                <p>{favorito.description}</p>
                */}
            </article>
          </Link>
        ))}
      </section>
    </div>
  );
}
