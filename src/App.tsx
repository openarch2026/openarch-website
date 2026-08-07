import { useEffect } from 'react';
import { Routes, Route, useLocation, useSearchParams } from 'react-router-dom';
import Nav from './sections/Nav';
import Hero from './sections/Hero';
import Manifesto from './sections/Manifesto';
import Services from './sections/Services';
import Ecosystem from './sections/Ecosystem';
import Gallery from './sections/Gallery';
import CTA from './sections/CTA';
import Footer from './sections/Footer';
import FacilityDetail from './pages/FacilityDetail';
import Marquee from './components/Marquee';
import ContactModal from './components/ContactModal';
import { useReveal } from './hooks/useReveal';
import { AppProvider, useApp } from './context';
import { T } from './i18n';

function Home() {
  const { hash } = useLocation();
  const [params] = useSearchParams();
  const service = params.get('service');
  const { lang } = useApp();

  useReveal(service ?? lang);

  useEffect(() => {
    if (!hash || service) return;
    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'auto', block: 'start' });
    });
  }, [hash, service]);

  if (service) {
    return <FacilityDetail slug={service} />;
  }

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee items={T.marquee[lang]} />
        <Manifesto />
        <Services />
        <Ecosystem />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

function MetaSync() {
  const { lang } = useApp();
  useEffect(() => {
    document.title = T.meta.title[lang];
    let metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = T.meta.description[lang];
  }, [lang]);
  return null;
}

function App() {
  return (
    <AppProvider>
      <MetaSync />
      <ContactModal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
