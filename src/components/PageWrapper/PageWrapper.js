import React, { useEffect, useContext } from "react";

import GlobalContext from "../../context/GlobalContext";

const themeConfigDefault = {
  headerDark: false,
  bodyDark: false,
  footerDark: false,
};

const PageWrapper = ({ children, darkTheme = false, themeConfig = null }) => {
  const gContext = useContext(GlobalContext);

  useEffect(() => {
    // Solo aplica el tema de la página si el usuario NO ha guardado preferencia
    const saved = localStorage.getItem("theme");
    if (!saved) {
      if (darkTheme) {
        gContext.changeTheme({
          headerDark: true,
          bodyDark: true,
          footerDark: true,
        });
      } else {
        gContext.changeTheme({ ...themeConfigDefault, ...themeConfig });
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <>{children}</>;
};

export default PageWrapper;
