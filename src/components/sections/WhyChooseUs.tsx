export function WhyChooseUs() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-[22px] font-semibold text-center mb-3">
        Why you have to choose us
      </h2>
      <p className="text-center text-gray-600 text-sm mb-12 max-w-2xl mx-auto leading-relaxed">
        We are committed to creating a cleaner and more sustainable future. Our recycling solutions are designed to reduce waste, conserve resources, and support a circular economy. With reliable service, eco-friendly processes, and a dedicated team, we ensure your waste is managed responsibly and efficiently.
      </p>

        <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-9">
            <div className="h-50 border rounded-[20px] bg-white flex items-center justify-center">
                Picture
            </div>

            <div className="h-50 border rounded-[20px] bg-white flex items-center justify-center mt-10">
                Picture
            </div>

            <div className="h-50 border rounded-[20px] bg-white flex items-center justify-center">
                Picture
            </div>

            <div className="h-50 border rounded-[20px] bg-white flex items-center justify-center mt-10">
                Picture
            </div>
         </div>

        <div className="space-y-5">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex gap-3">
              <div className="w-5 h-5 bg-green-600 rounded-full mt-1" />
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque accumsan varius. Suspendisse maximus venenatis turpis ac dignissim.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}