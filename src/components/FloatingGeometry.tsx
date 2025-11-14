export const FloatingGeometry = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating cube */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-border/20 animate-float-slow transform-3d perspective" 
           style={{ transform: 'rotateX(15deg) rotateY(15deg)' }}>
        <div className="absolute inset-0 border border-border/10 transform translate-z-4" />
      </div>
      
      {/* Floating pyramid */}
      <div className="absolute bottom-40 left-10 w-0 h-0 
                      border-l-[60px] border-r-[60px] border-b-[100px] 
                      border-l-transparent border-r-transparent border-b-border/20
                      animate-float-delayed" />
      
      {/* Floating circle */}
      <div className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full border-2 border-border/15 animate-float" />
      
      {/* Floating square */}
      <div className="absolute bottom-20 right-1/4 w-24 h-24 border border-border/20 rotate-45 animate-float-slow" />
      
      {/* Small floating dots */}
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-foreground/10 rounded-full animate-float" />
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-foreground/10 rounded-full animate-float-delayed" />
      <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-foreground/10 rounded-full animate-float-slow" />
      
      {/* Grid lines for depth */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
               backgroundSize: '80px 80px',
             }} />
      </div>
    </div>
  );
};
