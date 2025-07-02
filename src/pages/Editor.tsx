import React from 'react';
import type { ReactNode } from 'react';
import { Container, Typography } from '@mui/material';
import PageEditor from '../components/PageEditor';
import PagesList from '../components/PagesList';
import ExportToPDF from '../components/ExportToPDF/ExportToPDF';
import ThemeSelector from '../components/ThemeSelector';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
interface FadeInSectionProps {
  children: ReactNode;
  delay?: number;
}
const FadeInSection: React.FC<FadeInSectionProps> = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
};

const Editor = () => {
  return (
    <Container
      className='flex flex-col justify-center items-center max-w-[100vw] gap-4'
      sx={{ my: 4 }}
    >
      <FadeInSection delay={0}>
        <Typography
          variant='h2'
          sx={{
            color: '#50A379',
            fontWeight: 'bold',
            fontFamily: 'Inter, sans-serif',
          }}
          gutterBottom
        >
          Leaflet Editor
        </Typography>
      </FadeInSection>

      <div className='flex flex-col md:flex-row gap-4 w-full'>
        <div className='flex flex-col gap-4 w-full md:w-1/2'>
          <FadeInSection delay={0.1}>
            <PageEditor />
          </FadeInSection>
        </div>
        <div className='flex flex-col gap-4 w-full md:w-1/2'>
          <FadeInSection delay={0.2}>
            <ThemeSelector />
          </FadeInSection>
          <FadeInSection delay={0.3}>
            <PagesList />
          </FadeInSection>
          <FadeInSection delay={0.4}>
            <ExportToPDF />
          </FadeInSection>
        </div>
      </div>
    </Container>
  );
};

export default Editor;
