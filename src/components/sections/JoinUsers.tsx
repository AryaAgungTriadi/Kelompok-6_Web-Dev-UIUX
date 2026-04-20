export function JoinUsers() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-[22px] font-semibold text-center mb-3">
        Join With Our Users
      </h2>
      <p className="text-center text-gray-600 text-sm mb-12 max-w-2xl mx-auto leading-relaxed">
        Be part of the movement toward a cleaner and greener future. Start recycling today and make a real impact for the environment. Together, we can reduce waste and build a more sustainable world.
      </p>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-4 text-sm text-gray-500">
          <p>Pellentesque pretium tempus nisi non eleifend. Sed iaculis vel nisi eu semper. Cras lacinia, quam finibus accumsan venenatis, mauris est aliquam neque, interdum tincidunt nisi tellus vitae felis. </p>
          <p>Etiam ac augue nec elit dapibus porta at eget ligula. Duis suscipit, augue sed auctor suscipit, ante lectus aliquet ipsum, in bibendum magn a magna vel purus.</p>
          <p>Nam viverra nisl id nibh imperdiet, in scelerisque ex sodales. Nam sed felis ultrices, accumsan tortor in, porttitor quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vel pellentesque dolor, in elementum mauris. Nam vitae nibh sem. Sed facilisis auctor viverra.</p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-32 border rounded-[20px] bg-white shadow-md flex items-center justify-center"
            />
          ))}
        </div>
      </div>
    </section>
  );
}