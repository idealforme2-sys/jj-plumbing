import { motion } from 'motion/react';
import { Play } from 'lucide-react';

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

export function InstagramShowcase() {
  const handleClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="instagram-showcase" className="relative py-24 bg-[#0b1012] overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-dots opacity-10 pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="section-kicker text-[#83c95b]">Showcase</p>
            <h2 className="section-title text-white">Watch us work.</h2>
          </div>
          <p className="max-w-md text-base leading-7 text-[#a8b0b8]">
            Real footage from our recent service calls. Click any video to view the original post and comments on Instagram.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {SHOWCASE_VIDEOS.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.05 }}
              onClick={() => handleClick(item.instagramUrl)}
              className="group relative cursor-pointer aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 bg-white/[0.01] hover:border-[#83c95b]/50 transition-all shadow-xl shadow-black/40"
            >
              {/* Local Video Tag */}
              <video
                muted
                loop
                playsInline
                preload="metadata"
                onMouseEnter={(e) => {
                  e.currentTarget.play().catch(() => {});
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.pause();
                  e.currentTarget.currentTime = 0;
                }}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              >
                <source src={item.videoUrl} type="video/mp4" />
              </video>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1012] via-transparent to-black/30 pointer-events-none transition-opacity duration-300 opacity-60 group-hover:opacity-40" />

              {/* Interaction Indicators */}
              <div className="absolute inset-0 flex flex-col justify-between p-4 z-10 pointer-events-none">
                {/* Top Instagram Icon */}
                <div className="self-end bg-black/40 backdrop-blur-md border border-white/10 p-2 rounded-full text-white group-hover:bg-[#83c95b] group-hover:text-[#0b1012] transition-colors duration-300">
                  <InstagramIcon size={16} />
                </div>

                {/* Center Play Icon (visible by default, morphs on hover) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-black/50 backdrop-blur-md border border-white/15 p-4 rounded-full text-[#83c95b] shadow-2xl scale-100 group-hover:scale-110 opacity-80 group-hover:opacity-100 transition-all duration-300">
                    <Play size={20} fill="currentColor" />
                  </div>
                </div>

                {/* Bottom Title */}
                <div className="space-y-1">
                  <p className="text-xs font-bold text-white tracking-wide uppercase">
                    {item.title}
                  </p>
                  <p className="text-[10px] text-[#83c95b] font-semibold flex items-center gap-1 group-hover:underline">
                    <InstagramIcon size={10} /> View Post
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
