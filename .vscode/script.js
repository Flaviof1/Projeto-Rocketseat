
function toggleMode() {
    const html = document.documentElement;
    const img = document.querySelector("#profile img");
  
    html.classList.toggle("light");

    // Definir a imagem para o modo claro
  
    if (html.classList.contains("light")) {
      img.setAttribute("src", "./imagens/flavio-sol.png"); 
    } 
     // Definir a imagem para o modo escuro
    else {
      img.setAttribute("src", "./imagens/avatar.png");
    }
  }
  


