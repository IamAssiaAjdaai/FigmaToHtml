//shift+alt+A for comment
/* function halloName(name,...args) {
     //name is Parameter we usr args when we have multiple argument and they are more than parametters
    let firstname = name;
    
    for(let n of args)
        {
            firstname = firstname + n
        }
     return firstname
}
console.log(halloName("assia "," ana"," homa")); //assia is Argument

//Function Arrow

let HaalloName = (name)=>console.log('Hallo '+name);
HaalloName("hiya")

var persone = {
    Email:"assia@gmail.com",
    name:"assia",
    login(){console.log(this.Email,'has logged in')},
    logout(){console.log(this.Email,'has logged out')},
};
console.log(persone.name)
console.log(persone.Email)
persone.login()
persone.logout() */
class User{
    constructor(name, Email,date){
        this.name = name,
        this.Email = Email,
        this.date = date
    }
    login(){console.log(this.name,this.Email,'has logged in at',this.date)}
    logout(){console.log(this.name,this.Email,'has logged out',this.date)}
};
var today = new Date();
var dd =today.getDate();
var mm =today.getMonth();
var yyyy = today.getFullYear();
var HH = today.getHours();
var MM = today.getMinutes();
var ss = today.getSeconds();
today =dd +'.'+ mm +'.'+ yyyy +' '+HH+':'+MM+':'+ss;

class Admin extends User{
   deleteUse(user){
        users = users.filter(u=>{
            return u.name != user.name;
        })
   } 
}
var userOen = new User("assia","Assia@gmail.com",today);
var usertwo = new User("assia2","Assia2@gmail.com",today);
var userthree = new User("assia3","Assia3@gmail.com",today);
var users=[userOen,usertwo,userthree]
users.forEach(n => {
    console.log(n.name,n.Email,n.login(),n.logout(),today);
});