import { lazy, Suspense } from 'react';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { AboutMe } from './components/sections/AboutMe';
import { GlobalStyles } from './styles/GlobalStyles';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import styled from '@emotion/styled';

// Lazy load non-critical components
const Projects = lazy(() => import('./components/sections/Projects'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Contact = lazy(() => import('./components/sections/Contact'));

// Loading fallback component
const LoadingFallback = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.glass.background};
  color: ${theme.colors.accent};
  font-size: 1.2rem;
  
  @media print {
    display: none;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        {/* Hero section is critical for LCP, so keep it eager loaded */}
        <Hero />
        
        {/* About Me section */}
        <AboutMe />
        
        {/* Wrap non-critical sections in Suspense */}
        <Suspense fallback={<LoadingFallback>Loading experience...</LoadingFallback>}>
          <Experience />
        </Suspense>
        <Suspense fallback={<LoadingFallback>Loading projects...</LoadingFallback>}>
          <Projects />
        </Suspense>
        <Suspense fallback={<LoadingFallback>Loading contact...</LoadingFallback>}>
          <Contact />
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
