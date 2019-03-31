
function User(email, passwrod){
    this.email = email;
    this.password = passwrod;
}

var users = [];

users.push(new User('homs44@naver.com', '123'))
users.push(new User('abc@naver.com', '123'))

//console.log(users);

function login (email,password){
    for(var i=0; i<users.length; i++){
        if(users[i].email === email && users[i].password === password){
            return true;
        }
    }
    return false;
}

module.exports = {
    login:login
}