export default function About() {
  return (
    <section>
      <div class="grid grid-cols-2">
        <div class="relative w-80 h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
          <img
            src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg"
            alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
            class="w-full h-full object-center object-cover"
          />
        </div>
        <div>
        <h1> About Me </h1>
        <p>
          I am a land surveyor in Summit County, Colorado but my home town is
          Boone, North Carolina. I love the outdoors, and spend my free time
          running and biking in the summer and skiing in the winter. I have a
          bachelor’s degree in Geography, with a certificate in Geographic
          Information Systems (GIS). I’m currently enrolled in an online coding
          boot camp through the University of Denver. I have enjoyed land
          surveying for the last three years, but I’m ready for a career change.
          I would love to stay in the geographic field and intend on using the
          skills learned in the coding boot camp to return to a GIS career path.
        </p>
        <a href="#about">About</a>
        </div>
      </div>
    </section>
  );
}
