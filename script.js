function firstNonRepeatedChar(str) {
 // Write your code here
	const charCountMap = {};
  
  // Count the occurrences of each character in the string
  for (let char of str) {
    if (charCountMap[char]) {
      charCountMap[char]++;
    } else {
      charCountMap[char] = 1;
    }
  }
  for( key in charCountMap){
      if(charCountMap[key] == 1)
      {
          return key;
      }
  }
  return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
