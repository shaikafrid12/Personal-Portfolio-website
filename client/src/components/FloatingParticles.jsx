import { useEffect, useRef } from 'react';

const FloatingParticles = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particlesArray = [];
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const mouse = {
            x: null,
            y: null,
            radius: 140
        };

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            init();
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        const colors = [
            'rgba(56, 189, 248, ',  // Accent blue base
            'rgba(139, 92, 246, ',  // Accent purple base
            'rgba(236, 72, 153, '   // Pink base
        ];

        // Particle Blueprint Class
        class Particle {
            constructor(x, y, vx, vy, size, colorBase, type) {
                this.x = x;
                this.y = y;
                this.baseVx = vx;
                this.baseVy = vy;
                this.vx = vx;
                this.vy = vy;
                this.size = size;
                this.colorBase = colorBase;
                this.type = type;
                this.opacity = Math.random() * 0.35 + 0.15;
                this.angle = Math.random() * Math.PI * 2;
                this.spin = Math.random() * 0.015 - 0.0075;
            }

            // Draw single particle
            draw() {
                ctx.save();
                ctx.globalAlpha = this.opacity;

                if (this.type === 'orb') {
                    // Blurry soft background glow orb
                    const gradient = ctx.createRadialGradient(
                        this.x, this.y, 0,
                        this.x, this.y, this.size
                    );
                    gradient.addColorStop(0, this.colorBase + '0.12)');
                    gradient.addColorStop(0.5, this.colorBase + '0.04)');
                    gradient.addColorStop(1, this.colorBase + '0)');

                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fillStyle = gradient;
                    ctx.fill();
                } else if (this.type === 'cross') {
                    // Technical plus/crosshair node
                    ctx.strokeStyle = this.colorBase + '0.45)';
                    ctx.lineWidth = 1;
                    ctx.translate(this.x, this.y);
                    ctx.rotate(this.angle);

                    ctx.beginPath();
                    ctx.moveTo(-this.size, 0);
                    ctx.lineTo(this.size, 0);
                    ctx.moveTo(0, -this.size);
                    ctx.lineTo(0, this.size);
                    ctx.stroke();
                } else {
                    // Crisp standard dot
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                    ctx.fillStyle = this.colorBase + '0.6)';
                    ctx.fill();
                }

                ctx.restore();
            }

            // Calculate path, boundaries bounce, and fluid mouse interaction
            update() {
                // Return to base velocity with smooth easing
                this.vx += (this.baseVx - this.vx) * 0.04;
                this.vy += (this.baseVy - this.vy) * 0.04;

                // Smooth repulsion force from mouse cursor
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouse.radius) {
                        const force = (mouse.radius - distance) / mouse.radius;
                        // Accel away from cursor (stronger for smaller particles, slower for big orbs)
                        const accelFactor = this.type === 'orb' ? 0.8 : 3.5;
                        const forceX = (dx / distance) * force * accelFactor;
                        const forceY = (dy / distance) * force * accelFactor;

                        this.vx -= forceX;
                        this.vy -= forceY;
                    }
                }

                // Apply updated position
                this.x += this.vx;
                this.y += this.vy;

                // Boundary checks with soft wrap-around and reposition safeguard
                const buffer = this.size;
                if (this.x < -buffer) {
                    this.x = width + buffer;
                } else if (this.x > width + buffer) {
                    this.x = -buffer;
                }
                if (this.y < -buffer) {
                    this.y = height + buffer;
                } else if (this.y > height + buffer) {
                    this.y = -buffer;
                }

                // Spin crosses
                this.angle += this.spin;

                this.draw();
            }
        }

        // Connect particles with network lines and lines to the mouse
        const connectParticles = () => {
            const maxDistance = 110;
            for (let a = 0; a < particlesArray.length; a++) {
                if (particlesArray[a].type === 'orb') continue;

                for (let b = a + 1; b < particlesArray.length; b++) {
                    if (particlesArray[b].type === 'orb') continue;

                    const dx = particlesArray[a].x - particlesArray[b].x;
                    const dy = particlesArray[a].y - particlesArray[b].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        const opacity = (1 - (distance / maxDistance)) * 0.12;

                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);

                        const gradient = ctx.createLinearGradient(
                            particlesArray[a].x, particlesArray[a].y,
                            particlesArray[b].x, particlesArray[b].y
                        );
                        gradient.addColorStop(0, particlesArray[a].colorBase + opacity + ')');
                        gradient.addColorStop(1, particlesArray[b].colorBase + opacity + ')');

                        ctx.strokeStyle = gradient;
                        ctx.lineWidth = 0.6;
                        ctx.stroke();
                    }
                }

                // Connect cursor to nearby particles
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - particlesArray[a].x;
                    const dy = mouse.y - particlesArray[a].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouse.radius) {
                        const opacity = (1 - (distance / mouse.radius)) * 0.20;
                        ctx.beginPath();
                        ctx.moveTo(mouse.x, mouse.y);
                        ctx.lineTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.strokeStyle = particlesArray[a].colorBase + opacity + ')';
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }
            }
        };

        // Populate particles collection
        const init = () => {
            particlesArray = [];
            // Balanced particle density for a clean, professional appearance (approx 1 per 13000px)
            const numberOfParticles = Math.min(Math.floor((width * height) / 13000), 100);

            for (let i = 0; i < numberOfParticles; i++) {
                const rand = Math.random();
                let type = 'dot';
                let size = Math.random() * 1.5 + 0.8; // dots are sleek and micro

                if (rand < 0.12) {
                    type = 'orb';
                    size = Math.random() * 20 + 20; // soft blurred ambient bubbles
                } else if (rand < 0.24) {
                    type = 'cross';
                    size = Math.random() * 2.5 + 2.5; // technical crosshairs
                }

                const x = Math.random() * width;
                const y = Math.random() * height;

                // Velocity configuration (orbs move slower for depth)
                const speed = type === 'orb' ? 0.1 : 0.35;
                const vx = (Math.random() * 2 - 1) * speed;
                const vy = (Math.random() * 2 - 1) * speed;

                const colorBase = colors[Math.floor(Math.random() * colors.length)];

                particlesArray.push(new Particle(x, y, vx, vy, size, colorBase, type));
            }
        };

        // Main animation loop
        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Update particles
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
            }

            // Draw connection network
            connectParticles();

            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-0 bg-[#04060f] overflow-hidden pointer-events-none">
            {/* Dynamic Shifting Vibrant Neon Orbs Backdrop */}
            <div className="absolute top-[-10%] left-[-15%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-accent-blue/20 to-accent-purple/10 blur-[130px] animate-orb-drift-1" />
            <div className="absolute bottom-[-10%] right-[-15%] w-[65vw] h-[65vw] rounded-full bg-gradient-to-br from-accent-purple/20 to-pink-500/10 blur-[150px] animate-orb-drift-2" />
            <div className="absolute top-[35%] left-[10%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-r from-accent-blue/15 to-pink-500/8 blur-[120px] animate-orb-drift-3" />
            <div className="absolute top-[20%] right-[5%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-l from-pink-500/15 to-accent-purple/10 blur-[140px] animate-orb-drift-4" />

            {/* Grid Pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-80" />

            {/* Floating Canvas Particles */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
                style={{ mixBlendMode: 'screen' }}
            />
        </div>
    );
};

export default FloatingParticles;
