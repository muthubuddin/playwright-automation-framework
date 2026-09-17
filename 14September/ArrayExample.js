class arrayExamples {

    testArray = ["mytest", "test1", "test2", "test3"];

    myTest() {
        this.testArray.push("test4");
        const length = this.testArray.length;
        console.log(length);

        for (let i = 0; i < this.testArray.length; i++) {
            console.log("MyArray list: " + this.testArray[i]);
        }
    }

    // arr is the parameter. The real array is passed when you CALL this method.
    reverseArray(arr) {
       const reversedArray = [];
       for(let i=arr.length-1;i>=0;i--){
         reversedArray.push(arr[i]);
       }
       console.log(reversedArray);
       return reversedArray;
    }

    reverseString(str) {
        let reversedString = "";
        const reverseWord = str.split("");
      for(let i=reverseWord.length-1;i>=0;i--){
        reversedString += reverseWord[i];  
      }
      console.log("ReverseString: " + reversedString);
      return reversedString;
}

findMax(arr) {
    let maxNo=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>maxNo){
            maxNo=arr[i];  

        }
       
    }
     console.log("MaxNo is  " + maxNo);
     
}
findSecondHighestInArray(arr){
    let second=0;
    let first=0;
    for(let i=0;i<=arr.length;i++){
        if(arr[i]>first){
            second=first;
            first=arr[i];
        }
        else if(arr[i]>second && arr[i]!=first){
            second=arr[i];
        }
    }
    console.log("second number is "+ second);
}

revalidateArray(){
   const action ="login,logout,search";
   const list=action.split(","); 
   console.log(list.includes("search"));
   console.log(list.join("|"))
}
}
const array = new arrayExamples();
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11];
//array.myTest();
// pass the array here — that value becomes "arr" inside the method
//array.reverseArray(array.testArray);
array.revalidateArray();
