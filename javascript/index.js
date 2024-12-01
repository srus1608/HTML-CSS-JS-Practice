const button = document.getElementById("btn")
const user = document.getElementById("container")
// console.log(button);
// console.dir(button);


function handleClick() {
    // console.log('button is clicked');
    users= getUsers();

}

// button.addEventListener("click", handleClick);

const getUsers = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";

  
      const response = await fetch(url);
      const data = await response.json();

      containerElement.innerHtML =""
      data.forEach((user) => {
          const userDiv = document.createElement("div");
          userDiv.textContent = `${user.id} (${user.name})`;
          containerElement.appendChild(userDiv);
      });
  
};

button.addEventListener("click", getUsers);

containerElement.innerHtML =""
        data.forEach((user) => {
            const userDiv = document.createElement("div");
            userDiv.textContent = `${user.id} (${user.name})`;
            containerElement.appendChild(userDiv);
        });
    
function attachUserToUI(users)














// fat arrow lambda
// const getUsers = () => {
//     const url = "https://jsonplaceholder.typicode.com/users";
//     // Promise
//     fetch(url).then((response) => console.log(response)).then();
// }



  // async await
  const getUsers = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    
    const data = fetch(url);
    response = data
    await response = userElement  ;
 
}

// of=>to print ans in string 
// in ==> to get html type response on browser
   
const userElement = async () =>{
  // for(let user of users)  
    for(let {id, name} of users)
    {

      // unpacking or deconstructing
    {id, name} = users
    return users

  }
}

let string = 
` `

// innerhtml == as we wnat to add the html inside the div so for that used
// create string  put in const