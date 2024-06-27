// Essa função window.onload é para garantir que o header seja carregado depois que o HTML for carregado
window.onload = function () {
    let footer_template = `
        <!-- Rodapé do site -->
        <link rel="stylesheet" href="/css/style-footer.css">
<footer>
    <section class="name_footer">
        <p>Everlasting Vinyl</p>
    </section>
    <section class="icones_footer">
        <a href="#"><img id="icones_footer_logo"src="/assets/img/facebook.png" alt="Facebook"></a>
        <a href="#"><img id="icones_footer_logo" src="/assets/img/instagram.png" alt="Instagram"></a>
        <a href="#"><img id="icones_footer_logo" src="/assets/img/linkedin.png" alt="Linkedin"></a>
        <a href="https://github.com/TheYanVictor/Everlasting_Vinyl"><img id="icones_footer_logo" src="/assets/img/github.png" alt="Github"></a>
    </section>
</footer>
    `;
    document.getElementById("general_footer").innerHTML = footer_template;
};
