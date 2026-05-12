import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useContext,
  useRef,
} from "react";
import Lottie from "lottie-react";
import sandyAnimation from "../../assets/animations/sandy.json";

import styled, { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import AOS from "aos";

import Header from "../Header";
import ThemeSwitch from "../ThemeSwitch";

import ModalVideo from "../ModalVideo";
import AboutModal from "../AboutModal";

import GlobalContext from "../../context/GlobalContext";

import GlobalStyle from "../../utils/globalStyle";

import imgFavicon from "../../assets/favicon.png";

import "../../assets/fonts/icon-font/fonts/avasta.ttf";
import "../../assets/fonts/icon-font/fonts/Grayic.ttf";
import "../../assets/fonts/icon-font/css/style.css";

import "./bootstrap-custom.scss";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../../node_modules/aos/dist/aos.css";

import "../../assets/fonts/icon-font/css/style.css";

import { get, merge } from "lodash";

// the full theme object
import { theme as baseTheme } from "../../utils";

const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ dark }) => (dark ? "#19191b" : "#fff")} !important;
  z-index: 9999999999;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  visibility: visible;
  transition: all 1s ease-out 0.5s;
  &.inActive {
    opacity: 0;
    visibility: hidden;
  }
`;

// options for different color modes
const modes = { light: "light", dark: "dark" };

// merge the color mode with the base theme
// to create a new theme object
const getTheme = (mode) =>
  merge({}, baseTheme, {
    colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
  });

const Layout = ({ children, pageContext }) => {
  const gContext = useContext(GlobalContext);

  const [visibleLoader, setVisibleLoader] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [loaderDark, setLoaderDark] = useState(false);

  useLayoutEffect(() => {
    AOS.init();
    setMounted(true);
    try {
      const saved = localStorage.getItem("theme");
      if (saved) {
        const parsed = JSON.parse(saved);
        setLoaderDark(!!parsed.bodyDark);
      }
    } catch {}

    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setVisibleLoader(false);
    }, 2000);
    const t2 = setTimeout(() => {
      document.body.style.overflow = "";
    }, 3500);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, []);

  // Navbar style based on scroll
  const eleRef = useRef();

  useEffect(() => {
    window.addEventListener("popstate", () => {
      gContext.closeAbout();
      gContext.closeContact();
    }, false);
    window.addEventListener("pushState", () => {
      gContext.closeAbout();
      gContext.closeContact();
    }, false);

    return () => {};
  }, [gContext]);

  if (pageContext.layout === "bare") {
    return (
      <ThemeProvider
        theme={
          gContext.theme.bodyDark ? getTheme(modes.dark) : getTheme(modes.light)
        }
      >
        <ThemeSwitch />
        <GlobalStyle />
        <Helmet>
          <title>Fernanda Cruz · Frontend Engineer &amp; Engineering Lead</title>
          <link rel="icon" type="image/png" href={imgFavicon} />
        </Helmet>
        <Loader id="loading" dark={loaderDark ? 1 : 0} className={visibleLoader ? "" : "inActive"}>
          {mounted && (
            <div style={{ width: 220, height: 220 }}>
              <Lottie animationData={sandyAnimation} loop={true} />
            </div>
          )}
        </Loader>
        <div className="site-wrapper overflow-hidden" ref={eleRef}>
          {children}
        </div>

        <ModalVideo />
      </ThemeProvider>
    );
  }

  return (
    <>
      <ThemeProvider
        theme={
          gContext.theme.bodyDark ? getTheme(modes.dark) : getTheme(modes.light)
        }
      >
        <ThemeSwitch />
        <GlobalStyle />
        <Helmet>
          <title>Fernanda Cruz · Frontend Engineer &amp; Engineering Lead</title>
          <meta name="description" content="Portfolio of Fernanda Cruz — Frontend Engineer with 9+ years of experience. Engineering leadership, React, React Native, .NET, GCP, Azure, and AI integration." />
          <meta name="author" content="Fernanda Cruz" />
          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://fernandacruz.com" />
          <meta property="og:title" content="Fernanda Cruz · Ingeniera de Software & Líder de Equipo" />
          <meta property="og:description" content="Portfolio de Fernanda Cruz — Ingeniera de Software con 9+ años de experiencia. Liderazgo técnico, .NET, React, Google Cloud, Azure e integración de IA." />
          <meta property="og:image" content="https://fernandacruz.com/og-image.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:locale" content="es_MX" />
          {/* Twitter / X */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Fernanda Cruz · Ingeniera de Software & Líder de Equipo" />
          <meta name="twitter:description" content="Portfolio de Fernanda Cruz — Ingeniera de Software con 9+ años de experiencia. Liderazgo técnico, .NET, React, Google Cloud, Azure e integración de IA." />
          <meta name="twitter:image" content="https://fernandacruz.com/og-image.jpg" />
          {/* LinkedIn */}
          <meta property="profile:first_name" content="Fernanda" />
          <meta property="profile:last_name" content="Cruz" />
          <link rel="icon" type="image/png" href={imgFavicon} />
          <link rel="canonical" href="https://fernandacruz.com" />
        </Helmet>
        <Loader id="loading" dark={loaderDark ? 1 : 0} className={visibleLoader ? "" : "inActive"}>
          {mounted && (
            <div style={{ width: 220, height: 220 }}>
              <Lottie animationData={sandyAnimation} loop={true} />
            </div>
          )}
        </Loader>
        <div className="site-wrapper overflow-hidden" ref={eleRef}>
          <Header isDark={gContext.theme.headerDark} />
          {children}
        </div>
        <AboutModal />
        <ModalVideo />
      </ThemeProvider>
    </>
  );
};

export default Layout;
