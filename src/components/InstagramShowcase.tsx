import { useRef, useState, type SVGProps } from "react";
import { motion } from "motion/react";
import { Compass, Play, Pause } from "lucide-react";

interface VideoShowcase {
  id: number;
  videoUrl: string;
  instagramUrl: string;
  title: string;
}

const SHOWCASE_VIDEOS: VideoShowcase[] = [
  {
    id: 15,
    videoUrl: "/videos/SnapInsta.to_AQMNL6LVxdS-1gsKHwgLioSyoQ58KFj8oYadbuDmr4S3PbT5PHokoRevWaTaq6RMDDNF4SSMwrnMZE-yxpCdfQLAXsmcJXjGxKXIa24.mp4",
    instagramUrl: "https://www.instagram.com/p/DaLLCuKIz3f/",
    title: "Emergency Leak Control",
  },
  {
    id: 16,
    videoUrl: "/videos/SnapInsta.to_AQNgBmMAeGJ47mArRcGNrpSVuSL9Yf2tC3sj7gPQXTPffeuHoIKKyhqdo_abx9DCweOUvpoqyYS4cR7JBp1lPDdAy0iSYLYG2qpulgk.mp4",
    instagramUrl: "https://www.instagram.com/p/DaEvc-LIvcW/",
    title: "Precision Copper Fitting",
  },
  {
    id: 17,
    videoUrl: "/videos/SnapInsta.to_AQO1McQUYtcV8BJ7omashOco_qw4DpdLmAqI0WEukSlz81j3Kv0bU4jU0PErpUdM2-xRgalABLLsPy_tnxlASQzoOLDI1QJr3kFt7DY.mp4",
    instagramUrl: "https://www.instagram.com/p/DZ3MMrVSdI-/",
    title: "Camera Pipeline Audit",
  },
  {
    id: 18,
    videoUrl: "/videos/SnapInsta.to_AQObQfiDEsMFhKqVqOGnrHp3-1YgCm6qy6buO6TP00H21r22rngtPVvxDGNe2Yij_P5GMGtRoMx2D71Q4387nAg0oH4W46-vgPPwpEw.mp4",
    instagramUrl: "https://www.instagram.com/p/DZ30BCtoqSu/",
    title: "Hydro-Jetting Drain Clear",
  },
  {
    id: 19,
    videoUrl: "/videos/SnapInsta.to_AQO7d55zOkDSSAI9XBJmefQowuo2vshCYl99e_-Wprn7AL2c-tBdWfhjAidhxCuIfVC4NPmj0xygCnXNsYCFusQGvSt4hBNSbxaZKG0.mp4",
    instagramUrl: "https://www.instagram.com/",
    title: "Custom Shut-off Valves",
  },
  {
    id: 20,
    videoUrl: "/videos/SnapInsta.to_AQPXi3I7ZZWP9MYYb5gB6rVsY_-5V9dor_ecqWasCbiUOyZBGHJB5vGuBEwlqBeiQyuAxGcp_BZxjYyYaNJoFQxTGc2CGjtdmLBFTdc.mp4",
    instagramUrl: "https://www.instagram.com/p/DWfLqovD2CU/",
    title: "Water Heater Swap",
  },
  {
    id: 21,
    videoUrl: "/videos/SnapInsta.to_AQOTXjuF8hDUkO-yADZDGuXBkJ_DvnPCPaX2oulFy52W4daIFfBQkIWccg_qznA3GTQWY4sHUJFT9K9w8V3wFDZHXTbaPM8L1UPehCc.mp4",
    instagramUrl: "https://www.instagram.com/p/DaX-9Q3IXA_/",
    title: "Polished Fixture Details",
  },
  {
    id: 22,
    videoUrl: "/videos/SnapInsta.to_AQPPZuNdvYyOwisBYl4oO0UY7Dx2yTurEaG3cNw7Hafb9BcLDgxsbpMEQR4lQRyk5ApqQsnAYv1Iy3b52CW_pDLWh0_ajgbyHy-RdT4.mp4",
    instagramUrl: "https://www.instagram.com/",
    title: "Sewer Line Fitting",
  },
];

const InstagramIcon = ({ size = 16, ...props }: { size?: number } & SVGProps<SVGSVGElement>) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

function VideoCard({ item, isFeatured = false }: { item: VideoShowcase; isFeatured?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  const togglePlay = (e: React.MouseEvent) => {
    // Prevent trigger if they clicked the Instagram View Post button
    if ((e.target as HTMLElement).closest(".ig-link")) return;

    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
        setPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setPlaying(true);
      }
    }
  };

  return (
    <motion.article
      onClick={togglePlay}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-black shadow-lg cursor-pointer ${
        isFeatured ? "col-span-2 row-span-2 aspect-square md:aspect-auto md:h-full" : "aspect-[9/16]"
      }`}
    >
      <video
        ref={videoRef}
        muted
        loop
        autoPlay
        playsInline
        className="h-full w-full object-cover brightness-[88%] transition-all duration-700 group-hover:scale-102 group-hover:brightness-100"
      >
        <source src={item.videoUrl} type="video/mp4" />
      </video>

      {/* Play/Pause state indicator overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
        <div className="bg-white/15 backdrop-blur-md p-3 rounded-full border border-white/20 text-white">
          {playing ? <Pause size={20} /> : <Play size={20} fill="white" />}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none z-10" />

      {/* Video details overlay */}
      <div className="absolute inset-x-0 bottom-0 p-5 z-20 flex flex-col gap-2.5">
        <span className="inline-flex items-center gap-1.5 self-start bg-[#83c95b]/20 border border-[#83c95b]/30 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-wider text-[#83c95b]">
          <Compass size={10} /> Reels
        </span>
        
        <div>
          <h4 className="text-white font-extrabold text-sm md:text-base leading-tight tracking-tight">
            {item.title}
          </h4>
          <p className="text-[10px] text-white/60 font-semibold mt-0.5">@jj_plumbing</p>
        </div>

        {/* View Post Button */}
        <a
          href={item.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ig-link inline-flex items-center gap-2 self-start rounded-lg bg-white/10 hover:bg-[#83c95b] hover:text-[#0b1012] border border-white/10 hover:border-transparent px-3 py-1.5 text-[10px] font-black text-white uppercase tracking-wider transition-all"
        >
          <InstagramIcon size={12} />
          View Original
        </a>
      </div>
    </motion.article>
  );
}

export function InstagramShowcase() {
  return (
    <section id="instagram-showcase" className="relative overflow-hidden bg-[#0b1012] py-20 lg:py-28">
      <div aria-hidden className="absolute inset-0 site-grid opacity-[0.08] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-[#83c95b]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* Centered Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <p className="section-kicker font-extrabold tracking-[0.2em] text-[#83c95b]">Showcase</p>
          <h2 className="section-title text-4xl font-black text-white lg:text-5xl leading-tight font-heading">
            Watch Us Work
          </h2>
          <p className="text-sm leading-relaxed text-[#a8b0b8] md:text-base">
            Real footage from recent customer calls. Tap any screen to play or pause, and click the Instagram icon to read original reviews.
          </p>
        </div>

        {/* Dynamic media grid with 1 Featured & 6 Supporting reels */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-6 items-stretch">
          <VideoCard item={SHOWCASE_VIDEOS[0]} isFeatured={true} />
          {SHOWCASE_VIDEOS.slice(1, 7).map((item) => (
            <VideoCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
