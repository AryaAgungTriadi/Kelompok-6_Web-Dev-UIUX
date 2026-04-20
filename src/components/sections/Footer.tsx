export function Footer() {
return (
<footer className="w-full bg-[#0F3D2E] text-white px-10 py-12 flex flex-col md:flex-row justify-between items-center gap-10">

    {/* LEFT (LOGO) */}
    <div className="flex items-center gap-3">
    <div className="logoIcon">
        <div className="logoIconLine" />
    </div>
    <div className="plasticIcon">
        <div className="plasticIconSmall" />
        <div className="plasticIconLarge" />
    </div>
    </div>

    {/* MIDDLE MENU */}
    <div className="flex flex-wrap items-center gap-10">
    <div className="font-semibold text-sm">Our Mission</div>
    <div className="font-semibold text-sm">Company Name</div>
    <div className="font-semibold text-sm">Contribute</div>
    <div className="font-semibold text-sm">Resources</div>

    {/* Our Partners + garis */}
    <div className="border-l border-white/20 pl-6">
        <div className="font-semibold text-sm">Our Partners</div>
    </div>
    </div>

    {/* RIGHT (text + garis) */}
    <div className="max-w-xs text-sm text-gray-300 leading-relaxed border-l border-white/20 pl-6">
    Tradeplast® registered trademarks of The Jaya Perkasa Plastik Recycling
    Corporation. © 2026 Tradeplast. All rights reserved.
    </div>

</footer>
);
}