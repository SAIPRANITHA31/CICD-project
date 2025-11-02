// Smooth scroll-triggered animations and typing effect

// Intersection Observer to reveal elements
(function () {
    const reveal = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(reveal, {
        threshold: 0.2,
    });

    document.querySelectorAll('.fade-in, .slide-up').forEach(el => observer.observe(el));
})();

// Typing effect for homepage title
(function () {
    const el = document.getElementById('typing-text');
    if (!el) return;
    const full = el.textContent.trim();
    el.textContent = '';

    let i = 0;
    const speed = 50; // ms per char
    const typeNext = () => {
        if (i <= full.length) {
            el.textContent = full.slice(0, i);
            i += 1;
            requestAnimationFrame(() => setTimeout(typeNext, speed));
        }
    };
    setTimeout(typeNext, 400);
})();

// Button click glow effect
(function () {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function () {
            this.classList.add('btn-clicking');
            setTimeout(() => this.classList.remove('btn-clicking'), 300);
        });
    });
})();

// Optional: mobile nav toggle if present
(function () {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
})();

