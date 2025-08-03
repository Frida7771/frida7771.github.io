import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import { keyframes } from '@emotion/react';
import { lazy, Suspense } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const FaBriefcase = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaBriefcase })));
const FaCalendar = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaCalendar })));

const ExperienceSection = styled.section`
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

const ExperienceContent = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
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
  justify-content: center;
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

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const ExperienceItem = styled(motion.div)`
  width: 100%;
`;

const ExperienceCard = styled(motion.div)<{ colorTheme: string }>`
  background: ${props => {
    switch(props.colorTheme) {
      case 'zealquest':
        return 'linear-gradient(135deg, rgba(147, 112, 219, 0.9), rgba(75, 0, 130, 0.8))';
      case 'beituo':
        return 'linear-gradient(135deg, rgba(255, 140, 0, 0.9), rgba(255, 69, 0, 0.8))';
      case 'biomerieux':
        return 'linear-gradient(135deg, rgba(70, 130, 180, 0.9), rgba(25, 25, 112, 0.8))';
      default:
        return 'linear-gradient(135deg, rgba(147, 112, 219, 0.9), rgba(75, 0, 130, 0.8))';
    }
  }};
  border-radius: 16px;
  padding: ${theme.spacing.lg};
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all ${theme.transitions.default};
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl};
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => {
      switch(props.colorTheme) {
        case 'zealquest':
          return '0 12px 40px rgba(147, 112, 219, 0.3)';
        case 'beituo':
          return '0 12px 40px rgba(255, 140, 0, 0.3)';
        case 'biomerieux':
          return '0 12px 40px rgba(70, 130, 180, 0.3)';
        default:
          return '0 12px 40px rgba(147, 112, 219, 0.3)';
      }
    }};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent);
    pointer-events: none;
  }
`;

const JobHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.md};
`;

const CompanyLogo = styled.div<{ color: string; isImage?: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.isImage ? 'transparent' : props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  color: white;
  flex-shrink: 0;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
  }
`;

const JobInfo = styled.div`
  flex: 1;
`;

const JobTitle = styled.h3`
  color: white;
  font-size: 1.4rem;
  margin: 0 0 ${theme.spacing.xs} 0;
  font-weight: 600;
`;

const CompanyName = styled.h4`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  margin: 0;
  font-weight: 500;
`;

const JobMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.md};
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  
  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${theme.spacing.sm};
  }
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
`;

const JobDescription = styled.div`
  flex: 1;
  p {
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.7;
    margin-bottom: ${theme.spacing.sm};
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const TechStack = styled.div`
  margin-top: ${theme.spacing.md};
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};
`;

const TechTag = styled.span`
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all ${theme.transitions.default};

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-1px);
  }
`;

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "ZealQuest Scientific Technology",
      period: "January 2024 - August 2024",
      description: [
        "Designed the backend of an IoT plant monitoring system using TypeScript and Node.js, supporting over 3 smart agriculture services"
      ],
      tech: ["Koa2", "Typescript", "PostgreSQL", "Next.js"],
      logoColor: "#0066CC",
      companyLogo: "泽泉",
      isImage: true,
      colorTheme: 'zealquest'
    },
    {
      title: "Software Engineer Intern",
      company: "Beituo Paper",
      period: "June 2023 - December 2023",
      description: [
        "Contributed to the transformation of a legacy warehouse inventory system into a modular web app for a paper manufacturing company, while embracing test-driven development with JUnit."
      ],
      tech: ["React", "Java", "Mysql", "Web Development"],
      logoColor: "#8B4513",
      companyLogo: "Beituo",
      isImage: true,
      colorTheme: 'beituo'
    },
    {
      title: "Data Analyst Intern",
      company: "BioMérieux",
      period: "February 2023 - April 2023",
      description: [
        "Conducted data analysis at a medical diagnostics company and support decision-making for 1400+ healthcare clients."
      ],
      tech: ["Data Analysis", "T-SQL", "SQL Server"],
      logoColor: "#4A90E2",
      companyLogo: "biomerieux",
      isImage: true,
      colorTheme: 'biomerieux'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      },
    },
  };

  return (
    <ExperienceSection id="experience">
      <div className="container">
        <ExperienceContent>
          <SectionHeader>
            <IconWrapper>
              <Suspense fallback={<div>...</div>}>
                <FaBriefcase />
              </Suspense>
            </IconWrapper>
            <SectionTitle>Experience</SectionTitle>
          </SectionHeader>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <ExperienceContainer>
              {experiences.map((exp, index) => {
                const ref = useRef(null);
                const isInView = useInView(ref, { once: true, margin: "-100px" });

                return (
                  <ExperienceItem 
                    key={index} 
                    ref={ref}
                    variants={itemVariants}
                  >
                    <ExperienceCard
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      transition={{ delay: index * 0.2 }}
                      colorTheme={exp.colorTheme}
                    >
                      <JobHeader>
                        <CompanyLogo color={exp.logoColor} isImage={exp.isImage}>
                                                     {exp.isImage ? (
                             <img src={`/images/${exp.companyLogo}.${exp.companyLogo === 'Beituo' ? 'jpg' : exp.companyLogo === 'biomerieux' ? 'svg' : 'png'}`} alt={exp.company} onError={(e) => {
                               console.error('Failed to load logo:', e);
                               e.currentTarget.style.display = 'none';
                             }} />
                           ) : (
                             exp.companyLogo
                           )}
                        </CompanyLogo>
                        <JobInfo>
                          <JobTitle>{exp.title}</JobTitle>
                          <CompanyName>{exp.company}</CompanyName>
                        </JobInfo>
                      </JobHeader>
                      
                      <JobMeta>
                        <MetaItem>
                          <Suspense fallback={<div>...</div>}>
                            <FaCalendar />
                          </Suspense>
                          {exp.period}
                        </MetaItem>
                      </JobMeta>
                      
                      <JobDescription>
                        {exp.description.map((desc, descIndex) => (
                          <p key={descIndex}>{desc}</p>
                        ))}
                      </JobDescription>
                      
                      <TechStack>
                        {exp.tech.map((tech, techIndex) => (
                          <TechTag key={techIndex}>{tech}</TechTag>
                        ))}
                      </TechStack>
                    </ExperienceCard>
                  </ExperienceItem>
                );
              })}
            </ExperienceContainer>
          </motion.div>
        </ExperienceContent>
      </div>
    </ExperienceSection>
  );
};

export default Experience; 