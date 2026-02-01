import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
// Fixed imports based on your error logs: removed duplicate MapPin and added Instagram/Linkedin
import { X, ChevronLeft, ChevronRight, Instagram, Linkedin } from "lucide-react";

const galleryImages = [
  { src: "/gallery1.JPG", alt: "Our Team" },
  { src: "/gallery2.JPG", alt: "Inaugration Ceremony" },
  { src: "/gallery3.JPG", alt: "Our Team" },
  { src: "/hero3.png", alt: "Interrupt '25" },
  { src: "/gallery5.jpg", alt: "Hackerrupt '25" },
];

export default function GalleryPage() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);

  const next = () => setIndex((prev) => (prev + 1) % galleryImages.length);
  const prev = () => setIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-white via-[#f0fdfa] to-[#e6fffa] pt-24 pb-20 px-6">
      {/* Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#2dd4bf]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#2dd4bf]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header - Gap reduced here (mb-12 changed to mb-2) */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-2 relative z-10">
        <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter text-gray-900">Gallery</h1>
        <div className="w-24 h-2 bg-[#2dd4bf] mx-auto rounded-full mb-4 shadow-[0_4px_15px_rgba(45,212,191,0.4)]" />
        <p className="text-gray-500 text-lg font-medium italic">Capturing the scale of our innovation and teamwork</p>
      </motion.div>

      {/* Enhanced Ultra-Wide Smooth 3D Carousel */}
      {/* Added negative margin top (-mt-8) to pull the pictures closer to the text */}
      <div className="relative h-[600px] md:h-[700px] flex items-center justify-center perspective-2000 z-20 -mt-8">
        <div className="relative w-full max-w-[1600px] h-full flex items-center justify-center">
          <AnimatePresence mode="popLayout" initial={false}>
            {[-1, 0, 1].map((offset) => {
              const itemIndex = (index + offset + galleryImages.length) % galleryImages.length;
              const isCenter = offset === 0;

              return (
                <motion.div
                  key={itemIndex}
                  initial={{ opacity: 0, scale: 0.8, x: offset * 800 }}
                  animate={{ 
                    opacity: isCenter ? 1 : 0.4, 
                    scale: isCenter ? 1.15 : 0.85, 
                    x: offset * (window.innerWidth < 768 ? 250 : 600),
                    zIndex: isCenter ? 50 : 10,
                    rotateY: offset * -15,
                  }}
                  exit={{ opacity: 0, scale: 0.8, x: offset * -800 }}
                  transition={{ 
                    type: "tween", 
                    ease: [0.4, 0, 0.2, 1], 
                    duration: 0.7 
                  }}
                  onClick={() => isCenter ? setSelected(galleryImages[itemIndex].src) : setIndex(itemIndex)}
                  className="absolute cursor-pointer w-[320px] md:w-[800px] aspect-video rounded-[3rem] overflow-visible"
                >
                  <div className={`relative w-full h-full backdrop-blur-3xl overflow-hidden transition-all duration-700 rounded-[3rem] ${
                    isCenter 
                    ? "shadow-[0_50px_100px_rgba(45,212,191,0.3)] ring-2 ring-[#2dd4bf]/20" 
                    : "opacity-60 ring-1 ring-white/20"
                  }`}>
                    <img 
                      src={galleryImages[itemIndex].src} 
                      alt={galleryImages[itemIndex].alt} 
                      className="w-full h-full object-cover"
                    />
                    
                    {isCenter && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-max px-10 py-4 bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50"
                      >
                        <p className="text-[11px] font-black uppercase tracking-[0.25em] text-[#14b8a6]">
                          {galleryImages[itemIndex].alt}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="absolute bottom-0 flex gap-8 z-50">
          <button onClick={prev} className="p-5 rounded-full bg-white/90 backdrop-blur-xl border border-white/50 text-[#14b8a6] hover:bg-[#2dd4bf] hover:text-white transition-all shadow-xl hover:scale-110 active:scale-95">
            <ChevronLeft size={28} />
          </button>
          <button onClick={next} className="p-5 rounded-full bg-white/90 backdrop-blur-xl border border-white/50 text-[#14b8a6] hover:bg-[#2dd4bf] hover:text-white transition-all shadow-xl hover:scale-110 active:scale-95">
            <ChevronRight size={28} />
          </button>
        </div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selected && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-gray-900/90 backdrop-blur-2xl flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-[95vw] max-h-[90vh]"
            >
              <img 
                src={selected} 
                className="w-full h-full object-contain rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5)]" 
                alt="Selected"
              />
              <button 
                className="absolute -top-12 right-0 text-white hover:text-[#2dd4bf] transition-colors"
                onClick={() => setSelected(null)}
              >
                <X size={40} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}