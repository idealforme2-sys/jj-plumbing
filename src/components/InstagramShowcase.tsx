import { motion } from 'motion/react';
import { Camera, Play } from 'lucide-react';

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
  const openPost = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="instagram-showcase" className="relative overflow-hidden bg-[#0b1012] py-20 md:py-24">
      <div className="absolute inset-0 site-grid opacity-10 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-2 bg-[#83c95b]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-kicker text-[#83c95b]">Showcase</p>
            <h2 className="section-title text-white">Watch us work.</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[#a8b0b8] lg:justify-self-end">
            Real footage from recent service calls, presented like a field wall instead of a quiet gallery.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-5">
          {SHOWCASE_VIDEOS.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ delay: index * 0.02 }}
              onClick={() => openPost(item.instagramUrl)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') openPost(item.instagramUrl);
              }}
              role="link"
              aria-label={`Open ${item.title} on Instagram`}
              tabIndex={0}
              className="group relative aspect-[9/16] cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30 focus:outline-none focus:border-[#83c95b]"
            >
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
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              >
                <source src={item.videoUrl} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1012] via-[#0b1012]/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <div className="flex justify-end">
                  <span className="rounded-full bg-[#83c95b] p-2 text-[#0b1012]">
                    <Camera size={16} />
                  </span>
                </div>
                <div className="flex justify-center">
                  <span className="rounded-full border border-white/15 bg-black/50 p-4 text-[#83c95b] backdrop-blur">
                    <Play size={20} fill="currentColor" />
                  </span>
                </div>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wide text-white">{item.title}</p>
                  <p className="mt-1 flex items-center gap-1 text-[10px] font-bold uppercase tracking-[.14em] text-[#83c95b]">
                    <Camera size={10} /> View post
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
