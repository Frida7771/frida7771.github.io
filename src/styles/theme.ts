export const theme = {
  colors: {
    primary: '#0F0F0F',
    secondary: '#1A1A1A',
    accent: '#F6B17A',
    light: '#F6B17A',
    text: '#ffffff',
    textLight: '#ffffff',
    textDark: '#0F0F0F',
    glass: {
      background: 'rgba(255, 255, 255, 0.02)',
      border: 'transparent',
      card: 'rgba(15, 15, 15, 0.4)',
    },
    gradient: {
      main: 'linear-gradient(135deg, #0F0F0F 0%, #1A1A1A 50%, #0F0F0F 100%)',
      accent: 'linear-gradient(135deg, #F6B17A 0%, #f8c396 100%)',
      glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
    },
    overlay: {
      light: 'rgba(255, 255, 255, 0.05)',
      dark: 'rgba(15, 15, 15, 0.5)',
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
