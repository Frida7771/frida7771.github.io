import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ContactSection = styled.section`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${theme.colors.textLight};
  padding: ${theme.spacing.lg} 0;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
  }

  .container {
    position: relative;
    z-index: 2;
    width: 95%;
    margin: 0 auto;

    @media (min-width: ${theme.breakpoints.sm}) {
      width: 90%;
    }
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.light};
  position: relative;

  @media (min-width: ${theme.breakpoints.md}) {
    margin-bottom: ${theme.spacing.xl};
  }

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
`;

const ContactContent = styled.div`
  max-width: 600px;
  margin: ${theme.spacing.lg} auto;
  text-align: center;
  background: ${theme.colors.glass.background};
  padding: ${theme.spacing.lg};
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(246, 177, 122, 0.15);

  @media (min-width: ${theme.breakpoints.md}) {
    margin: ${theme.spacing.xl} auto;
    padding: ${theme.spacing.xl};
  }
`;

const ContactText = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.3rem);
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.textLight};
  line-height: 1.8;
  opacity: 0.9;

  @media (min-width: ${theme.breakpoints.md}) {
    margin-bottom: ${theme.spacing.xl};
  }
`;


const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.lg};

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.lg};
    margin-top: ${theme.spacing.xl};
  }
`;

const SocialLink = styled(motion.a)`
  color: ${theme.colors.accent};
  font-size: 1.6rem;
  transition: all ${theme.transitions.default};
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${theme.colors.glass.card};
  box-shadow: 0 4px 12px rgba(246, 177, 122, 0.1);

  @media (min-width: ${theme.breakpoints.md}) {
    width: 60px;
    height: 60px;
    font-size: 2rem;
  }

  &:hover {
    color: ${theme.colors.light};
    transform: translateY(-3px) rotate(8deg);
    box-shadow: 0 6px 16px rgba(246, 177, 122, 0.2);
    background: ${theme.colors.gradient.glass};
  }
`;

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <ContactSection id="contact" role="region" aria-label="Contact Information">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionTitle 
            variants={itemVariants}
            role="heading"
            aria-level={2}
          >
            Get In Touch
          </SectionTitle>
          <ContactContent role="article">
            <ContactText 
              variants={itemVariants}
              role="paragraph"
            >
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </ContactText>
            <SocialLinks 
              variants={itemVariants}
              role="list"
              aria-label="Social media links"
            >
              <SocialLink 
                href="https://github.com/Frida7771"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                role="listitem"
                aria-label="Visit my GitHub profile"
              >
                <FaGithub aria-hidden="true" />
                <span className="sr-only">GitHub</span>
              </SocialLink>
              <SocialLink 
                href="https://www.linkedin.com/in/frida-li/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                role="listitem"
                aria-label="Connect with me on LinkedIn"
              >
                <FaLinkedin aria-hidden="true" />
                <span className="sr-only">LinkedIn</span>
              </SocialLink>
              <SocialLink 
                href="mailto:frida16571@gmail.com?subject=Hello%20from%20Portfolio&body=Hi%20Frida,%0D%0A%0D%0A"
                whileHover={{ y: -5 }}
                role="listitem"
                aria-label="Send me an email"
                style={{ cursor: 'pointer', textDecoration: 'none' }}
                onClick={() => {
                  window.location.href = 'mailto:frida16571@gmail.com?subject=Hello%20from%20Portfolio&body=Hi%20Frida,%0D%0A%0D%0A';
                }}
              >
                <FaEnvelope aria-hidden="true" />
                <span className="sr-only">Email</span>
              </SocialLink>
            </SocialLinks>
          </ContactContent>
        </motion.div>
      </div>
    </ContactSection>
  );
};

export default Contact;
