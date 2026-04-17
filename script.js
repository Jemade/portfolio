lucide.createIcons();

const canvas = document.getElementById('neural-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function initCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }
}

// 70 particles for a dense network
for (let i = 0; i < 70; i++) particles.push(new Particle());

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Increased line opacity and width for brightness
    ctx.strokeStyle = 'rgba(0, 242, 255, 0.25)'; 
    ctx.lineWidth = 1.2;
    
    particles.forEach((p, i) => {
        p.update();
        particles.slice(i + 1).forEach(p2 => {
            let dist = Math.hypot(p.x - p2.x, p.y - p2.y);
            if (dist < 200) { // Longer connection distance
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }
        });
    });
    requestAnimationFrame(animate);
}

window.addEventListener('resize', initCanvas);
initCanvas();
animate();

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));