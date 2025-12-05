import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import { keyframes } from '@emotion/react';
import { lazy, Suspense } from 'react';
const profilePhoto = '/images/Frida.jpg';
const FaGithub = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaGithub })));
const FaLinkedin = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaLinkedin })));
const FaEnvelope = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaEnvelope })));

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  color: ${theme.colors.textLight};
  background: linear-gradient(180deg, #E6E6FA 0%, #9370DB 50%, #4B0082 100%);
  padding: ${theme.spacing.lg} 0;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;
    
    @media (min-width: ${theme.breakpoints.sm}) {
      width: 90%;
    }
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${theme.spacing.xl};
`;

const fadeUpKeyframes = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInKeyframes = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const Greeting = styled.div`
  animation: ${fadeUpKeyframes} 0.5s ease-out forwards;
  text-align: left;
  width: 100%;
  max-width: 800px;
`;

const GreetingText = styled.h1`
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: #000;
  margin: 0;
  font-weight: 400;
  font-family: 'Inter', sans-serif;
`;

const Name = styled.span`
  font-size: clamp(3rem, 8vw, 5rem);
  color: #fff;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  display: block;
  margin-top: ${theme.spacing.xs};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const ProfileSection = styled.div`
  animation: ${fadeInKeyframes} 0.5s ease-out 0.3s forwards;
  opacity: 0;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xl};
  width: 100%;
  max-width: 800px;
  
  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${theme.spacing.lg};
  }
`;

const ProfileImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    margin: 0;
    padding: 0;
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    width: 150px;
    height: 150px;
  }
`;

const Roles = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
  text-align: left;
  
  @media (max-width: ${theme.breakpoints.md}) {
    text-align: center;
  }
`;

const Role = styled.h2`
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  color: #000;
  margin: 0;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  letter-spacing: 1px;
`;

const SloganSection = styled.div`
  animation: ${fadeUpKeyframes} 0.5s ease-out 0.6s forwards;
  opacity: 0;
  background: #000;
  color: #fff;
  padding: ${theme.spacing.lg} ${theme.spacing.xl};
  border-radius: 12px;
  max-width: 800px;
  width: 100%;
  margin-top: ${theme.spacing.xl};
`;

const Slogan = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  margin: 0;
  font-weight: 400;
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  animation: ${fadeUpKeyframes} 0.5s ease-out 0.8s forwards;
  opacity: 0;
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.lg};
  
  a {
    color: #fff;
    font-size: 1.5rem;
    transition: all ${theme.transitions.default};
    padding: ${theme.spacing.sm};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.1);
    
    &:hover {
      color: #fff;
      transform: translateY(-3px);
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }
  }

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.lg};
    
    a {
      font-size: 1.75rem;
    }
  }
`;

export const Hero = () => {
  return (
    <HeroSection id="hero" role="region" aria-label="Introduction">
      <div className="container">
        <HeroContent>
          <Greeting>
            <GreetingText>Hi, I am</GreetingText>
            <Name>Bo</Name>
          </Greeting>
          
          <ProfileSection>
            <ProfileImage>
              <img 
                src={profilePhoto} 
                alt="Bo Li" 
                onError={(e) => {
                  console.error('Failed to load image:', e);
                  e.currentTarget.style.display = 'none';
                }}
                onLoad={() => {
                  console.log('Image loaded successfully');
                }}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </ProfileImage>
            <Roles>
              <Role>SOFTWARE DEVELOPER</Role>
              <Role>FULL-STACK ENGINEER</Role>
            </Roles>
          </ProfileSection>
          
          <SloganSection>
            <Slogan>
             Turning ideas into reality with code, creativity, and problem-solving.
            </Slogan>
          </SloganSection>
          
          <SocialLinks aria-label="Social media links">
            <a 
              href="https://github.com/Frida7771" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
            >
              <Suspense fallback={<div style={{ width: '1.5rem', height: '1.5rem' }} />}>
                <FaGithub aria-hidden="true" />
              </Suspense>
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/frida-li/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
            >
              <Suspense fallback={<div style={{ width: '1.5rem', height: '1.5rem' }} />}>
                <FaLinkedin aria-hidden="true" />
              </Suspense>
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="mailto:frida16571@gmail.com"
              aria-label="Send me an email"
              style={{ cursor: 'pointer', textDecoration: 'none' }}
              onClick={() => {
                window.location.href = 'mailto:frida16571@gmail.com';
              }}
            >
              <Suspense fallback={<div style={{ width: '1.5rem', height: '1.5rem' }} />}>
                <FaEnvelope aria-hidden="true" />
              </Suspense>
              <span className="sr-only">Email</span>
            </a>
          </SocialLinks>
        </HeroContent>
      </div>
    </HeroSection>
  );
};
