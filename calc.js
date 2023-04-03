// program to calculate the sum of any number of values.
function Add(...args) {
    return args.reduce((acc, val) => acc + val, 0);
      
  }
  
  console.log(Add(1,2,3));
  console.log(Add(4,14,5,9,14));
  console.log(Add(2,36));