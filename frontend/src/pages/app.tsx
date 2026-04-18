import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div style={{ 
      backgroundColor: '#000', 
      minHeight: '100vh', 
      margin: 0, 
      fontFamily: 'system-ui, sans-serif' 
    }}>
      <style jsx global>{`
        body { margin: 0; background: #000; }
      `}</style>
      <Component {...pageProps} />
    </div>
  )
}