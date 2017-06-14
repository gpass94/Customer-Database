// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
fetch("https://randomuser.me/api/?results=15")
  .then(function (response){

    response.json().then(function (data) {
      for (var i = 0; i < data.length; i++) {
        let customers = data.results;

      }
      console.log(data);
    })

  });


  // Your Code Goes Here
'use strict';
