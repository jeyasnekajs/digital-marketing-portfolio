document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle =
        document.getElementById("menu-toggle");

    const navMenu =
        document.getElementById("nav-menu");

    const navLinks =
        document.querySelectorAll(".nav-menu a");


    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            navMenu.classList.toggle("active");

            const icon =
                menuToggle.querySelector("i");

            if (navMenu.classList.contains("active")) {

                icon.classList.remove("fa-bars");

                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            }

        });

    }


    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            const icon =
                menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });



    /* =====================================================
       NAVBAR SCROLL
    ===================================================== */

    const navbar =
        document.querySelector(".navbar");


    window.addEventListener("scroll", () => {

        if (!navbar) return;


        if (window.scrollY > 40) {

            navbar.style.background =
                "rgba(18,14,27,.96)";

            navbar.style.boxShadow =
                "0 10px 40px rgba(0,0,0,.20)";

        } else {

            navbar.style.background =
                "rgba(18,14,27,.80)";

            navbar.style.boxShadow =
                "none";

        }

    });



    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");


    function updateActiveNav() {

        let current = "";


        sections.forEach(section => {

            const top =
                section.offsetTop - 160;

            const bottom =
                top + section.offsetHeight;


            if (
                window.scrollY >= top &&
                window.scrollY < bottom
            ) {

                current =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");


            if (
                link.getAttribute("href") ===
                `#${current}`
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
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            `
            .skill-card,
            .experience-card,
            .project-card,
            .service-card,
            .certificate-card,
            .contact-form-wrapper
            `
        );


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "show"
                        );

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


    revealElements.forEach(element => {

        element.classList.add("reveal");

        observer.observe(element);

    });



    /* =====================================================
       HERO VIDEO
    ===================================================== */

    const heroVideo =
        document.querySelector(".hero-video");


    if (heroVideo) {

        heroVideo.muted = true;

        heroVideo.setAttribute(
            "playsinline",
            ""
        );


        const playVideo = () => {

            const promise =
                heroVideo.play();


            if (promise !== undefined) {

                promise.catch(() => {});

            }

        };


        playVideo();


        heroVideo.addEventListener(
            "loadeddata",
            playVideo
        );

    }



    /* =====================================================
       TOOLS - DUPLICATE FOR INFINITE SCROLL
    ===================================================== */

    const toolsTrack =
        document.querySelector(".tools-track");


    if (toolsTrack) {

        const tools =
            Array.from(
                toolsTrack.children
            );


        tools.forEach(tool => {

            const clone =
                tool.cloneNode(true);

            clone.setAttribute(
                "aria-hidden",
                "true"
            );

            toolsTrack.appendChild(clone);

        });

    }



    /* =====================================================
       CONTACT FORM
    ===================================================== */

    const contactForm =
        document.getElementById(
            "contact-form"
        );


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const name =
                    document
                        .getElementById("name")
                        .value
                        .trim();


                const email =
                    document
                        .getElementById("email")
                        .value
                        .trim();


                const subject =
                    document
                        .getElementById("subject")
                        .value
                        .trim();


                const message =
                    document
                        .getElementById("message")
                        .value
                        .trim();


                if (
                    !name ||
                    !email ||
                    !subject ||
                    !message
                ) {

                    alert(
                        "Please fill in all the fields."
                    );

                    return;

                }


                const mailSubject =
                    encodeURIComponent(
                        subject
                    );


                const mailBody =
                    encodeURIComponent(
                        `Name: ${name}

Email: ${email}

Message:
${message}`
                    );


                window.location.href =
                    `mailto:jeyasnekajs@gmail.com?subject=${mailSubject}&body=${mailBody}`;

            }
        );

    }

});
