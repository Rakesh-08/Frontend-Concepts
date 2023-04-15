//callback --> function passed as arg onto another funtion
// it is used for async programming
// we pass callback so that we can use them later in the code
//
// problems with callbacks
// inversion of control
// callbackhell
//
//promises ==> promise is an object that represent the eventual completion or failure of an  async operation.









const div = document.querySelector("div");
const span = document.querySelector("span");

let users = [
  { name: "Rakesh", age: 23 },
  { name: "john", age: 25 },
];

function getUser() {
  //imitate asynchronus behaviour
  setTimeout(() => {
    let result = "";

    users.forEach((item, index) => {
      result = result + `<li>${item.name}</li>`;
    });

    div.innerHTML = result;
  }, 1000);
}

function createUser(user) {
  //imitate asynchronus behaviour
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      users.push(user);

      const err = false;

      if (!err) {
        resolve('happily resolved')
      } else {
        reject('request rejected')
      }
    }, 2000);

  })



}

createUser(
  {
    name: "Rahul",
    age: 24,
  }
)
  .then(getUser)
  //.then(()=> console.log('get post'))
  .catch(err => console.log(err))


