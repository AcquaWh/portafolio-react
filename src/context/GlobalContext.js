import React, { useState } from "react";

const GlobalContext = React.createContext();
const themeConfigDefault = {
  headerDark: false,
  bodyDark: false,
  footerDark: false,
};

const getSavedTheme = () => {
  try {
    const saved = localStorage.getItem("theme");
    return saved ? JSON.parse(saved) : themeConfigDefault;
  } catch {
    return themeConfigDefault;
  }
};

const GlobalProvider = ({ children }) => {
  const [theme, setTheme] = useState(getSavedTheme);
  const [videoModalVisible, setVideoModalVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const [visibleOffCanvas, setVisibleOffCanvas] = useState(false);

  const changeTheme = (themeConfig = themeConfigDefault) => {
    const newTheme = { ...themeConfig };
    setTheme(newTheme);
    try {
      localStorage.setItem("theme", JSON.stringify(newTheme));
    } catch {}
  };

  const toggleVideoModal = () => {
    setVideoModalVisible(!videoModalVisible);
  };

  const toggleAbout = () => {
    setAboutVisible(!aboutVisible);
  };

  const closeAbout = () => {
    setAboutVisible(false);
  };

  const toggleContact = () => {
    setContactVisible(!contactVisible);
  };

  const closeContact = () => {
    setContactVisible(false);
  };

  const toggleOffCanvas = () => {
    setVisibleOffCanvas(!visibleOffCanvas);
  };

  return (
    <GlobalContext.Provider
      value={{
        theme,
        changeTheme,
        videoModalVisible,
        toggleVideoModal,
        aboutVisible,
        toggleAbout,
        closeAbout,
        contactVisible,
        toggleContact,
        closeContact,
        visibleOffCanvas,
        toggleOffCanvas,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
export { GlobalProvider };
