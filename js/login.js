window.addEventListener("DOMContentLoaded", (event) => {

    let loginForm = document.getElementById("login-form");

    let register = document.getElementById("register-form");

    var registeredUsers = [];

    loginForm.addEventListener("submit", (x) => {
        x.preventDefault();
        
        let user = document.getElementById("loginUserName").value;
        let password = document.getElementById("loginPassword").value;

        console.log(localStorage.getItem("users"));

        var users = JSON.parse(localStorage.getItem("users"));

        users.map((x) => {
            if(x.user == user){
                if(x.password == password){
                    let activeUser = {
                        //faz oq tem q ser feito
                    }
                }else{
                    alert("Senha incorreta");
                }
            }
        })
        
    })

    register.addEventListener("submit", (x) => {
        x.preventDefault();
        
        let user = document.getElementById("register-UserName");
        let email = document.getElementById("register-Email");
        let password = document.getElementById("register-Password");

        let userInfo = {
            'user': user.value,
            'email': email.value,
            'password': password.value 
        };
        
        registeredUsers.push(userInfo);

        console.log(userInfo);

        var JSONregistered = JSON.stringify(registeredUsers)

        localStorage.setItem("users", JSONregistered);


    })

})