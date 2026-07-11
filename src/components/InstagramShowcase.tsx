import { motion } from 'motion/react';
import { Heart, MessageCircle, Share2, Compass } from 'lucide-react';

interface VideoShowcase {
  id: number;
  videoUrl: string;
  instagramUrl: string;
  title: string;
}

const SHOWCASE_VIDEOS: VideoShowcase[] = [
  {
    id: 15,
    videoUrl: '/videos/SnapInsta.to_AQMNL6LVxdS-1gsKHwgLioSyoQ58KFj8oYadbuDmr4S3PbT5PHokoRevWaTaq6RMDDNF4SSMwrnMZE-yxpCdfQLAXsmcJXjGxKXIa24.mp4',
    instagramUrl: 'https://www.instagram.com/p/DaLLCuKIz3f/',
    title: 'Emergency Leak Control'
  },
  {
    id: 16,
    videoUrl: '/videos/SnapInsta.to_AQNgBmMAeGJ47mArRcGNrpSVuSL9Yf2tC3sj7gPQXTPffeuHoIKKyhqdo_abx9DCweOUvpoqyYS4cR7JBp1lPDdAy0iSYLYG2qpulgk.mp4',
    instagramUrl: 'https://www.instagram.com/p/DaEvc-LIvcW/',
    title: 'Precision Copper Fitting'
  },
  {
    id: 17,
    videoUrl: '/videos/SnapInsta.to_AQO1McQUYtcV8BJ7omashOco_qw4DpdLmAqI0WEukSlz81j3Kv0bU4jU0PErpUdM2-xRgalABLLsPy_tnxlASQzoOLDI1QJr3kFt7DY.mp4',
    instagramUrl: 'https://www.instagram.com/p/DZ3MMrVSdI-/',
    title: 'Camera Pipeline Audit'
  },
  {
    id: 18,
    videoUrl: '/videos/SnapInsta.to_AQObQfiDEsMFhKqVqOGnrHp3-1YgCm6qy6buO6TP00H21r22rngtPVvxDGNe2Yij_P5GMGtRoMx2D71Q4387nAg0oH4W46-vgPPwpEw.mp4',
    instagramUrl: 'https://www.instagram.com/p/DZ30BCtoqSu/',
    title: 'Hydro-Jetting Drain Clear'
  },
  {
    id: 19,
    videoUrl: '/videos/SnapInsta.to_AQO7d55zOkDSSAI9XBJmefQowuo2vshCYl99e_-Wprn7AL2c-tBdWfhjAidhxCuIfVC4NPmj0xygCnXNsYCFusQGvSt4hBNSbxaZKG0.mp4',
    instagramUrl: 'https://www.instagram.com/',
    title: 'Custom Shut-off Valves'
  },
  {
    id: 20,
    videoUrl: '/videos/SnapInsta.to_AQPXi3I7ZZWP9MYYb5gB6rVsY_-5V9dor_ecqWasCbiUOyZBGHJB5vGuBEwlqBeiQyuAxGcp_BZxjYyYaNJoFQxTGc2CGjtdmLBFTdc.mp4',
    instagramUrl: 'https://www.instagram.com/p/DWfLqovD2CU/',
    title: 'Water Heater Swap'
  },
  {
    id: 21,
    videoUrl: '/videos/SnapInsta.to_AQOTXjuF8hDUkO-yADZDGuXBkJ_DvnPCPaX2oulFy52W4daIFfBQkIWccg_qznA3GTQWY4sHUJFT9K9w8V3wFDZHXTbaPM8L1UPehCc.mp4',
    instagramUrl: 'https://www.instagram.com/p/DaX-9Q3IXA_/',
    title: 'Polished Fixture Details'
  },
  {
    id: 22,
    videoUrl: '/videos/SnapInsta.to_AQPPZuNdvYyOwisBYl4oO0UY7Dx2yTurEaG3cNw7Hafb9BcLDgxsbpMEQR4lQRyk5ApqQsnAYv1Iy3b52CW_pDLWh0_ajgbyHy-RdT4.mp4',
    instagramUrl: 'https://www.instagram.com/',
    title: 'Sewer Line Fitting'
  }
];

const InstagramIcon = ({ size = 24, ...props }: { size?: number } & React.SVGProps<SVGSVGElement>) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export function InstagramShowcase() {
  const handleClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="instagram-showcase" className="relative py-28 bg-[#0b1012] overflow-hidden">
      <div className="section-divider" />
      <div className="absolute inset-0 bg-dots opacity-[0.12] pointer-events-none" />
      
      {/* Geometric Background Shapes */}
      <div className="absolute top-0 right-0 w-3/4 h-[120%] bg-[#141b1e] transform rotate-12 translate-x-1/4 -translate-y-1/4 pointer-events-none" style={{ clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)' }} />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[#83c95b]/5 transform -rotate-6 -translate-x-1/4 translate-y-1/4 pointer-events-none" style={{ clipPath: 'polygon(0% 0%, 100% 20%, 80% 100%, 0% 100%)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#83c95b]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="section-kicker text-[#83c95b]">Showcase</p>
            <h2 className="section-title text-white">Watch us work.</h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-[#a8b0b8]">
            Real footage from our recent service calls. Hover over any screen to play, and click to view the original post on Instagram.
          </p>
        </div>

        {/* Mock iPhone Reels Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {SHOWCASE_VIDEOS.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="group relative aspect-[9/18] rounded-[30px] overflow-hidden bg-black border-[5px] border-black/90 shadow-2xl shadow-black/80 hover:scale-[1.03] transition-all duration-300"
              style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(255, 255, 255, 0.1) inset'
              }}
            >
              {/* iPhone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70px] h-[15px] bg-black/95 rounded-b-[10px] z-30 flex items-center justify-center pointer-events-none">
                <span className="w-10 h-[2px] bg-white/10 rounded-full mb-[4px]" />
                <span className="w-1.5 h-1.5 bg-blue-900/40 rounded-full ml-1.5 mb-[4px]" />
              </div>

              {/* iPhone Signal Bars Overlay */}
              <div className="absolute top-1 left-3 right-3 flex justify-between text-[8px] font-bold text-white/70 z-30 select-none pointer-events-none">
                <span>9:41</span>
                <div className="flex items-center gap-1">
                  <span>5G</span>
                  <span className="w-3.5 h-2 border border-white/50 rounded-sm inline-block relative bg-white/60" />
                </div>
              </div>

              <video
                muted
                loop
                autoPlay
                playsInline
                className="w-full h-full object-cover transition-all duration-700 brightness-[90%] group-hover:brightness-[100%] group-hover:scale-105"
              >
                <source src={item.videoUrl} type="video/mp4" />
              </video>

              {/* Dark Instagram style bottom/top vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none transition-opacity duration-300 opacity-60 group-hover:opacity-75" />

              {/* Reels Sidebar & Overlays */}
              <div className="absolute inset-0 flex flex-col justify-between p-4.5 pt-7 z-10 pointer-events-none select-none">
                {/* Reels text marker */}
                <div className="text-[10px] font-bold uppercase tracking-wider text-white/80 flex items-center gap-1.5">
                  <Compass size={12} className="text-[#83c95b]" /> Reels
                </div>

                <div className="flex items-end justify-between gap-4 mt-auto">
                  {/* Left Bottom Video Info */}
                  <div className="space-y-1.5 min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full border border-white/20 bg-white/10 flex items-center justify-center overflow-hidden shrink-0">
                        <InstagramIcon size={10} className="text-white" />
                      </div>
                      <span className="text-[9px] font-black text-white truncate">@jj_plumbing</span>
                    </div>
                    <p className="text-[10px] font-medium text-white truncate">
                      {item.title}
                    </p>
                    <button 
                      onClick={() => handleClick(item.instagramUrl)}
                      className="text-[9px] text-[#83c95b] font-extrabold flex items-center gap-1 hover:underline cursor-pointer pointer-events-auto"
                    >
                      <InstagramIcon size={8} /> View Post
                    </button>
                  </div>

                  {/* Right Reels action bar mockup */}
                  <div className="flex flex-col gap-3.5 items-center text-white/90 shrink-0">
                    <div className="flex flex-col items-center">
                      <div className="bg-black/35 p-1.5 rounded-full backdrop-blur-md">
                        <Heart size={13} fill="white" className="text-white" />
                      </div>
                      <span className="text-[7px] font-bold mt-0.5">Likes</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-black/35 p-1.5 rounded-full backdrop-blur-md">
                        <MessageCircle size={13} fill="white" className="text-white" />
                      </div>
                      <span className="text-[7px] font-bold mt-0.5">Reply</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-black/35 p-1.5 rounded-full backdrop-blur-md">
                        <Share2 size={13} className="text-white" />
                      </div>
                      <span className="text-[7px] font-bold mt-0.5">Share</span>
                    </div>
                  </div>
                </div>
              </div>

            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
