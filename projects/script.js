// Objects
const portfolioItems = [
  {
    category: "ai",
    image: "../images/nearbyhire.png",
    type: "Job Portal",
    title: "AI Job Recommendation System",
    description: "Hassel Free Blue Colar Job Finding for local.",
    tags: [
      { name: "Django", color: "bg-emerald-100 text-emerald-700" },
      { name: "Deep Learning", color: "bg-purple-50 text-[#7B61FF]" },
      { name: "ML", color: "bg-teal-50 text-[#00C2B2]" },
      { name: "Next js", color: "bg-slate-100 text-slate-700" },
    ],
    gradient: "from-teal-100 to-purple-100",
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
  {
    category: "web",
    image: "../images/nikhil_acd.png",
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
    image: "../images/parlour.png",
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
    image: "../images/cms sys.png",
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
    image: "../images/raj.png",
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
    category: "web",
    image: "../images/ecomm.png",
    type: "E commerce App",
    title: "Ecommerce System",
    description: "Complete ecommerece management sytem.",
    tags: [
      { name: "API", color: "bg-cyan-50 text-cyan-600" },
      { name: "React Native", color: "bg-purple-50 text-purple-600" },
      { name: "Django", color: "bg-emerald-50 text-emerald-600" },
    ],
    gradient: "from-green-100 to-blue-100",
  },
  {
    category: "web",
    image: "../images/kinder.png",
    type: "Academic Website",
    title: "Kids Play School",
    description: "A short beautiful Landing page.",
    tags: [
      { name: "Wordpress", color: "bg-cyan-50 text-cyan-600" },
      { name: "Elementor Pro", color: "bg-purple-50 text-purple-600" },
      { name: "Lenis", color: "bg-emerald-50 text-emerald-600" },
    ],
    gradient: "from-green-100 to-blue-100",
  },
  {
    category: "web",
    image: "../images/mm beauty.png",
    type: "Spa & Parlour ",
    title: "Rose Radiance Beauty Saloon",
    description: "A professional Website for a professional Business.",
    tags: [
      { name: "Wordpress", color: "bg-orange-50 text-orange-600" },
      { name: "AI", color: "bg-emerald-50 text-emerald-600" },
      { name: "Three js", color: "bg-purple-50 text-purple-600" },
    ],
    gradient: "from-green-100 to-blue-100",
  },
  {
    category: "web",
    image: "../images/nikhil ACD.png",
    type: "Lead Collection Engine",
    title: "Lead Collection System ",
    description: "Get the best out of a website (Your Future Clients).",
    tags: [
      { name: "React Native", color: "bg-purple-50 text-purple-600" },
      { name: "Custom Code", color: "bg-cyan-50 text-cyan-600" },
      { name: "AI", color: "bg-emerald-50 text-emerald-600" },
    ],
    gradient: "from-green-100 to-blue-100",
  },
];

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
