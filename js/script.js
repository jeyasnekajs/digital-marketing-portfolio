// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Pause/play hero video based on page visibility
const heroVideo = document.querySelector(".hero-video video");

document.addEventListener("visibilitychange", () => {
    if (!heroVideo) return;

    if (document.hidden) {
        heroVideo.pause();
    } else {
        heroVideo.play().catch(() => {});
    }
});


// Current year in footer
const copyright = document.querySelector(".copyright");

if (copyright) {
    copyright.innerHTML =
        `© ${new Date().getFullYear()} Jeyasneka G. All Rights Reserved.`;
}
