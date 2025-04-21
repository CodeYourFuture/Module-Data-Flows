function add(numbers) {
    if (numbers === "") {
      return 0;
    }
  
    const nums = numbers.split(",");
    const numberArray = [];
    for (let i = 0; i < nums.length; i++) {
      numberArray.push(Number(nums[i]));
    }
  
    const negatives = [];
    for (let i = 0; i < numberArray.length; i++) {
      if (numberArray[i] < 0) {
        negatives.push(numberArray[i]);
      }
    }
  
    if (negatives.length > 0) {
      throw new Error(`negatives not allowed: ${negatives.join(",")}`);
    }
  
    const filteredNums = [];
    for(let i = 0; i< numberArray.length; i++){
      if(numberArray[i] <= 1000){
        filteredNums.push(numberArray[i]);
      }
    }
  
    let sum = 0;
    for (let i = 0; i < filteredNums.length; i++) {
      sum += filteredNums[i];
    }
  
    return sum;
  }
  
  // Tests (using Jest syntax)
  describe("String Calculator", () => {
    test("should return 0 for an empty string", () => {
      expect(add("")).toBe(0);
    });
  
    test("should return the number for a single number string", () => {
      expect(add("5")).toBe(5);
    });
  
    test("should return the sum for two numbers", () => {
      expect(add("3,6")).toBe(9);
    });
  
    test("should handle an unknown amount of numbers", () => {
      expect(add("1,2,3,4,5")).toBe(15);
    });
  
    test("should ignore numbers greater than 1000", () => {
      expect(add("2,1001")).toBe(2);
    });
  
    test("should throw an error for a negative number", () => {
      expect(() => add("1,4,-1")).toThrow("negatives not allowed: -1");
    });
  
    test("should throw an error for multiple negative numbers", () => {
      expect(() => add("1,-4,-1")).toThrow("negatives not allowed: -4,-1");
    });
  });