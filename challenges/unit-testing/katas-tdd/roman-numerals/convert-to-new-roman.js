function convertToNewRoman(n) {
  // Step 1: simple mapping for 1–10 as example
  const romanNumerals = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
  };

  return romanNumerals[n] || "";
}

module.exports = convertToNewRoman;

