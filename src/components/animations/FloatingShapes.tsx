import { useEffect, useRef } from 'react';

interface Shape {
    x: number;
    y: number;
    size: number;
    rotation: number;
    rotationSpeed: number;
    speedX: number;
    speedY: number;
    type: 'cube' | 'sphere' | 'pyramid';
    color: string;
}

export const FloatingShapes = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const shapesRef = useRef<Shape[]>([]);
    const mouseRef = useRef({ x: 0, y: 0 });
    const animationFrameRef = useRef<number>();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Initialize shapes
        const colors = [
            'rgba(59, 130, 246, 0.1)', // primary blue
            'rgba(14, 165, 233, 0.1)', // accent cyan
            'rgba(59, 130, 246, 0.15)',
            'rgba(14, 165, 233, 0.15)',
        ];

        const types: ('cube' | 'sphere' | 'pyramid')[] = ['cube', 'sphere', 'pyramid'];

        for (let i = 0; i < 15; i++) {
            shapesRef.current.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 80 + 40,
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.02,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                type: types[Math.floor(Math.random() * types.length)],
                color: colors[Math.floor(Math.random() * colors.length)],
            });
        }

        // Mouse move handler
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Draw functions
        const drawCube = (ctx: CanvasRenderingContext2D, shape: Shape) => {
            ctx.save();
            ctx.translate(shape.x, shape.y);
            ctx.rotate(shape.rotation);

            const size = shape.size;
            const offset = size * 0.3;

            // Front face
            ctx.fillStyle = shape.color;
            ctx.fillRect(-size / 2, -size / 2, size, size);

            // Top face (3D effect)
            ctx.fillStyle = shape.color.replace(/[\d.]+\)/, '0.05)');
            ctx.beginPath();
            ctx.moveTo(-size / 2, -size / 2);
            ctx.lineTo(0, -size / 2 - offset);
            ctx.lineTo(size / 2 + offset, -size / 2 - offset);
            ctx.lineTo(size / 2, -size / 2);
            ctx.closePath();
            ctx.fill();

            // Right face (3D effect)
            ctx.fillStyle = shape.color.replace(/[\d.]+\)/, '0.08)');
            ctx.beginPath();
            ctx.moveTo(size / 2, -size / 2);
            ctx.lineTo(size / 2 + offset, -size / 2 - offset);
            ctx.lineTo(size / 2 + offset, size / 2 - offset);
            ctx.lineTo(size / 2, size / 2);
            ctx.closePath();
            ctx.fill();

            // Outline
            ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)';
            ctx.lineWidth = 2;
            ctx.strokeRect(-size / 2, -size / 2, size, size);

            ctx.restore();
        };

        const drawSphere = (ctx: CanvasRenderingContext2D, shape: Shape) => {
            ctx.save();
            ctx.translate(shape.x, shape.y);

            // Create gradient for 3D effect
            const gradient = ctx.createRadialGradient(
                -shape.size * 0.2,
                -shape.size * 0.2,
                0,
                0,
                0,
                shape.size / 2
            );
            gradient.addColorStop(0, shape.color.replace(/[\d.]+\)/, '0.2)'));
            gradient.addColorStop(1, shape.color);

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
            ctx.fill();

            // Outline
            ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)';
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.restore();
        };

        const drawPyramid = (ctx: CanvasRenderingContext2D, shape: Shape) => {
            ctx.save();
            ctx.translate(shape.x, shape.y);
            ctx.rotate(shape.rotation);

            const size = shape.size;

            // Base
            ctx.fillStyle = shape.color;
            ctx.beginPath();
            ctx.moveTo(0, -size / 2);
            ctx.lineTo(size / 2, size / 2);
            ctx.lineTo(-size / 2, size / 2);
            ctx.closePath();
            ctx.fill();

            // Side face (3D effect)
            ctx.fillStyle = shape.color.replace(/[\d.]+\)/, '0.15)');
            ctx.beginPath();
            ctx.moveTo(0, -size / 2);
            ctx.lineTo(size / 2, size / 2);
            ctx.lineTo(size / 2 + size * 0.3, size / 2 - size * 0.2);
            ctx.closePath();
            ctx.fill();

            // Outline
            ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(0, -size / 2);
            ctx.lineTo(size / 2, size / 2);
            ctx.lineTo(-size / 2, size / 2);
            ctx.closePath();
            ctx.stroke();

            ctx.restore();
        };

        // Animation loop
        const animate = () => {
            if (!ctx || !canvas) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            shapesRef.current.forEach((shape) => {
                // Mouse interaction
                const dx = mouseRef.current.x - shape.x;
                const dy = mouseRef.current.y - shape.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 200;

                if (distance < maxDistance) {
                    const force = (maxDistance - distance) / maxDistance;
                    shape.x -= (dx / distance) * force * 2;
                    shape.y -= (dy / distance) * force * 2;
                }

                // Update position
                shape.x += shape.speedX;
                shape.y += shape.speedY;
                shape.rotation += shape.rotationSpeed;

                // Bounce off edges
                if (shape.x < -shape.size) shape.x = canvas.width + shape.size;
                if (shape.x > canvas.width + shape.size) shape.x = -shape.size;
                if (shape.y < -shape.size) shape.y = canvas.height + shape.size;
                if (shape.y > canvas.height + shape.size) shape.y = -shape.size;

                // Draw shape
                switch (shape.type) {
                    case 'cube':
                        drawCube(ctx, shape);
                        break;
                    case 'sphere':
                        drawSphere(ctx, shape);
                        break;
                    case 'pyramid':
                        drawPyramid(ctx, shape);
                        break;
                }
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none"
            style={{ zIndex: 1 }}
        />
    );
};
