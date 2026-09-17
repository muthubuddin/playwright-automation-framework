class myObjectExample{

    myEmployee(){
        const employee ={
        empName:"mujju",
        empid:"1234",
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
            const ch = charText[i];
            if (map.has(ch)) {
                map.set(ch, map.get(ch) + 1);
            } else {
                map.set(ch, 1);
            }
        }
        console.log(map);
        return map;
    }
    
}

const myObject = new myObjectExample();

 myObject.myEmployee();
myObject.validateStringOccurence("mujju");