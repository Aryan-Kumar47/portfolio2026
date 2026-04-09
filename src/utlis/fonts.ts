import localFont from "next/font/local";

const editorialItalic = localFont({
  src: [{ path: "../fonts/EditorialNew-Italic.woff2" }],
  variable: "--editorialItalic",
});
const editorialLightItalic = localFont({
  src: [{ path: "../fonts/EditorialNew-Lightitalic.woff2" }],
  variable: "--editorialLightItalic",
});
const editorialRegularItalic = localFont({
  src: [{ path: "../fonts/EditorialNew-Regular.woff2" }],
  variable: "--editorialRegularItalic",
});
const PPMoriRegular = localFont({
  src: [{ path: "../fonts/PPMori-Regular.woff2" }],
  variable: "--PPMoriRegular",
});
const PPMoriSemiBold = localFont({
  src: [{ path: "../fonts/PPMori-SemiBold.woff2" }],
  variable: "--PPMoriSemiBold",
});

const twisterFont = localFont({
  src: [{ path: "../font/twister_2/Twister.ttf" }],
  variable: "--twister",
});

const backstreetFont = localFont({
  src: [{ path: "../font/backstreet/Backstreet.ttf" }],
});

const geraldine = localFont({
  src: [{ path: "../font/geraldine.ttf" }],
});

const GilroyLight = localFont({
  src: [{ path: "../font/gilroy-free/Gilroy-Light.otf" }],
});

const hafferFont = localFont({
  src: [{ path: "../fonts/Haffer-TRIAL-VF.ttf" }],
  variable: "--haffer",
});

const neueMontreal = localFont({
  src: [{ path: "../fonts/NeueMontreal-Regular.otf" }],
  variable: "--neue",
});
const pacifico = localFont({
  src: [{ path: "../fonts/Pacifico-Regular.ttf" }],
  variable: "--pacifico",
});
const satisfy = localFont({
  src: [{ path: "../fonts/Satisfy-Regular.ttf" }],
  variable: "--satisfy",
});

export {
  editorialItalic,
  PPMoriRegular,
  PPMoriSemiBold,
  editorialLightItalic,
  editorialRegularItalic,
  twisterFont,
  backstreetFont,
  GilroyLight,
  geraldine,
  hafferFont,
  neueMontreal,
  pacifico,
  satisfy,
};
