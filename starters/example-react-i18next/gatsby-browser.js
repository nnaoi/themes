const i18nConfig = require("./i18n/config.json");

exports.onClientEntry = () => {
    const langs = i18nConfig.map(c => c.code);
    const userLang = navigator.language.substr(0, 2);
    if (langs.includes(userLang) && 
        !window.location.pathname.startsWith(`/${userLang}/`)
    ) {
      window.location.pathname = `/${userLang}${window.location.pathname}`;
    }
  }