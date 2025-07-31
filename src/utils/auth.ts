export const login = (username: string) => {
  localStorage.setItem("isAuthenticated", "true");
  localStorage.setItem("username", username);
};

export const logout = () => {
  localStorage.removeItem("isAuthenticated");
  localStorage.removeItem("username");
};

export const isAuthenticated = () => {
  return localStorage.getItem("isAuthenticated") === "true";
};