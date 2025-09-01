import { defineBoot } from '#q-app/wrappers'
import { keycloak } from "./keycloak";
import axios from 'axios'
import { decrypt } from "./ls-secure";
import { Notify } from 'quasar';

const api = axios.create({ baseURL: process.env.SERVICE_URL + "/api" });

api.interceptors.request.use(
  async (config) => {
    if (keycloak.authenticated) {

      const isAccessTokenExpired = Date.now() >= keycloak.tokenParsed.exp * 1000;
      const isRefreshTokenExpired = Date.now() >= keycloak.refreshTokenParsed.exp * 1000;
      if (isRefreshTokenExpired) {
        localStorage.clear();
        window.location.href = `${process.env.BASE_URL}/authentication/login`;
        // window.location.href = `http://172.30.7.14:8005/authentication/login`;

      }
      if (isAccessTokenExpired) await keycloak.updateToken(5);
      if (localStorage.getItem("pas_user_configurations") !== null) {
        const { costCenter, businessArea, employeeId } = decrypt(localStorage.getItem("pas_user_configurations"));
        config.data = { ...config.data, costCenter, actionBy: employeeId, peaOffice: businessArea };
      }

      config.headers["Accept"] = "*/*";
      config.headers["Access-Control-Allow-Credentials"] = true;
      config.headers["Access-Control-Allow-Origin"] = "*";
      config.headers["Authorization"] = `Bearer ${keycloak.token}`;
    } else {
      window.location.href = `${process.env.BASE_URL}/authentication/login`;
    }

    // !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    //   ? console.log('Request object', config)
    //   : null;

    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? console.log(response) : null;
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // load.hide();
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
      Notify({
        type: "clear",
        message: error?.message
    });
    }
    // window.location.href = PageEnum.NOT_FOUND;
    return Promise.reject(error);
  }
);

export default defineBoot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { api }
