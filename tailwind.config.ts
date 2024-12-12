/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#0C1A35",
        grayLoad: "#D9D9D9",
      },
      borderImage: {
        "gradient-active-tab":
          "linear-gradient(99.47deg, rgba(255, 255, 255, 0.2) 10.17%, rgba(255, 255, 255, 0) 40.66%, #C9D15E 67.15%)",
        "active-gradient-cha-sm":
          "linear-gradient(0deg, #C9D15E 0%, #8A921A 100%)",
      },
      backgroundImage: {
        "text-gradient":
          "linear-gradient(180deg, #ABB628 0%, #C4D030 50%, #C4D030 100%)",
      },
      borderWidth: {
        "0.5": "0.5px",
      },
      keyframes: {
        zoomInRight: {
          "0%": {
            opacity: "0",
            transform: "scale(0.9) translateX(20%)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1) translateX(0)",
          },
        },
        zoomInBottom: {
          "0%": {
            opacity: "0",
            transform: "scale(0.9) translateY(20%)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1) translateY(0)",
          },
        },
      },
      animation: {
        zoomInRight: "zoomInRight 0.8s ease-in-out forwards",
        zoomInBottom: "zoomInBottom 0.8s ease-in-out forwards",
      },
    },
  },
  plugins: [
    function ({
      addUtilities,
    }: {
      addUtilities: (utilities: Record<string, any>) => void;
    }) {
      addUtilities({
        ".gradient-active-tab": {
          border: "1px solid",
          "border-image-source":
            "linear-gradient(99.47deg, rgba(255, 255, 255, 0.2) 10.17%, rgba(255, 255, 255, 0) 40.66%, #C9D15E 67.15%)",
          "border-image-slice": "1",
          borderRadius: "2px",
        },
        ".border-gradient-custom": {
          border: "0.5px solid",
          "border-image-source":
            "linear-gradient(111.93deg, rgba(255, 255, 255, 0.3) 10.34%, rgba(255, 255, 255, 0) 50.73%, rgba(255, 255, 255, 0.3) 85.83%)",
          "border-image-slice": "1",
          borderRadius: "2px",
        },
        ".border-30-0-30-white": {
          border: "0.66px solid",
          "border-image-source":
            "linear-gradient(111.93deg, rgba(255, 255, 255, 0.3) 10.34%, rgba(255, 255, 255, 0) 50.73%, rgba(255, 255, 255, 0.3) 85.83%)",
          "border-image-slice": "1",
          borderRadius: "4px",
        },
        ".border-51-0-51-white": {
          border: "0.5px solid",
          "border-image-source":
            "linear-gradient(111.93deg, rgba(255, 255, 255, 0.51) 10.34%, rgba(255, 255, 255, 0) 50.73%, rgba(255, 255, 255, 0.51) 85.83%)",
          "border-image-slice": "1",
        },
        ".border-bottom-10-white": {
          borderBottom: "1px solid",
          "border-image-source":
            "linear-gradient(111.93deg, rgba(255, 255, 255, 0.1) 10.34%, rgba(255, 255, 255, 0) 50.73%, rgba(255, 255, 255, 0.1) 85.83%)",
          "border-image-slice": "1",
        },
      });
    },
  ],
};
export default config;
