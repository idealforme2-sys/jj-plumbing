import { brand } from '../data/site';

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={brand.logo}
        alt={`${brand.name} logo`}
        className="h-12 w-12 rounded-md bg-white object-contain p-1 shadow-lg shadow-black/30"
      />
      {!compact && (
        <div>
          <p className="text-base font-extrabold tracking-wide text-white">{brand.name.toUpperCase()}</p>
          <p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#83c95b]">{brand.line}</p>
        </div>
      )}
    </div>
  );
}
