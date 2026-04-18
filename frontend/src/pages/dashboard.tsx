import React, { useState, useEffect } from 'react';
import { 
  Wallet, Star, CheckCircle2, Menu, 
  Zap, Clock, Bell, MapPin, Package, Navigation 
} from 'lucide-react';

const RunnerDashboard = () => {
  const [currentTime, setCurrentTime] = useState("");
  
  const blue = "#89CFF0"; // Baby Blue
  const lilac = "#E0B0FF"; // Lilac

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // MASTER STYLES
  const containerStyle: React.CSSProperties = {
    backgroundColor: '#000',
    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(137, 207, 240, 0.05) 1px, transparent 0)',
    backgroundSize: '40px 40px',
    minHeight: '100vh',
    color: '#fff',
    fontFamily: 'Inter, system-ui, sans-serif',
    padding: '100px 40px 40px 40px',
    boxSizing: 'border-box'
  };

  const glassCard: React.CSSProperties = {
    background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '32px',
    padding: '30px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
  };

  const gradientText = {
    background: `linear-gradient(90deg, ${blue}, ${lilac})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 900
  };

  return (
    <div style={containerStyle}>
      {/* GLOW EFFECTS */}
      <div style={{ position: 'fixed', top: '-10%', left: '-5%', width: '500px', height: '500px', background: `${blue}15`, filter: 'blur(100px)', pointerEvents: 'none' }} />
      <div style={{ position: 'fixed', bottom: '0', right: '0', width: '400px', height: '400px', background: `${lilac}10`, filter: 'blur(100px)', pointerEvents: 'none' }} />

      {/* NAV BAR */}
      <nav style={{ 
        position: 'fixed', top: '20px', left: '40px', right: '40px', 
        height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 30px', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)',
        borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', zIndex: 100
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ background: '#fff', padding: '8px', borderRadius: '50%', color: '#000', display: 'flex' }}><Menu size={18} /></div>
          <span style={{ color: blue, letterSpacing: '3px', fontSize: '12px', fontWeight: 800 }}>GEARGO DISPATCH</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.8 }}><MapPin size={14} color={blue}/> <span style={{fontSize:'12px'}}>{currentTime}</span></div>
          <Bell size={20} color={lilac} />
        </div>
      </nav>

      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        {/* HERO SECTION */}
        <div style={{ ...glassCard, padding: '60px', marginBottom: '30px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                    <p style={{ color: blue, letterSpacing: '5px', fontSize: '10px', fontWeight: 900, marginBottom: '20px' }}>RUNNER STATUS: ELITE</p>
                    <h1 style={{ fontSize: '72px', margin: 0, fontWeight: 300, lineHeight: 1 }}>
                        Drive Safe,<br />
                        <span style={gradientText as any}>Deolyn.</span>
                    </h1>
                </div>
                <div style={{ display: 'flex', gap: '40px', textAlign: 'center', background: 'rgba(0,0,0,0.2)', padding: '30px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div><p style={{ color: blue, fontSize: '10px', fontWeight: 800 }}>EFFICIENCY</p><p style={{ fontSize: '32px', fontWeight: 900 }}>98%</p></div>
                    <div><p style={{ color: lilac, fontSize: '10px', fontWeight: 800 }}>RANK</p><p style={{ fontSize: '32px', fontWeight: 900 }}>SR</p></div>
                </div>
            </div>
        </div>

        {/* STATS GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '30px' }}>
          {/* Wallet */}
          <div style={{ ...glassCard, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '300px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ background: '#fff', color: '#000', padding: '15px', borderRadius: '20px' }}><Wallet size={28}/></div>
                <div style={{ textAlign: 'right' }}><p style={{ color: blue, fontSize: '10px', fontWeight: 800 }}>EARNINGS TODAY</p><p style={{ fontWeight: 800 }}>+R 1,240</p></div>
            </div>
            <div>
                <p style={{ fontSize: '10px', opacity: 0.4, fontWeight: 800, letterSpacing: '2px' }}>AVAILABLE BALANCE</p>
                <h2 style={{ fontSize: '80px', margin: 0, fontWeight: 900, italic: 'italic', letterSpacing: '-4px' } as any}>R 4,850</h2>
            </div>
          </div>

          {/* Rating */}
          <div style={{ ...glassCard, background: `linear-gradient(135deg, ${blue}15, ${lilac}15)`, textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Star size={48} color={lilac} fill={lilac} style={{ marginBottom: '20px' }} />
            <p style={{ fontSize: '64px', fontWeight: 900, margin: 0 }}>5.0</p>
            <p style={{ fontSize: '10px', opacity: 0.6, fontWeight: 800, letterSpacing: '2px' }}>SERVICE LEVEL</p>
          </div>

          {/* Small Stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div style={{ ...glassCard, flex: 1, display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '15px', border: `1px solid ${blue}40` }}><Package color={blue}/></div>
                <div><p style={{ fontSize: '24px', fontWeight: 900, margin: 0 }}>14</p><p style={{ fontSize: '10px', opacity: 0.5 }}>ORDERS</p></div>
            </div>
            <div style={{ ...glassCard, flex: 1, display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '15px', border: `1px solid ${lilac}40` }}><Navigation color={lilac}/></div>
                <div><p style={{ fontSize: '24px', fontWeight: 900, margin: 0 }}>128km</p><p style={{ fontSize: '10px', opacity: 0.5 }}>DISTANCE</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RunnerDashboard;