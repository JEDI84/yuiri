import authApi from "./index.js";


async function getAllUsers() {
  const response = await authApi.get("/users", {
    headers: {
      authorization: localStorage.token,
    },
  });
  return response.data;

}


export {getAllUsers};