function countVowels(name) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
  
    for (let i = 0; i < name.length; i++) {
      if (vowels.includes(name[i])) {
        vowelCount++;
      }
    }
  
    return vowelCount;
  }
  
  const name = "shashi shekhar"
  const numVowels = countVowels(name);
  console.log("Number of vowels:", numVowels);//4
  