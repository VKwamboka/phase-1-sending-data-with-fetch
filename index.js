// Add your code here
//Challenge
function submitData(userName, userEmail){
    const formData = {
        name: userName,
        email: userEmail,
      };

    //p for res 
    const body = document.querySelector('body');
    const newItem = document.createElement('p');
    body.append(newItem);

    //p  for errormessage
    const body2 = document.querySelector('body');
    const newItem2 = document.createElement('p');
    body2.append(newItem2)

    const configurationObject = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify(formData),
    };
      
    return fetch('http://localhost:3000/users', configurationObject)
    .then(function (response) {
        return response.json();
    })
    .then(function (object) {
        newItem.textContent=object.id;
    })
    .catch(function (error) {
        newItem2.textContent=error.message;
        alert("Bad things! Ragnarők!");
    });
}

//practice

// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };
  
//   const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     })
//     .catch(function (error) {
//         alert("Bad things! Ragnarők!");
//         console.log(error.message);
//       });


    

