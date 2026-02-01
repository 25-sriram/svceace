import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const teams = {
 "Core Team": [
        { name: "Mithun S", role: "President", image: "/mithun.png" },
        { name: "Kiran M S", role: "Vice President", image: "/kiran.png" },
        { name: "Srinidhi S", role: "Vice President", image: "/srinidhi.png" },
        { name: "Harsh S", role: "Vice President", image: "/harsh.png" },
        { name: "Jai Krishna Prasath D", role: "Secretary", image: "/jai.jpg" },
        { name: "Sarvesh Raghav B", role: "Operations Head", image: "/raghav1.png" },
        { name: "Ashika Haseen S", role: "Treasurer", image: "/ashika.png" },
        { name: "Nirrmal G", role: "Joint Secretary", image: "/nirrms.png" },
    ],
    "Executive Team": [
        { name: "Johan A", role: "Executive Associative", image: "/johan.png" },
        { name: "Aravintth T", role: "Executive Associative", image: "/aravintth.jpeg"},
        { name: "Shrinithi Dasarathy", role: "Executive Associative", image: "/shrinithi.png" },
        { name: "Kavya K P", role: "Executive Associative", image: "/kavya.png" },
        { name: "Mirthun K S", role: "Executive Member", image: "/mirthun.png" },
        { name: "Shree Kowsik S B", role: "Executive Member", image: "/kowsik.png" },
        { name: "Salai B Dharshini", role: "Executive Member", image: "/salai.png" },
        { name: "C Dhinesh", role: "Executive Member", image: "/dhinesh.png" },
        { name: "Alagu Manikandan", role: "Executive Member", image: "/am.png" },
        { name: "Rethinagiri S", role: "Executive Member", image: "/rethinagiri.png" },
        { name: "Arpitha Paraneetharan", role: "Executive Member", image: "/arpritha.png" },
        { name: "Kesava Navya", role: "Executive Member", image: "/kesava.png" },
    ],
    "Web Team": [
        { name: "Sharmile S", role: "Web Team Lead", image: "/sharmile.png" },
        { name: "Sri Ram R", role: "Web Team Member", image: "/sri.png" },
        { name: "B Jashwanth Kumar", role: "Web Team Member", image: "/jaswanth.png" },
    ],
    "Design Team": [
        { name: "Aneesh Kumar R", role: "Design Team Head", image: "/aneesh.jpg" },
        { name: "Nantha Kishore S", role: "Design Team Member", image: "/nantha.png" },
        { name: "Kanisha S", role: "Design Team Head", image: "/kanisha.png" },
        { name: "Rajeshwari B C", role: "Design Team Member", image: "/raje.png" },
        { name: "Kavinithi R P", role: "Design Team Member", image: "/kavinithi.png" },
    ],
    "Content Team": [
        { name: "Sadhana S", role: "Content Team Head", image: "/sadhana.png" },
        { name: "Mona Shree", role: "Content Team Member", image: "/mona.png" },
        { name: "Vaishnavi Chitraa M", role: "Content Team Member", image: "/vaishnavi.png" },
        { name: "Tharun Kumar T", role: "Content Team Member", image: "/tk.png" },
    ],
    "Marketting And Outreach Team": [
        { name: "Shashank N S", role: "Marketting Team Head", image: "/shashank.png" },
        { name: "Hariganesh A", role: "Outreach Team Head", image: "/hari.jpeg" },
        { name: "Priyanka A", role: "Marketting Team Member", image: "/priyanka.png" },
        { name: "Sharmila M", role: "Marketting Team Member", image: "/sharmila.png" },
        { name: "Bhavana G", role: "Marketting Team Member", image: "/bhavana.png" },
    ],
    "Photography Team": [
        { name: "V Raghav", role: "Photography Team Member", image: "/raghav.png" },
    ],
    "Faculty Co-ordinator": [
        { name: "Dr. G Janaka Sudha", role: "Faculty Coordinator", image: "/js.jpg" },
        { name: "Mr. K Srinivasan", role: "Faculty Coordinator", image: "/srinivasan.jpg" },
        { name: "Mr. R Gnanavel", role: "Faculty Coordinator", image: "/vel.jpg" }
    ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1 } 
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  }
};

export default function TeamsPage() {
  const [activeTab, setActiveTab] = useState("Core Team");
  const [clickedMember, setClickedMember] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-white via-[#f0fdfa] to-[#e6fffa]">
      {/* Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#2dd4bf]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-[#2dd4bf]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-20 pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter text-gray-900">Our Leadership</h1>
          <div className="w-24 h-2 bg-[#2dd4bf] mx-auto rounded-full mb-6 shadow-[0_4px_15px_rgba(45,212,191,0.4)]" />
          <p className="text-gray-500 text-lg font-medium italic">The brilliant minds behind ACE</p>
        </motion.div>

        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center gap-3 p-2 mb-24 bg-white/70 backdrop-blur-2xl rounded-[2rem] border border-white/80 w-fit mx-auto shadow-lg">
          {Object.keys(teams).map((team) => (
            <button 
              key={team}
              onClick={() => setActiveTab(team)}
              className={`px-8 py-3 rounded-[1.5rem] text-sm font-black uppercase tracking-widest transition-all duration-300 ${
                activeTab === team 
                  ? "bg-[#2dd4bf] text-white shadow-[0_10px_20px_rgba(45,212,191,0.3)]" 
                  : "text-gray-400 hover:text-gray-900 hover:bg-[#2dd4bf]/10"
              }`}
            >
              {team}
            </button>
          ))}
        </div>

        {/* Members Grid - Center Justified */}
        <div className="flex justify-center">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeTab}
            className="flex flex-wrap justify-center gap-8 w-full"
          >
            <AnimatePresence mode="wait">
              {teams[activeTab as keyof typeof teams]?.map((member) => (
                <motion.div 
                  variants={itemVariants}
                  key={member.name} 
                  whileHover={{ y: -10 }}
                  onClick={() => setClickedMember(clickedMember === member.name ? null : member.name)}
                  className="group cursor-pointer"
                >
                  {/* Transparent Grey Glass Card with Green Theme Glow on Click */}
                  <div className={`relative w-[280px] overflow-hidden transition-all duration-500 backdrop-blur-3xl border rounded-[2.5rem] p-6 text-center ${
                    clickedMember === member.name 
                    ? "bg-[#2dd4bf]/20 border-[#2dd4bf] shadow-[0_0_40px_rgba(45,212,191,0.4)] scale-[1.02]" 
                    : "bg-gray-900/10 border-white/60 hover:border-white/90 shadow-2xl"
                  }`}>
                    
                    {/* Interior Lighting */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-40 pointer-events-none" />

                    {/* Image Squircle */}
                    <div className="relative w-full aspect-square mb-6">
                      <div className={`absolute inset-0 rounded-[2rem] blur-2xl transition-opacity duration-500 ${
                        clickedMember === member.name ? "bg-[#2dd4bf]/60 opacity-100" : "bg-[#2dd4bf]/20 opacity-0 group-hover:opacity-100"
                      }`} />
                      <div className={`relative w-full h-full rounded-[2rem] overflow-hidden border-2 transition-all duration-500 shadow-lg ${
                        clickedMember === member.name ? "border-[#2dd4bf]" : "border-white/50 group-hover:border-[#2dd4bf]"
                      }`}>
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                      </div>
                    </div>

                    {/* Reduced Font Text Content */}
                    <div className="space-y-4">
                      <h3 className={`font-bold text-lg tracking-tight transition-colors duration-300 ${
                        clickedMember === member.name ? "text-gray-900" : "text-gray-800"
                      }`}>
                        {member.name}
                      </h3>

                      {/* Position Badge with Target Hover Glow */}
                      <div className={`inline-block px-5 py-2 rounded-xl backdrop-blur-xl border transition-all duration-500 ${
                        clickedMember === member.name 
                        ? "bg-[#2dd4bf] text-white border-[#2dd4bf] shadow-[0_0_20px_rgba(45,212,191,0.6)]" 
                        : "bg-white/50 border-white text-[#14b8a6] shadow-sm group-hover:shadow-[0_0_15px_rgba(45,212,191,0.5)] group-hover:border-[#2dd4bf]/40"
                      }`}>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em]">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}