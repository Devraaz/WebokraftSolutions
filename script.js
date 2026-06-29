import * as THREE from "three";

// Initialize Lenis smooth scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Three.js Hero Scene
const canvas = document.getElementById("hero-canvas");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
const renderer = new THREE.WebGLRenderer({
  canvas,
  alpha: true,
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

camera.position.z = 30;

// Create connected nodes ecosystem
const nodes = [];
const nodeCount = 50;
const connections = [];

for (let i = 0; i < nodeCount; i++) {
  const geometry = new THREE.SphereGeometry(0.15, 16, 16);
  const material = new THREE.MeshPhongMaterial({
    color: 0x00c2b2,
    emissive: 0x00c2b2,
    emissiveIntensity: 0.5,
    shininess: 100,
  });
  const node = new THREE.Mesh(geometry, material);

  node.position.x = (Math.random() - 0.5) * 40;
  node.position.y = (Math.random() - 0.5) * 40;
  node.position.z = (Math.random() - 0.5) * 20;

  node.userData = {
    vx: (Math.random() - 0.5) * 0.02,
    vy: (Math.random() - 0.5) * 0.02,
    vz: (Math.random() - 0.5) * 0.02,
  };

  nodes.push(node);
  scene.add(node);
}

// Create connections
const lineMaterial = new THREE.LineBasicMaterial({
  color: 0x00c2b2,
  transparent: true,
  opacity: 0.2,
});

for (let i = 0; i < nodeCount; i++) {
  for (let j = i + 1; j < nodeCount; j++) {
    const distance = nodes[i].position.distanceTo(nodes[j].position);
    if (distance < 8) {
      const geometry = new THREE.BufferGeometry().setFromPoints([
        nodes[i].position,
        nodes[j].position,
      ]);
      const line = new THREE.Line(geometry, lineMaterial);
      connections.push({ line, nodeA: i, nodeB: j });
      scene.add(line);
    }
  }
}

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight1 = new THREE.PointLight(0x00c2b2, 1, 100);
pointLight1.position.set(10, 10, 10);
scene.add(pointLight1);

const pointLight2 = new THREE.PointLight(0x7b61ff, 1, 100);
pointLight2.position.set(-10, -10, 10);
scene.add(pointLight2);

// Mouse interaction
let mouseX = 0,
  mouseY = 0;
document.addEventListener("mousemove", (e) => {
  mouseX = (e.clientX / window.innerWidth) * 2 - 1;
  mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Animate nodes
  nodes.forEach((node) => {
    node.position.x += node.userData.vx;
    node.position.y += node.userData.vy;
    node.position.z += node.userData.vz;

    // Boundary check
    if (Math.abs(node.position.x) > 20) node.userData.vx *= -1;
    if (Math.abs(node.position.y) > 20) node.userData.vy *= -1;
    if (Math.abs(node.position.z) > 10) node.userData.vz *= -1;

    // Mouse influence
    node.position.x += mouseX * 0.01;
    node.position.y += mouseY * 0.01;
  });

  // Update connections
  connections.forEach(({ line, nodeA, nodeB }) => {
    const positions = line.geometry.attributes.position.array;
    positions[0] = nodes[nodeA].position.x;
    positions[1] = nodes[nodeA].position.y;
    positions[2] = nodes[nodeA].position.z;
    positions[3] = nodes[nodeB].position.x;
    positions[4] = nodes[nodeB].position.y;
    positions[5] = nodes[nodeB].position.z;
    line.geometry.attributes.position.needsUpdate = true;
  });

  // Camera rotation based on scroll
  const scrollY = window.scrollY;
  camera.position.y = scrollY * 0.01;
  camera.rotation.x = scrollY * 0.0002;

  renderer.render(scene, camera);
}

animate();

// Handle resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// GSAP Animations
gsap.utils.toArray(".reveal-line").forEach((line, i) => {
  gsap.to(line, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: i * 0.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: line,
      start: "top 90%",
    },
  });
});

gsap.utils.toArray(".section-fade").forEach((section) => {
  gsap.to(section, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 85%",
    },
  });
});

// Process line animation
gsap.to("#processLine", {
  scaleY: 1,
  duration: 2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#process",
    start: "top 60%",
    end: "bottom 40%",
    scrub: 1,
  },
});

// Counter animation
const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  const target = +counter.dataset.target;
  gsap.to(counter, {
    innerHTML: target,
    duration: 2,
    snap: { innerHTML: 1 },
    scrollTrigger: {
      trigger: counter,
      start: "top 80%",
    },
  });
});

// Navbar scroll effect
const navbar = document.getElementById("navbar");
const stickyCta = document.getElementById("stickyCta");
const whatsappBtn = document.getElementById("whatsappBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("glass");
    stickyCta.classList.add("show");
    whatsappBtn.classList.add("show");
  } else {
    navbar.classList.remove("glass");
    stickyCta.classList.remove("show");
    whatsappBtn.classList.remove("show");
  }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Smooth scroll function
window.scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    lenis.scrollTo(element, { offset: -80 });
    mobileMenu.classList.add("hidden");
  }
};

// Magnetic buttons
document.querySelectorAll(".magnetic-btn").forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0, 0)";
  });
});

// Portfolio filter
const filterBtns = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    filterBtns.forEach((b) => {
      b.classList.remove("active", "bg-[#0D0D0D]", "text-white");
      b.classList.add("bg-gray-100", "text-gray-700");
    });
    btn.classList.add("active", "bg-[#0D0D0D]", "text-white");
    btn.classList.remove("bg-gray-100", "text-gray-700");

    portfolioItems.forEach((item) => {
      if (filter === "all" || item.dataset.category === filter) {
        gsap.to(item, { opacity: 1, scale: 1, duration: 0.3 });
        item.style.display = "block";
      } else {
        gsap.to(item, {
          opacity: 0,
          scale: 0.8,
          duration: 0.3,
          onComplete: () => {
            item.style.display = "none";
          },
        });
      }
    });
  });
});

// Testimonials carousel
let currentTestimonial = 0;
const testimonialTrack = document.getElementById("testimonialTrack");
const testimonialDots = document.querySelectorAll(".testimonial-dot");
const testimonialCount = 3;

function updateTestimonials() {
  const offset = -(currentTestimonial * 100);
  testimonialTrack.style.transform = `translateX(${offset}%)`;

  testimonialDots.forEach((dot, i) => {
    if (i === currentTestimonial) {
      dot.classList.remove("bg-gray-300");
      dot.classList.add("bg-[#00C2B2]", "w-8");
    } else {
      dot.classList.add("bg-gray-300");
      dot.classList.remove("bg-[#00C2B2]", "w-8");
    }
  });
}

testimonialDots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentTestimonial = i;
    updateTestimonials();
  });
});

// Auto-rotate testimonials
setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % testimonialCount;
  updateTestimonials();
}, 5000);

updateTestimonials();

// Accordion
document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    const content = item.querySelector(".accordion-content");
    const icon = item.querySelector(".accordion-icon");

    document.querySelectorAll(".accordion-content").forEach((c) => {
      if (c !== content) c.classList.remove("open");
    });
    document.querySelectorAll(".accordion-icon").forEach((i) => {
      if (i !== icon) i.style.transform = "rotate(0deg)";
    });

    content.classList.toggle("open");
    icon.style.transform = content.classList.contains("open")
      ? "rotate(180deg)"
      : "rotate(0deg)";
  });
});

// Contact form
const form = document.getElementById("contactForm");
const formData = new FormData(form);
form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .sendForm("service_scilyap", "template_rxb7ltc", form)
    .then(() => {
      alert("Message sent successfully! We will contact you soon. ☺️");

      form.reset();
    })
    .catch((error) => {
      console.error(error);

      alert("Something went wrong.");
    });
});

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 },
);
reveals.forEach((el) => observer.observe(el));

console.log("Webokraft Solutions - Premium Agency Website Loaded");
