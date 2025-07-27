import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import { keyframes } from '@emotion/react';
import { lazy, Suspense } from 'react';

const FaUser = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaUser })));

const AboutSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  color: ${theme.colors.textLight};
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

const AboutContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1000px;
  width: 100%;
  background: ${theme.colors.glass.background};
  border-radius: 20px;
  padding: ${theme.spacing.lg};
  border: none;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl};
  }
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

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.xl};
  animation: ${fadeUpKeyframes} 0.5s ease-out forwards;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  color: ${theme.colors.light};
  margin: 0;
  font-weight: 600;
`;

const IconWrapper = styled.div`
  color: ${theme.colors.accent};
  font-size: 2rem;
`;

const AboutText = styled.div`
  animation: ${fadeUpKeyframes} 0.5s ease-out 0.2s forwards;
  opacity: 0;
  
  p {
    font-size: clamp(1rem, 1.2vw, 1.1rem);
    line-height: 1.8;
    margin-bottom: ${theme.spacing.md};
    color: ${theme.colors.textLight};
    opacity: 0.9;
  }
`;

const PersonalInfo = styled.div`
  animation: ${fadeUpKeyframes} 0.5s ease-out 0.4s forwards;
  opacity: 0;
  margin-top: ${theme.spacing.xl};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.lg};
`;

const InfoCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: ${theme.spacing.md};
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all ${theme.transitions.default};

  &:hover {
    transform: translateY(-2px);
    border-color: ${theme.colors.accent};
  }

  h3 {
    color: ${theme.colors.accent};
    font-size: 1.1rem;
    margin-bottom: ${theme.spacing.sm};
    font-weight: 600;
  }

  p {
    color: ${theme.colors.textLight};
    opacity: 0.8;
    font-size: 0.95rem;
    margin: 0;
  }
`;

export const AboutMe = () => {
  return (
    <AboutSection id="about">
      <div className="container">
        <AboutContent>
          <SectionHeader>
            <IconWrapper>
              <Suspense fallback={<div>...</div>}>
                <FaUser />
              </Suspense>
            </IconWrapper>
            <SectionTitle>About Me</SectionTitle>
          </SectionHeader>
          
          <AboutText>
            <p>
              I am currently pursuing my master's degree at Northeastern University. 
              I bring nearly two years of industry experience in web development to the table 。
              I'm driven by a constant quest for knowledge, diving into intriguing technologies to further evolve my skill set.
            </p>
            <p>
              I am currently working on a cloud infrastructure automation project designed to streamline web application deployment and scalability. 
              This platform leverages AWS services to ensure high availability and secure data storage for production environments. 
              It automates the provisioning of EC2, RDS, and S3 resources using Terraform, while GitHub Actions and Packer are integrated to standardize infrastructure builds and accelerate deployment workflows. 
              The goal is to reduce manual DevOps effort and ensure a reliable, autoscaling backend for modern web applications.
            </p>
            <p> 
              Beyond my professional endeavors, I find balance and joy through playing the piano, 
              challenging myself with long runs, and staying energized with Zumba.
            </p>
          </AboutText>

          <PersonalInfo>
            <InfoCard>
              <h3>Education</h3>
              <p>Master's in Software Engineering</p>
              <p>Northeastern University</p>
            </InfoCard>
            <InfoCard>
              <h3>Location</h3>
              <p>Boston, MA</p>
              <p>Open to relocation</p>
            </InfoCard>
            <InfoCard>
              <h3>Interests</h3>
              <p>Web Developer</p>
              <p>Software Engineer</p>
            </InfoCard>
            
          </PersonalInfo>
        </AboutContent>
      </div>
    </AboutSection>
  );
}; 