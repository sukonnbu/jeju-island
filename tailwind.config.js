/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    fontFamily: {
      NanumGothic: ["나눔바른고딕"],
      NanumSquare: ["나눔스퀘어볼드"]
    },
    extend: {
      backgroundImage: {
        "jeju-banner": "url('./images/banner.jpg')"
      }
    },
  },
  plugins: [],
}

