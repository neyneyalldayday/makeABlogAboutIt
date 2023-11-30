const handleLogin = async (event) => {
    event.preventDefault();
  
    const nameEl = document.querySelector("#name").value.trim();   
    const passEl = document.querySelector("#password").value.trim();
    console.log(nameEl, passEl)
  
  
    if(nameEl &&  passEl){
      const response = await fetch("/api/users/login", {
          method: "POST",
          body: JSON.stringify({ name : nameEl, password: passEl }),
          headers: { "Content-Type": "application/json" },
        });
      
        if (response.ok) {
          console.log(response)
          document.location.replace("/dash");
        } else {
          alert(response.statusText);
        }
    } 
  
  };
  
  document.querySelector("#form-submit").addEventListener("submit", handleLogin);
  