class myfunctions{

    addTwoNumbers(a,b){
        const result=a+b;
        console.log("result is "+result);
        return result;
    }

}

const fun= new myfunctions()
fun.addTwoNumbers(100,200);