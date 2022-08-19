const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://timeline-social-pr-5.onrender.com/";
// : "https://tl5-preview-testing-kzi6dwegwo.herokuapp.com";
// : "https://mern-social-tl5.herokuapp.com";

module.exports = baseUrl;
