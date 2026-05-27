import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FAFAF8',
          padding: '80px',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        {/* Top rule */}
        <div style={{ display: 'flex', marginBottom: '40px', fontSize: '64px' }}>🌱</div>

        <div
          style={{
            fontSize: '72px',
            fontWeight: '700',
            color: '#1C1C1A',
            letterSpacing: '-3px',
            marginBottom: '24px',
            lineHeight: 1.1,
          }}
        >
          Smoke Signal
        </div>

        <div
          style={{
            fontSize: '30px',
            color: '#6B6963',
            textAlign: 'center',
            maxWidth: '780px',
            lineHeight: 1.5,
            marginBottom: '52px',
          }}
        >
          Help shape a quit-smoking program that actually works.
        </div>

        <div
          style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              padding: '12px 28px',
              backgroundColor: '#1C1C1A',
              color: '#fff',
              borderRadius: '10px',
              fontSize: '20px',
              fontWeight: '600',
            }}
          >
            Current smokers
          </div>
          <div
            style={{
              padding: '12px 28px',
              backgroundColor: '#1C1C1A',
              color: '#fff',
              borderRadius: '10px',
              fontSize: '20px',
              fontWeight: '600',
            }}
          >
            Ex-smokers
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            fontSize: '18px',
            color: '#ABA89F',
          }}
        >
          smokesignal.vercel.app
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
