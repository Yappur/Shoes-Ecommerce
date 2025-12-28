"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function Home() {
  const heroRef = useRef(null);
  const shoeContainerRef = useRef(null);
  const shoeRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // ❗ Inicial: usamos left/top + xPercent/yPercent para centrar
    gsap.set(shoeRef.current, {
      scale: 1.5,
      rotation: -15,
      left: "50%",
      top: "50%",
      xPercent: -50,
      yPercent: -50,
    });

    // PIN: fijamos el CONTENEDOR (no debe ser fixed)
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      endTrigger: section3Ref.current,
      end: "bottom bottom",
      pin: shoeContainerRef.current,
      pinSpacing: false,
      id: "pin-container",
    });

    // Timeline con animaciones en left/top (más predecible)
    const shoeTl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        endTrigger: section3Ref.current,
        end: "bottom bottom",
        scrub: 1,
        id: "shoe-animation",
      },
    });

    shoeTl
      // Hero -> Sección1 (mueve a la derecha y baja)
      .to(shoeRef.current, {
        scale: 0.8,
        rotation: 0,
        left: "75%", // mueve el left a 75% del contenedor
        top: "65%", // baja al 65%
        duration: 1,
        ease: "power2.inOut",
      })
      // Sección1 -> Sección2 (izquierda y baja más)
      .to(shoeRef.current, {
        left: "25%",
        top: "90%",
        rotation: 5,
        duration: 1,
        ease: "power2.inOut",
      })
      // Sección2 -> Sección3 (centro y baja)
      .to(shoeRef.current, {
        left: "50%",
        top: "120%",
        rotation: 0,
        scale: 0.7,
        duration: 1,
        ease: "power2.inOut",
      });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <main className="overflow-x-hidden">
      {/* SECCIÓN HERO */}
      <section
        ref={heroRef}
        className="relative w-full h-screen overflow-hidden"
      >
        {/* Título - AHORA DETRÁS DE LA ZAPATILLA */}
        <div className="relative z-10 text-center flex items-center justify-center h-full">
          <h1 className="text-4xl md:text-6xl lg:text-9xl xl:text-[24rem] font-bold text-white">
            Nova <br /> Shoes
          </h1>
        </div>

        {/* CONTENEDOR FIJO - ahora ABSOLUTE dentro del hero */}
        <div
          ref={shoeContainerRef}
          className="absolute z-20 inset-0 pointer-events-none"
        >
          {/* ZAPATILLA - GSAP gestiona left/top/transform */}
          <div
            ref={shoeRef}
            className="absolute w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]"
            style={{ willChange: "transform, left, top" }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src="/ShoeHero.webp"
                alt="Nova Shoe"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 1 - DERECHA */}
      <section
        ref={section1Ref}
        className="relative h-screen flex items-center justify-center bg-blue-50"
      >
        <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg z-10">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Sección 1: Estilo
          </h2>
          <p className="text-lg text-gray-600">
            La zapatilla se alinea, se hace más pequeña y se mueve hacia la
            DERECHA →
          </p>
          <div className="mt-4 text-sm text-gray-500 space-y-1">
            <p>✨ Scale: 1.5 → 0.8</p>
            <p>🔄 Rotation: -15° → 0°</p>
            <p>➡️ Position: Derecha (75%)</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 - IZQUIERDA */}
      <section
        ref={section2Ref}
        className="relative h-screen flex items-center justify-center bg-green-50"
      >
        <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg z-10">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Sección 2: Comodidad
          </h2>
          <p className="text-lg text-gray-600">
            La zapatilla hace zigzag y se mueve hacia la IZQUIERDA ←
          </p>
          <div className="mt-4 text-sm text-gray-500 space-y-1">
            <p>🔄 Rotation: 0° → 5°</p>
            <p>⬅️ Position: Izquierda (25%)</p>
            <p>⬇️ Baja más (90%)</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 - CENTRO */}
      <section
        ref={section3Ref}
        className="relative h-screen flex items-center justify-center bg-purple-50"
      >
        <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg z-10">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Sección 3: Durabilidad
          </h2>
          <p className="text-lg text-gray-600">
            La zapatilla vuelve al CENTRO y se alinea perfectamente.
          </p>
          <div className="mt-4 text-sm text-gray-500 space-y-1">
            <p>✨ Scale: 0.8 → 0.7</p>
            <p>🔄 Rotation: 5° → 0°</p>
            <p>⬆️ Position: Centro (50%)</p>
            <p>⬇️ Posición final (120%)</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN FINAL */}
      <section className="relative h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Final</h2>
          <p className="text-lg text-gray-600">
            La zapatilla se ha despegado y el scroll continúa normalmente.
          </p>
        </div>
      </section>
    </main>
  );
}
