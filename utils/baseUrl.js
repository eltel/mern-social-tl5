const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://mern-social-tl5.herokuapp.com";

module.exports = baseUrl;
