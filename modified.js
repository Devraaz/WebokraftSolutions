// Objects
const portfolioItems = [
  {
    category: "ai",
    image: "images/nearbyhire.png",
    type: "Job Portal",
    title: "AI Job Recommendation System",
    description: "Hassel Free Blue Colar Job Finding for local.",
    tags: [
      { name: "ML", color: "bg-teal-50 text-[#00C2B2]" },
      { name: "Deep Learning", color: "bg-purple-50 text-[#7B61FF]" },
    ],
    gradient: "from-teal-100 to-purple-100",
  },
  {
    category: "web",
    image: "images/nikhil_acd.png",
    type: "Academic Management System",
    title: "Complete Student Management Website",
    description:
      "Premium responsive website with animations and SEO optimization.",
    tags: [
      { name: "Pytho", color: "bg-cyan-50 text-cyan-600" },
      { name: "Django", color: "bg-gray-100 text-gray-700" },
      { name: "Postgres", color: "bg-blue-100 text-blue-700" },
    ],
    gradient: "from-blue-100 to-indigo-100",
  },
  {
    category: "web",
    image: "images/parlour.png",
    type: "Marketing Landing Page",
    title: "Beauty Parlour Website",
    description: "Full Fledge Premium Website with cool UI and animation. ",
    tags: [
      { name: "GSAP", color: "bg-blue-50 text-blue-600" },
      { name: "Tailwind", color: "bg-yellow-50 text-yellow-600" },
      { name: "Three Js", color: "bg-pink-50 text-pink-600" },
    ],
    gradient: "from-green-100 to-blue-100",
  },
  {
    category: "desktop",
    image: "images/cms sys.png",
    type: "Desktop App",
    title: "Clinical Management System",
    description: "Complete Pathology Clinic Software for Labs for Reporting.",
    tags: [
      { name: "Python", color: "bg-blue-50 text-blue-600" },
      { name: "PyQt", color: "bg-emerald-50 text-emerald-600" },
      { name: "MySQL", color: "bg-yellow-50 text-yellow-600" },
    ],
    gradient: "from-green-100 to-blue-100",
  },
  {
    category: "app",
    image: "images/raj.png",
    type: "Mobile App",
    title: "Liquor Management System",
    description: "Improvise you operations and minimize you time.",
    tags: [
      { name: "API", color: "bg-cyan-50 text-cyan-600" },
      { name: "React Native", color: "bg-purple-50 text-purple-600" },
      { name: "Django", color: "bg-emerald-50 text-emerald-600" },
    ],
    gradient: "from-green-100 to-blue-100",
  },
  {
    category: "app",
    image: "../images/construction site.png",
    type: "Management System",
    title: "Trip Management System",
    description: "Control your vehicle Trip Managment .",
    tags: [
      { name: "React Native", color: "bg-teal-50 text-[#00C2B2]" },
      { name: "DRF", color: "bg-green-100 text-green-700" },
      { name: "Zustand", color: "bg-gray-100 text-gray-700" },
      { name: "Sync Engine", color: "bg-purple-50 text-[#7B61FF]" },
    ],
    gradient: "from-teal-100 to-purple-100",
  },
];

const testimonials = [
  {
    name: "Satya Narayan Pradhan",
    designation: "Center Coordinator, Nikhil Academy",
    image: "logo.png",
    rating: 5,
    review:
      "Outstanding, exceeding my expectations every time. Efficiency and punctuality are hallmarks of their service..",
  },

  {
    name: "Vivek Singh",
    designation: "Manager, RAJ Residency",
    image: "logo.png",
    rating: 5,
    review:
      "The professionalism and technical expertise of Webokraft Solutions were evident throughout the process. They understood my requirements clearly, provided timely updates, and delivered a solution that exceeded expectations. Their commitment to quality and customer satisfaction is commendable..",
  },

  {
    name: "Ajay Kumar",
    designation: "Owner, Subhashree Clinic",
    image: "logo.png",
    rating: 5,
    review:
      "Best agency we've worked with. Technical excellence, strategic thinking, and they actually deliver on time.",
  },
];

// Portfolio

const portfolioGrid = document.getElementById("portfolioGrid");

function renderPortfolio(items) {
  portfolioGrid.innerHTML = "";

  items.forEach((item) => {
    const card = document.createElement("div");

    card.className =
      "portfolio-item card-hover rounded-3xl overflow-hidden bg-[#F7F9FA] group";

    card.dataset.category = item.category;

    card.innerHTML = `
      <div class="aspect-[4/3] bg-gradient-to-br ${item.gradient} relative overflow-hidden">

         <img
            src="${item.image}"
            alt="${item.title}"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">

          <div class="text-white">
            <div class="text-sm font-semibold mb-1">${item.type}</div>
            
          </div>

        </div>

      </div>

      <div class="p-6">

        <h3 class="text-xl font-bold mb-2">
          ${item.title}
        </h3>

        <p class="text-gray-600 text-sm mb-3">
          ${item.description}
        </p>

        <div class="flex gap-2 flex-wrap">

          ${item.tags
            .map(
              (tag) => `
                <span class="px-3 py-1 rounded-full text-xs font-semibold ${tag.color}">
                  ${tag.name}
                </span>
              `,
            )
            .join("")}

        </div>

      </div>
    `;

    portfolioGrid.appendChild(card);
  });
}

renderPortfolio(portfolioItems);

// Testimonials

const testimonialTrack = document.getElementById("testimonialTrack");
const testimonialDots = document.getElementById("testimonialDots");

function renderTestimonials() {
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  testimonialTrack.innerHTML = "";
  testimonialDots.innerHTML = "";

  testimonials.forEach((item) => {
    const stars = Array.from(
      { length: item.rating },
      () => `
            <svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
        `,
    ).join("");

    testimonialTrack.innerHTML += `
          <div class="min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-3">

              <div class="bg-[#F7F9FA] rounded-3xl p-8 h-full">

                  <div class="flex gap-1 mb-4">
                      ${stars}
                  </div>

                  <p class="text-gray-700 mb-6 leading-relaxed">
                      "${item.review}"
                  </p>

                  <div class="flex items-center gap-3">

                      <img
                          src="${item.image}"
                          alt="${item.name}"
                          class="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                      >

                      <div>

                          <div class="font-bold text-gray-900">
                              ${item.name}
                          </div>

                          <div class="text-sm text-gray-600">
                              ${item.designation}
                          </div>

                      </div>

                  </div>

              </div>

          </div>
      `;
  });

  // Render page dots
  for (let page = 0; page < totalPages; page++) {
    testimonialDots.innerHTML += `
        <button
          class="testimonial-dot w-2 h-2 rounded-full bg-gray-300 transition-all"
          data-page="${page}">
        </button>
      `;
  }
}

renderTestimonials();
