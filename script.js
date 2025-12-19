function toggleMode() { // Função para alternar entre os modos claro e escuro
    const html = document.documentElement; // Seleciona o elemento <html>
    html.classList.toggle("light"); // Alterna a classe "light" no elemento <html>

    const img = document.querySelector("#profile-img"); // Seleciona a imagem do perfil

    if (html.classList.contains("light")) { // Verifica se a classe "light" está presente

        img.setAttribute("src", "./assets/perfil-light.png") // Altera a imagem para o modo claro

  }    else {

     img.setAttribute("src", "./assets/perfil-dark.png") // Altera a imagem para o modo escuro
    
}

}