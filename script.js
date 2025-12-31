// Stranger Things Landing Page - JavaScript Enhancements

document.addEventListener('DOMContentLoaded', () => {
    // Smooth reveal on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    document.querySelectorAll('.character-card, .monster-card, .feature-card, .location-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Flickering light effect on title
    const title = document.querySelector('.title');
    if (title) {
        setInterval(() => {
            if (Math.random() > 0.95) {
                title.style.opacity = '0.5';
                setTimeout(() => {
                    title.style.opacity = '1';
                }, 50);
            }
        }, 100);
    }

    // Random particle colors
    document.querySelectorAll('.particle').forEach(particle => {
        const colors = ['rgba(255,255,255,0.3)', 'rgba(220,20,60,0.3)', 'rgba(0,206,209,0.2)', 'rgba(255,20,147,0.2)'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.width = (Math.random() * 4 + 2) + 'px';
        particle.style.height = particle.style.width;
    });

    // Parallax effect on scroll
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                document.querySelectorAll('.hero-bg, .upside-down-bg, .hawkins-bg').forEach(bg => {
                    bg.style.transform = `translateY(${scrolled * 0.3}px)`;
                });
                ticking = false;
            });
            ticking = true;
        }
    });

    // Audio effect placeholder (eerie humming)
    console.log('🔮 Welcome to the Upside Down...');
    console.log('👁 Vecna is watching...');

    // Easter egg: Konami code
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                document.body.style.filter = 'invert(1) hue-rotate(180deg)';
                setTimeout(() => {
                    document.body.style.filter = '';
                }, 3000);
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    // Cursor trail effect
    const cursor = document.createElement('div');
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid rgba(220, 20, 60, 0.5);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        transition: transform 0.1s ease;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });

    // Blood drip randomization
    document.querySelectorAll('.blood-drip').forEach((drip, i) => {
        drip.style.animationDelay = (Math.random() * 4) + 's';
        drip.style.left = (Math.random() * 100) + '%';
    });
});
