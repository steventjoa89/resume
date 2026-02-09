import { ContactTileData } from "./ContactSection";

function ContactTile({ title, info, icon: Icon }: ContactTileData) {
  return (
    <div className="flex items-start gap-4 p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition">
      {/* Icon */}
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-rose-600/10 text-rose-400">
        <Icon size={26} />
      </div>

      {/* Text Content */}
      <div>
        <h4 className="text-lg font-semibold tracking-wide">{title}</h4>
        <p className="mt-0.5 text-[0.9rem] text-gray-200">{info}</p>
      </div>
    </div>
  );
}

export default ContactTile;
