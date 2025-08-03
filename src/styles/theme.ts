export const theme = {
  colors: {
    primary: '#1A1B26',
    secondary: '#2E3440',
    accent: '#F6B17A',
    light: '#F6B17A',
    text: '#ffffff',
    textLight: '#ffffff',
    textDark: '#1A1B26',
    glass: {
      background: 'rgba(255, 255, 255, 0.03)',
      border: 'transparent',
      card: 'rgba(26, 27, 38, 0.3)',
    },
    gradient: {
      main: 'linear-gradient(135deg, #1A1B26 0%, #2E3440 50%, #1A1B26 100%)',
      accent: 'linear-gradient(135deg, #F6B17A 0%, #f8c396 100%)',
      glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
    },
    overlay: {
      light: 'rgba(255, 255, 255, 0.08)',
      dark: 'rgba(26, 27, 38, 0.4)',
    }
  },
  fonts: {
    body: "'Inter', sans-serif",
    heading: "'Poppins', sans-serif",
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem',
  },
  transitions: {
    default: '0.3s ease',
  },
};

export type Theme = typeof theme;
