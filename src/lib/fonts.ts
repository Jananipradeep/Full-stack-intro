import localFonts from "next/font/local";

export const gemunu = localFonts({
  src: "../../public/fonts/GemunuLibre-Medium.ttf",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
  preload: true,
  variable: "--font-gemunu",
});

export const johnieWalker1 = localFonts({
  src: "../../public/fonts/johnnie-walker-caps-sans/book/JWCAPSSANS-Book.ttf",
  fallback: ["Roboto", "sans-serif"],
  preload: true,
  variable: "--font-johnnieWalker-normal",
});

export const johnieWalker2 = localFonts({
  src: "../../public/fonts/johnnie-walker-caps-sans/bold/JWCAPSSANS-Bold.ttf",
  fallback: ["Roboto", "sans-serif"],
  preload: true,
  variable: "--font-johnnieWalker-bold",
});

export const johnieWalker3 = localFonts({
  src: "../../public/fonts/johnnie-walker-caps-sans/medium/JWCAPSSANS-Medium.ttf",
  fallback: ["Roboto", "sans-serif"],
  preload: true,
  variable: "--font-johnnieWalker-medium",
});
