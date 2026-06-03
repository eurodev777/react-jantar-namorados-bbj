import { useState, useRef, useEffect, ChangeEvent, FormEvent } from 'react';
import { 
  Heart, 
  Music, 
  Sparkles, 
  Camera, 
  Phone, 
  MapPin, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  X, 
  Check, 
  Calendar, 
  Clock, 
  Users, 
  ArrowRight,
  ChevronRight,
  Info
} from 'lucide-react';

// Custom Botanical gold graphics drawn inline for performance and style preservation
const BotanicalGoldDecor = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M10 110 C30 80, 50 50, 110 10" 
      stroke="#cfa15c" 
      strokeWidth="1.2" 
      strokeLinecap="round" 
      opacity="0.85"
    />
    <path 
      d="M50 65 C40 55, 30 52, 15 50 C25 45, 38 48, 48 60 Z" 
      fill="#cfa15c" 
      fillOpacity="0.08" 
      stroke="#cfa15c" 
      strokeWidth="0.8" 
    />
    <path 
      d="M75 40 C65 30, 55 28, 40 25 C50 20, 63 23, 72 35 Z" 
      fill="#cfa15c" 
      fillOpacity="0.08" 
      stroke="#cfa15c" 
      strokeWidth="0.8" 
    />
    <path 
      d="M90 25 C92 18, 100 15, 105 20 C110 25, 105 32, 98 30 C95 35, 88 38, 85 32 C82 28, 85 24, 90 25 Z" 
      stroke="#cfa15c" 
      strokeWidth="0.8" 
      fill="#cfa15c" 
      fillOpacity="0.1" 
    />
    <circle cx="92" cy="27" r="1.5" fill="#f5efe6" />
    <path 
      d="M30 85 C22 80, 15 82, 8 85 C12 78, 20 74, 28 80 Z" 
      fill="#cfa15c" 
      fillOpacity="0.08" 
      stroke="#cfa15c" 
      strokeWidth="0.8" 
    />
    <circle cx="102" cy="12" r="2" fill="#cfa15c" />
    <circle cx="60" cy="55" r="1.5" fill="#cfa15c" />
    <circle cx="38" cy="72" r="1.5" fill="#cfa15c" />
  </svg>
);

const BotanicalRoseDecor = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M10 90 C 25 75, 45 60, 80 40" 
      stroke="#cfa15c" 
      strokeWidth="1" 
      strokeLinecap="round" 
      opacity="0.7"
    />
    <path 
      d="M48 68 C 42 55, 34 50, 20 52 C 26 44, 38 42, 45 55 Z" 
      fill="#cfa15c" 
      fillOpacity="0.05" 
      stroke="#cfa15c" 
      strokeWidth="0.8" 
    />
    <path 
      d="M75 42 C 60 40, 52 32, 54 18 C 62 25, 68 35, 72 40 Z" 
      fill="#cfa15c" 
      fillOpacity="0.05" 
      stroke="#cfa15c" 
      strokeWidth="0.8" 
    />
    <path 
      d="M82 35 C 80 25, 75 12, 85 8 C 92 12, 90 28, 80 32" 
      stroke="#cfa15c" 
      strokeWidth="1" 
      fill="#cfa15c" 
      fillOpacity="0.08" 
    />
  </svg>
);

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [coupleName, setCoupleName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [time, setTime] = useState('19:30');
  const [seating, setSeating] = useState('Piano Bar');
  const [dietary, setDietary] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Custom Video Player states
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

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
    <div id="landing-page-root" class="min-h-screen bg-[#1c0f0a] flex flex-col selection:bg-[#cfa15c] selection:text-white relative">
      
      {/* =========================================
          LÂMINA 1: HOME / HERO SECTION
          ========================================= */}
      <section id="lamina-1" class="relative min-h-screen md:h-screen flex flex-col md:flex-row overflow-hidden border-b border-[#2e2019]">
        
        {/* Left Side: Campaign Intro */}
        <div class="w-full md:w-1/2 min-h-[50vh] md:min-h-full bg-[#140a06] px-6 py-12 md:p-16 lg:p-24 flex flex-col justify-between relative z-10">
          
          {/* Decorative Corner Art */}
          <BotanicalGoldDecor className="absolute -top-4 -left-4 w-28 h-28 transform rotate-90 opacity-20 pointer-events-none" />
          
          {/* Top Date Header */}
          <div class="text-center md:text-left">
            <span class="text-[#cfa15c] font-sans-lux text-xs md:text-sm tracking-[0.3em] font-semibold uppercase block drop-shadow-sm">
              12 de Junho
            </span>
          </div>

          {/* Main Titles Area */}
          <div class="my-auto py-10 md:py-0 flex flex-col items-center md:items-start text-center md:text-left">
            
            {/* Elegant Script 'jantar' */}
            <div class="relative">
              <h1 class="font-script text-8xl md:text-9xl text-[#cfa15c] leading-none select-none drop-shadow-lg">
                jantar
              </h1>
              {/* Optional tiny elegant gold heart positioned organically */}
              <span class="absolute right-0 bottom-4 text-[#cfa15c] text-3xl animate-pulse">
                ♥
              </span>
            </div>

            {/* Overlapping Serif 'namorados' */}
            <h2 class="font-serif-lux text-4xl md:text-5xl text-[#dbd3c9] tracking-[0.15em] uppercase -mt-4 mb-8 select-none font-light">
              namorados
            </h2>

            {/* Luxurious Quote */}
            <p class="font-serif-lux text-base md:text-lg text-[#ebe5df] leading-relaxed max-w-md tracking-wider mb-10">
              O MELHOR PRESENTE É VIVER MOMENTOS <span class="text-[#cfa15c] font-semibold">JUNTOS.</span>
            </p>

            {/* CTA Button */}
            <button 
              id="btn-cta-l1"
              onClick={openReserveModal}
              class="group relative bg-[#f5efe6] text-[#2c1b15] hover:bg-[#cfa15c] hover:text-white border border-[#cfa15c]/20 rounded-full py-3.5 px-9 text-xs md:text-sm font-sans-lux tracking-[0.2em] font-semibold uppercase shadow-[0_8px_25px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              Garanta Sua Reserva
              <span class="absolute -top-1 -right-1 w-3 h-3 bg-[#cfa15c] rounded-full animate-ping group-hover:bg-[#f5efe6]"></span>
            </button>
          </div>

          {/* Location Hint footer of column */}
          <div class="text-center md:text-left flex items-center justify-center md:justify-start gap-2 text-[#968176] text-xs font-sans-lux tracking-wider mt-4">
            <MapPin className="w-4 h-4 text-[#cfa15c]" />
            <span>Baby Beef Jardim • Santo André - SP</span>
          </div>
        </div>

        {/* Right Side: Custom Romantic Video Player (占 metade da tela / exact half width) */}
        <div class="w-full md:w-1/2 h-[50vh] md:h-full relative bg-[#090403] group overflow-hidden">
          
          <video
            ref={videoRef}
            src="https://assets.mixkit.co/videos/preview/mixkit-romantic-couple-by-candlelight-having-dinner-40139-large.mp4"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loop
            muted={isMuted}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            playsInline
          />

          {/* Deep Luxurious Shadow Overlays */}
          <div class="absolute inset-0 bg-gradient-to-t from-[#140a06]/90 via-transparent to-[#140a06]/40 pointer-events-none" />
          <div class="absolute inset-0 bg-black/20 pointer-events-none" />

          {/* Elegant Handmade Title Overlaid exact like reference */}
          <div class="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center pointer-events-none z-10 transition-opacity duration-300 group-hover:opacity-40">
            <span class="font-script text-white text-5xl md:text-7xl lg:text-8xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)] text-center block rotate-[-3deg]">
              Dia dos Namorados
            </span>
          </div>

          {/* Big Center Play Pause Overlay for interactivity */}
          <button 
            onClick={handlePlayPause}
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 hover:bg-[#cfa15c]/95 text-white p-5 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 shadow-[0_4px_20px_rgba(0,0,0,0.4)] cursor-pointer z-20"
            aria-label="Play or Pause Romantic Video"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 fill-current" />
            ) : (
              <Play className="w-8 h-8 fill-current ml-0.5" />
            )}
          </button>

          {/* Video Control Bar mimicking Canva's custom player interface exactly */}
          <div class="absolute bottom-5 inset-x-6 z-20 flex flex-col gap-2 bg-black/40 backdrop-blur-sm p-3.5 rounded-xl border border-white/10 shadow-2xl opacity-90 transition-all duration-350 hover:bg-black/60">
            
            {/* Top Bar Slider Timeline of current view */}
            <div class="flex items-center gap-3">
              <span class="text-[10px] font-sans-lux text-white/70 select-none">
                {Math.floor(currentTime / 60)}:{( '0' + Math.floor(currentTime % 60) ).slice(-2)}
              </span>
              <input
                type="range"
                min="0"
                max={duration || 100}
                value={currentTime}
                onChange={handleProgressChange}
                className="flex-1 accent-[#cfa15c] h-1 bg-white/20 rounded-lg cursor-pointer transform transition-all duration-200"
              />
              <span class="text-[10px] font-sans-lux text-white/70 select-none">
                {Math.floor(duration / 60)}:{( '0' + Math.floor(duration % 60) ).slice(-2)}
              </span>
            </div>

            {/* Play controls / Audio Mute bar at the base of the player */}
            <div class="flex items-center justify-between mt-1">
              <div class="flex gap-2">
                <button 
                  onClick={handlePlayPause}
                  class="text-white hover:text-[#cfa15c] p-1.5 transition duration-200 rounded-lg hover:bg-white/5 active:scale-95"
                  title={isPlaying ? "Pausar" : "Reproduzir"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <div class="text-[11px] font-sans-lux tracking-wider text-white/80 self-center uppercase font-medium">
                  {isPlaying ? "Transmissão Ativa" : "Pausado"}
                </div>
              </div>

              {/* Mute toggle button right bottom corner exact like placeholder */}
              <button
                onClick={handleMuteToggle}
                class="text-white hover:text-[#cfa15c] p-1.5 transition duration-200 rounded-lg hover:bg-white/5 active:scale-95 flex items-center justify-center"
                title={isMuted ? "Ativar Som" : "Mudar para o Silencioso"}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 text-white/90" />
                ) : (
                  <Volume2 className="w-4 h-4 text-[#cfa15c]" />
                )}
              </button>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================
          LÂMINA 2: APRESENTAÇÃO / INVITATION
          ========================================= */}
      <section id="lamina-2" class="relative bg-[#20130d] py-20 px-6 md:py-28 md:px-16 flex flex-col items-center justify-center text-center overflow-hidden border-b border-[#301e16]">
        
        {/* Corner Botanicals */}
        <BotanicalGoldDecor className="absolute top-10 right-10 w-32 h-32 opacity-15 pointer-events-none transform -rotate-12" />
        <BotanicalRoseDecor className="absolute -bottom-8 left-12 w-40 h-40 opacity-10 pointer-events-none transform rotate-45" />

        {/* Outer Framer Container with Gold accents */}
        <div class="max-w-3xl mx-auto flex flex-col items-center relative z-10">
          
          <Heart className="w-8 h-8 text-[#cfa15c] mb-6 animate-pulse" />
          
          {/* Main Segment Header in Italicized Gold Serif */}
          <h3 class="font-serif-lux italic text-2xl md:text-3xl text-[#cfa15c] leading-relaxed font-light mb-10 max-w-2xl">
            Uma noite para celebrar o amor no Baby Beef Jardim
          </h3>

          {/* Prose blocks faithfully restored from the Canva content */}
          <div class="space-y-8 font-serif-lux text-base md:text-lg text-[#ece5dd]/95 leading-relaxed tracking-wide text-center">
            
            <p class="font-normal">
              O Dia dos Namorados é uma data especial, feita para celebrar os sentimentos mais profundos, os gestos de carinho e as histórias que unem dois corações. Pensando nisso, o <span class="text-[#cfa15c] font-semibold">Baby Beef Jardim</span> preparou uma noite inesquecível para os casais que desejam transformar esse momento em uma verdadeira experiência sensorial.
            </p>

            <p class="font-light">
              No dia 12 de junho, o restaurante abre suas portas para uma celebração à altura do amor: uma noite de sabores marcantes, ambiente sofisticado e experiências pensadas com todo o cuidado que essa data merece.
            </p>

            <p class="font-light">
              Cada detalhe foi cuidadosamente planejado para tornar a sua noite ainda mais especial. Dos ingredientes selecionados à apresentação dos pratos, da trilha sonora ao clima intimista de cada espaço. O Baby Beef Jardim será o cenário ideal para celebrar o amor com intensidade, sabor e sofisticação.
            </p>

          </div>

          {/* Center Column Button */}
          <div class="mt-14">
            <button 
              id="btn-cta-l2"
              onClick={openReserveModal}
              class="bg-[#f5efe6] text-[#2c1b15] hover:bg-[#cfa15c] hover:text-white border border-[#cfa15c]/25 rounded-full py-3.5 px-9 text-xs md:text-sm font-sans-lux tracking-[0.2em] font-semibold uppercase shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              Garanta Sua Reserva
            </button>
          </div>

        </div>
      </section>


      {/* =========================================
          LÂMINA 3: ATRAÇÕES / EXCLUSIVE ACTIVITIES
          ========================================= */}
      <section id="lamina-3" class="relative bg-[#2c1a12] py-20 px-6 md:py-28 md:px-16 lg:px-24 overflow-hidden border-b border-[#3b2419]">
        
        {/* Background Foliage art */}
        <BotanicalGoldDecor className="absolute bottom-10 right-4 w-36 h-36 opacity-15 transform rotate-[210deg] pointer-events-none" />
        <BotanicalRoseDecor className="absolute -top-10 left-10 w-40 h-40 opacity-15 transform -rotate-45 pointer-events-none" />

        <div class="max-w-6xl mx-auto relative z-10">
          
          <div class="text-center mb-16">
            <h3 class="font-serif-lux text-3xl md:text-4xl lg:text-4.5xl text-[#dbd3c9] tracking-wide font-light">
              Conheça nossas atividades exclusivas.
            </h3>
            <div class="w-16 h-0.5 bg-[#cfa15c] mx-auto mt-4 rounded-full opacity-65"></div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Side: Generated Piano Bar Room Lounge image with beautiful gold frame */}
            <div class="lg:col-span-6 flex justify-center">
              <div class="relative group">
                {/* Frame border highlight */}
                <div class="absolute -inset-2 rounded-2xl bg-[#cfa15c]/15 blur-sm opacity-75 group-hover:bg-[#cfa15c]/25 transition duration-300"></div>
                
                {/* Image card wrapper */}
                <div class="relative bg-[#1c0f0a] border border-[#cfa15c]/40 p-2 rounded-xl shadow-2xl overflow-hidden aspect-[4/3] max-w-lg">
                  <img
                    src="/src/assets/images/piano_bar_interior_1780503662491.png"
                    alt="Piano Bar Lounge Baby Beef Jardim"
                    className="w-full h-full object-cover rounded-lg transition duration-700 group-hover:scale-[1.03]"
                  />
                  
                  {/* Frosted Glass Floating Tag */}
                  <div class="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 py-1.5 px-3 rounded-lg text-white text-[10px] md:text-xs font-sans-lux tracking-wider uppercase font-medium">
                    🎵 Piano Lounge Bar
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Features listing */}
            <div class="lg:col-span-6 space-y-10">
              
              {/* Feature 1 */}
              <div class="flex gap-4 group">
                <div class="flex-none w-10 h-10 rounded-full bg-[#3d271d] border border-[#cfa15c]/30 flex items-center justify-center text-[#cfa15c] group-hover:bg-[#cfa15c] group-hover:text-white transition duration-300 shadow-md">
                  <Music className="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-serif-lux text-xl text-[#f5efe6] font-medium tracking-wide mb-2 group-hover:text-[#cfa15c] transition duration-200">
                    Música ao piano
                  </h4>
                  <p class="font-sans-lux text-sm md:text-base text-[#9c897f] leading-relaxed font-light">
                    Uma trilha sonora envolvente para acompanhar cada instante do jantar, tornando a experiência ainda mais romântica e sofisticada.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div class="flex gap-4 group">
                <div class="flex-none w-10 h-10 rounded-full bg-[#3d271d] border border-[#cfa15c]/30 flex items-center justify-center text-[#cfa15c] group-hover:bg-[#cfa15c] group-hover:text-white transition duration-300 shadow-md">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-serif-lux text-xl text-[#f5efe6] font-medium tracking-wide mb-2 group-hover:text-[#cfa15c] transition duration-200">
                    Decoração especial
                  </h4>
                  <p class="font-sans-lux text-sm md:text-base text-[#9c897f] leading-relaxed font-light">
                    Um ambiente cuidadosamente preparado para celebrar o amor com elegância, charme e beleza em cada detalhe.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div class="flex gap-4 group">
                <div class="flex-none w-10 h-10 rounded-full bg-[#3d271d] border border-[#cfa15c]/30 flex items-center justify-center text-[#cfa15c] group-hover:bg-[#cfa15c] group-hover:text-white transition duration-300 shadow-md">
                  <Camera className="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-serif-lux text-xl text-[#f5efe6] font-medium tracking-wide mb-2 group-hover:text-[#cfa15c] transition duration-200">
                    Ponto instagramável
                  </h4>
                  <p class="font-sans-lux text-sm md:text-base text-[#9c897f] leading-relaxed font-light">
                    Um espaço exclusivo para registrar esse momento especial e levar para casa uma lembrança à altura da ocasião.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Button section centered bottom */}
          <div class="mt-16 text-center">
            <button 
              id="btn-cta-l3"
              onClick={openReserveModal}
              class="bg-[#f5efe6] text-[#2c1b15] hover:bg-[#cfa15c] hover:text-white border border-[#cfa15c]/25 rounded-full py-3.5 px-9 text-xs md:text-sm font-sans-lux tracking-[0.2em] font-semibold uppercase shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              Garanta Sua Reserva
            </button>
          </div>

        </div>
      </section>


      {/* =========================================
          LÂMINA 4: INFORMAÇÕES & RESERVAS (RSVP)
          ========================================= */}
      <section id="lamina-4" class="relative bg-[#180a05] py-20 px-6 md:py-28 md:px-16 overflow-hidden">
        
        {/* Botanical leaf lines to match background borders exact */}
        <BotanicalGoldDecor className="absolute bottom-20 right-10 w-44 h-44 opacity-20 transform rotate-12 pointer-events-none" />
        <BotanicalRoseDecor className="absolute left-10 top-1/3 w-32 h-32 opacity-10 transform -rotate-12 pointer-events-none" />

        <div class="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
          
          {/* Top Brand split visual */}
          <div class="w-full flex flex-col md:flex-row justify-between items-center gap-10 md:gap-16 border-b border-[#311c13] pb-14 mb-14 text-center md:text-left">
            
            {/* Left Box: Logo Signature */}
            <div class="flex-1 flex flex-col items-center md:items-start select-none">
              <h1 class="font-script text-7xl md:text-8.5xl text-[#cfa15c] leading-none mb-1">
                jantar
              </h1>
              <h2 class="font-serif-lux text-3xl md:text-4.5xl text-[#f5efe6]/90 tracking-[0.1em] uppercase -mt-4 font-light">
                namorados
              </h2>
            </div>

            {/* Right Box: Absolute Luxury Statement */}
            <div class="flex-1 max-w-md">
              <h3 class="font-serif-lux text-xl md:text-2xl text-[#f5efe6] font-normal leading-relaxed tracking-wider">
                A NOITE MAIS ROMÂNTICA DO ANO <span class="text-[#cfa15c] font-semibold block mt-1">COMEÇA AQUI.</span>
              </h3>
            </div>

          </div>

          {/* Contact Details & Reserve Info Card */}
          <div class="w-full max-w-4xl bg-[#221008] border border-[#cfa15c]/25 p-8 md:p-12 rounded-2xl shadow-3xl text-center mb-14 relative overflow-hidden">
            
            {/* Top gold line */}
            <div class="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#cfa15c] to-transparent"></div>
            
            <h4 class="font-serif-lux text-2xl text-[#cfa15c] tracking-wide font-normal mb-8">
              Informações e Reservas:
            </h4>

            {/* Active phone numbers grid for interactive tap to dial */}
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 justify-center mb-10 max-w-3xl mx-auto">
              
              <a 
                href="tel:1144367869" 
                class="group p-4 bg-[#140602]/80 hover:bg-[#cfa15c] border border-[#cfa15c]/10 hover:border-[#cfa15c] rounded-xl flex flex-col items-center justify-center gap-2 transition duration-300 active:scale-95 shadow-md"
              >
                <Phone className="w-5 h-5 text-[#cfa15c] group-hover:text-white" />
                <span class="text-xs font-sans-lux text-[#9c897f] group-hover:text-white/80 uppercase tracking-widest">
                  Telefone Fixo
                </span>
                <span class="text-sm font-sans-lux font-medium text-[#f5efe6] group-hover:text-white">
                  (11) 4436-7869
                </span>
              </a>

              <a 
                href="https://wa.me/5511985540692" 
                target="_blank"
                rel="noopener noreferrer"
                class="group p-4 bg-[#140602]/80 hover:bg-[#cfa15c] border border-[#cfa15c]/10 hover:border-[#cfa15c] rounded-xl flex flex-col items-center justify-center gap-2 transition duration-300 active:scale-95 shadow-md"
              >
                <Phone className="w-5 h-5 text-[#cfa15c] group-hover:text-white" />
                <span class="text-xs font-sans-lux text-[#9c897f] group-hover:text-white/80 uppercase tracking-widest">
                  WhatsApp 1
                </span>
                <span class="text-sm font-sans-lux font-medium text-[#f5efe6] group-hover:text-white">
                  (11) 98554-0692
                </span>
              </a>

              <a 
                href="https://wa.me/5511940816109" 
                target="_blank"
                rel="noopener noreferrer"
                class="group p-4 bg-[#140602]/80 hover:bg-[#cfa15c] border border-[#cfa15c]/10 hover:border-[#cfa15c] rounded-xl flex flex-col items-center justify-center gap-2 transition duration-300 active:scale-95 shadow-md"
              >
                <Phone className="w-5 h-5 text-[#cfa15c] group-hover:text-white" />
                <span class="text-xs font-sans-lux text-[#9c897f] group-hover:text-white/80 uppercase tracking-widest">
                  WhatsApp 2
                </span>
                <span class="text-sm font-sans-lux font-medium text-[#f5efe6] group-hover:text-white">
                  (11) 94081-6109
                </span>
              </a>

            </div>

            {/* Address bar exact text */}
            <div class="flex flex-col items-center justify-center gap-3 border-t border-[#311c13] pt-8">
              <div class="w-8 h-8 rounded-full bg-[#1c0a05] flex items-center justify-center text-[#cfa15c]">
                <MapPin className="w-4 h-4" />
              </div>
              <p class="font-serif-lux text-base md:text-lg text-[#ece5dd] px-4 max-w-2xl leading-relaxed">
                Baby Beef Jardim – Rua das Bandeiras, 166, Santo André – SP.
              </p>
              <a 
                href="https://maps.google.com/?q=Baby+Beef+Jardim+Rua+das+Bandeiras+166+Santo+Andre"
                target="_blank"
                rel="noopener noreferrer"
                class="text-[#cfa15c] hover:text-[#f5efe6] font-sans-lux text-xs uppercase tracking-[0.2em] underline transition mt-1"
              >
                Ver no Google Maps
              </a>
            </div>

          </div>

          {/* Final CTA Button on background */}
          <div class="mb-14">
            <button 
              id="btn-cta-l4"
              onClick={openReserveModal}
              class="bg-[#f5efe6] text-[#2c1b15] hover:bg-[#cfa15c] hover:text-white border border-[#cfa15c]/25 rounded-full py-3.5 px-9 text-xs md:text-sm font-sans-lux tracking-[0.2em] font-semibold uppercase shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              Garanta Sua Reserva
            </button>
          </div>

        </div>

        {/* Footer Black Bar conforming to requirements exact */}
        <div class="absolute bottom-0 inset-x-0 bg-[#0d0503] border-t border-[#221008] px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] font-sans-lux text-[#7c6659] select-none">
          <div class="flex items-center gap-2">
            <span>Condições e suporte</span>
            <span>|</span>
            <span>Política de Privacidade</span>
          </div>
          <div>
            <span>Criado com o Canva</span>
          </div>
        </div>

      </section>


      {/* =========================================
          INTERACTIVE RESERVATION MODAL
          ========================================= */}
      {isModalOpen && (
        <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop screen filter */}
          <div 
            onClick={closeReserveModal}
            class="absolute inset-0 bg-[#070302]/90 backdrop-blur-md cursor-pointer transition-opacity duration-300"
          />

          {/* Dialog Container */}
          <div class="relative bg-[#221008] border border-[#cfa15c]/40 text-[#f5efe6] w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden z-10 transition-all duration-300 scale-100 max-h-[92vh] flex flex-col">
            
            {/* Glowing top line */}
            <div class="h-1 bg-gradient-to-r from-[#cfa15c]/10 via-[#cfa15c] to-[#cfa15c]/10 flex-none" />

            {/* Header */}
            <div class="p-6 md:p-8 border-b border-[#311c13] flex justify-between items-center flex-none">
              <div class="flex items-center gap-3">
                <Heart className="w-5 h-5 text-[#cfa15c] fill-[#cfa15c]" />
                <h3 class="font-serif-lux text-xl md:text-2xl font-light tracking-wide">
                  Solicitar Reserva Especial
                </h3>
              </div>
              <button 
                onClick={closeReserveModal}
                class="text-[#9c897f] hover:text-[#f5efe6] p-2 hover:bg-[#311c13] rounded-full transition cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable content container */}
            <div class="flex-1 overflow-y-auto p-6 md:p-8">
              
              {!isSuccess ? (
                <form onSubmit={handleReservationSubmit} class="space-y-6">
                  
                  {/* Informational luxury banner */}
                  <div class="bg-[#180a05] border-l-2 border-[#cfa15c] p-3 rounded-r-lg flex gap-3 text-xs text-[#9c897f] leading-relaxed">
                    <Info className="w-5 h-5 text-[#cfa15c] shrink-0" />
                    <p>
                      Preencha os dados abaixo do casal para solicitar a sua mesa exclusiva para o dia <strong>12 de Junho de 2026</strong>. Encaminharemos para atendimento prioritário via WhatsApp.
                    </p>
                  </div>

                  {/* Couples Name input */}
                  <div>
                    <label class="block text-xs uppercase tracking-widest font-sans-lux font-medium text-[#cfa15c] mb-2 font-semibold">
                      Nome do Casal *
                    </label>
                    <input
                      required
                      type="text"
                      value={coupleName}
                      onChange={(e) => setCoupleName(e.target.value)}
                      placeholder="Ex: João e Maria de Souza"
                      class="w-full bg-[#140602]/70 border border-[#cfa15c]/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#cfa15c] focus:border-[#cfa15c] text-white placeholder-white/35 transition"
                    />
                  </div>

                  {/* WhatsApp contact */}
                  <div>
                    <label class="block text-xs uppercase tracking-widest font-sans-lux font-medium text-[#cfa15c] mb-2 font-semibold">
                      WhatsApp de Contato *
                    </label>
                    <input
                      required
                      type="tel"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="Ex: (11) 99999-9999"
                      class="w-full bg-[#140602]/70 border border-[#cfa15c]/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#cfa15c] focus:border-[#cfa15c] text-white placeholder-white/35 transition"
                    />
                  </div>

                  {/* Dual Grid Selections for timing and location preference */}
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Time Preferences selection */}
                    <div>
                      <label class="block text-xs uppercase tracking-widest font-sans-lux font-medium text-[#cfa15c] mb-2 font-semibold">
                        Horário Desejado
                      </label>
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        class="w-full bg-[#140602] border border-[#cfa15c]/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#cfa15c] focus:border-[#cfa15c] text-white transition cursor-pointer"
                      >
                        <option value="19:00">19:00 - Recepção</option>
                        <option value="19:30">19:30 - Serviço Inicial</option>
                        <option value="21:00">21:00 - Jantar Especial</option>
                        <option value="21:30">21:30 - Piano Noturno</option>
                        <option value="22:30">22:30 - Saideira</option>
                      </select>
                    </div>

                    {/* Ambience / Location selector within restaurant */}
                    <div>
                      <label class="block text-xs uppercase tracking-widest font-sans-lux font-medium text-[#cfa15c] mb-2 font-semibold">
                        Ambiente Preferido
                      </label>
                      <select
                        value={seating}
                        onChange={(e) => setSeating(e.target.value)}
                        class="w-full bg-[#140602] border border-[#cfa15c]/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#cfa15c] focus:border-[#cfa15c] text-white transition cursor-pointer"
                      >
                        <option value="Piano Bar">Salão Piano Bar 🎹</option>
                        <option value="Salão Nobre">Salão Clássico Nobre ✨</option>
                        <option value="Jardim de Inverno">Jardim de Inverno 🌸</option>
                        <option value="Varanda Intimista">Varanda Intimista 💕</option>
                      </select>
                    </div>

                  </div>

                  {/* Special Requests / Dietary information */}
                  <div>
                    <label class="block text-xs uppercase tracking-widest font-sans-lux font-medium text-[#cfa15c] mb-2 font-semibold">
                      Restrições Alimentares ou Observações
                    </label>
                    <textarea
                      rows={2}
                      value={dietary}
                      onChange={(e) => setDietary(e.target.value)}
                      placeholder="Ex: Um de nós é vegetariano / comemoração de aniversário"
                      class="w-full bg-[#140602]/70 border border-[#cfa15c]/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#cfa15c] focus:border-[#cfa15c] text-white placeholder-white/35 transition resize-none"
                    />
                  </div>

                  {/* Submission triggers */}
                  <div class="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      class="w-full bg-[#cfa15c] text-white hover:bg-[#e4be81] transition duration-300 disabled:opacity-50 rounded-full py-3.5 px-6 text-xs uppercase font-sans-lux tracking-[0.2em] font-bold shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                    >
                      {isSubmitting ? (
                        <span class="flex items-center gap-2">
                          <svg class="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processando Mapeamento...
                        </span>
                      ) : (
                        <span class="flex items-center gap-2">
                          Enviar Solicitação <ArrowRight class="w-4 h-4" />
                        </span>
                      )}
                    </button>
                  </div>

                </form>
              ) : (
                
                // Succession Screen
                <div class="text-center py-6 px-4 flex flex-col items-center">
                  
                  {/* Animated success icons */}
                  <div class="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500 flex items-center justify-center text-emerald-500 mb-6 animate-bounce">
                    <Check className="w-8 h-8" />
                  </div>

                  <h4 class="font-serif-lux text-2xl text-white font-medium mb-3">
                    Pré-Reserva Solicitada!
                  </h4>
                  
                  <p class="font-sans-lux text-sm text-[#9c897f] max-w-sm mb-8 leading-relaxed">
                    Parabéns, {coupleName.split(' ')[0]}! Seus dados foram validados com sucesso no nosso sistema de reservas do <strong>Baby Beef Jardim</strong>.
                  </p>

                  {/* Digital Invitation Pass / VIP Voucher mockup */}
                  <div class="w-full max-w-sm bg-[#160a04] border border-[#cfa15c]/40 rounded-xl p-5 text-left mb-8 relative overflow-hidden shadow-2xl">
                    <div class="absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full bg-[#cfa15c]/5 border border-[#cfa15c]/10" />
                    
                    <div class="flex justify-between items-center border-b border-[#2e1d15] pb-3 mb-4">
                      <span class="text-[10px] uppercase font-sans-lux tracking-[0.2em] text-[#cfa15c] font-semibold">
                        Voucher Pré-Reserva VIP
                      </span>
                      <span class="text-xs font-sans-lux text-[#f5efe6] font-medium uppercase font-semibold">
                        Nº {Math.floor(1000 + Math.random() * 9000)}
                      </span>
                    </div>

                    <div class="space-y-3 font-sans-lux text-xs text-[#9c897f]">
                      <div class="flex justify-between">
                        <span>Casal Titular:</span>
                        <strong class="text-white font-medium">{coupleName}</strong>
                      </div>
                      <div class="flex justify-between">
                        <span>Data do Evento:</span>
                        <strong class="text-white font-medium">12 de Junho, 2026</strong>
                      </div>
                      <div class="flex justify-between">
                        <span>Horário de Entrada:</span>
                        <strong class="text-[#cfa15c] font-medium">{time}h</strong>
                      </div>
                      <div class="flex justify-between">
                        <span>Ambiente de Escolha:</span>
                        <strong class="text-[#cfa15c] font-medium uppercase text-[10px] tracking-wide">{seating}</strong>
                      </div>
                    </div>

                  </div>

                  {/* Main Action WhatsApp Direct Redirect link */}
                  <div class="w-full space-y-3">
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="w-full bg-[#25D366] text-white hover:bg-[#1ebd5d] transition duration-300 rounded-full py-3.5 px-6 text-xs uppercase font-sans-lux tracking-[0.2em] font-bold shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Falar no WhatsApp e Confirmar</span>
                    </a>
                    
                    <button
                      onClick={closeReserveModal}
                      class="text-xs uppercase tracking-widest text-[#9c897f] hover:text-[#f5efe6] transition"
                    >
                      Voltar ao Site
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
