const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://mern-social-tl5.herokuapp.com";

// Production
// const baseUrl = "https://mern-social-tl5.vercel.app";

export default baseUrl;
