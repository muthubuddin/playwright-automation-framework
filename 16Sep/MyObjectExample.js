class MyObjectExample {

    myEmployee(){
        const employee ={
        empName:"mujju",
        empId:"1234",
        role:"lead"
        };
        const key=("role");
        console.log(employee.empName);
    console.log(employee.role);
    console.log(employee[key]);
        
    const employees = [
        { empName: "mujju", empRole: "lead" },
        { empName: "afshan", empRole: "QA" }
    ];
    
    //for of loop
    for(const users of employees){
        console.log("forloop"+users.empName);
    }
    }
    
    validateStringOccurence(name) {
        const map = new Map();
        const charText = name.split("");
        for (let i = 0; i < charText.length; i++) {
            const char = charText[i];
            if (map.has(char)) {
                map.set(char, map.get(char) + 1);
            } else {
                map.set(char, 1);
            }
        }
        console.log(map);
        return map;
    }
    
}

const myObject = new MyObjectExample();

 myObject.myEmployee();
myObject.validateStringOccurence("mujju");
