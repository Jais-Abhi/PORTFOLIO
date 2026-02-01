export default {
  content: [
  "./src/app/**/*.{js,jsx,ts,tsx}",
  "./src/components/**/*.{js,jsx,ts,tsx}",
  "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
       keyframes:{
        "ping-high":{
            "75%, 100%": {
                transform: "scale(3)",
                opacity: "0",
              }
        }
      },
      animation: {
        "ping-high" : 'ping-high 1s ease-in-out infinite',
      }
    },
  },
};