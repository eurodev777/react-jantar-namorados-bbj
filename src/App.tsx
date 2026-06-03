import { useState, useRef, useEffect, ChangeEvent, FormEvent } from "react";
import { Heart, X, Check, Info, ArrowRight } from "lucide-react";
import video from "./assets/video.mp4";
import img from "./assets/jantar-namorados.png";
import piano from "./assets/piano.png";

/* ============================================================================
   HIGH-FIDELITY BOTANICAL ILLUSTRATIONS (OUTLINES MATCHING CANVA DESIGNS)
   ============================================================================ */

// Elegant rising gold floral stem for Slide 2 (Right margin)
const BotanicalRightVertical = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 150 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Stem */}
    <path
      d="M130 380 Q90 280, 100 150 T120 20"
      stroke="#fff"
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity="0.75"
    />

    {/* Branchlet 1 */}
    <path
      d="M102 260 Q60 220, 20 210"
      stroke="#fff"
      strokeWidth="1"
      strokeLinecap="round"
      opacity="0.65"
    />
    {/* Leaves on Branchlet 1 */}
    <path
      d="M20 210 C15 200, 25 190, 35 200 C30 208, 25 212, 20 210 Z"
      fill="#c79955"
      fillOpacity="0.1"
      stroke="#fff"
      strokeWidth="0.8"
    />
    <path
      d="M50 215 C45 200, 58 195, 65 210 Q58 218, 50 215 Z"
      fill="#c79955"
      fillOpacity="0.1"
      stroke="#fff"
      strokeWidth="0.8"
    />

    {/* Branchlet 2 */}
    <path
      d="M104 180 Q60 140, 35 90"
      stroke="#fff"
      strokeWidth="1"
      strokeLinecap="round"
      opacity="0.65"
    />
    {/* Leaves on Branchlet 2 */}
    <path
      d="M35 90 C25 85, 30 70, 42 78 C40 85, 38 89, 35 90 Z"
      fill="#c79955"
      fillOpacity="0.1"
      stroke="#fff"
      strokeWidth="0.8"
    />
    <path
      d="M65 125 C55 115, 68 100, 75 115 Z"
      fill="#c79955"
      fillOpacity="0.1"
      stroke="#fff"
      strokeWidth="0.8"
    />

    {/* Flowers / Bud elements along primary stem */}
    <circle
      cx="112"
      cy="110"
      r="4"
      stroke="#fff"
      strokeWidth="0.8"
      fill="#553720"
    />
    <path
      d="M112 106 Q116 95, 125 100 T112 114"
      stroke="#fff"
      strokeWidth="0.8"
      opacity="0.8"
    />

    <circle
      cx="98"
      cy="220"
      r="3"
      stroke="#fff"
      strokeWidth="0.8"
      fill="#553720"
    />
    <circle
      cx="106"
      cy="310"
      r="4.5"
      stroke="#fff"
      strokeWidth="0.8"
      fill="#553720"
    />

    {/* Delicate leaf groupings on top */}
    <path
      d="M120 20 C110 5, 130 0, 135 15 C130 22, 125 22, 120 20 Z"
      fill="#c79955"
      fillOpacity="0.15"
      stroke="#fff"
      strokeWidth="0.8"
    />
  </svg>
);

// Elegant horizontal gold foliage branch for Slide 3 (Bottom-left margin)
const BotanicalLeftBranch = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 350 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Main lateral stem */}
    <path
      d="M10 60 Q120 30, 320 50"
      stroke="#fff"
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity="0.75"
    />

    {/* Leaf upward 1 */}
    <path
      d="M80 48 Q95 20, 115 32 Q100 45, 80 48 Z"
      fill="#c79955"
      fillOpacity="0.1"
      stroke="#fff"
      strokeWidth="0.8"
    />

    {/* Leaf downward 1 */}
    <path
      d="M120 51 Q135 80, 155 70 Q140 55, 120 51 Z"
      fill="#c79955"
      fillOpacity="0.1"
      stroke="#fff"
      strokeWidth="0.8"
    />

    {/* Leaf upward 2 */}
    <path
      d="M190 44 Q210 10, 230 25 Q215 40, 190 44 Z"
      fill="#c79955"
      fillOpacity="0.1"
      stroke="#fff"
      strokeWidth="0.8"
    />

    {/* Leaf downward 2 */}
    <path
      d="M230 46 Q255 78, 275 65 Q255 50, 230 46 Z"
      fill="#c79955"
      fillOpacity="0.1"
      stroke="#fff"
      strokeWidth="0.8"
    />

    {/* Final leaf bud at tip */}
    <path
      d="M320 50 Q340 45, 345 53 Q330 62, 320 50 Z"
      fill="#c79955"
      fillOpacity="0.15"
      stroke="#fff"
      strokeWidth="0.8"
    />
  </svg>
);

// Diagonal botanical blossom for Slide 4 (Bottom-right corner)
const BotanicalCorner = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Bottom right stem stretching up-left */}
    <path
      d="M190 190 C150 150, 100 130, 20 110"
      stroke="#fff"
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity="0.7"
    />

    {/* Small flower bud 1 */}
    <circle
      cx="95"
      cy="122"
      r="5"
      stroke="#fff"
      strokeWidth="0.8"
      fill="#553720"
    />
    <path
      d="M91 118 Q80 110, 95 105 T101 126"
      stroke="#fff"
      strokeWidth="0.7"
    />

    {/* Small flower bud 2 */}
    <circle
      cx="150"
      cy="142"
      r="4"
      stroke="#fff"
      strokeWidth="0.8"
      fill="#553720"
    />

    {/* Elegant leaves */}
    <path
      d="M50 115 C40 100, 30 110, 20 110 C30 118, 42 122, 50 115 Z"
      fill="#c79955"
      fillOpacity="0.1"
      stroke="#fff"
      strokeWidth="0.8"
    />
    <path
      d="M120 130 C110 110, 95 115, 85 120 C100 132, 110 135, 120 130 Z"
      fill="#c79955"
      fillOpacity="0.1"
      stroke="#fff"
      strokeWidth="0.8"
    />
  </svg>
);

/* ============================================================================
   MAIN COMPONENT
   ============================================================================ */

export default function App() {
  const openReserveModal = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=5511985540692&text=Ol%C3%A1!%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div
      id="landing-page-root"
      className="min-h-screen bg-[#553720] flex flex-col selection:bg-[#c79955] selection:text-white relative"
    >
      {/* =========================================
          LÂMINA 1: HOME / HERO SECTION
          ========================================= */}
      <section
        id="lamina-1"
        className="relative min-h-screen md:h-screen text-center flex flex-col md:flex-row overflow-hidden border-b border-[#3b241b]"
      >
        {/* Left Side: Campaign Intro (Rich deep dark backdrop to isolate campaign beautifully) */}
        <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-full bg-[#000] px-6 py-12 md:p-16 lg:p-24 flex flex-col justify-between items-center relative z-10">
          {/* Top Date Header */}
          <div className="text-center md:text-left mt-4 md:mt-0">
            <span className="text-[#fff] text-xs md:text-sm tracking-[0.35em] font-medium uppercase block">
              12 de Junho
            </span>
          </div>

          {/* Main Titles Area */}
          <div className="my-auto py-10 md:py-0 flex flex-col items-center text-center md:text-left">
            {/* Elegant Signature Logo 'jantar namorados' with Attached Outline Gold Heart */}
            <img src={img} className="w-full" />

            {/* Luxurious Quote parsed line-by-line exactly matching image typography */}
            <div className="text-lg md:text-2xl mt-8 text-white tracking-[0.18em] leading-relaxed uppercase mb-12 max-w-md font-light">
              <div>O melhor presente</div>
              <div>é viver momentos</div>
              <div className="text-[#c79955] font-semibold">JUNTOS.</div>
            </div>

            {/* CTA Button is a flat, solid white rounded pill with dark text matching Canva template */}
            <button
              onClick={openReserveModal}
              className="bg-white text-[#5f4329] hover:bg-[#c79955] hover:text-white rounded-full py-2 px-6 text-xs md:text-2xl tracking-[0.22em] font-bold uppercase shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-300 transform hover:scale-[1.03] active:scale-97 cursor-pointer"
            >
              GARANTA SUA RESERVA
            </button>
          </div>

          {/* Location Hint footer at base of column */}
          <div className="text-center md:text-left text-[#7c6659] text-[11px] tracking-[0.15em] uppercase mt-4">
            Baby Beef Jardim • Santo André - SP
          </div>
        </div>

        {/* Right Side: Custom Romantic Video Player (Taking exactly 50% width on Desktop as requested) */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-full relative bg-black group overflow-hidden">
          <video
            src={video}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            controls
          />
        </div>
      </section>

      {/* =========================================
          LÂMINA 2: APRESENTAÇÃO / INVITATION
          ========================================= */}
      <section
        id="lamina-2"
        className="relative dm-serif bg-[#553720] py-20 px-6 md:py-28 md:px-16 flex flex-col items-center justify-center text-center overflow-hidden border-b border-[#3b241b]"
      >
        {/* Subtle, beautiful gold flower branch rising at right margin */}
        <BotanicalRightVertical className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-full opacity-35 max-w-[20%] pointer-events-none hidden lg:block" />

        {/* Main invitation card content */}
        <div className="max-w-5xl mx-auto flex flex-col items-center relative z-10">
          {/* Elegant Subtitle in golden cursive / serif structure */}
          <h3 className="italic dm-serif font-bold text-xl md:text-3xl text-[#fdfbf7] leading-relaxed mb-12 max-w-2xl">
            Uma noite para celebrar o amor no Baby Beef Jardim
          </h3>

          {/* Prose description blocks precisely aligned with Canva copies */}
          <div className="dm-serif space-y-8 text-xl md:text-2xl text-[#fefdfb]/90 font-semibold leading-relaxed tracking-wide text-center">
            <p>
              O Dia dos Namorados é uma data especial, feita para celebrar os
              sentimentos mais profundos, os gestos de carinho e as histórias
              que unem dois corações. Pensando nisso, o{" "}
              <strong className="text-[#c79955] font-medium">
                Baby Beef Jardim
              </strong>{" "}
              preparou uma noite inesquecível para os casais que desejam
              transformar esse momento em uma verdadeira experiência sensorial.
            </p>

            <p>
              No dia 12 de junho, o restaurante abre suas portas para uma
              celebração à altura do amor: uma noite de sabores marcantes,
              ambiente sofisticado e experiências pensadas com todo o cuidado
              que essa data merece.
            </p>

            <p>
              Cada detalhe foi cuidadosamente planejado para tornar a sua noite
              ainda mais especial. Dos ingredientes selecionados à apresentação
              dos pratos, da trilha sonora ao clima intimista de cada espaço. O
              Baby Beef Jardim será o cenário ideal para celebrar o amor com
              intensidade, sabor e sofisticação.
            </p>
          </div>

          {/* CTA Button in Slide 2 */}
          <div className="mt-14">
            <button
              onClick={openReserveModal}
              className="bg-white text-[#5f4329] hover:bg-[#c79955] hover:text-white rounded-full py-2 px-6 text-xs md:text-2xl tracking-[0.22em] font-bold uppercase shadow-lg transition-all duration-300 transform hover:scale-[1.03] active:scale-97 cursor-pointer"
            >
              GARANTA SUA RESERVA
            </button>
          </div>
        </div>
      </section>

      {/* =========================================
          LÂMINA 3: ATRAÇÕES / EXCLUSIVE ATTRACTIONS
          ========================================= */}
      <section
        id="lamina-3"
        className="relative bg-[#553720] py-20 px-6 md:py-28 md:px-16 lg:px-24 overflow-hidden border-b border-[#3b241b]"
      >
        {/* Decorative horizontal gold flower stem at the bottom-left edge */}
        <BotanicalLeftBranch className="absolute left-4 bottom-4 w-60 h-28 opacity-35 pointer-events-none hidden md:block" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-4xl text-[#fdfbf7] tracking-wider font-bold">
              Conheça nossas atividades exclusivas.
            </h3>
          </div>

          {/* Double Columns Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-6 items-center">
            {/* Left Column: Intimate dining image styled in a double border luxury frame */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full">
                {/* Double frame design - Outermost thin gold line rectangle */}
                <div className="relative p-2.5">
                  <div className="absolute inset-0 border border-[#c79955] rounded-2xl opacity-80"></div>

                  {/* Rounded image frame */}
                  <img
                    src={piano}
                    alt="Interior sofisticado do Baby Beef Jardim"
                    className="w-full object-cover rounded-xl shadow-xl relative z-10 block"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Descriptions list exact to the image text layout */}
            <div className="lg:col-span-6 space-y-3 text-left">
              {/* Feature 1 */}
              <div>
                <h4 className="text-xl md:text-3xl text-[#fff] font-semibold tracking-wide mb-2">
                  Música ao piano
                </h4>
                <p className="text-lg md:text-2xl text-[#fdfbf7]/90 leading-relaxed font-light">
                  Uma trilha sonora envolvente para acompanhar cada instante do
                  jantar, tornando a experiência ainda mais romântica e
                  sofisticada.
                </p>
              </div>

              {/* Feature 2 */}
              <div>
                <h4 className="text-xl md:text-3xl text-[#fff] font-semibold tracking-wide mb-2">
                  Decoração especial
                </h4>
                <p className="text-lg md:text-2xl text-[#fdfbf7]/90 leading-relaxed font-light">
                  Um ambiente cuidadosamente preparado para celebrar o amor com
                  elegância, charme e beleza em cada detalhe.
                </p>
              </div>

              {/* Feature 3 */}
              <div>
                <h4 className="text-xl md:text-3xl text-[#fff] font-semibold tracking-wide mb-2">
                  Ponto instagramável
                </h4>
                <p className="text-lg md:text-2xl text-[#fdfbf7]/90 leading-relaxed font-light">
                  Um espaço exclusivo para registrar esse momento especial e
                  levar para casa uma lembrança à altura da ocasião.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button in Slide 3 */}
          <div className="mt-16 text-center">
            <button
              onClick={openReserveModal}
              className="bg-white text-[#5f4329] hover:bg-[#c79955] hover:text-white rounded-full py-2 px-6 text-xs md:text-xl tracking-[0.22em] font-bold uppercase shadow-lg transition-all duration-300 transform hover:scale-[1.03] active:scale-97 cursor-pointer"
            >
              GARANTA SUA RESERVA
            </button>
          </div>
        </div>
      </section>

      {/* =========================================
          LÂMINA 4: INFORMAÇÕES & RESERVAS (RSVP)
          ========================================= */}
      <section
        id="lamina-4"
        className="relative bg-[#553720] py-20 px-6 md:py-28 md:px-16 overflow-hidden"
      >
        {/* Subtle decorative flower branches around Slide 4 edges */}
        <BotanicalCorner className="absolute right-2 bottom-20 w-32 h-32 opacity-35 pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
          {/* Logo Heading and Tagline line matching Canva layout */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 border-b border-[#5e4337] pb-12 mb-12">
            {/* Left Box: Logo Signature */}
            <div className="flex-none flex flex-col items-center md:items-start select-none">
              <div className="flex items-end relative">
                <span className="font-script text-[90px] md:text-[110px] text-[#c79955] leading-[0.55] select-none block tracking-normal">
                  jantar
                </span>
                <svg
                  className="w-10 h-10 md:w-11 md:h-11 text-[#c79955] fill-none stroke-current stroke-[1.2] block -ml-3 mb-1 origin-bottom rotate-12"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <span className="text-[24px] md:text-[28px] text-[#c79955] leading-none tracking-[0.25em] -mt-1 block lowercase font-light">
                namorados
              </span>
            </div>

            {/* Right Box: Bold slogan */}
            <div className="flex-1 text-center md:text-right max-w-md">
              <h3 className="text-xl md:text-2xl text-white font-medium leading-relaxed tracking-wider">
                A NOITE MAIS ROMÂNTICA DO ANO{" "}
                <span className="text-[#c79955] font-semibold block mt-1">
                  COMEÇA AQUI.
                </span>
              </h3>
            </div>
          </div>

          {/* Details wrapper parsed nicely without block cards for exact Canva visual */}
          <div className="w-full max-w-4xl text-center mb-12 space-y-8">
            <h4 className="text-xl md:text-2xl text-[#c79955] tracking-wider uppercase font-medium">
              Informações e Reservas:
            </h4>

            {/* Combined phone numbers written continuously using dividers */}
            <div className="text-[#fdfbf7] text-base md:text-xl lg:text-2xl tracking-wide max-w-3xl mx-auto leading-relaxed font-light">
              <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
                <a
                  href="tel:1144367869"
                  className="hover:text-[#c79955] transition whitespace-nowrap"
                >
                  (11) 4436-7869
                </a>
                <span className="text-[#c79955] select-none text-sm hidden sm:inline">
                  |
                </span>
                <a
                  href="https://wa.me/5511985540692"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c79955] transition whitespace-nowrap"
                >
                  (11) 98554-0692
                </a>
                <span className="text-[#c79955] select-none text-sm hidden sm:inline">
                  |
                </span>
                <a
                  href="https://wa.me/5511940816109"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c79955] transition whitespace-nowrap"
                >
                  (11) 94081-6109
                </a>
              </div>
            </div>

            {/* Detailed Address Text below */}
            <p className="text-sm md:text-base text-[#fdfbf7]/90 tracking-wide pt-4 max-w-2xl mx-auto leading-relaxed">
              Baby Beef Jardim – Rua das Bandeiras, 166, Santo André – SP.
            </p>
          </div>

          {/* CTA Button in Slide 4 */}
          <div className="mb-20">
            <button
              onClick={openReserveModal}
              className="bg-white text-[#553720] hover:bg-[#c79955] hover:text-white rounded-full py-4 px-10 text-xs md:text-sm tracking-[0.22em] font-bold uppercase shadow-lg transition-all duration-300 transform hover:scale-[1.03] active:scale-97 cursor-pointer"
            >
              GARANTA SUA RESERVA
            </button>
          </div>
        </div>

        {/* Flat black bar exactly matching footer layout of Canva site */}
        <div className="absolute bottom-0 inset-x-0 bg-black py-4 px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] md:text-[11px] text-[#8a7266] select-none w-full border-t border-[#5f4329]">
          <div className="flex items-center gap-2 tracking-wider">
            <a href="#" className="hover:text-white transition">
              Condições e suporte
            </a>
            <span className="text-[#554137] select-none">|</span>
            <a href="#" className="hover:text-white transition">
              Política de Privacidade
            </a>
          </div>
          <div className="tracking-widest uppercase">Criado com o Canva</div>
        </div>
      </section>
    </div>
  );
}
