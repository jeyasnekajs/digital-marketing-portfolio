/* =========================================================
   JEYASNEKA G - DIGITAL MARKETING PORTFOLIO
   ========================================================= */

:root {

    --bg: #080610;
    --bg-soft: #0f0b19;
    --bg-card: rgba(255,255,255,0.045);

    --purple: #a855f7;
    --purple-light: #c084fc;
    --purple-dark: #6d28d9;

    --lavender: #e9d5ff;

    --white: #ffffff;
    --text: #eeeaf5;
    --muted: #a7a0b5;

    --border: rgba(192,132,252,0.18);

    --font: "Plus Jakarta Sans", sans-serif;

    --nav-height: 78px;
}


/* =========================================================
   RESET
   ========================================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 90px;
}

body {
    font-family: var(--font);
    background: var(--bg);
    color: var(--text);
    overflow-x: hidden;
    line-height: 1.7;
}

img {
    max-width: 100%;
    display: block;
}

a {
    color: inherit;
    text-decoration: none;
}

button,
input,
textarea {
    font-family: inherit;
}

button {
    cursor: pointer;
}

::selection {
    background: var(--purple);
    color: white;
}


/* =========================================================
   SCROLLBAR
   ========================================================= */

::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: var(--bg);
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(
        var(--purple),
        var(--purple-dark)
    );
    border-radius: 20px;
}


/* =========================================================
   COMMON
   ========================================================= */

.container {
    width: min(1180px, 90%);
    margin: auto;
}

.section {
    padding: 120px 0;
    position: relative;
}

.section-heading {
    text-align: center;
    margin-bottom: 70px;
}

.section-number {
    color: var(--purple-light);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 4px;
    margin-bottom: 10px;
}

.section-heading h2 {
    font-size: clamp(2rem, 4vw, 3.2rem);
    font-weight: 800;
    letter-spacing: -1.5px;
    color: var(--white);
}

.section-heading h2 span {
    color: var(--purple-light);
}

.heading-line {
    width: 70px;
    height: 3px;
    margin: 20px auto 0;
    background: linear-gradient(
        90deg,
        var(--purple-dark),
        var(--purple-light)
    );
    border-radius: 10px;
}

.section-description {
    max-width: 760px;
    margin: -25px auto 55px;
    text-align: center;
    color: var(--muted);
}


/* =========================================================
   NAVBAR
   ========================================================= */

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--nav-height);
    z-index: 1000;

    background: rgba(8,6,16,0.72);
    border-bottom: 1px solid rgba(255,255,255,0.06);

    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
}

.nav-container {
    width: min(1280px, 92%);
    height: 100%;
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: -0.8px;
}

.logo span,
.footer-logo span {
    color: var(--purple-light);
}

.nav-menu {
    display: flex;
    align-items: center;
    gap: 25px;
}

.nav-link {
    position: relative;

    color: #d8d2e2;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.8px;

    transition: 0.3s ease;
}

.nav-link::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -8px;

    width: 0;
    height: 2px;

    background: var(--purple-light);

    transition: 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
    color: var(--purple-light);
}

.nav-link:hover::after,
.nav-link.active::after {
    width: 100%;
}

.menu-toggle {
    display: none;

    background: transparent;
    border: 0;
    color: white;
    font-size: 1.4rem;
}


/* =========================================================
   HOME
   ========================================================= */

.hero {
    min-height: 100vh;
    min-height: 100svh;

    position: relative;
    overflow: hidden;

    display: flex;
    align-items: center;

    padding-top: var(--nav-height);
}

.hero-bg-video {
    position: absolute;

    inset: 0;

    width: 100%;
    height: 100%;

    object-fit: cover;

    object-position: 70% center;

    z-index: 0;

    background: #080610;
}

.hero-overlay {
    position: absolute;
    inset: 0;

    z-index: 1;

    background:
        linear-gradient(
            90deg,
            rgba(8,6,16,0.98) 0%,
            rgba(8,6,16,0.92) 28%,
            rgba(8,6,16,0.58) 55%,
            rgba(8,6,16,0.15) 78%,
            rgba(8,6,16,0.25) 100%
        );

}

.hero-content {
    position: relative;
    z-index: 2;

    width: min(1180px, 90%);
    margin: auto;

    padding: 90px 0;
}

.hero-welcome {
    color: var(--purple-light);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 4px;

    margin-bottom: 35px;
}

.hero-small {
    color: var(--muted);
    font-size: 0.9rem;
    letter-spacing: 3px;
    font-weight: 600;
}

.hero-name {
    margin-top: 3px;

    font-size: clamp(3.5rem, 8vw, 7rem);
    line-height: 1;
    letter-spacing: -4px;
    font-weight: 800;

    background: linear-gradient(
        135deg,
        #ffffff,
        #e9d5ff,
        #c084fc
    );

    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.hero-title {
    margin-top: 22px;

    color: var(--purple-light);

    font-size: clamp(1rem, 2vw, 1.4rem);
    letter-spacing: 3px;
    font-weight: 700;
}

.hero-tagline {
    margin-top: 10px;

    font-size: 1.2rem;
    font-weight: 600;
    color: white;
}

.hero-description {
    max-width: 690px;

    margin-top: 25px;

    color: #c4becf;
    font-size: 0.95rem;
}

.hero-highlight {
    margin-top: 25px;

    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;

    color: var(--lavender);
    font-size: 0.78rem;
    font-weight: 700;
}

.hero-highlight span {
    color: var(--purple);
}

.hero-buttons {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;

    margin-top: 35px;
}

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    min-height: 50px;
    padding: 0 24px;

    border-radius: 8px;

    font-size: 0.73rem;
    font-weight: 800;
    letter-spacing: 1px;

    transition: 0.3s ease;
}

.btn-primary {
    color: white;

    background: linear-gradient(
        135deg,
        var(--purple),
        var(--purple-dark)
    );

    box-shadow:
        0 10px 35px rgba(168,85,247,0.25);
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow:
        0 15px 45px rgba(168,85,247,0.4);
}

.btn-outline {
    border: 1px solid rgba(192,132,252,0.4);
    color: var(--lavender);

    background: rgba(255,255,255,0.03);
}

.btn-outline:hover {
    border-color: var(--purple-light);
    background: rgba(168,85,247,0.1);
    transform: translateY(-3px);
}


/* =========================================================
   ABOUT
   ========================================================= */

.about-section {
    background:
        radial-gradient(
            circle at 10% 30%,
            rgba(168,85,247,0.09),
            transparent 30%
        ),
        var(--bg);
}

.about-grid {
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 80px;

    align-items: center;
}

.about-image {
    display: flex;
    justify-content: center;
}

.image-frame {
    width: min(390px, 100%);
    position: relative;
}

.image-frame::before {
    content: "";

    position: absolute;
    inset: -15px;

    border: 1px solid rgba(192,132,252,0.2);
    border-radius: 24px;

    transform: rotate(-4deg);
}

.image-frame img {
    position: relative;
    z-index: 1;

    width: 100%;
    aspect-ratio: 4 / 5;

    object-fit: cover;

    border-radius: 20px;

    border: 1px solid rgba(192,132,252,0.2);

    box-shadow:
        0 30px 80px rgba(0,0,0,0.4);
}

.about-content h3 {
    font-size: clamp(1.7rem, 3vw, 2.5rem);
    line-height: 1.25;
    margin-bottom: 30px;
}

.about-content h3 span {
    color: var(--purple-light);
}

.about-content p {
    color: var(--muted);
    font-size: 0.92rem;
    margin-bottom: 20px;
}

.about-highlights {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;

    margin-top: 70px;
}

.mini-about-card {
    display: flex;
    gap: 15px;
    align-items: flex-start;

    padding: 24px;

    border: 1px solid var(--border);
    background: var(--bg-card);

    border-radius: 14px;

    transition: 0.3s ease;
}

.mini-about-card:hover {
    transform: translateY(-5px);
    border-color: rgba(192,132,252,0.45);
}

.mini-icon {
    min-width: 42px;
    height: 42px;

    display: grid;
    place-items: center;

    border-radius: 10px;

    color: var(--purple-light);
    background: rgba(168,85,247,0.12);
}

.mini-about-card h4 {
    font-size: 0.95rem;
    margin-bottom: 5px;
}

.mini-about-card p {
    font-size: 0.76rem;
    color: var(--muted);
}


/* =========================================================
   SKILLS
   ========================================================= */

.skills-section {
    background: var(--bg-soft);
}

.sub-heading {
    display: flex;
    align-items: center;
    gap: 15px;

    margin-bottom: 30px;
}

.sub-heading span {
    color: var(--purple-light);
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 2px;
}

.sub-heading h3 {
    font-size: 1.1rem;
    letter-spacing: 1px;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.skill-square {
    aspect-ratio: 1 / 1;

    padding: 25px 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;

    border: 1px solid var(--border);
    background:
        linear-gradient(
            145deg,
            rgba(255,255,255,0.055),
            rgba(255,255,255,0.015)
        );

    border-radius: 18px;

    transition:
        transform 0.35s ease,
        border-color 0.35s ease,
        box-shadow 0.35s ease;

    overflow: hidden;
}

.skill-square:hover {
    transform: translateY(-8px);

    border-color: rgba(192,132,252,0.5);

    box-shadow:
        0 20px 50px rgba(168,85,247,0.12);
}

.skill-square img {
    width: 65px;
    height: 65px;

    object-fit: contain;

    margin-bottom: 20px;
}

.skill-square h4 {
    font-size: 0.95rem;
    margin-bottom: 6px;
}

.skill-square p {
    color: var(--muted);
    font-size: 0.7rem;
}


/* =========================================================
   TOOLS
   ========================================================= */

.tools-heading {
    margin-top: 100px;
}

.tools-list {
    max-width: 950px;
    margin: auto;

    display: flex;
    flex-direction: column;
    gap: 16px;
}

.tool-item {
    width: min(470px, 85%);

    min-height: 75px;

    display: flex;
    align-items: center;
    gap: 20px;

    padding: 15px 25px;

    background: rgba(255,255,255,0.025);

    border: 1px solid var(--border);

    border-radius: 14px;

    transition:
        opacity 0.7s ease,
        transform 0.7s ease,
        border-color 0.3s ease,
        background 0.3s ease;
}

.tool-item:hover {
    border-color: rgba(192,132,252,0.45);
    background: rgba(168,85,247,0.06);
}

.tool-item img {
    width: 42px;
    height: 42px;

    object-fit: contain;

    flex-shrink: 0;
}

.tool-item span {
    font-size: 0.85rem;
    font-weight: 600;
}

.tool-left {
    align-self: flex-start;

    opacity: 0;
    transform: translateX(-100px);
}

.tool-right {
    align-self: flex-end;

    opacity: 0;
    transform: translateX(100px);
}

.tool-left.show,
.tool-right.show {
    opacity: 1;
    transform: translateX(0);
}


/* =========================================================
   EXPERIENCE
   ========================================================= */

.experience-section {
    background:
        radial-gradient(
            circle at 90% 50%,
            rgba(168,85,247,0.08),
            transparent 30%
        ),
        var(--bg);
}

.experience-section .section-heading h2 {
    white-space: nowrap;
}

.timeline {
    position: relative;

    max-width: 950px;
    margin: auto;
}

.timeline::before {
    content: "";

    position: absolute;

    left: 20px;
    top: 0;
    bottom: 0;

    width: 1px;

    background:
        linear-gradient(
            var(--purple),
            rgba(168,85,247,0.05)
        );
}

.timeline-item {
    position: relative;

    padding-left: 70px;
    margin-bottom: 45px;
}

.timeline-dot {
    position: absolute;

    left: 11px;
    top: 30px;

    width: 19px;
    height: 19px;

    border-radius: 50%;

    background: var(--purple);

    border: 5px solid var(--bg);

    box-shadow:
        0 0 0 1px rgba(192,132,252,0.4),
        0 0 25px rgba(168,85,247,0.5);
}

.timeline-card {
    padding: 30px;

    border: 1px solid var(--border);
    border-radius: 16px;

    background: var(--bg-card);

    transition: 0.3s ease;
}

.timeline-card:hover {
    border-color: rgba(192,132,252,0.4);
    transform: translateX(5px);
}

.experience-top {
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

.experience-role {
    color: var(--purple-light);

    font-size: 0.72rem;
    font-weight: 800;

    letter-spacing: 1px;
    text-transform: uppercase;
}

.timeline-card h3 {
    margin-top: 5px;
    font-size: 1.3rem;
}

.experience-date {
    white-space: nowrap;

    color: var(--muted);
    font-size: 0.72rem;
}

.experience-location {
    margin-top: 10px;

    color: var(--muted);
    font-size: 0.75rem;
}

.experience-location i {
    color: var(--purple-light);
    margin-right: 5px;
}

.timeline-card > p:last-child {
    margin-top: 18px;

    color: var(--muted);
    font-size: 0.86rem;
}

.experience-certificate {
    text-align: center;
    margin-top: 50px;
}

.experience-certificate a {
    display: inline-flex;
    align-items: center;
    gap: 10px;

    color: var(--purple-light);

    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 1px;

    border-bottom: 1px solid rgba(192,132,252,0.4);

    padding-bottom: 8px;
}


/* =========================================================
   PROJECTS
   ========================================================= */

.projects-section {
    background: var(--bg-soft);
}

.project-category {
    margin-bottom: 75px;
}

.category-title {
    display: flex;
    align-items: center;
    gap: 18px;

    margin-bottom: 30px;
}

.category-title span {
    color: var(--purple-light);

    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 2px;
}

.category-title h3 {
    font-size: 1.15rem;
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.project-grid.three-columns {
    grid-template-columns: repeat(3, 1fr);
}

.project-card {
    position: relative;

    padding: 35px;

    min-height: 290px;

    border: 1px solid var(--border);
    border-radius: 18px;

    background:
        linear-gradient(
            145deg,
            rgba(255,255,255,0.05),
            rgba(255,255,255,0.015)
        );

    overflow: hidden;

    transition: 0.35s ease;
}

.project-card::before {
    content: "";

    position: absolute;

    width: 130px;
    height: 130px;

    right: -50px;
    top: -50px;

    background: rgba(168,85,247,0.08);

    border-radius: 50%;
}

.project-card:hover {
    transform: translateY(-8px);

    border-color: rgba(192,132,252,0.45);

    box-shadow:
        0 25px 60px rgba(0,0,0,0.3);
}

.project-icon {
    width: 52px;
    height: 52px;

    display: grid;
    place-items: center;

    color: var(--purple-light);

    border-radius: 13px;

    background: rgba(168,85,247,0.12);

    font-size: 1.2rem;

    margin-bottom: 25px;
}

.project-card > span {
    color: var(--purple-light);

    font-size: 0.65rem;
    font-weight: 800;

    letter-spacing: 1.5px;
}

.project-card h3 {
    margin-top: 7px;

    font-size: 1.25rem;
}

.project-card p {
    margin-top: 12px;

    color: var(--muted);
    font-size: 0.82rem;
}

.project-tags {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;

    margin-top: 20px;
}

.project-tags span {
    padding: 6px 10px;

    border: 1px solid rgba(192,132,252,0.18);
    border-radius: 6px;

    color: #c9c0d7;

    font-size: 0.62rem;
}

.coming-soon-card {
    min-height: 170px;

    display: flex;
    align-items: center;
    gap: 25px;

    padding: 35px;

    border: 1px dashed rgba(192,132,252,0.3);
    border-radius: 18px;

    background: rgba(168,85,247,0.035);
}

.coming-icon {
    width: 65px;
    height: 65px;

    display: grid;
    place-items: center;

    border-radius: 16px;

    color: var(--purple-light);
    background: rgba(168,85,247,0.1);

    font-size: 1.6rem;
}

.coming-soon-card h3 {
    margin-bottom: 5px;
}

.coming-soon-card p {
    color: var(--muted);
    font-size: 0.82rem;
}


/* =========================================================
   CERTIFICATES
   ========================================================= */

.certificate-section {
    background: var(--bg);
}

.certificate-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 22px;
}

.certificate-card {
    display: flex;
    gap: 25px;
    align-items: flex-start;

    padding: 32px;

    border: 1px solid var(--border);
    border-radius: 18px;

    background: var(--bg-card);

    transition: 0.35s ease;
}

.certificate-card:hover {
    transform: translateY(-6px);
    border-color: rgba(192,132,252,0.45);
}

.certificate-icon {
    min-width: 60px;
    height: 60px;

    display: grid;
    place-items: center;

    color: var(--purple-light);

    border-radius: 14px;

    background: rgba(168,85,247,0.12);

    font-size: 1.4rem;
}

.certificate-content > span {
    color: var(--purple-light);

    font-size: 0.65rem;
    font-weight: 800;
    letter-spacing: 1.5px;
}

.certificate-content h3 {
    margin: 8px 0;

    font-size: 1.05rem;
}

.certificate-content p {
    color: var(--muted);
    font-size: 0.78rem;
}

.certificate-content a {
    display: inline-flex;
    gap: 8px;
    align-items: center;

    margin-top: 18px;

    color: var(--lavender);

    font-size: 0.68rem;
    font-weight: 800;
    letter-spacing: 1px;
}

.certificate-content a:hover {
    color: var(--purple-light);
}

.more-certificates {
    margin-top: 35px;

    text-align: center;

    color: var(--muted);

    font-size: 0.78rem;
}

.more-certificates i {
    color: var(--purple-light);
    margin-right: 8px;
}


/* =========================================================
   SERVICES
   ========================================================= */

.services-section {
    background: var(--bg-soft);
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
}

.service-card {
    position: relative;

    min-height: 270px;

    padding: 30px;

    border: 1px solid var(--border);
    border-radius: 18px;

    background: var(--bg-card);

    overflow: hidden;

    transition: 0.35s ease;
}

.service-card:hover {
    transform: translateY(-8px);

    border-color: rgba(192,132,252,0.45);

    box-shadow:
        0 25px 60px rgba(168,85,247,0.08);
}

.service-number {
    position: absolute;
    top: 22px;
    right: 25px;

    color: rgba(192,132,252,0.35);

    font-size: 0.7rem;
    font-weight: 800;
}

.service-icon {
    width: 52px;
    height: 52px;

    display: grid;
    place-items: center;

    border-radius: 13px;

    color: var(--purple-light);
    background: rgba(168,85,247,0.11);

    margin-bottom: 28px;
}

.service-card h3 {
    font-size: 1rem;
    line-height: 1.4;
}

.service-card p {
    margin-top: 12px;

    color: var(--muted);

    font-size: 0.77rem;
}


/* =========================================================
   CONTACT
   ========================================================= */

.contact-section {
    background:
        radial-gradient(
            circle at 50% 100%,
            rgba(168,85,247,0.1),
            transparent 40%
        ),
        var(--bg);
}

.contact-grid {
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 70px;

    align-items: start;
}

.contact-info h3 {
    max-width: 500px;

    font-size: clamp(1.8rem, 3vw, 2.6rem);
    line-height: 1.25;
}

.contact-info > p {
    max-width: 500px;

    margin-top: 18px;

    color: var(--muted);
    font-size: 0.88rem;
}

.contact-details {
    margin-top: 35px;

    display: flex;
    flex-direction: column;
    gap: 18px;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 15px;
}

.contact-icon {
    width: 45px;
    height: 45px;

    display: grid;
    place-items: center;

    color: var(--purple-light);

    background: rgba(168,85,247,0.1);

    border-radius: 10px;
}

.contact-item span {
    display: block;

    color: var(--muted);

    font-size: 0.6rem;
    font-weight: 800;
    letter-spacing: 1.5px;
}

.contact-item strong {
    display: block;

    margin-top: 2px;

    font-size: 0.82rem;
}

.social-links {
    display: flex;
    gap: 10px;

    margin-top: 35px;
}

.social-links a {
    width: 42px;
    height: 42px;

    display: grid;
    place-items: center;

    border: 1px solid var(--border);
    border-radius: 10px;

    color: var(--muted);

    transition: 0.3s ease;
}

.social-links a:hover {
    color: var(--purple-light);
    border-color: var(--purple-light);
    transform: translateY(-3px);
}

.contact-form-wrapper {
    padding: 35px;

    border: 1px solid var(--border);
    border-radius: 20px;

    background:
        linear-gradient(
            145deg,
            rgba(255,255,255,0.045),
            rgba(255,255,255,0.015)
        );
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 22px;
}

.form-group label {
    display: block;

    margin-bottom: 9px;

    color: var(--lavender);

    font-size: 0.65rem;
    font-weight: 800;
    letter-spacing: 1.3px;
}

.form-group input,
.form-group textarea {
    width: 100%;

    padding: 15px 17px;

    border: 1px solid rgba(192,132,252,0.16);
    border-radius: 9px;

    outline: none;

    background: rgba(0,0,0,0.18);

    color: white;

    font-size: 0.8rem;

    resize: vertical;

    transition: 0.3s ease;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
    color: #777080;
}

.form-group input:focus,
.form-group textarea:focus {
    border-color: var(--purple);
    box-shadow: 0 0 0 3px rgba(168,85,247,0.08);
}

.form-btn {
    border: 0;
    align-self: flex-start;
}


/* =========================================================
   FOOTER
   ========================================================= */

.footer {
    padding: 35px 0;

    border-top: 1px solid rgba(255,255,255,0.05);

    background: #06050b;
}

.footer-content {
    text-align: center;
}

.footer-logo {
    font-size: 1.25rem;
    font-weight: 800;
}

.footer-content p {
    color: var(--muted);
    font-size: 0.72rem;
    margin-top: 5px;
}

.footer-content .copyright {
    margin-top: 18px;
    color: #6e6878;
}


/* =========================================================
   REVEAL ANIMATIONS
   ========================================================= */

.reveal,
.reveal-left,
.reveal-right {
    opacity: 0;

    transition:
        opacity 0.8s ease,
        transform 0.8s ease;
}

.reveal {
    transform: translateY(35px);
}

.reveal-left {
    transform: translateX(-50px);
}

.reveal-right {
    transform: translateX(50px);
}

.reveal.show,
.reveal-left.show,
.reveal-right.show {
    opacity: 1;
    transform: translate(0);
}


/* =========================================================
   RESPONSIVE - TABLET
   ========================================================= */

@media (max-width: 1050px) {

    .nav-menu {
        gap: 16px;
    }

    .nav-link {
        font-size: 0.64rem;
    }

    .skills-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .services-grid {
        grid-template-columns: repeat(2, 1fr);
    }

}


/* =========================================================
   RESPONSIVE - MOBILE
   ========================================================= */

@media (max-width: 800px) {

    .section {
        padding: 90px 0;
    }

    .nav-container {
        width: 90%;
    }

    .menu-toggle {
        display: block;
    }

    .nav-menu {

        position: fixed;

        top: var(--nav-height);
        left: 0;

        width: 100%;

        padding: 25px;

        display: flex;
        flex-direction: column;
        align-items: flex-start;

        gap: 20px;

        background: rgba(8,6,16,0.97);

        border-bottom: 1px solid var(--border);

        transform: translateY(-120%);

        transition: 0.35s ease;
    }

    .nav-menu.active {
        transform: translateY(0);
    }

    .nav-link {
        font-size: 0.75rem;
    }

    .hero {
        align-items: flex-end;
    }

    .hero-bg-video {
        object-position: 65% center;
    }

    .hero-overlay {
        background:
            linear-gradient(
                90deg,
                rgba(8,6,16,0.96),
                rgba(8,6,16,0.72)
            );
    }

    .hero-content {
        padding: 80px 0 70px;
    }

    .hero-name {
        font-size: clamp(3rem, 15vw, 5rem);
        letter-spacing: -2px;
    }

    .hero-title {
        letter-spacing: 1.5px;
    }

    .hero-description {
        font-size: 0.85rem;
    }

    .hero-highlight {
        gap: 7px;
        line-height: 1.8;
    }

    .about-grid {
        grid-template-columns: 1fr;
        gap: 55px;
    }

    .about-image {
        order: 1;
    }

    .about-content {
        order: 2;
    }

    .about-highlights {
        grid-template-columns: 1fr;
    }

    .skills-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .skill-square {
        min-height: 220px;
    }

    .tool-item {
        width: 90%;
    }

    .tool-left,
    .tool-right {
        align-self: center;
    }

    .experience-section .section-heading h2 {
        white-space: normal;
    }

    .experience-top {
        flex-direction: column;
        gap: 10px;
    }

    .experience-date {
        white-space: normal;
    }

    .project-grid,
    .project-grid.three-columns {
        grid-template-columns: 1fr;
    }

    .certificate-grid {
        grid-template-columns: 1fr;
    }

    .contact-grid {
        grid-template-columns: 1fr;
        gap: 50px;
    }

}


/* =========================================================
   SMALL MOBILE
   ========================================================= */

@media (max-width: 480px) {

    .section {
        padding: 75px 0;
    }

    .hero-welcome {
        letter-spacing: 2px;
        font-size: 0.65rem;
    }

    .hero-name {
        font-size: 3.2rem;
    }

    .hero-title {
        font-size: 0.85rem;
    }

    .hero-buttons {
        flex-direction: column;
    }

    .btn {
        width: 100%;
    }

    .skills-grid {
        gap: 12px;
    }

    .skill-square {
        min-height: 185px;
        padding: 15px;
    }

    .skill-square img {
        width: 50px;
        height: 50px;
    }

    .skill-square h4 {
        font-size: 0.8rem;
    }

    .skill-square p {
        font-size: 0.6rem;
    }

    .timeline-item {
        padding-left: 50px;
    }

    .timeline::before {
        left: 14px;
    }

    .timeline-dot {
        left: 5px;
    }

    .timeline-card {
        padding: 22px;
    }

    .certificate-card {
        padding: 22px;
        gap: 15px;
    }

    .certificate-icon {
        min-width: 48px;
        height: 48px;
    }

    .contact-form-wrapper {
        padding: 22px;
    }

}
