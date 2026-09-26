/* =========================================================
   JEYASNEKA G - PORTFOLIO JAVASCRIPT
   ========================================================= */


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navMenu.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });


    document.querySelectorAll(".nav-link").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}


/* =========================================================
   HERO VIDEO AUTOPLAY
   ========================================================= */

const heroVideo = document.getElementById("heroVideo");

if (heroVideo) {

    heroVideo.muted = true;

    heroVideo.setAttribute("muted", "");
    heroVideo.setAttribute("playsinline", "");

    const playHeroVideo = () => {

        heroVideo.muted = true;

        const playPromise = heroVideo.play();

        if (playPromise !== undefined) {

            playPromise.catch(() => {
                // Browser blocked autoplay.
                // It will retry on user interaction.
            });

        }

    };

    heroVideo.addEventListener("loadeddata", playHeroVideo);
    heroVideo.addEventListener("canplay", playHeroVideo);
    heroVideo.addEventListener("loadedmetadata", playHeroVideo);

    window.addEventListener("load", playHeroVideo);

    document.addEventListener(
        "click",
        playHeroVideo,
        { once: true }
    );

}


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealElements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right"
);

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   TOOLS SIDE-IN ANIMATION
   ========================================================= */

const toolItems = document.querySelectorAll(".tool-item");

const toolObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const index =
                    Array.from(toolItems).indexOf(entry.target);

                setTimeout(() => {

                    entry.target.classList.add("show");

                }, index * 80);

                toolObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


toolItems.forEach(tool => {

    toolObserver.observe(tool);

});


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const activeObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const currentId = entry.target.getAttribute("id");

                navLinks.forEach(link => {

                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") ===
                        `#${currentId}`
                    ) {

                        link.classList.add("active");

                    }

                });

            }

        });

    },

    {
        threshold: 0.35
    }

);


sections.forEach(section => {

    activeObserver.observe(section);

});


/* =========================================================
   CURRENT YEAR
   ========================================================= */

const currentYear =
    document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================================
   CONTACT FORM
   ========================================================= */

const contactForm =
    document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", () => {

        const button =
            contactForm.querySelector("button");

        if (button) {

            button.innerHTML =
                'OPENING EMAIL <i class="fas fa-envelope"></i>';

        }

    });

}


/* =========================================================
   SMOOTH NAVIGATION FALLBACK
   ========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        if (
            targetId &&
            targetId !== "#" &&
            document.querySelector(targetId)
        ) {

            event.preventDefault();

            document
                .querySelector(targetId)
                .scrollIntoView({
                    behavior: "smooth"
                });

        }

    });

});
