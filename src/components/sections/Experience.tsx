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

// 时间轴容器
const TimelineContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: ${theme.spacing.xl} 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
      to bottom,
      transparent,
      ${theme.colors.accent},
      ${theme.colors.accent},
      transparent
    );
    transform: translateX(-50%);
    z-index: 1;

    @media (max-width: ${theme.breakpoints.md}) {
      left: 30px;
      transform: none;
    }
  }
`;

// 时间轴项目
const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: ${theme.spacing.xl};
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    &:nth-child(odd) {
      .timeline-content {
        margin-left: 0;
        margin-right: calc(50% + ${theme.spacing.lg});
        text-align: left;
      }
      
      .timeline-dot {
        left: calc(50% - 15px);
      }
    }

    &:nth-child(even) {
      .timeline-content {
        margin-left: calc(50% + ${theme.spacing.lg});
        margin-right: 0;
        text-align: left;
      }
      
      .timeline-dot {
        right: calc(50% - 15px);
        left: auto;
      }
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    .timeline-content {
      margin-left: 60px;
      margin-right: 0;
      text-align: left;
    }
    
    .timeline-dot {
      left: 15px;
    }
  }
`;

// 时间轴圆点
const TimelineDot = styled(motion.div)<{ colorTheme: string }>`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${props => {
    switch(props.colorTheme) {
      case 'zealquest':
        return 'linear-gradient(135deg, #9370DB, #4B0082)';
      case 'beituo':
        return 'linear-gradient(135deg, #FF8C00, #FF4500)';
      case 'biomerieux':
        return 'linear-gradient(135deg, #4682B4, #191970)';
      case 'tietong':
        return 'linear-gradient(135deg, #1E3A8A, #0F172A)';
      case 'rtc':
        return 'linear-gradient(135deg, #FF6B6B, #FF8E8E)';
      default:
        return 'linear-gradient(135deg, #9370DB, #4B0082)';
    }
  }};
  border: 3px solid ${theme.colors.primary};
  box-shadow: 0 0 0 3px ${theme.colors.accent};
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
`;

// 时间轴内容
const TimelineContent = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: ${theme.spacing.lg};
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all ${theme.transitions.default};
  position: relative;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl};
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    width: 0;
    height: 0;
    border-style: solid;

    @media (min-width: ${theme.breakpoints.md}) {
      &:nth-child(odd) & {
        right: -10px;
        border-width: 10px 0 10px 10px;
        border-color: transparent transparent transparent rgba(255, 255, 255, 0.05);
      }

      &:nth-child(even) & {
        left: -10px;
        border-width: 10px 10px 10px 0;
        border-color: transparent rgba(255, 255, 255, 0.05) transparent transparent;
      }
    }

    @media (max-width: ${theme.breakpoints.md}) {
      left: -10px;
      border-width: 10px 10px 10px 0;
      border-color: transparent rgba(255, 255, 255, 0.05) transparent transparent;
    }
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
      title: "Full-Stack Developer Intern ",
      company: "Beituo Paper",
      period: "May 2025 - Present",
      description: [
        "Developed an AI-driven novel creation tool for 6 publishers, leveraging GPT-4o and real-time editing to enhance content productivity."
      ],
      tech: ["React", "Node.js", "GPT-4o", "AI"],
      logoColor: "#FF6B6B",
      companyLogo: "Beituo",
      isImage: true,
      colorTheme: 'beituo'
    },
    {
      title: "Software Engineer",
      company: "China Mobile",
      period: "December 2023 - August 2024",
      description: [
        "Built key features for the company’s recommendation system, improving performance, data quality, and experiment rollout speed."
      ],
      tech: ["React", "JavaScript", "NodeJS", "Kafka", "Graphql"],
      logoColor: "#4A90E2",
      companyLogo: "ChinaMobile",
      isImage: true,
      colorTheme: 'chinaMobile'
    },
    {
      title: "Data Analyst Intern",
      company: "BioMérieux",
      period: "February 2023 - April 2023",
      description: [
        "Streamlined data analysis for 1400+ healthcare clients by building data pipelines and supporting decision-making."
      ],
      tech: ["Data Analysis", " Python", "T-SQL", "SQL Server"],
      logoColor: "#4A90E2",
      companyLogo: "biomerieux",
      isImage: true,
      colorTheme: 'biomerieux'
    },
  
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
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
        duration: 0.8,
        ease: "easeOut"
      },
    },
  };

  const dotVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      rotate: -180
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
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
            <SectionTitle>Experience Timeline</SectionTitle>
          </SectionHeader>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <TimelineContainer>
              {experiences.map((exp, index) => {
                const ref = useRef(null);
                const isInView = useInView(ref, { once: true, margin: "-50px" });

                return (
                  <TimelineItem 
                    key={index} 
                    ref={ref}
                    variants={itemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ delay: index * 0.3 }}
                  >
                    <TimelineDot 
                      className="timeline-dot"
                      colorTheme={exp.colorTheme}
                      variants={dotVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      transition={{ delay: index * 0.3 + 0.2 }}
                    >
                      {index + 1}
                    </TimelineDot>
                    
                    <TimelineContent className="timeline-content">
                      <JobHeader>
                        <CompanyLogo color={exp.logoColor} isImage={exp.isImage}>
                          {exp.isImage ? (
                            <img src={`/images/${exp.companyLogo}.${exp.companyLogo === 'RTC_share' ? 'jpg' : exp.companyLogo === 'Beituo' ? 'jpg' : exp.companyLogo === 'biomerieux' ? 'svg' : exp.companyLogo === 'Tietoong' ? 'jpeg' : exp.companyLogo === 'ChinaMobile' ? 'png' : 'png'}`} alt={exp.company} onError={(e) => {
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
                    </TimelineContent>
                  </TimelineItem>
                );
              })}
            </TimelineContainer>
          </motion.div>
        </ExperienceContent>
      </div>
    </ExperienceSection>
  );
};

export default Experience; 