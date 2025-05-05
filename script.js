document.addEventListener("DOMContentLoaded", function () {
    const btnMenu = document.getElementById("btn-menu");
    const listaCategorias = document.getElementById("lista-categorias");
  
    btnMenu.addEventListener("click", () => {
      listaCategorias.style.display = 
        listaCategorias.style.display === "block" ? "none" : "block";
    });
  
    // Navegação suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
        listaCategorias.style.display = "none"; // Fecha o menu após clicar
      });
    });
  
    // Exemplo de busca (descomente se quiser implementar)
    /*
    const searchInput = document.getElementById("search");
    searchInput.addEventListener("input", function () {
      const query = this.value.toLowerCase();
      document.querySelectorAll("li").forEach(item => {
        const text = item.innerText.toLowerCase();
        item.style.display = text.includes(query) ? "flex" : "none";
      });
    });
    */
  });
  