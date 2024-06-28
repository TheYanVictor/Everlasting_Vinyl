// Essa função window.onload é para garantir que o header seja carregado depois que o HTML for carregado

    let userName = getUserName();

    let header_template = `
        <!-- Cabeçalho do site -->
        <!-- O header é composto de 4 partes principais: Título, busca, navegação e carrinho/login -->
        <header>
            <!-- Brand name -->
            <section class="upper_header">
                <h1>Everlasting Vinyl</h1>
                <p>O melhor dos mundos para os amantes de um bom som</p>
            </section>
            <br>
            <hr style="width: 50%; margin: auto;">
            <!-- Parte de baixo do header -->
            <section class="lower_header">
                <!-- Left section -->
                <section class="col-1">
                    <input type="text" id="barra_pesquisa" placeholder="Pesquisar...">
                    <button id="botao_pesquisa_header"><i class="fa fa-search"></i></button>
                </section>
                <!-- Navigation section -->
                <section class="navbar">
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Produtos</a></li>
                            <li><a href="#">Sobre</a></li>
                            <li><a href="#">Contato</a></li>
                        </ul>
                    </nav>
                </section>  
                <!-- Right section -->
                <section class="right_section_header">
                    <div class="cart">
                        <a href="../templates/cart.html" style="color: white;">
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                            <p>Carrinho (<span id="cart-count">0</span>)</p>
                        </a>
                    </div>
                    <div class="loginSection">
                        <a href="./login.html">
                            <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                            <p>${userName}</p>
                        </a>
                    </div>
                </section>
            </section>
        </header>
    `;
    document.getElementById("general_header").innerHTML = header_template;

    function getUserName(){
        let activeUser = JSON.parse(localStorage.getItem('activeUser'));
    
        if(activeUser == undefined){
            return "Login/Cadastro";
        }else{
            return activeUser.name;
        }
    }
// };
