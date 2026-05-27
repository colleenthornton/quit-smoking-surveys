import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function handler() {
  return new ImageResponse(
    {
      type: 'div',
      props: {
        style: {
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FAFAF8',
          padding: '80px',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        },
        children: [
          {
            type: 'div',
            props: { style: { fontSize: 64, marginBottom: 28 }, children: '🌱' },
          },
          {
            type: 'div',
            props: {
              style: {
                fontSize: 76,
                fontWeight: 800,
                color: '#1C1C1A',
                letterSpacing: '-3px',
                marginBottom: 20,
                lineHeight: 1.1,
              },
              children: 'Smoke Signal',
            },
          },
          {
            type: 'div',
            props: {
              style: {
                fontSize: 30,
                color: '#6B6963',
                textAlign: 'center',
                maxWidth: 760,
                lineHeight: 1.5,
                marginBottom: 52,
              },
              children: 'Help shape a quit-smoking program that actually works.',
            },
          },
          {
            type: 'div',
            props: {
              style: { display: 'flex', gap: 14 },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      padding: '14px 30px',
                      backgroundColor: '#1C1C1A',
                      color: '#fff',
                      borderRadius: 10,
                      fontSize: 20,
                      fontWeight: 600,
                    },
                    children: 'Current smokers',
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      padding: '14px 30px',
                      backgroundColor: '#3B7A57',
                      color: '#fff',
                      borderRadius: 10,
                      fontSize: 20,
                      fontWeight: 600,
                    },
                    children: 'Ex-smokers',
                  },
                },
              ],
            },
          },
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                bottom: 40,
                fontSize: 18,
                color: '#ABA89F',
              },
              children: 'smokesignal.vercel.app',
            },
          },
        ],
      },
    },
    { width: 1200, height: 630 }
  );
}
