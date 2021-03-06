import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div class="p-10">
          <img
            src="https://github.com/Jackson-Barker/portfolio/blob/main/src/images/profilepic.jpg?raw=true"
            alt="profielpic"
            width="250"
            height="350"
          ></img>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Jackson Barker
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a land surveyor in Summit County, Colorado but my home town is
            Boone, North Carolina. I love the outdoors, and spend my free time
            running and biking in the summer and skiing in the winter. I have a
            bachelor’s degree in Geography, with a certificate in Geographic
            Information Systems (GIS). I’m currently enrolled in an online
            coding boot camp through the University of Denver. I have enjoyed
            land surveying for the last three years, but I’m ready for a career
            change. I would love to stay in the geographic field and intend on
            using the skills learned in the coding boot camp to return to a GIS
            career path.
          </p>
        </div>
      </div>
    </section>
  );
}
