function convertToOldRoman(n) {
  // Step 1: simple mapping for 1–10
  const oldRomanNumerals = {
    1: "I",
    2: "II",
    3: "III",
    4: "IIII",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "VIIII",
    10: "X",
  };

  return oldRomanNumerals[n] || "";
}

module.exports = convertToOldRoman;

