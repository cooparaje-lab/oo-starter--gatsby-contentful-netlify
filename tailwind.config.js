module.exports = {
  content: [
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.css',
  ],
  theme: {
    fontFamily: {
      sans: ["Josefin Sans", "serif"],
      serif: ["Yeseva One", "serif"],
      mono: ["Space Mono", "mono"],
    },
  },
  variants: {
    animation: ({ after }) => after(["motion-safe", "motion-reduce"]),
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
}
