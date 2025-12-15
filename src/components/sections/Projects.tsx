import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '../../styles/theme';
import { FaGithub, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const ProjectsSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
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

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: calc(${theme.spacing.xl} * 1.5);
  color: ${theme.colors.textLight};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${theme.colors.accent};
    border-radius: 2px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    margin-bottom: calc(${theme.spacing.xl} * 2);
  }
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(${theme.spacing.xl} * 1.5);
  width: 100%;

  @media (max-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.xl};
  }
`;

const ProjectItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing.xl};
  background: ${theme.colors.glass.background};
  border-radius: 16px;
  padding: ${theme.spacing.lg};
  transition: all ${theme.transitions.default};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(246, 177, 122, 0.15);
  }

  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacing.lg};
    text-align: center;
  }
`;

const ProjectImage = styled.img`
  width: 380px;
  height: 280px;
  object-fit: cover;
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all ${theme.transitions.default};
  overflow: hidden;
  flex-shrink: 0;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4);
    border-color: rgba(255, 255, 255, 0.3);
  }

  @media (max-width: ${theme.breakpoints.md}) {
    width: 100%;
    max-width: 450px;
    height: 260px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    height: 220px;
  }
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: ${theme.spacing.lg};
`;

const ModalContent = styled(motion.div)`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  top: -50px;
  right: 0;
  background: ${theme.colors.accent};
  color: ${theme.colors.textDark};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all ${theme.transitions.default};

  &:hover {
    background: ${theme.colors.light};
    transform: scale(1.1);
  }
`;

const ProjectContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  min-height: 280px;
  justify-content: space-between;

  @media (max-width: ${theme.breakpoints.md}) {
    min-height: auto;
    gap: ${theme.spacing.lg};
  }
`;

const ProjectTitle = styled.h3`
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: ${theme.colors.light};
  font-weight: 600;
  margin: 0;
`;

const ProjectDescription = styled.p`
  color: ${theme.colors.textLight};
  font-size: clamp(1rem, 1.2vw, 1.1rem);
  line-height: 1.7;
  opacity: 0.9;
  margin: 0;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.md};
`;

const TechTag = styled.span`
  background: rgba(100, 200, 255, 0.1);
  color: ${theme.colors.accent};
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(100, 200, 255, 0.2);
  transition: all ${theme.transitions.default};

  &:hover {
    background: rgba(100, 200, 255, 0.2);
    transform: translateY(-1px);
  }
`;

const GitHubButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  background: ${theme.colors.accent};
  color: ${theme.colors.textDark};
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all ${theme.transitions.default};
  align-self: flex-start;
  margin-top: auto;

  @media (max-width: ${theme.breakpoints.md}) {
    align-self: center;
    margin-top: ${theme.spacing.md};
  }

  &:hover {
    background: ${theme.colors.light};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(246, 177, 122, 0.3);
  }

  svg {
    font-size: 1.2em;
  }
`;

const projects = [
  {
    id: 1,
    title: "AllergyAware Recipes",
    description: "a full-stack recipe sharing web application with a centralized allergen tracking system.",
    image: "/images/FlavorLab.jpg",
    techStack: ["React", "Typescript", "OAuth", "MongoDB"],
    githubUrl: "https://github.com/Frida7771/AllergyAware_Recipes",
  },
  {
    id: 2,
    title: "Health Manager",
    description: "A platform that helps users track and understand their daily health.",
    image: "/images/Health_mainPage.jpg",
    techStack: ["Spring Boot", "Vue", "MySQL", "Recommendation Algorithm"],
    githubUrl: "https://github.com/Frida7771/HealthManager",
  },
  {
    id: 3,
    title: "JChineseChess",
    description: "A comprehensive Android Chinese chess application, featuring an AI-powered opponent.",
    image: "/images/cnchess.jpg",
    techStack: ["Java", "Android SDK", "AI Engine", "Algorithm"],
    githubUrl: "https://github.com/Frida7771/ChineseChess",
  },
  {
    id: 4,
    title: "Smart Home",
    description: "A comprehensive smart home automation system built with Java. The system provides an intuitive user interface for controlling various smart devices and managing home automation scenarios.",
    image: "/images/smartHome.jpg",
    techStack: ["Java", "Design Patterns", "Object-Oriented Design"],
    githubUrl: "https://github.com/Frida7771/SmartHome",
  },
];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  };

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <ProjectsSection id="projects" role="region" aria-label="Projects">
      <div className="container">
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          role="heading"
          aria-level={2}
        >
          Projects
        </SectionTitle>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ProjectList role="list">
            {projects.map((project) => (
              <ProjectItem 
                key={project.id} 
                variants={itemVariants}
                role="listitem"
                aria-labelledby={`project-title-${project.id}`}
              >
                <ProjectImage 
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  onClick={() => handleImageClick(project.image)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleImageClick(project.image);
                    }
                  }}
                />
                <ProjectContent>
                  <ProjectTitle id={`project-title-${project.id}`}>
                    {project.title}
                  </ProjectTitle>
                  <ProjectDescription>
                    {project.description}
                  </ProjectDescription>
                  <TechStack role="list" aria-label={`Technologies used in ${project.title}`}>
                    {project.techStack.map((tech) => (
                      <TechTag key={tech} role="listitem">{tech}</TechTag>
                    ))}
                  </TechStack>
                  <GitHubButton 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub aria-hidden="true" />
                    <span>GITHUB</span>
                  </GitHubButton>
                </ProjectContent>
              </ProjectItem>
            ))}
          </ProjectList>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <ModalOverlay
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={handleOverlayClick}
          >
            <ModalContent>
              <CloseButton onClick={handleCloseModal} aria-label="Close image">
                <FaTimes />
              </CloseButton>
              <ModalImage src={selectedImage} alt="Project screenshot" />
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </ProjectsSection>
  );
};

export default Projects;
