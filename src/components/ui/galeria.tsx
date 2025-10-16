import React, { useState } from "react";

// Importa imagens do src/assets
import pyladies1 from "../../assets/pyladies.jpg";
import pyladies2 from "../../assets/pyladies2.jpg";
import pyladies3 from "../../assets/pyladies3.jpg";
import pyladies4 from "../../assets/pyladies4.jpg";
import pyladies5 from "../../assets/pyladies5.jpg";
import pyladies6 from "../../assets/pyladies6.jpg";
import pyladies7 from "../../assets/pyladies7.jpg";
import pyladies8 from "../../assets/pyladies8.jpg";
import pyladies9 from "../../assets/pyladies9.jpg";

const todasImagens = [
  pyladies1,
  pyladies2,
  pyladies3,
  pyladies4,
  pyladies5,
  pyladies6,
  pyladies7,
  pyladies8,
  pyladies9
];

const NUM_FOTOS_EXIBIDAS = 4;

export function Galeria() {
  // Estado com índice do primeiro elemento no array circular
  const [inicio, setInicio] = useState(0);

  // Calcula as 3 imagens atuais (3 em sequência, "rolando" no array circular)
  const imagensExibidas = [];

  for (let i = 0; i < NUM_FOTOS_EXIBIDAS; i++) {
    // Usa módulo para voltar ao início quando chegar no fim
    imagensExibidas.push(todasImagens[(inicio + i) % todasImagens.length]);
  }

  const adicionarImagem = () => {
    // Avança o índice para "rodar" o carrossel das imagens
    setInicio((prev) => (prev + 1) % todasImagens.length);
  };

  return (
    <div className="relative w-full max-w-full md:max-w-[530px] flex flex-col gap-6 items-center md:items-end min-h-[500px] px-4 py-6 bg-black rounded-lg border-4 border-[#444] overflow-hidden">

      {/* Moldura esquerda */}
      <div className="absolute top-0 bottom-0 left-0 w-4 bg-[#222] flex flex-col justify-evenly items-center z-10">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-3 h-5 bg-[#999] rounded-sm" />
        ))}
      </div>

      {/* Moldura direita */}
      <div className="absolute top-0 bottom-0 right-0 w-4 bg-[#222] flex flex-col justify-evenly items-center z-10">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-3 h-5 bg-[#999] rounded-sm" />
        ))}
      </div>

      {/* Imagens da galeria */}
      <div className="flex flex-col gap-6 flex-grow overflow-hidden relative z-0">
        {imagensExibidas.map((src, index) => (
          <div
            key={index}
            className="w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 animate-fade aspect-[16/9]"
          >
            <img
              src={src}
              alt={`Pyladies ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Botão */}
      <button
        onClick={adicionarImagem}
        className="w-full sm:max-w-[200px] mt-4 px-4 py-2 bg-[#dd8b20] text-white rounded-full shadow hover:bg-[#c5771a] transition"
      >
        Mais Fotos
      </button>
    </div>
  );
}
