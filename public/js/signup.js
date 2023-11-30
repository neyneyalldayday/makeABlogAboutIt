const handleSignUp = async (event) => {
  event.preventDefault();

  const nameEl = document.querySelector("#name").value.trim();
  const emailEl = document.querySelector("#email").value.trim();
  const passEl = document.querySelector("#password").value.trim();
  console.log(nameEl,emailEl, passEl)


  if(nameEl && emailEl && passEl){
    const response = await fetch("/api/users/", {
        method: "POST",
        body: JSON.stringify({ name : nameEl, email: emailEl, password: passEl }),
        headers: { "Content-Type": "application/json" },
      });
    
      if (response.ok) {
        document.location.replace("/dash");
      } else {
        alert(response.statusText);
      }
  } else{
    console.log(nameEl, emailEl, passEl)
  }

};

document.querySelector("#form-submit").addEventListener("submit", handleSignUp);
