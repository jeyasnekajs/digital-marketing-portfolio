/* =========================================================
   JEYASNEKA G - PORTFOLIO JAVASCRIPT
   ========================================================= */


/* ================= SMOOTH SCROLL ================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});


/* ================= HERO VIDEO ================= */

const heroVideo = document.querySelector(".hero-video video");

if (heroVideo) {

    heroVideo.muted = true;

    heroVideo.play().catch(() => {});

    document.addEventListener("visibilitychange", () => {

        if (document.hidden) {

            heroVideo.pause();

        } else {

            heroVideo.play().catch(() => {});

        }

    });

}


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar nav a");

function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveNav);

updateActiveNav();


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".skill-card, .experience-card, .project-card, .service-card, .certificate-card, .about-content"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    revealObserver.observe(element);

});


/* ================= CURRENT YEAR ================= */

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        `© ${new Date().getFullYear()} Jeyasneka G. All Rights Reserved.`;

}


/* ================= TOOL CAROUSEL ================= */

const toolsCarousel = document.querySelector(".tools-carousel");
const toolsTrack = document.querySelector(".tools-track");

if (toolsCarousel && toolsTrack) {

    toolsCarousel.addEventListener("mouseenter", () => {
        toolsTrack.style.animationPlayState = "paused";
    });

    toolsCarousel.addEventListener("mouseleave", () => {
        toolsTrack.style.animationPlayState = "running";
    });

}
