

const logout = async ()=> {
    const response = await fetch("/api/users/logout",{
        method: 'POST',
        headers:{ "Content-Type" : 'application/json'},
    });
    if(response.ok){
        document.location.replace('/')
    } else {
        alert("something broke with logout")
    }
    
}

document.querySelector("#logoutBtn").addEventListener("click", logout)