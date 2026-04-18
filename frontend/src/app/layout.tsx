export const metadata = {
  title: 'GearGo | On-Demand Car Parts',
  description: 'Fast delivery for your automotive needs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#000', color: '#E0B0FF', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
