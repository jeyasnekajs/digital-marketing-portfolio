/* =========================================================
   JEYASNEKA G — PORTFOLIO JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const navMenu =
        document.getElementById("navMenu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            navMenu.classList.toggle("open");

            const icon =
                menuToggle.querySelector("i");

            if (navMenu.classList.contains("open")) {

                icon.classList.remove("fa-bars");

                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");
            }

        });


        /* Close menu after clicking link */

        document
            .querySelectorAll(".nav-link")
            .forEach(link => {

                link.addEventListener("click", () => {

                    navMenu.classList.remove("open");

                    const icon =
                        menuToggle.querySelector("i");

                    icon.classList.remove("fa-xmark");

                    icon.classList.add("fa-bars");

                });

            });

    }



    /* =====================================================
       NAVBAR SCROLL
    ===================================================== */

    const navbar =
        document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });



    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(".nav-link");


    function updateActiveNav() {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                current = section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNav
    );

    updateActiveNav();



    /* =====================================================
       HERO VIDEO
    ===================================================== */

    const heroVideo =
        document.querySelector(".hero-background-video");


    if (heroVideo) {

        heroVideo.muted = true;

        heroVideo.setAttribute(
            "playsinline",
            ""
        );


        const playHeroVideo = () => {

            const promise =
                heroVideo.play();

            if (promise !== undefined) {

                promise.catch(() => {

                    /*
                       Browser autoplay may be blocked.
                       Video remains available as background.
                    */

                });

            }

        };


        playHeroVideo();


        heroVideo.addEventListener(
            "loadeddata",
            playHeroVideo
        );

    }



    /* =====================================================
       REVEAL ANIMATION
    ===================================================== */

    const revealItems =
        document.querySelectorAll(
            ".skill-card, .tool-item, .experience-card, .project-card, .service-card, .certificate-box"
        );


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealItems.forEach(item => {

        item.style.opacity = "0";

        item.style.transform =
            "translateY(25px)";

        item.style.transition =
            "opacity .7s ease, transform .7s ease";

        observer.observe(item);

    });



    /* =====================================================
       CONTACT FORM
    ===================================================== */

    const contactForm =
        document.getElementById("contactForm");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const name =
                    document.getElementById("name").value;

                const email =
                    document.getElementById("email").value;

                const message =
                    document.getElementById("message").value;


                const subject =
                    encodeURIComponent(
                        "Portfolio Contact - " + name
                    );


                const body =
                    encodeURIComponent(
                        "Name: " +
                        name +
                        "\n\nEmail: " +
                        email +
                        "\n\nMessage:\n" +
                        message
                    );


                window.location.href =
                    "mailto:jeyasnekajs@gmail.com?subject=" +
                    subject +
                    "&body=" +
                    body;

            }
        );

    }

});
