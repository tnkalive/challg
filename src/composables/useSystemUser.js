import { ref, computed } from "vue";
// import { api } from "src/boot/axios";
import { keycloak } from "src/boot/keycloak";
import { decrypt } from "src/boot/ls-secure";

export default function useSystemUser() {
  const baseUrl = process.env.BASE_URL;
  const logoutLoading = ref(false);

  const userConfigurations = computed(() => {
    return !localStorage.getItem('pas_user_configurations') ? logout() : decrypt(localStorage.getItem("pas_user_configurations"));
  });
  const roles = computed(() => {
    return userConfigurations.value.roles;
  });
  const employeeId = computed(() => {
    return userConfigurations.value.employeeId;
  });
  const employeeFullName = computed(() => {
    const { titleFullDescription, firstName, lastName } = userConfigurations.value;
    return `${titleFullDescription} ${firstName} ${lastName}`;
  });
  const isAdmin = computed(() => {
    return userConfigurations.value.isAdmin;
  });
  const isManager = computed(() => {
    return userConfigurations.value.isManager;
  });
  const isSystemAdmin = computed(() => {
    return userConfigurations.value.roles === '99';
  });
  async function login(params) {
    if (keycloak.authenticated) {
      console.log("success")
      localStorage.setItem("token", params)
      // if(keycloak.idTokenParsed.hr_business_area == 'C000'){
      //   console.log(keycloak.idTokenParsed);
      //   await keycloak.logout({
      //       redirectUri: `${baseUrl}/authentication/login`,
      // });
      // } else {
      //   localStorage.setItem("token", params)
      // }

    }
    // return await api
    //   .get('http://localhost:5000/hrm/checkuser', { params })
    //   .then((response) => {
    //     localStorage.setItem("pas_user_configurations", encrypt(response.data.data))
    //     return response;
    //   })
    //   .catch(() => {
    //     localStorage.clear();
    //     keycloak.logout({
    //       Uri: `${baseUrl}/authentication/login`,
    //     });
    //   })
  }

  async function logout() {
    if (keycloak.authenticated) {
      localStorage.clear()
      await keycloak.logout({
            redirectUri: `${baseUrl}/authentication/login`,
      });
      // return await api.get(API.AUTHENTICATION.LOGOUT).finally(() => {
      //   keycloak.logout({
      //     redirectUri: `${baseUrl}/authentication/login`,
      //   });
      // });
    } else {
      window.location.href = `${baseUrl}/authentication/login`;
    }
  }

  return {
    employeeFullName,
    employeeId,
    isAdmin,
    isManager,
    isSystemAdmin,
    login,
    logout,
    logoutLoading,
    roles,
    userConfigurations,
  };

}
