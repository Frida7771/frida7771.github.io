import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import { keyframes } from '@emotion/react';
import { lazy, Suspense } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const FaBriefcase = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaBriefcase })));
const FaCalendar = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaCalendar })));
const FaMapMarkerAlt = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaMapMarkerAlt })));

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
  justify-content: space-between;
  align-items: stretch;
  gap: ${theme.spacing.lg};
  width: 100%;
  
  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
  }
`;

const ExperienceItem = styled(motion.div)`
  flex: 1;
  width: 100%;
  height: 450px;
  
  @media (max-width: ${theme.breakpoints.md}) {
    height: auto;
    margin-bottom: ${theme.spacing.xl};
  }
`;

const ExperienceCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(0, 150, 136, 0.9), rgba(0, 150, 136, 0.7));
  border-radius: 16px;
  padding: ${theme.spacing.lg};
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all ${theme.transitions.default};
  width: 100%;
  height: 100%;
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
    box-shadow: 0 12px 40px rgba(0, 150, 136, 0.3);
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

const CompanyLogo = styled.div<{ color: string }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  color: white;
  flex-shrink: 0;
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
  flex-direction: column;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.md};
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
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
  margin-top: auto;
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
      title: "System Engineer",
      company: "Infosys",
      companyLogo: "I",
      logoColor: "#0066cc",
      location: "Bangalore, India",
      period: "January 2021 - April 2022",
      description: [
        "Developed a responsive and dynamic digital library housing over 100 e-books and journals using Reactjs, ReactMUI and PostgreSQL."
      ],
      tech: ["React", "React MUI", "PostgreSQL", "JavaScript"]
    },
    {
      title: "Assistant System Engineer",
      company: "TCS",
      companyLogo: "T",
      logoColor: "#ffffff",
      location: "Mumbai, India",
      period: "January 2020 - June 2020",
      description: [
        "Transformed mainframe software into a web app for a major American grocery company. Embracing test-driven development using React testing library."
      ],
      tech: ["React", "Testing Library", "Mainframe", "Web Development"]
    },
    {
      title: "Junior Developer",
      company: "Digital Solutions Ltd.",
      companyLogo: "D",
      logoColor: "#ff6b6b",
      location: "New York, NY",
      period: "2018 - 2020",
      description: [
        "Developed responsive web applications using HTML, CSS, and JavaScript",
        "Worked with design teams to implement pixel-perfect UI components",
        "Participated in agile development processes and sprint planning"
      ],
      tech: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"]
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
                    >
                      <JobHeader>
                        <CompanyLogo color={exp.logoColor}>
                          {exp.companyLogo}
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
                        <MetaItem>
                          <Suspense fallback={<div>...</div>}>
                            <FaMapMarkerAlt />
                          </Suspense>
                          {exp.location}
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