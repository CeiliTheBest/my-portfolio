const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Large floating circle - mint green */}
      <div 
        className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-20 animate-float-slow"
        style={{ 
          background: 'linear-gradient(135deg, hsl(160 45% 80%) 0%, hsl(140 50% 85%) 100%)',
          animationDelay: '0s'
        }}
      />
      
      {/* Medium floating blob - peachy orange */}
      <div 
        className="absolute top-1/3 left-20 w-48 h-48 rounded-full opacity-25 animate-float"
        style={{ 
          background: 'linear-gradient(135deg, hsl(30 80% 80%) 0%, hsl(25 85% 85%) 100%)',
          animationDelay: '1s',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
        }}
      />
      
      {/* Small floating circle - lavender */}
      <div 
        className="absolute bottom-32 right-1/4 w-32 h-32 rounded-full opacity-30 animate-float-slow"
        style={{ 
          background: 'linear-gradient(135deg, hsl(270 50% 85%) 0%, hsl(340 60% 90%) 100%)',
          animationDelay: '2s'
        }}
      />
      
      {/* Organic blob - beige */}
      <div 
        className="absolute top-1/2 right-1/3 w-56 h-56 opacity-20 animate-float"
        style={{ 
          background: 'linear-gradient(135deg, hsl(40 30% 88%) 0%, hsl(30 35% 85%) 100%)',
          animationDelay: '1.5s',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
        }}
      />
      
      {/* Small accent circle - coral */}
      <div 
        className="absolute bottom-1/4 left-1/3 w-40 h-40 rounded-full opacity-25 animate-float-slow"
        style={{ 
          background: 'linear-gradient(135deg, hsl(15 85% 80%) 0%, hsl(340 60% 85%) 100%)',
          animationDelay: '0.5s'
        }}
      />
      
      {/* Tiny floating dot - mint */}
      <div 
        className="absolute top-2/3 right-20 w-24 h-24 rounded-full opacity-35 animate-float"
        style={{ 
          background: 'hsl(160 45% 85%)',
          animationDelay: '2.5s'
        }}
      />
    </div>
  );
};

export default FloatingShapes;
