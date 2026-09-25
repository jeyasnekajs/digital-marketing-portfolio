/* =========================================================
   JEYASNEKA G — PORTFOLIO JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MOBILE NAVIGATION
       ========================= */

    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-menu a");

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

    }


    /* =========================
       CLOSE MOBILE MENU
       ========================= */

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (navMenu) {
                navMenu.classList.remove("active");
            }

            if (menuToggle) {

                const icon = menuToggle.querySelector("i");

                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }

            }

        });

    });


    /* =========================
       NAVBAR SCROLL EFFECT
       ========================= */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (!navbar) return;

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(23, 19, 35, 0.94)";

            navbar.style.boxShadow =
                "0 10px 40px rgba(0, 0, 0, 0.18)";

        } else {

            navbar.style.background =
                "rgba(23, 19, 35, 0.78)";

            navbar.style.boxShadow =
                "none";

        }

    });


    /* =========================
       ACTIVE NAVIGATION
       ========================= */

    const sections = document.querySelectorAll("section[id]");

    function updateActiveNav() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

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


    /* =========================
       REVEAL ANIMATION
       ========================= */

    const revealElements = document.querySelectorAll(
        ".skill-category, .experience-card, .project-card, .service-card, .certificate-content, .contact-form-wrapper"
    );

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });


    /* =========================
       CONTACT FORM
       ========================= */

    const contactForm =
        document.getElementById("contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", event => {

            event.preventDefault();

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const subject =
                document.getElementById("subject").value.trim();

            const message =
                document.getElementById("message").value.trim();


            if (!name || !email || !subject || !message) {

                alert("Please fill in all the fields.");

                return;

            }


            const mailSubject =
                encodeURIComponent(subject);

            const mailBody =
                encodeURIComponent(
                    `Name: ${name}\n\nEmail: ${email}\n\nMessage:\n${message}`
                );


            window.location.href =
                `mailto:jeyasnekajs@gmail.com?subject=${mailSubject}&body=${mailBody}`;

        });

    }


    /* =========================
       HERO VIDEO
       ========================= */

    const heroVideo =
        document.querySelector(".hero-video");

    if (heroVideo) {

        heroVideo.muted = true;

        const playVideo = () => {

            const promise = heroVideo.play();

            if (promise !== undefined) {

                promise.catch(() => {
                    /* Browser may block autoplay */
                });

            }

        };

        playVideo();

    }


    /* =========================
       TOOL CAROUSEL
       ========================= */

    const toolsTrack =
        document.querySelector(".tools-track");

    if (toolsTrack) {

        const tools =
            Array.from(toolsTrack.children);

        tools.forEach(tool => {

            const clone =
                tool.cloneNode(true);

            toolsTrack.appendChild(clone);

        });

    }


    /* =========================
       SMOOTH BUTTON FEEDBACK
       ========================= */

    const buttons =
        document.querySelectorAll(".btn");

    buttons.forEach(button => {

        button.addEventListener("mouseenter", () => {

            button.style.transition =
                "all 0.35s ease";

        });

    });


});
