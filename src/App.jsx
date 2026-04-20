import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import ServicesPage from './pages/ServicesPage';
import VisionPage from './pages/VisionPage';
import ContactPage from './pages/ContactPage';
import Autom8CaseStudyPage from './pages/Autom8CaseStudyPage';
import BillzCaseStudyPage from './pages/BillzCaseStudyPage';
import CodeaifyCaseStudyPage from './pages/CodeaifyCaseStudyPage';
import MeterCaseStudyPage from './pages/MeterCaseStudyPage';
import Tap2DocCaseStudyPage from './pages/Tap2DocCaseStudyPage';

function ScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      );

      document.querySelectorAll('.reveal').forEach((el) => {
        el.classList.remove('visible');
        observer.observe(el);
      });

      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollReveal />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/autom8" element={<Autom8CaseStudyPage />} />
          <Route path="/work/billz" element={<BillzCaseStudyPage />} />
          <Route path="/work/codeaify" element={<CodeaifyCaseStudyPage />} />
          <Route path="/work/meter" element={<MeterCaseStudyPage />} />
          <Route path="/work/tap2doc" element={<Tap2DocCaseStudyPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/vision" element={<VisionPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
