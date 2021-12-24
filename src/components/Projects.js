import { projects } from "../data";
 
export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
    // <div class="bg-gray-100">
    //   <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div class="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
    //       <h2 class="text-2xl font-extrabold text-gray-900">Collections</h2>

    //       <div class="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
    //         <div class="group relative">
    //           <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
    //             <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="w-full h-full object-center object-cover"/>
    //           </div>
    //           <h3 class="mt-6 text-sm text-gray-500">
    //             <a href="#">
    //               <span class="absolute inset-0"></span>
    //               Desk and Office
    //             </a>
    //           </h3>
    //           <p class="text-base font-semibold text-gray-900">Work from home accessories</p>
    //         </div>

    //         <div class="group relative">
    //           <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
    //             <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." class="w-full h-full object-center object-cover"/>
    //           </div>
    //           <h3 class="mt-6 text-sm text-gray-500">
    //             <a href="#">
    //               <span class="absolute inset-0"></span>
    //               Self-Improvement
    //             </a>
    //           </h3>
    //           <p class="text-base font-semibold text-gray-900">Journals and note-taking</p>
    //         </div>

    //         <div class="group relative">
    //           <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
    //             <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg" alt="Collection of four insulated travel bottles on wooden shelf." class="w-full h-full object-center object-cover"/>
    //           </div>
    //           <h3 class="mt-6 text-sm text-gray-500">
    //             <a href="#">
    //               <span class="absolute inset-0"></span>
    //               Travel
    //             </a>
    //           </h3>
    //           <p class="text-base font-semibold text-gray-900">Daily commute essentials</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
