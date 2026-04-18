import React, { useState } from 'react';
import Link from 'next/link';

const LandingPage = () => {
  const [showAbout, setShowAbout] = useState(false);

  // GEARGO COLOR PALETTE
  const colors = {
    blue: '#89CFF0',    // Baby Blue
    lilac: '#E0B0FF',   // Lilac
    black: '#000000',   // Deep Black
    glass: 'rgba(255, 255, 255, 0.03)',
    text: '#FFFFFF'
  };

  const gradientText: React.CSSProperties = {
    background: `linear-gradient(90deg, ${colors.blue}, ${colors.lilac})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 900
  };

  // ICONS (Custom GearGo Variants)
  const SpeedIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={colors.blue} strokeWidth="1.5">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill={`${colors.blue}20`} />
    </svg>
  );

  const ShieldIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={colors.lilac} strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill={`${colors.lilac}20`} />
    </svg>
  );

  const NetworkIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={colors.blue} strokeWidth="1.5">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3m0 12v3M3 12h3m12 0h3m-3.5-6.5l2 2m-13 9l2 2m0-13l-2 2m13 9l-2 2" />
    </svg>
  );

  return (
    <div style={{ backgroundColor: colors.black, minHeight: '100vh', width: '100%', color: colors.text, fontFamily: 'Inter, system-ui, sans-serif' }}>
      
      {/* AMBIENT BACKGROUND GLOWS */}
      <div style={{ position: 'fixed', top: '-10%', right: '-5%', width: '600px', height: '600px', background: `${colors.blue}10`, filter: 'blur(120px)', zIndex: 0 }} />
      <div style={{ position: 'fixed', bottom: '-10%', left: '-5%', width: '600px', height: '600px', background: `${colors.lilac}08`, filter: 'blur(120px)', zIndex: 0 }} />

      {/* NAVIGATION */}
      <nav style={{ 
        padding: '1.5rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(20px)', background: 'rgba(0,0,0,0.4)',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ background: `linear-gradient(135deg, ${colors.blue}, ${colors.lilac})`, width: '35px', height: '35px', borderRadius: '8px' }} />
          <span style={{ fontWeight: 900, fontSize: '1.5rem', letterSpacing: '-1px' }}>GEARGO<span style={{ color: colors.blue }}>.</span></span>
        </div>

        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {['Network', 'Security', 'Dispatch'].map(item => (
            <button key={item} style={{ background: 'none', border: 'none', color: '#fff', opacity: 0.6, cursor: 'pointer', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px' }}>{item.toUpperCase()}</button>
          ))}
          <Link href="/dashboard" style={{ 
            background: `linear-gradient(90deg, ${colors.blue}, ${colors.lilac})`, 
            color: '#000', padding: '0.8rem 1.8rem', borderRadius: '50px', 
            textDecoration: 'none', fontWeight: 800, fontSize: '0.8rem' 
          }}>LAUNCH SYSTEM</Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <main style={{ padding: '8rem 5% 4rem', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div style={{ color: colors.blue, fontSize: '0.7rem', fontWeight: 900, letterSpacing: '4px', marginBottom: '1.5rem' }}>// NEXT-GEN AUTO LOGISTICS</div>
            <h2 style={{ fontSize: '5rem', fontWeight: 300, lineHeight: 1, marginBottom: '2rem' }}>
              Precision Parts.<br />
              <span style={gradientText as any}>Instant Delivery.</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.2rem', lineHeight: '1.6', maxWidth: '500px', marginBottom: '3rem' }}>
              The elite runner network for high-performance automotive parts. Real-time tracking, AI-validated specs, and 100% secure logistics.
            </p>

            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <Link href="/register" style={{ background: '#fff', color: '#000', padding: '1.2rem 2.5rem', borderRadius: '12px', textDecoration: 'none', fontWeight: 800 }}>Join the Fleet</Link>
              <button style={{ border: '1px solid rgba(255,255,255,0.2)', background: 'none', color: '#fff', padding: '1.2rem 2.5rem', borderRadius: '12px', fontWeight: 800 }}>Explore Network</button>
            </div>
          </div>

          {/* STATS GLASS CARD */}
          <div style={{ 
            background: colors.glass, border: '1px solid rgba(255,255,255,0.1)', 
            borderRadius: '40px', padding: '3rem', backdropFilter: 'blur(30px)' 
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              {[
                { v: '15m', l: 'Avg Dispatch', c: colors.blue },
                { v: '24/7', l: 'Live Support', c: colors.lilac },
                { v: '99.9%', l: 'Delivery Rate', c: colors.blue },
                { v: '4.9', l: 'Fleet Rating', c: colors.lilac }
              ].map((s, i) => (
                <div key={i} style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ color: s.c, fontSize: '2rem', fontWeight: 900 }}>{s.v}</div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, opacity: 0.4, letterSpacing: '1px' }}>{s.l.toUpperCase()}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* HOW IT WORKS (The "GearGo" Way) */}
      <section style={{ padding: '6rem 5%', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <h3 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 900, marginBottom: '4rem' }}>Operational Protocol</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
          {[
            { icon: <SpeedIcon />, title: 'Rapid Dispatch', desc: 'Orders are processed and assigned to the nearest runner within 120 seconds.' },
            { icon: <NetworkIcon />, title: 'AI Validation', desc: 'Our system verifies part numbers and VIN compatibility before the runner leaves.' },
            { icon: <ShieldIcon />, title: 'Secure Escrow', desc: 'Funds are held securely and only released once the part is verified on delivery.' }
          ].map((item, i) => (
            <div key={i} style={{ 
              padding: '3rem', background: colors.glass, borderRadius: '32px', 
              border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' 
            }}>
              <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>{item.title}</h4>
              <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '6rem 5% 3rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '4rem' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1.5rem' }}>GEARGO<span style={{ color: colors.blue }}>.</span></h3>
            <p style={{ opacity: 0.4, maxWidth: '300px', lineHeight: 1.6 }}>High-performance logistics for high-performance vehicles. Redefining the speed of sound in auto parts delivery.</p>
          </div>
          <div>
            <h4 style={{ color: colors.blue, fontSize: '0.8rem', fontWeight: 900, letterSpacing: '2px', marginBottom: '1.5rem' }}>SYSTEM</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', opacity: 0.6, fontSize: '0.9rem' }}>
              <span>Fleet Network</span>
              <span>Technical Specs</span>
              <span>Dispatch API</span>
            </div>
          </div>
          <div>
            <h4 style={{ color: colors.lilac, fontSize: '0.8rem', fontWeight: 900, letterSpacing: '2px', marginBottom: '1.5rem' }}>SUPPORT</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', opacity: 0.6, fontSize: '0.9rem' }}>
              <span>Help Center</span>
              <span>Safety Protocol</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '5rem', opacity: 0.2, fontSize: '0.8rem', textAlign: 'center' }}>
          © 2026 GEARGO TECHNOLOGIES. ALL SYSTEMS OPERATIONAL.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;