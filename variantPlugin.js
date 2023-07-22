const plugin = require("tailwindcss/plugin");
const fontVariationSettings = plugin(function ({ addUtilities }) {
  addUtilities({
    ".font-thin": {
      fontWeight: 100,
      fontVariationSettings: '"wght" 100',
      "&.italic": {
        fontVariationSettings: '"slnt" 1, "wght" 100',
      },
    },
  });

  addUtilities({
    ".font-extralight": {
      fontWeight: 200,
      fontVariationSettings: '"wght" 200',
      "&.italic": {
        fontVariationSettings: '"slnt" 1, "wght" 200',
      },
    },
  });

  addUtilities({
    ".font-light": {
      fontWeight: 300,
      fontVariationSettings: '"wght" 300',
      "&.italic": {
        fontVariationSettings: '"slnt" 1, "wght" 300',
      },
    },
  });

  addUtilities({
    ".font-normal": {
      fontWeight: 480,
      fontVariationSettings: '"wght" 480',
      "&.italic": {
        fontVariationSettings: '"slnt" 1, "wght" 480',
      },
    },
  });

  addUtilities({
    ".font-medium": {
      fontWeight: 560,
      fontVariationSettings: '"wght" 560',
      "&.italic": {
        fontVariationSettings: '"slnt" 1, "wght" 560',
      },
    },
  });

  addUtilities({
    ".font-semibold": {
      fontWeight: 660,
      fontVariationSettings: '"wght" 660',
      "&.italic": {
        fontVariationSettings: '"slnt" 1, "wght" 660',
      },
    },
  });

  addUtilities({
    ".font-bold": {
      fontWeight: 700,
      fontVariationSettings: '"wght" 700',
      "&.italic": {
        fontVariationSettings: '"slnt" 1, "wght" 700',
      },
    },
  });

  addUtilities({
    ".font-extrabold": {
      fontWeight: 800,
      fontVariationSettings: '"wght" 800',
      "&.italic": {
        fontVariationSettings: '"slnt" 1, "wght" 800',
      },
    },
  });

  addUtilities({
    ".font-black": {
      fontWeight: 900,
      fontVariationSettings: '"wght" 900',
      "&.italic": {
        fontVariationSettings: '"slnt" 1, "wght" 900',
      },
    },
  });

  addUtilities({
    ".italic": {
      fontStyle: "italic",
      fontVariationSettings: '"slnt" 1',
    },
  });
});

module.exports = fontVariationSettings;
