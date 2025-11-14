import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import { keyframes } from '@emotion/react';
import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';

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

const SkillsSection = styled.div`
  animation: ${fadeUpKeyframes} 0.5s ease-out 0.4s forwards;
  opacity: 0;
  margin-top: ${theme.spacing.xl};
`;

const SkillsTitle = styled.h3`
  color: ${theme.colors.accent};
  font-size: 1.5rem;
  margin-bottom: ${theme.spacing.lg};
  text-align: center;
  font-weight: 600;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: ${theme.spacing.lg};
  max-width: 800px;
  margin: 0 auto;
  
  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
    gap: ${theme.spacing.xl};
  }
`;

const SkillCard = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.md};
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all ${theme.transitions.default};
  cursor: pointer;
  width: 80px;
  height: 80px;

  &:hover {
    transform: translateY(-5px);
    border-color: ${theme.colors.accent};
    box-shadow: 0 8px 25px rgba(246, 177, 122, 0.2);
  }
`;

const SkillIcon = styled.div<{ skillName?: string }>`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: all ${theme.transitions.default};
    filter: ${props => {
      if (props.skillName === 'aws') {
        return 'brightness(1.2) contrast(1.3)';
      }
      if (props.skillName === 'nodejs') {
        return 'brightness(1.1) contrast(1.2)';
      }
      return 'none';
    }};
  }
  
  svg {
    width: 100%;
    height: 100%;
    color: ${theme.colors.light};
  }
`;

export const AboutMe = () => {
  const skills = [
    { icon: 'javascript.svg', name: 'javascript' },
    { icon: 'react.svg', name: 'react' },
    { icon: 'nodejs.svg', name: 'nodejs' },
    { icon: 'python.svg', name: 'python' },
    { icon: 'Java.svg', name: 'java' },
    { icon: 'mongodb.svg', name: 'mongodb' },
    { icon: 'Postgresql.svg', name: 'postgresql' },
    { icon: 'aws.svg', name: 'aws' },
    { icon: 'htmlCss.svg', name: 'htmlcss' },
    { icon: 'express.png', name: 'express' },
    { icon: 'react-native.png', name: 'react-native' },
    { icon: 'redux.svg', name: 'redux' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

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
            I am pursuing my master's degree at Northeastern University. 
            I have over 1.5 years of experience in software engineering and web development. 
            I enjoy exploring new technologies and improving my skills through hands-on projects and real-world challenges.
            </p>
            <p> 
              Beyond my professional endeavors, I find balance and joy through playing piano, 
              challenging myself with long runs, and staying energized with Zumba.
            </p>
          </AboutText>

          <SkillsSection>
            <SkillsTitle>Here are some technical skills I am proficient at</SkillsTitle>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SkillsGrid>
                {skills.map((skill) => (
                  <SkillCard
                    key={skill.icon}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <SkillIcon skillName={skill.name}>
                      <img 
                        src={`/images/${skill.icon}`} 
                        alt=""
                        onError={(e) => {
                          console.error('Failed to load skill icon:', skill.icon);
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </SkillIcon>
                  </SkillCard>
                ))}
              </SkillsGrid>
            </motion.div>
          </SkillsSection>
        </AboutContent>
      </div>
    </AboutSection>
  );
}; 