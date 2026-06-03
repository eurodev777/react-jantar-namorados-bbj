import { useState, useRef, useEffect, ChangeEvent, FormEvent } from 'react';
import { 
  Heart, 
  MapPin, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  X, 
  Check, 
  Info,
  ArrowRight
} from 'lucide-react';

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
      stroke="#dda86a"
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity="0.75"
    />
    
    {/* Branchlet 1 */}
    <path
      d="M102 260 Q60 220, 20 210"
      stroke="#dda86a"
      strokeWidth="1"
      strokeLinecap="round"
      opacity="0.65"
    />
    {/* Leaves on Branchlet 1 */}
    <path d="M20 210 C15 200, 25 190, 35 200 C30 208, 25 212, 20 210 Z" fill="#dda86a" fillOpacity="0.1" stroke="#dda86a" strokeWidth="0.8" />
    <path d="M50 215 C45 200, 58 195, 65 210 Q58 218, 50 215 Z" fill="#dda86a" fillOpacity="0.1" stroke="#dda86a" strokeWidth="0.8" />
    
    {/* Branchlet 2 */}
    <path
      d="M104 180 Q60 140, 35 90"
      stroke="#dda86a"
      strokeWidth="1"
      strokeLinecap="round"
      opacity="0.65"
    />
    {/* Leaves on Branchlet 2 */}
    <path d="M35 90 C25 85, 30 70, 42 78 C40 85, 38 89, 35 90 Z" fill="#dda86a" fillOpacity="0.1" stroke="#dda86a" strokeWidth="0.8" />
    <path d="M65 125 C55 115, 68 100, 75 115 Z" fill="#dda86a" fillOpacity="0.1" stroke="#dda86a" strokeWidth="0.8" />

    {/* Flowers / Bud elements along primary stem */}
    <circle cx="112" cy="110" r="4" stroke="#dda86a" strokeWidth="0.8" fill="#4a3126" />
    <path d="M112 106 Q116 95, 125 100 T112 114" stroke="#dda86a" strokeWidth="0.8" opacity="0.8" />
    
    <circle cx="98" cy="220" r="3" stroke="#dda86a" strokeWidth="0.8" fill="#4a3126" />
    <circle cx="106" cy="310" r="4.5" stroke="#dda86a" strokeWidth="0.8" fill="#4a3126" />

    {/* Delicate leaf groupings on top */}
    <path d="M120 20 C110 5, 130 0, 135 15 C130 22, 125 22, 120 20 Z" fill="#dda86a" fillOpacity="0.15" stroke="#dda86a" strokeWidth="0.8" />
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
      stroke="#dda86a"
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity="0.75"
    />
    
    {/* Leaf upward 1 */}
    <path d="M80 48 Q95 20, 115 32 Q100 45, 80 48 Z" fill="#dda86a" fillOpacity="0.1" stroke="#dda86a" strokeWidth="0.8" />
    
    {/* Leaf downward 1 */}
    <path d="M120 51 Q135 80, 155 70 Q140 55, 120 51 Z" fill="#dda86a" fillOpacity="0.1" stroke="#dda86a" strokeWidth="0.8" />
    
    {/* Leaf upward 2 */}
    <path d="M190 44 Q210 10, 230 25 Q215 40, 190 44 Z" fill="#dda86a" fillOpacity="0.1" stroke="#dda86a" strokeWidth="0.8" />

    {/* Leaf downward 2 */}
    <path d="M230 46 Q255 78, 275 65 Q255 50, 230 46 Z" fill="#dda86a" fillOpacity="0.1" stroke="#dda86a" strokeWidth="0.8" />

    {/* Final leaf bud at tip */}
    <path d="M320 50 Q340 45, 345 53 Q330 62, 320 50 Z" fill="#dda86a" fillOpacity="0.15" stroke="#dda86a" strokeWidth="0.8" />
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
      stroke="#dda86a"
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity="0.7"
    />
    
    {/* Small flower bud 1 */}
    <circle cx="95" cy="122" r="5" stroke="#dda86a" strokeWidth="0.8" fill="#4a3126" />
    <path d="M91 118 Q80 110, 95 105 T101 126" stroke="#dda86a" strokeWidth="0.7" />

    {/* Small flower bud 2 */}
    <circle cx="150" cy="142" r="4" stroke="#dda86a" strokeWidth="0.8" fill="#4a3126" />

    {/* Elegant leaves */}
    <path d="M50 115 C40 100, 30 110, 20 110 C30 118, 42 122, 50 115 Z" fill="#dda86a" fillOpacity="0.1" stroke="#dda86a" strokeWidth="0.8" />
    <path d="M120 130 C110 110, 95 115, 85 120 C100 132, 110 135, 120 130 Z" fill="#dda86a" fillOpacity="0.1" stroke="#dda86a" strokeWidth="0.8" />
  </svg>
);


/* ============================================================================
   MAIN COMPONENT
   ============================================================================ */

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [coupleName, setCoupleName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [time, setTime] = useState('19:30');
  const [seating, setSeating] = useState('Salão Piano Bar 🎹');
  const [dietary, setDietary] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Custom Video Player states
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(10); // default fallback

  // Handle Play/Pause
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          setIsPlaying(false);
        });
      }
    }
  };

  // Handle Mute/Unmute
  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Update Progress
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  // Set Duration
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  // Seek position
  const handleProgressChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = value;
      setCurrentTime(value);
    }
  };

  // Active playing check on start
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false); // browser blocked autoplay
      });
    }
  }, []);

  const openReserveModal = () => {
    setIsModalOpen(true);
    setIsSuccess(false);
    setIsSubmitting(false);
  };

  const closeReserveModal = () => {
    setIsModalOpen(false);
  };

  const handleReservationSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!coupleName || !whatsapp) return;

    setIsSubmitting(true);
    // Mimic API post transition
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  // Get pre-filled Whatsapp text URL link
  const getWhatsAppLink = () => {
    const defaultPhone = '5511985540692'; // Using second mobile phone from list
    const msg = `Olá Baby Beef Jardim! Gostaria de confirmar nossa reserva premium para o Jantar dos Namorados de 12 de Junho de 2026.\n\n*Detalhes da Reserva:*\n- *Casal:* ${coupleName}\n- *WhatsApp:* ${whatsapp}\n- *Horário desejado:* ${time}\n- *Ambiente preferencial:* ${seating}\n${dietary ? `- *Observações:* ${dietary}\n` : ''}\nFavor confirmar nossa mesa especial! ❤️`;
    return `https://wa.me/${defaultPhone}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div id="landing-page-root" class="min-h-screen bg-[#4a3126] flex flex-col selection:bg-[#dda86a] selection:text-white relative">
      
      {/* =========================================
          LÂMINA 1: HOME / HERO SECTION
          ========================================= */}
      <section id="lamina-1" class="relative min-h-screen md:h-screen flex flex-col md:flex-row overflow-hidden border-b border-[#3b241b]">
        
        {/* Left Side: Campaign Intro (Rich deep dark backdrop to isolate campaign beautifully) */}
        <div class="w-full md:w-1/2 min-h-[50vh] md:min-h-full bg-[#120905] px-6 py-12 md:p-16 lg:p-24 flex flex-col justify-between relative z-10">
          
          {/* Top Date Header */}
          <div class="text-center md:text-left mt-4 md:mt-0">
            <span class="text-[#dda86a] font-sans-lux text-xs md:text-sm tracking-[0.35em] font-medium uppercase block">
              12 de Junho
            </span>
          </div>

          {/* Main Titles Area */}
          <div class="my-auto py-10 md:py-0 flex flex-col items-center md:items-start text-center md:text-left">
            
            {/* Elegant Signature Logo 'jantar namorados' with Attached Outline Gold Heart */}
            <div class="relative flex flex-col items-center md:items-start select-none mb-10">
              <div class="flex items-end relative">
                <span class="font-script text-[95px] md:text-[120px] text-[#dda86a] leading-[0.55] select-none block tracking-normal">
                  jantar
                </span>
                {/* Elegant Gold Outline Heart attached to the 'r' like in the original Canva logo */}
                <svg className="w-10 h-10 md:w-12 md:h-12 text-[#dda86a] fill-none stroke-current stroke-[1.2] block -ml-3 mb-1.5 origin-bottom rotate-12" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <span class="font-serif-lux text-[26px] md:text-[34px] text-[#dda86a] leading-none tracking-[0.25em] -mt-1 block lowercase font-light">
                namorados
              </span>
            </div>

            {/* Luxurious Quote parsed line-by-line exactly matching image typography */}
            <div class="font-serif-lux text-lg md:text-2xl text-white tracking-[0.18em] leading-relaxed uppercase mb-12 max-w-md font-light">
              <div>O melhor presente</div>
              <div>é viver momentos</div>
              <div class="text-[#dda86a] font-semibold">JUNTOS.</div>
            </div>

            {/* CTA Button is a flat, solid white rounded pill with dark text matching Canva template */}
            <button 
              onClick={openReserveModal}
              class="bg-white text-[#120905] hover:bg-[#dda86a] hover:text-white rounded-full py-4 px-10 text-xs md:text-sm font-sans-lux tracking-[0.22em] font-bold uppercase shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-300 transform hover:scale-[1.03] active:scale-97 cursor-pointer"
            >
              GARANTA SUA RESERVA
            </button>
          </div>

          {/* Location Hint footer at base of column */}
          <div class="text-center md:text-left text-[#7c6659] text-[11px] font-sans-lux tracking-[0.15em] uppercase mt-4">
            Baby Beef Jardim • Santo André - SP
          </div>
        </div>

        {/* Right Side: Custom Romantic Video Player (Taking exactly 50% width on Desktop as requested) */}
        <div class="w-full md:w-1/2 h-[50vh] md:h-full relative bg-black group overflow-hidden">
          
          <video
            ref={videoRef}
            src="https://assets.mixkit.co/videos/preview/mixkit-romantic-couple-by-candlelight-having-dinner-40139-large.mp4"
            className="w-full h-full object-cover"
            loop
            muted={isMuted}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            playsInline
          />

          {/* Symmetrical darkened aesthetic overlay gradients */}
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Floating handmade brush-script text in the center, exact as in sample */}
          <div class="absolute inset-x-0 top-[40%] -translate-y-1/2 flex flex-col items-center justify-center pointer-events-none z-10">
            <span class="font-script text-white text-6xl md:text-7xl lg:text-8xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] text-center block rotate-[-3deg] select-none">
              Dia dos Namorados
            </span>
          </div>

          {/* Central translucent Play/Pause Toggle overlay button */}
          <button 
            onClick={handlePlayPause}
            class="absolute top-[62%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 hover:bg-[#dda86a] text-white p-4 rounded-full backdrop-blur-md transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.5)] border border-white/20 cursor-pointer z-20"
            aria-label="Play or Pause video"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 fill-current" />
            ) : (
              <Play className="w-6 h-6 fill-current ml-0.5" />
            )}
          </button>

          {/* Minimalist Slide 1 Control bar inspired from the custom video design */}
          <div class="absolute bottom-6 inset-x-6 z-20 flex items-center justify-between bg-[#120905]/70 backdrop-blur-md py-3 px-4 rounded-xl border border-white/10">
            <div class="flex items-center gap-3 flex-1 mr-4">
              <span class="text-[10px] font-sans-lux text-white/80 font-medium select-none">
                {Math.floor(currentTime / 60)}:{( '0' + Math.floor(currentTime % 60) ).slice(-2)}
              </span>
              <input
                type="range"
                min="0"
                max={duration || 10}
                value={currentTime}
                onChange={handleProgressChange}
                className="flex-1 accent-[#dda86a] h-0.5 bg-white/20 rounded-lg cursor-pointer transition-colors"
              />
            </div>
            
            <button
              onClick={handleMuteToggle}
              class="text-white hover:text-[#dda86a] transition"
              aria-label="Mute toggle"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-white/70" />
              ) : (
                <Volume2 className="w-4 h-4 text-[#dda86a]" />
              )}
            </button>
          </div>

        </div>
      </section>


      {/* =========================================
          LÂMINA 2: APRESENTAÇÃO / INVITATION
          ========================================= */}
      <section id="lamina-2" class="relative bg-[#4a3126] py-20 px-6 md:py-28 md:px-16 flex flex-col items-center justify-center text-center overflow-hidden border-b border-[#3b241b]">
        
        {/* Subtle, beautiful gold flower branch rising at right margin */}
        <BotanicalRightVertical className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-full opacity-35 max-w-[20%] pointer-events-none hidden lg:block" />

        {/* Main invitation card content */}
        <div class="max-w-3xl mx-auto flex flex-col items-center relative z-10">
          
          {/* Elegant Subtitle in golden cursive / serif structure */}
          <h3 class="font-serif-lux italic text-xl md:text-2xl text-[#fdfbf7] leading-relaxed font-light mb-12 max-w-2xl">
            Uma noite para celebrar o amor no Baby Beef Jardim
          </h3>

          {/* Prose description blocks precisely aligned with Canva copies */}
          <div class="space-y-8 font-serif-lux text-base md:text-lg text-[#fefdfb]/90 leading-relaxed tracking-wide text-center">
            
            <p>
              O Dia dos Namorados é uma data especial, feita para celebrar os sentimentos mais profundos, os gestos de carinho e as histórias que unem dois corações. Pensando nisso, o <strong class="text-[#dda86a] font-medium">Baby Beef Jardim</strong> preparou uma noite inesquecível para os casais que desejam transformar esse momento em uma verdadeira experiência sensorial.
            </p>

            <p>
              No dia 12 de junho, o restaurante abre suas portas para uma celebração à altura do amor: uma noite de sabores marcantes, ambiente sofisticado e experiências pensadas com todo o cuidado que essa data merece.
            </p>

            <p>
              Cada detalhe foi cuidadosamente planejado para tornar a sua noite ainda mais especial. Dos ingredientes selecionados à apresentação dos pratos, da trilha sonora ao clima intimista de cada espaço. O Baby Beef Jardim será o cenário ideal para celebrar o amor com intensidade, sabor e sofisticação.
            </p>

          </div>

          {/* CTA Button in Slide 2 */}
          <div class="mt-14">
            <button 
              onClick={openReserveModal}
              class="bg-white text-[#4a3126] hover:bg-[#dda86a] hover:text-white rounded-full py-4 px-10 text-xs md:text-sm font-sans-lux tracking-[0.22em] font-bold uppercase shadow-lg transition-all duration-300 transform hover:scale-[1.03] active:scale-97 cursor-pointer"
            >
              GARANTA SUA RESERVA
            </button>
          </div>

        </div>
      </section>


      {/* =========================================
          LÂMINA 3: ATRAÇÕES / EXCLUSIVE ATTRACTIONS
          ========================================= */}
      <section id="lamina-3" class="relative bg-[#4a3126] py-20 px-6 md:py-28 md:px-16 lg:px-24 overflow-hidden border-b border-[#3b241b]">
        
        {/* Decorative horizontal gold flower stem at the bottom-left edge */}
        <BotanicalLeftBranch className="absolute left-4 bottom-4 w-60 h-28 opacity-35 pointer-events-none hidden md:block" />

        <div class="max-w-6xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div class="text-center mb-16">
            <h3 class="font-serif-lux text-2xl md:text-3.5xl text-[#fdfbf7] tracking-wider font-light uppercase">
              Conheça nossas atividades exclusivas.
            </h3>
          </div>

          {/* Double Columns Grid */}
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Intimate dining image styled in a double border luxury frame */}
            <div class="lg:col-span-6 flex justify-center">
              <div class="relative w-full max-w-md">
                
                {/* Double frame design - Outermost thin gold line rectangle */}
                <div class="relative p-2.5">
                  <div class="absolute inset-0 border border-[#dda86a] rounded-2xl opacity-80"></div>
                  
                  {/* Rounded image frame */}
                  <img
                    src="/src/assets/images/piano_bar_interior_1780503662491.png"
                    alt="Interior sofisticado do Baby Beef Jardim"
                    className="w-full aspect-[4/3] object-cover rounded-xl shadow-xl relative z-10 block"
                  />
                </div>

              </div>
            </div>

            {/* Right Column: Descriptions list exact to the image text layout */}
            <div class="lg:col-span-6 space-y-10 text-left">
              
              {/* Feature 1 */}
              <div>
                <h4 class="font-serif-lux text-lg md:text-xl text-[#dda86a] font-semibold tracking-wide mb-2">
                  Música ao piano
                </h4>
                <p class="font-sans-lux text-sm md:text-base text-[#fdfbf7]/90 leading-relaxed font-light">
                  Uma trilha sonora envolvente para acompanhar cada instante do jantar, tornando a experiência ainda mais romântica e sofisticada.
                </p>
              </div>

              {/* Feature 2 */}
              <div>
                <h4 class="font-serif-lux text-lg md:text-xl text-[#dda86a] font-semibold tracking-wide mb-2">
                  Decoração especial
                </h4>
                <p class="font-sans-lux text-sm md:text-base text-[#fdfbf7]/90 leading-relaxed font-light">
                  Um ambiente cuidadosamente preparado para celebrar o amor com elegância, charme e beleza em cada detalhe.
                </p>
              </div>

              {/* Feature 3 */}
              <div>
                <h4 class="font-serif-lux text-lg md:text-xl text-[#dda86a] font-semibold tracking-wide mb-2">
                  Ponto instagramável
                </h4>
                <p class="font-sans-lux text-sm md:text-base text-[#fdfbf7]/90 leading-relaxed font-light">
                  Um espaço exclusivo para registrar esse momento especial e levar para casa uma lembrança à altura da ocasião.
                </p>
              </div>

            </div>

          </div>

          {/* CTA Button in Slide 3 */}
          <div class="mt-16 text-center">
            <button 
              onClick={openReserveModal}
              class="bg-white text-[#4a3126] hover:bg-[#dda86a] hover:text-white rounded-full py-4 px-10 text-xs md:text-sm font-sans-lux tracking-[0.22em] font-bold uppercase shadow-lg transition-all duration-300 transform hover:scale-[1.03] active:scale-97 cursor-pointer"
            >
              GARANTA SUA RESERVA
            </button>
          </div>

        </div>
      </section>


      {/* =========================================
          LÂMINA 4: INFORMAÇÕES & RESERVAS (RSVP)
          ========================================= */}
      <section id="lamina-4" class="relative bg-[#4a3126] py-20 px-6 md:py-28 md:px-16 overflow-hidden">
        
        {/* Subtle decorative flower branches around Slide 4 edges */}
        <BotanicalCorner className="absolute right-2 bottom-20 w-32 h-32 opacity-35 pointer-events-none" />

        <div class="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
          
          {/* Logo Heading and Tagline line matching Canva layout */}
          <div class="w-full flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 border-b border-[#5e4337] pb-12 mb-12">
            
            {/* Left Box: Logo Signature */}
            <div class="flex-none flex flex-col items-center md:items-start select-none">
              <div class="flex items-end relative">
                <span class="font-script text-[90px] md:text-[110px] text-[#dda86a] leading-[0.55] select-none block tracking-normal">
                  jantar
                </span>
                <svg className="w-10 h-10 md:w-11 md:h-11 text-[#dda86a] fill-none stroke-current stroke-[1.2] block -ml-3 mb-1 origin-bottom rotate-12" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <span class="font-serif-lux text-[24px] md:text-[28px] text-[#dda86a] leading-none tracking-[0.25em] -mt-1 block lowercase font-light">
                namorados
              </span>
            </div>

            {/* Right Box: Bold slogan */}
            <div class="flex-1 text-center md:text-right max-w-md">
              <h3 class="font-serif-lux text-xl md:text-2xl text-white font-medium leading-relaxed tracking-wider">
                A NOITE MAIS ROMÂNTICA DO ANO <span class="text-[#dda86a] font-semibold block mt-1">COMEÇA AQUI.</span>
              </h3>
            </div>

          </div>

          {/* Details wrapper parsed nicely without block cards for exact Canva visual */}
          <div class="w-full max-w-4xl text-center mb-12 space-y-8">
            
            <h4 class="font-serif-lux text-xl md:text-2xl text-[#dda86a] tracking-wider uppercase font-medium">
              Informações e Reservas:
            </h4>

            {/* Combined phone numbers written continuously using dividers */}
            <div class="text-[#fdfbf7] font-sans-lux text-base md:text-xl lg:text-2xl tracking-wide max-w-3xl mx-auto leading-relaxed font-light">
              <div class="flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
                <a href="tel:1144367869" class="hover:text-[#dda86a] transition whitespace-nowrap">(11) 4436-7869</a>
                <span class="text-[#dda86a] select-none text-sm hidden sm:inline">|</span>
                <a href="https://wa.me/5511985540692" target="_blank" rel="noopener noreferrer" class="hover:text-[#dda86a] transition whitespace-nowrap">(11) 98554-0692</a>
                <span class="text-[#dda86a] select-none text-sm hidden sm:inline">|</span>
                <a href="https://wa.me/5511940816109" target="_blank" rel="noopener noreferrer" class="hover:text-[#dda86a] transition whitespace-nowrap">(11) 94081-6109</a>
              </div>
            </div>

            {/* Detailed Address Text below */}
            <p class="font-serif-lux text-sm md:text-base text-[#fdfbf7]/90 tracking-wide pt-4 max-w-2xl mx-auto leading-relaxed">
              Baby Beef Jardim – Rua das Bandeiras, 166, Santo André – SP.
            </p>

          </div>

          {/* CTA Button in Slide 4 */}
          <div class="mb-20">
            <button 
              onClick={openReserveModal}
              class="bg-white text-[#4a3126] hover:bg-[#dda86a] hover:text-white rounded-full py-4 px-10 text-xs md:text-sm font-sans-lux tracking-[0.22em] font-bold uppercase shadow-lg transition-all duration-300 transform hover:scale-[1.03] active:scale-97 cursor-pointer"
            >
              GARANTA SUA RESERVA
            </button>
          </div>

        </div>

        {/* Flat black bar exactly matching footer layout of Canva site */}
        <div class="absolute bottom-0 inset-x-0 bg-black py-4 px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] md:text-[11px] font-sans-lux text-[#8a7266] select-none w-full border-t border-[#120905]">
          <div class="flex items-center gap-2 tracking-wider">
            <a href="#" class="hover:text-white transition">Condições e suporte</a>
            <span class="text-[#554137] select-none">|</span>
            <a href="#" class="hover:text-white transition">Política de Privacidade</a>
          </div>
          <div class="tracking-widest uppercase">
            Criado com o Canva
          </div>
        </div>

      </section>


      {/* =========================================
          INTERACTIVE RESERVATION MODAL
          ========================================= */}
      {isModalOpen && (
        <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop */}
          <div 
            onClick={closeReserveModal}
            class="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer transition-opacity duration-300"
          />

          {/* Content Wrapper */}
          <div class="relative bg-[#2c1a12] border border-[#dda86a]/40 text-[#fdfbf7] w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden z-10 transition-all duration-300 scale-100 max-h-[92vh] flex flex-col">
            
            {/* Glowing top accent border line */}
            <div class="h-1 bg-gradient-to-r from-transparent via-[#dda86a] to-transparent flex-none" />

            {/* Header */}
            <div class="p-6 border-b border-[#3b241b] flex justify-between items-center flex-none">
              <div class="flex items-center gap-3">
                <Heart className="w-5 h-5 text-[#dda86a] fill-[#dda86a]" />
                <h3 class="font-serif-lux text-xl font-light tracking-wide">
                  Solicitar Reserva Especial
                </h3>
              </div>
              <button 
                onClick={closeReserveModal}
                class="text-[#8a7266] hover:text-[#fdfbf7] p-1.5 hover:bg-[#3b241b] rounded-full transition cursor-pointer"
                aria-label="Fecar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable form inside modal */}
            <div class="flex-1 overflow-y-auto p-6 md:p-8">
              
              {!isSuccess ? (
                <form onSubmit={handleReservationSubmit} class="space-y-6">
                  
                  {/* Alert Advice Info box */}
                  <div class="bg-[#120905]/40 border-l-2 border-[#dda86a] p-3 rounded-r-lg flex gap-3 text-xs text-[#8a7266] leading-relaxed">
                    <Info className="w-5 h-5 text-[#dda86a] shrink-0" />
                    <p>
                      Informe os dados do casal para agilizar sua pré-reserva VIP do dia <strong>12 de Junho</strong>. Após o envio você será redirecionado para concluir via WhatsApp.
                    </p>
                  </div>

                  {/* Field 1: Couples Name */}
                  <div>
                    <label class="block text-xs uppercase tracking-widest font-sans-lux font-semibold text-[#dda86a] mb-2">
                      Nome do Casal *
                    </label>
                    <input
                      required
                      type="text"
                      value={coupleName}
                      onChange={(e) => setCoupleName(e.target.value)}
                      placeholder="Ex: Pedro & Helena"
                      class="w-full bg-[#120905]/50 border border-[#dda86a]/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#dda86a] focus:border-[#dda86a] text-white placeholder-white/20 transition"
                    />
                  </div>

                  {/* Field 2: Whatsapp phone */}
                  <div>
                    <label class="block text-xs uppercase tracking-widest font-sans-lux font-semibold text-[#dda86a] mb-2">
                      WhatsApp para Contato *
                    </label>
                    <input
                      required
                      type="tel"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="Ex: (11) 99999-9999"
                      class="w-full bg-[#120905]/50 border border-[#dda86a]/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#dda86a] focus:border-[#dda86a] text-white placeholder-white/20 transition"
                    />
                  </div>

                  {/* Field 3 & 4: Time/Ambient preferentials */}
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div>
                      <label class="block text-xs uppercase tracking-widest font-sans-lux font-semibold text-[#dda86a] mb-2">
                        Horário de Entrada
                      </label>
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        class="w-full bg-[#120905] border border-[#dda86a]/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#dda86a] text-white cursor-pointer"
                      >
                        <option value="19:00">19:00</option>
                        <option value="19:30">19:30</option>
                        <option value="21:00">21:00</option>
                        <option value="21:30">21:30</option>
                      </select>
                    </div>

                    <div>
                      <label class="block text-xs uppercase tracking-widest font-sans-lux font-semibold text-[#dda86a] mb-2">
                        Ambiente Preferido
                      </label>
                      <select
                        value={seating}
                        onChange={(e) => setSeating(e.target.value)}
                        class="w-full bg-[#120905] border border-[#dda86a]/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#dda86a] text-white cursor-pointer"
                      >
                        <option value="Salão Piano Bar 🎹">Salão Piano Bar 🎹</option>
                        <option value="Varanda Intimista 💕">Varanda Intimista 💕</option>
                        <option value="Salão Clássico Nobre ✨">Salão Clássico Nobre ✨</option>
                        <option value="Jardim de Inverno 🌸">Jardim de Inverno 🌸</option>
                      </select>
                    </div>

                  </div>

                  {/* Field 5: Dietary and details requests */}
                  <div>
                    <label class="block text-xs uppercase tracking-widest font-sans-lux font-semibold text-[#dda86a] mb-2">
                      Observação ou Pedido Especial
                    </label>
                    <textarea
                      rows={2}
                      value={dietary}
                      onChange={(e) => setDietary(e.target.value)}
                      placeholder="Ex: Preferência por mesa perto do piano / restrições a lactose"
                      class="w-full bg-[#120905]/50 border border-[#dda86a]/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#dda86a] text-white placeholder-white/20 transition resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div class="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      class="w-full bg-[#dda86a] text-white hover:bg-[#e4be81] transition duration-300 disabled:opacity-50 rounded-full py-3.5 px-6 text-xs uppercase font-sans-lux tracking-[0.2em] font-bold shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                    >
                      {isSubmitting ? (
                        <span class="flex items-center gap-2">
                          <svg class="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processando...
                        </span>
                      ) : (
                        <span class="flex items-center gap-2">
                          ENVIAR PRÉ-RESERVA <ArrowRight class="w-4 h-4" />
                        </span>
                      )}
                    </button>
                  </div>

                </form>
              ) : (
                
                // Success Voucher feedback visual
                <div class="text-center py-6 px-4 flex flex-col items-center">
                  
                  <div class="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500 flex items-center justify-center text-emerald-500 mb-6">
                    <Check className="w-8 h-8" />
                  </div>

                  <h4 class="font-serif-lux text-xl text-white font-medium mb-2">
                    Voucher Pré-Reserva Iniciado!
                  </h4>
                  
                  <p class="font-sans-lux text-xs text-[#8a7266] max-w-sm mb-8 leading-relaxed">
                    Clique no botão abaixo para encaminhar a confirmação automática do casal para a recepção do Baby Beef Jardim.
                  </p>

                  {/* VIP ticket envelope layout style card */}
                  <div class="w-full max-w-sm bg-[#120905]/50 border border-[#dda86a]/30 rounded-xl p-5 text-left mb-8 relative overflow-hidden font-sans-lux text-xs">
                    <div class="flex justify-between items-center border-b border-[#3b241b] pb-3 mb-4">
                      <span class="text-[9px] uppercase tracking-[0.2em] text-[#dda86a] font-bold">
                        Voucher Pré-Reserva VIP
                      </span>
                      <span class="text-white font-medium">
                        Nº {Math.floor(2000 + Math.random() * 7999)}
                      </span>
                    </div>

                    <div class="space-y-2.5 text-[#8a7266]">
                      <div class="flex justify-between">
                        <span>Casal:</span>
                        <strong class="text-white font-medium">{coupleName}</strong>
                      </div>
                      <div class="flex justify-between">
                        <span>Horário requisitado:</span>
                        <strong class="text-[#dda86a] font-medium">{time}h</strong>
                      </div>
                      <div class="flex justify-between">
                        <span>Ambiente sugerido:</span>
                        <strong class="text-[#dda86a] font-medium">{seating}</strong>
                      </div>
                    </div>
                  </div>

                  <div class="w-full space-y-3">
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="w-full bg-[#25D366] text-white hover:bg-[#1ebd5d] transition duration-300 rounded-full py-4 px-6 text-xs uppercase font-sans-lux tracking-[0.2em] font-bold shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>CONCLUIR NO WHATSAPP</span>
                    </a>
                    
                    <button
                      onClick={closeReserveModal}
                      class="text-[10px] uppercase tracking-widest text-[#8a7266] hover:text-[#fdfbf7] transition"
                    >
                      VOLTAR AO SITE
                    </button>
                  </div>

                </div>
              )}

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
