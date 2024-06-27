window.addEventListener("DOMContentLoaded", (event) => {

    let loginForm = document.getElementById("login-form");

    let register = document.getElementById("register-form");

    var registeredUsers = [];

    loginForm.addEventListener("submit", (x) => {
        x.preventDefault();
        
        let user = document.getElementById("loginUserName").value;
        let password = document.getElementById("loginPassword").value;

        var users = JSON.parse(localStorage.getItem("users"));

        users.map((x) => {
            if(x.user == user || x.email == user){
                if(x.password == password){
                    let activeUser = {
                        "name": x.user,
                        "admin": false
                    };

                    activeUserJson = JSON.stringify(activeUser);

                    localStorage.removeItem("activeUser");
                    localStorage.setItem("activeUser", activeUserJson);

                    window.location.href = "index.html"
                    // window.location.replace("index.html")

                }else{
                    alert("Senha incorreta");
                }
            }else{
                alert('Usuário/E-mail incorreto')
            }
        })
        
    })

    register.addEventListener("submit", (x) => {
        x.preventDefault();
        
        let user = document.getElementById("register-UserName").value;
        let email = document.getElementById("register-Email").value;
        let password = document.getElementById("register-Password").value;

        if(isEmptyField(email) || isEmptyField(user) || isEmptyField(password)){
            alert('Campos obrigatórios vazios!')
            return;
        }

        if(!validateEmail(email)){
            alert('Email invalido')
            return;
        }

        let userInfo = {
            'user': user,
            'email': email,
            'password': password 
        };
        
        registeredUsers.push(userInfo);

        var JSONregistered = JSON.stringify(registeredUsers)

        localStorage.setItem("users", JSONregistered);
    })

    function validateEmail(email){
        if(!email.includes('@')){
            return false;
        }

        const validDomains = ["gmail.com", "hotmail.com", "outlook.com"];
        const emailDomain = email.split('@')[1].toLowerCase(); 
        if(!validDomains.includes(emailDomain)){
            return false
        }

        return true;
    }

    function isEmptyField(value){
        return value == ''? true : false;
    }

})