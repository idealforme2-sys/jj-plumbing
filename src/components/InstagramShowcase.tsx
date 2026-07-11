import type { SVGProps } from "react";
import { motion } from "motion/react";
import { Compass, Heart, MessageCircle, Share2 } from "lucide-react";

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

const InstagramIcon = ({ size = 24, ...props }: { size?: number } & SVGProps<SVGSVGElement>) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export function InstagramShowcase() {
  const handleClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="instagram-showcase" className="relative overflow-hidden bg-primary py-20 lg:py-28">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-accent" />
      <div aria-hidden className="absolute inset-0 bg-dots opacity-[0.1]" />
      <div aria-hidden className="absolute inset-y-0 left-[-20%] w-[58%] -skew-x-12 bg-secondary" />
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 w-[54%] bg-accent/10 [clip-path:polygon(22%_0,100%_0,100%_100%,0_100%)]"
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="section-kicker">Showcase</p>
            <h2 className="section-title text-white">Watch us work.</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-text-muted md:justify-self-end md:text-base">
            Real footage from recent service calls. Hover over any screen to play, and click view original post on Instagram.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:gap-7">
          {SHOWCASE_VIDEOS.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.04, duration: 0.42 }}
              className="group relative aspect-[9/18] overflow-hidden rounded-[26px] border-[5px] border-black/90 bg-black shadow-2xl shadow-black/60 transition-transform duration-300 hover:scale-[1.025]"
            >
              <div className="absolute left-1/2 top-0 z-30 flex h-[15px] w-[70px] -translate-x-1/2 items-center justify-center rounded-b-[10px] bg-black/95 pointer-events-none">
                <span className="mb-[4px] h-[2px] w-10 rounded-full bg-white/10" />
                <span className="mb-[4px] ml-1.5 h-1.5 w-1.5 rounded-full bg-blue-900/40" />
              </div>

              <div className="absolute left-3 right-3 top-1 z-30 flex justify-between text-[8px] font-bold text-white/70 pointer-events-none">
                <span>9:41</span>
                <div className="flex items-center gap-1">
                  <span>5G</span>
                  <span className="relative inline-block h-2 w-3.5 rounded-sm border border-white/50 bg-white/60" />
                </div>
              </div>

              <video muted loop autoPlay playsInline className="h-full w-full object-cover brightness-[90%] transition-all duration-700 group-hover:scale-105 group-hover:brightness-100">
                <source src={item.videoUrl} type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 opacity-65 transition-opacity duration-300 group-hover:opacity-80 pointer-events-none" />

              <div className="absolute inset-0 z-10 flex flex-col justify-between p-4 pt-7 pointer-events-none">
                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-white/80">
                  <Compass size={12} className="text-accent" /> Reels
                </div>

                <div className="mt-auto flex items-end justify-between gap-4">
                  <div className="min-w-0 flex-1 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10">
                        <InstagramIcon size={10} className="text-white" />
                      </div>
                      <span className="truncate text-[9px] font-black text-white">@jj_plumbing</span>
                    </div>
                    <p className="truncate text-[10px] font-medium text-white">{item.title}</p>
                    <button onClick={() => handleClick(item.instagramUrl)} className="pointer-events-auto flex cursor-pointer items-center gap-1 text-[9px] font-extrabold text-accent hover:underline">
                      <InstagramIcon size={8} /> View Post
                    </button>
                  </div>

                  <div className="flex shrink-0 flex-col items-center gap-3.5 text-white/90">
                    {[Heart, MessageCircle, Share2].map((Icon, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div className="rounded-full bg-black/35 p-1.5 backdrop-blur-md">
                          <Icon size={13} fill={i < 2 ? "white" : "none"} className="text-white" />
                        </div>
                        <span className="mt-0.5 text-[7px] font-bold">{i === 0 ? "Likes" : i === 1 ? "Reply" : "Share"}</span>
                      </div>
                    ))}
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
