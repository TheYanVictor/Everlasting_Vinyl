// Essa função window.onload é para garantir que o header seja carregado depois que o HTML for carregado
window.onload = function () {
    let footer_template = `
        <!-- Rodapé do site -->
        <link rel="stylesheet" href="/css/style-footer.css">
<footer>
    <section class="name_footer">
        <p>&copy; Everlasting Vinyl, 2024 - Todos os direitos reservados</p>
    </section>
    <section class="icones_footer">
        <a href="#"><i class="fa fa-facebook-square fa-lg" style="color: #f3e9dc;"></i></a>
        <a href="#"><i class="fa fa-instagram fa-lg"></i></a>
        <a href="#"><i class="fa fa-linkedin fa-lg"></i></a>
        <a href="https://github.com/TheYanVictor/Everlasting_Vinyl"><i class="fa fa-github fa-lg"></i></a>
    </section>
</footer>
    `;
    document.getElementById("general_footer").innerHTML = footer_template;
};
