export const FloatingGeometry = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating cube with enhanced 3D effect */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-border/20 animate-float-slow transform-3d perspective" 
           style={{ transform: 'rotateX(15deg) rotateY(15deg)' }}>
        <div className="absolute inset-0 border border-border/10 transform translate-z-4" />
        <div className="absolute inset-2 border border-border/5" />
      </div>
      
      {/* Floating pyramid */}
      <div className="absolute bottom-40 left-10 w-0 h-0 
                      border-l-[60px] border-r-[60px] border-b-[100px] 
                      border-l-transparent border-r-transparent border-b-border/20
                      animate-float-delayed" />
      
      {/* Floating circle with pulse */}
      <div className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full border-2 border-border/15 animate-float">
        <div className="absolute inset-0 rounded-full border border-border/5 animate-pulse-slow" />
      </div>
      
      {/* Floating square */}
      <div className="absolute bottom-20 right-1/4 w-24 h-24 border border-border/20 rotate-45 animate-float-slow" />
      
      {/* New: Floating hexagon */}
      <div className="absolute top-1/4 left-1/2 w-28 h-28 animate-float">
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-20">
          <polygon points="50,5 90,30 90,70 50,95 10,70 10,30" 
                   fill="none" 
                   stroke="currentColor" 
                   strokeWidth="1" />
        </svg>
      </div>
      
      {/* New: Floating wireframe sphere */}
      <div className="absolute bottom-1/3 right-1/3 w-36 h-36 animate-float-delayed opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <ellipse cx="50" cy="50" rx="40" ry="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <ellipse cx="50" cy="50" rx="20" ry="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.5" />
          <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
      
      {/* New: Spinning triangle */}
      <div className="absolute top-40 left-1/3 w-20 h-20 animate-spin-slow opacity-15">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>
      
      {/* New: Glowing circle */}
      <div className="absolute bottom-1/4 left-1/4 w-16 h-16 rounded-full border-2 border-border/20 animate-glow-pulse" />
      
      {/* New: Orbiting dot */}
      <div className="absolute top-1/3 left-1/4 w-32 h-32">
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-foreground/20 rounded-full animate-orbit" />
      </div>
      
      {/* New: Wiggling star */}
      <div className="absolute top-1/4 right-1/3 w-24 h-24 animate-wiggle opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,5 61,38 95,38 68,59 79,92 50,71 21,92 32,59 5,38 39,38" 
                   fill="none" 
                   stroke="currentColor" 
                   strokeWidth="1" />
        </svg>
      </div>
      
      {/* New: Rotating diamond */}
      <div className="absolute bottom-40 right-1/5 w-20 h-20 border border-border/25 animate-spin-slow" 
           style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
      
      {/* New: Pulsing rings */}
      <div className="absolute top-2/3 left-1/5 w-32 h-32 opacity-10">
        <div className="absolute inset-0 rounded-full border border-border/30 animate-pulse" />
        <div className="absolute inset-4 rounded-full border border-border/25 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute inset-8 rounded-full border border-border/20 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Small floating dots with varied animations */}
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-foreground/10 rounded-full animate-float" />
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-foreground/10 rounded-full animate-float-delayed" />
      <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-foreground/10 rounded-full animate-float-slow" />
      <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-foreground/15 rounded-full animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/5 w-3 h-3 bg-foreground/10 rounded-full animate-float" />
      <div className="absolute top-1/2 right-1/2 w-2 h-2 bg-foreground/12 rounded-full animate-bounce" />
      <div className="absolute bottom-1/2 left-1/2 w-2 h-2 bg-foreground/12 rounded-full animate-pulse" />
      
      {/* Grid lines for depth */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
               backgroundSize: '80px 80px',
             }} />
      </div>
      
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/5 to-transparent" />
    </div>
  );
};
