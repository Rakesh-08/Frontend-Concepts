//callback --> function passed as arg onto another funtion
// it is used for async programming
// we pass callback so that we can use them later in the code 
//
// problems with callbacks
// inversion of control
// callbackhell

const div= document.querySelector('div');
const span= document.querySelector('span');

let users= [
    {name:'Rakesh',age:23},
    {name:'john',age:25}
]

function getUser(){
   
//imitate asynchronus behaviour
    setTimeout(()=>{
         let result = "";

         users.forEach((item,index)=>{
            result= result + `<li>${item.name}</li>`
         })
        
         div.innerHTML=result

    },1000)
}


function createUser(user, cb) {
  //imitate asynchronus behaviour

  setTimeout(() => {
    users.push(user);
    //100 of lines codes
    // createUser is being used several times in several places
    cb();
  }, 2000);
}

createUser({
    name:'Rahul',
    age:24

},getUser  )


