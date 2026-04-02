/* =============================================
   Power of AI - Shared JavaScript
   ============================================= */

// ===== LOADING SCREEN =====
(function initLoader() {
    const loader = document.getElementById("loader");
    if (!loader) return;
    document.body.style.overflow = "hidden";
    window.addEventListener("load", () => {
        setTimeout(() => {
            loader.classList.add("hidden");
            document.body.style.overflow = "";
        }, 2000);
    });
})();

// ===== CUSTOM CURSOR =====
(function initCustomCursor() {
    const cursor = document.getElementById("cursor");
    const cursorGlow = document.getElementById("cursorGlow");
    if (!cursor || !cursorGlow || window.innerWidth <= 768) return;

    let cursorX = 0, cursorY = 0, glowX = 0, glowY = 0;

    document.addEventListener("mousemove", (e) => {
        cursorX = e.clientX;
        cursorY = e.clientY;
    });

    function animateCursor() {
        cursor.style.left = cursorX + "px";
        cursor.style.top = cursorY + "px";
        glowX += (cursorX - glowX) * 0.08;
        glowY += (cursorY - glowY) * 0.08;
        cursorGlow.style.left = glowX + "px";
        cursorGlow.style.top = glowY + "px";
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover state on interactive elements
    const hoverTargets = document.querySelectorAll("a, button, .service-card, .testi-card, .about-icon-cell");
    hoverTargets.forEach(el => {
        el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
        el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
    });

    // Hide default cursor
    document.body.style.cursor = "none";
    document.querySelectorAll("a, button").forEach(el => el.style.cursor = "none");
})();

// ===== SCROLL PROGRESS BAR =====
(function initScrollProgress() {
    const scrollProgress = document.getElementById("scrollProgress");
    if (!scrollProgress) return;
    window.addEventListener("scroll", () => {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        const pct = (window.scrollY / h) * 100;
        scrollProgress.style.width = pct + "%";
    });
})();

// ===== NAV SCROLL =====
(function initNavScroll() {
    const nav = document.getElementById("nav");
    if (!nav) return;
    window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 50));
})();

// ===== BACK TO TOP =====
(function initBackToTop() {
    const backToTop = document.getElementById("backToTop");
    if (!backToTop) return;
    window.addEventListener("scroll", () => {
        backToTop.classList.toggle("visible", window.scrollY > 600);
    });
})();

// ===== SCROLL REVEAL =====
(function initScrollReveal() {
    const reveals = document.querySelectorAll(".reveal");
    if (!reveals.length) return;
    const revealObs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add("visible");
                revealObs.unobserve(e.target);
            }
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(el => revealObs.observe(el));
})();

// ===== SMOOTH SCROLL =====
(function initSmoothScroll() {
    document.querySelectorAll("a[href^=\"#\"]").forEach(a => {
        a.addEventListener("click", e => {
            e.preventDefault();
            const t = document.querySelector(a.getAttribute("href"));
            if (t) t.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });
})();

// ===== FLOATING CUBE FOLLOWS SCROLL =====
(function initFloatingCube() {
    const floatingCube = document.getElementById("floatingCube");
    if (!floatingCube || window.innerWidth <= 768) return;

    let cubeY = window.innerHeight / 2;
    let targetCubeY = cubeY;

    window.addEventListener("scroll", () => {
        const scrollPct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        targetCubeY = 100 + scrollPct * (window.innerHeight - 200);
    });

    function animateCubePos() {
        cubeY += (targetCubeY - cubeY) * 0.04;
        floatingCube.style.top = cubeY + "px";
        floatingCube.style.transform = "translateY(0)";
        requestAnimationFrame(animateCubePos);
    }
    animateCubePos();
})();

// ===== PARALLAX SECTIONS ON SCROLL =====
(function initParallax() {
    const parallaxElements = document.querySelectorAll(".hero-glow, .bg-orb");
    if (!parallaxElements.length) return;
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        parallaxElements.forEach((el, i) => {
            const speed = 0.03 + i * 0.015;
            el.style.transform = "translateY(" + (scrollY * speed) + "px)";
        });
    });
})();

// ===== MOBILE MENU =====
function toggleMobile() {
    const links = document.querySelector(".nav-links");
    if (!links) return;
    if (links.style.display === "flex") {
        links.style.display = "none";
    } else {
        links.style.cssText = "display:flex;flex-direction:column;position:absolute;top:100%;left:0;right:0;background:rgba(7,8,15,0.95);backdrop-filter:blur(24px);padding:24px 32px;gap:20px;border-bottom:1px solid rgba(255,255,255,0.06);";
    }
}

// ===== DYNAMIC SHOOTING STARS =====
(function initDynamicShootingStars() {
    function createShootingStar() {
        const star = document.createElement("div");
        const w = 60 + Math.random() * 100;
        const top = Math.random() * 80;
        const rot = -5 - Math.random() * 20;
        const dur = 1.5 + Math.random() * 2;
        star.style.cssText = "position:fixed;width:" + w + "px;height:1px;background:linear-gradient(90deg,rgba(251,191,36,0.8),transparent);top:" + top + "%;left:-150px;transform:rotate(" + rot + "deg);pointer-events:none;z-index:0;animation:shoot " + dur + "s linear forwards;";
        const dot = document.createElement("div");
        dot.style.cssText = "position:absolute;right:0;width:3px;height:3px;border-radius:50%;background:#FBBF24;box-shadow:0 0 8px #F59E0B,0 0 20px rgba(251,191,36,0.4);";
        star.appendChild(dot);
        document.body.appendChild(star);
        setTimeout(() => star.remove(), 4000);
    }

    // Spawn random shooting stars
    setInterval(createShootingStar, 3000 + Math.random() * 5000);
})();
