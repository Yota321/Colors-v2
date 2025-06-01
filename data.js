const colorPalettes = [
  {
    id: 1,
    name: "Sunset Vibes",
    colors: [
      { hex: "#FF6B6B", rgb: "255, 107, 107", cmyk: "0, 58, 58, 0" },
      { hex: "#FFD93D", rgb: "255, 217, 61", cmyk: "0, 15, 76, 0" },
      { hex: "#6BCB77", rgb: "107, 203, 119", cmyk: "47, 0, 41, 20" }
    ],
    tags: ["warm", "vibrant", "nature"]
  },
  {
    id: 2,
    name: "Ocean Depths",
    colors: [
      { hex: "#1A374D", rgb: "26, 55, 77", cmyk: "66, 29, 0, 70" },
      { hex: "#406882", rgb: "64, 104, 130", cmyk: "51, 20, 0, 49" },
      { hex: "#6998AB", rgb: "105, 152, 171", cmyk: "39, 11, 0, 33" }
    ],
    tags: ["cool", "calm", "water"]
  },
  {
    id: 3,
    name: "Neon Dreams",
    colors: [
      { hex: "#FF00E4", rgb: "255, 0, 228", cmyk: "0, 100, 11, 0" },
      { hex: "#FB3570", rgb: "251, 53, 112", cmyk: "0, 79, 55, 2" },
      { hex: "#FFCE00", rgb: "255, 206, 0", cmyk: "0, 19, 100, 0" }
    ],
    tags: ["bright", "vibrant", "retro"]
  },
  {
    id: 4,
    name: "Forest Whisper",
    colors: [
      { hex: "#537D5D", rgb: "83, 125, 93", cmyk: "34, 0, 26, 51" },
      { hex: "#73946B", rgb: "115, 148, 107", cmyk: "22, 0, 28, 42" },
      { hex: "#9EBC8A", rgb: "158, 188, 138", cmyk: "16, 0, 27, 26" }
    ],
    tags: ["natural", "calm", "earthy"]
  },
  {
    id: 5,
    name: "Pastel Dream",
    colors: [
      { hex: "#F3F3E0", rgb: "243, 243, 224", cmyk: "0, 0, 8, 5" },
      { hex: "#27548A", rgb: "39, 84, 138", cmyk: "72, 39, 0, 46" },
      { hex: "#183B4E", rgb: "24, 59, 78", cmyk: "69, 24, 0, 69" }
    ],
    tags: ["contrast", "elegant", "professional"]
  },
  {
    id: 6,
    name: "Tropical Punch",
    colors: [
      { hex: "#FFFBDE", rgb: "255, 251, 222", cmyk: "0, 2, 13, 0" },
      { hex: "#90D1CA", rgb: "144, 209, 202", cmyk: "31, 0, 3, 18" },
      { hex: "#129990", rgb: "18, 153, 144", cmyk: "88, 0, 6, 40" }
    ],
    tags: ["fresh", "tropical", "summer"]
  },
  {
    id: 7,
    name: "Monochrome Elegance",
    colors: [
      { hex: "#F2F2F2", rgb: "242, 242, 242", cmyk: "0, 0, 0, 5" },
      { hex: "#EAE4D5", rgb: "234, 228, 213", cmyk: "0, 3, 9, 8" },
      { hex: "#B6B09F", rgb: "182, 176, 159", cmyk: "0, 3, 13, 29" }
    ],
    tags: ["minimal", "elegant", "neutral"]
  },
  {
    id: 8,
    name: "Vibrant Contrast",
    colors: [
      { hex: "#309898", rgb: "48, 152, 152", cmyk: "68, 0, 0, 40" },
      { hex: "#FF9F00", rgb: "255, 159, 0", cmyk: "0, 38, 100, 0" },
      { hex: "#F4631E", rgb: "244, 99, 30", cmyk: "0, 59, 88, 4" }
    ],
    tags: ["vibrant", "energetic", "bold"]
  },
  {
    id: 9,
    name: "Spring Garden",
    colors: [
      { hex: "#ECFAE5", rgb: "236, 250, 229", cmyk: "6, 0, 8, 2" },
      { hex: "#DDF6D2", rgb: "221, 246, 210", cmyk: "10, 0, 15, 4" },
      { hex: "#CAE8BD", rgb: "202, 232, 189", cmyk: "13, 0, 19, 9" }
    ],
    tags: ["fresh", "spring", "light"]
  },
  {
    id: 10,
    name: "Berry Bliss",
    colors: [
      { hex: "#7F55B1", rgb: "127, 85, 177", cmyk: "28, 52, 0, 31" },
      { hex: "#9B7EBD", rgb: "155, 126, 189", cmyk: "18, 33, 0, 26" },
      { hex: "#F49BAB", rgb: "244, 155, 171", cmyk: "0, 36, 30, 4" }
    ],
    tags: ["purple", "feminine", "soft"]
  },
  {
    id: 11,
    name: "Aqua Fresh",
    colors: [
      { hex: "#4ED7F1", rgb: "78, 215, 241", cmyk: "68, 11, 0, 5" },
      { hex: "#6FE6FC", rgb: "111, 230, 252", cmyk: "56, 9, 0, 1" },
      { hex: "#A8F1FF", rgb: "168, 241, 255", cmyk: "34, 5, 0, 0" }
    ],
    tags: ["blue", "fresh", "aqua"]
  },
  {
    id: 12,
    name: "Soft Peach",
    colors: [
      { hex: "#FFDCDC", rgb: "255, 220, 220", cmyk: "0, 14, 14, 0" },
      { hex: "#FFF2EB", rgb: "255, 242, 235", cmyk: "0, 5, 8, 0" },
      { hex: "#FFE8CD", rgb: "255, 232, 205", cmyk: "0, 9, 20, 0" }
    ],
    tags: ["soft", "pastel", "warm"]
  },
  {
    id: 13,
    name: "Electric Blue",
    colors: [
      { hex: "#5409DA", rgb: "84, 9, 218", cmyk: "61, 96, 0, 15" },
      { hex: "#4E71FF", rgb: "78, 113, 255", cmyk: "69, 56, 0, 0" },
      { hex: "#8DD8FF", rgb: "141, 216, 255", cmyk: "45, 15, 0, 0" }
    ],
    tags: ["blue", "electric", "vibrant"]
  },
  {
    id: 14,
    name: "Navy Elegance",
    colors: [
      { hex: "#333446", rgb: "51, 52, 70", cmyk: "27, 26, 0, 73" },
      { hex: "#7F8CAA", rgb: "127, 140, 170", cmyk: "25, 18, 0, 33" },
      { hex: "#B8CFCE", rgb: "184, 207, 206", cmyk: "11, 0, 0, 19" }
    ],
    tags: ["navy", "elegant", "professional"]
  },
  {
    id: 15,
    name: "Vintage Red",
    colors: [
      { hex: "#EAEBD0", rgb: "234, 235, 208", cmyk: "0, 0, 12, 8" },
      { hex: "#DA6C6C", rgb: "218, 108, 108", cmyk: "0, 50, 50, 15" },
      { hex: "#CD5656", rgb: "205, 86, 86", cmyk: "0, 58, 58, 20" }
    ],
    tags: ["red", "vintage", "warm"]
  },
  {
    id: 16,
    name: "Magenta Flow",
    colors: [
      { hex: "#FF00E4", rgb: "255, 0, 228", cmyk: "0, 100, 11, 0" },
      { hex: "#FB3570", rgb: "251, 53, 112", cmyk: "0, 79, 55, 2" },
      { hex: "#FA9442", rgb: "250, 148, 66", cmyk: "0, 41, 74, 2" }
    ],
    tags: ["magenta", "vibrant", "gradient"]
  },
  {
    id: 17,
    name: "Emerald City",
    colors: [
      { hex: "#096B72", rgb: "9, 107, 114", cmyk: "92, 6, 0, 55" },
      { hex: "#0B8A8F", rgb: "11, 138, 143", cmyk: "92, 3, 0, 44" },
      { hex: "#0CABA8", rgb: "12, 171, 168", cmyk: "93, 0, 2, 33" }
    ],
    tags: ["teal", "emerald", "gradient"]
  },
  {
    id: 18,
    name: "Citrus Splash",
    colors: [
      { hex: "#FFC300", rgb: "255, 195, 0", cmyk: "0, 24, 100, 0" },
      { hex: "#FF5733", rgb: "255, 87, 51", cmyk: "0, 66, 80, 0" },
      { hex: "#C70039", rgb: "199, 0, 57", cmyk: "0, 100, 71, 22" }
    ],
    tags: ["orange", "warm", "energetic"]
  },
  {
    id: 19,
    name: "Lavender Fields",
    colors: [
      { hex: "#E6E6FA", rgb: "230, 230, 250", cmyk: "8, 8, 0, 2" },
      { hex: "#B39CD0", rgb: "179, 156, 208", cmyk: "14, 25, 0, 18" },
      { hex: "#9370DB", rgb: "147, 112, 219", cmyk: "33, 49, 0, 14" }
    ],
    tags: ["purple", "lavender", "soft"]
  },
  {
    id: 20,
    name: "Mint Chocolate",
    colors: [
      { hex: "#F5FFFA", rgb: "245, 255, 250", cmyk: "4, 0, 2, 0" },
      { hex: "#3EB489", rgb: "62, 180, 137", cmyk: "66, 0, 24, 29" },
      { hex: "#2D3033", rgb: "45, 48, 51", cmyk: "12, 6, 0, 80" }
    ],
    tags: ["mint", "contrast", "fresh"]
  },
  {
    id: 21,
    name: "Desert Sunset",
    colors: [
      { hex: "#FF7E5F", rgb: "255, 126, 95", cmyk: "0, 51, 63, 0" },
      { hex: "#FEB47B", rgb: "254, 180, 123", cmyk: "0, 29, 52, 0" },
      { hex: "#FFE66D", rgb: "255, 230, 109", cmyk: "0, 10, 57, 0" }
    ],
    tags: ["sunset", "warm", "desert"]
  },
  {
    id: 22,
    name: "Cosmic Purple",
    colors: [
      { hex: "#2E0854", rgb: "46, 8, 84", cmyk: "45, 90, 0, 67" },
      { hex: "#5B0888", rgb: "91, 8, 136", cmyk: "33, 94, 0, 47" },
      { hex: "#9D4EDD", rgb: "157, 78, 221", cmyk: "29, 65, 0, 13" }
    ],
    tags: ["purple", "cosmic", "deep"]
  },
  {
    id: 23,
    name: "Autumn Leaves",
    colors: [
      { hex: "#E76F51", rgb: "231, 111, 81", cmyk: "0, 52, 65, 9" },
      { hex: "#F4A261", rgb: "244, 162, 97", cmyk: "0, 34, 60, 4" },
      { hex: "#E9C46A", rgb: "233, 196, 106", cmyk: "0, 16, 55, 9" }
    ],
    tags: ["autumn", "warm", "earthy"]
  },
  {
    id: 24,
    name: "Neon Nights",
    colors: [
      { hex: "#FF00FF", rgb: "255, 0, 255", cmyk: "0, 100, 0, 0" },
      { hex: "#00FFFF", rgb: "0, 255, 255", cmyk: "100, 0, 0, 0" },
      { hex: "#FFFF00", rgb: "255, 255, 0", cmyk: "0, 0, 100, 0" }
    ],
    tags: ["neon", "bright", "vibrant"]
  },
  {
    id: 25,
    name: "Coral Reef",
    colors: [
      { hex: "#FF9A8B", rgb: "255, 154, 139", cmyk: "0, 40, 45, 0" },
      { hex: "#FF6A88", rgb: "255, 106, 136", cmyk: "0, 58, 47, 0" },
      { hex: "#FF99AC", rgb: "255, 153, 172", cmyk: "0, 40, 33, 0" }
    ],
    tags: ["coral", "pink", "soft"]
  },
  {
    id: 26,
    name: "Jungle Fever",
    colors: [
      { hex: "#004B23", rgb: "0, 75, 35", cmyk: "100, 0, 53, 71" },
      { hex: "#006400", rgb: "0, 100, 0", cmyk: "100, 0, 100, 61" },
      { hex: "#007200", rgb: "0, 114, 0", cmyk: "100, 0, 100, 55" }
    ],
    tags: ["green", "jungle", "deep"]
  },
  {
    id: 27,
    name: "Cherry Blossom",
    colors: [
      { hex: "#FFC0CB", rgb: "255, 192, 203", cmyk: "0, 25, 20, 0" },
      { hex: "#FFB6C1", rgb: "255, 182, 193", cmyk: "0, 29, 24, 0" },
      { hex: "#FF69B4", rgb: "255, 105, 180", cmyk: "0, 59, 29, 0" }
    ],
    tags: ["pink", "soft", "spring"]
  },
  {
    id: 28,
    name: "Twilight Sky",
    colors: [
      { hex: "#1A1B41", rgb: "26, 27, 65", cmyk: "60, 58, 0, 75" },
      { hex: "#4F518C", rgb: "79, 81, 140", cmyk: "44, 42, 0, 45" },
      { hex: "#2D82B7", rgb: "45, 130, 183", cmyk: "75, 29, 0, 28" }
    ],
    tags: ["blue", "twilight", "deep"]
  },
  {
    id: 29,
    name: "Lemon Lime",
    colors: [
      { hex: "#FFFF00", rgb: "255, 255, 0", cmyk: "0, 0, 100, 0" },
      { hex: "#BFFF00", rgb: "191, 255, 0", cmyk: "25, 0, 100, 0" },
      { hex: "#00FF00", rgb: "0, 255, 0", cmyk: "100, 0, 100, 0" }
    ],
    tags: ["green", "yellow", "bright"]
  },
  {
    id: 30,
    name: "Retro Wave",
    colors: [
      { hex: "#FF00FF", rgb: "255, 0, 255", cmyk: "0, 100, 0, 0" },
      { hex: "#00FFFF", rgb: "0, 255, 255", cmyk: "100, 0, 0, 0" },
      { hex: "#000000", rgb: "0, 0, 0", cmyk: "0, 0, 0, 100" }
    ],
    tags: ["retro", "neon", "dark"]
  }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { colorPalettes };
}
