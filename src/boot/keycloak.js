import { boot } from "quasar/wrappers";
import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "https://sso2.pea.co.th/",
  realm: "pea-users",
  clientId: "pea-hrm",
});



export default boot(async ({ app }) => {
  await keycloak
    .init({
      onLoad: "check-sso",
      responseMode: "query",
      checkLoginIframe: true,
      locale: 'th',
      silentCheckSsoRedirectUri: process.env.BASE_URL + "/silent-check-sso.html",
      // silentCheckSsoRedirectUri: "http://172.30.7.14:8005/silent-check-sso.html",
      silentCheckSsoFallback: true
    })
    .then(() => {
      app.config.globalProperties.$keycloak = keycloak;
    })
    .catch((error) => {
      !process.env.NODE_ENV || process.env.NODE_ENV === "development"
        ? console.log("Keycloak authen failed", error)
        : null;
    });
});

export { keycloak };
