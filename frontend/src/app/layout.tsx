import React from 'react';

export const metadata = {
  title: 'GearGo | On-Demand Car Parts',
  description: 'Seamlessly delivering your automotive needs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ 
        background: 'linear-gradient(135deg, #000000 0%, #0a0a0f 100%)', 
        color: '#E0B0FF', // Lilac Default
        margin: 0, 
        minHeight: '100vh',
        fontFamily: 'system-ui, -apple-system, sans-serif' 
      }}>
        {children}
      </body>
    </html>
  );
}
