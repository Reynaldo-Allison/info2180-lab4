window.addEventListener("load", function () {
    let btn = document.querySelector(".btn");
    let user_Input = document.querySelector("#name_alias");
  
    let result = document.getElementById("result");
  
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      
      let input_value = user_Input.value;
      let url = `superheroes.php?name=${input_value}`;
    

      fetch(url) 
        .then(function (response) {
          if (response.ok) {
            return response.text();
          } else {
            throw new Error(response.statusText);
          }
        })
        .then(function (data) {
          result.innerHTML = data;
          user_Input.value = "";
        });
    });
  });

