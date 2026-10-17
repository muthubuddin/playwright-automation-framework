function add(a,b){
const result =a+b;
 console.log("Results  as " + result);
}

function logins(username){
     console.log("logged in as " + username);
}
function login(userName) {
    console.log("logged in as " + userName);
}

function loginUser(userName,password){
 console.log("logged in as " + userName + " and password is " + password);
}

const loginUserArraow=(userName,Password) =>{
    console.log("logged in as " + userName + " and password is " + Password);
}


const user=({userName:"mujju",password:"mujju123"});
const userProfile=({userName:"afshan",role:"houseWife"});

const loginUserObject = (userRole) => {
     userRole=userProfile.role;
    console.log("logged in as " +  " role: " +userRole);
};
//loginUserObject(userProfile);
loginUserObject(userProfile.role);