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

const todasImagens = [
  pyladies1,
  pyladies2,
  pyladies3,
  pyladies4,
  pyladies5,
  pyladies6,
  pyladies7,
  pyladies8,
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
    <div className="w-full max-w-[530px] flex flex-col gap-6 items-end h-full">
    <div className="flex flex-col gap-6 flex-grow overflow-hidden">
      {imagensExibidas.map((src, index) => (
        <div
          key={index}
          className="w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 animate-fade"
          style={{ height: '350px' }} // ajuste a altura das imagens aqui
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

    <button
      onClick={adicionarImagem}
      className="w-[150px] px-4 py-2 bg-[#dd8b20] text-white rounded-full shadow hover:bg-[#c5771a] transition"
    >
      Mais Fotos
    </button>
  </div>
);
}
