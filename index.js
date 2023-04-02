// Add your code here
const formData = {
    name: "Sunga",
    email: "sungajunior1@gmail.com",
  };
   
const  submitData = {
  method:"POST",
  headers: {
    "Content-Type":"application/json",
    "Accept":"application/json",

  },
  body:JSON.stringify({
    name: "Sunga",
    email: "sungajunior1@gmail.com",
  }),

};

fetch("http://localhost:3000/users ", submitData);
  .then(function (response) {
    return response.json();
  })
  .then(function (object) {
    console.log(object);
  })
  .catch(function (error) {
    alert("error occured!, oblect with error!");
    console.log(error.message);
  });