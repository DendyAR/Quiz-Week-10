class Diamond {
  diamond(a) {
    let val = a * 2 - 1; 
    for (let i = 1; i <= a; i++) {
      let result = "";
      for (let j = 1; j <= val; j++) {
        if (j >= a + 1 - i && j <= a - 1 + i) {
          result += "*";
        } else {
          result += " ";
        }
      }
      console.log(result);
    }
    for (let i = a - 1; i >= 1; i--) {
      let result = "";
      for (let j = 1; j <= val; j++) {
        if (j >= a + 1 - i && j <= a - 1 + i) {
          result += "*";
        } else {
          result += " ";
        }
      }
      console.log(result);
    }
  }
}

module.exports = Diamond;
