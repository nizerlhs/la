document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".menu");

  // Criar botão hambúrguer
  const btnMobile = document.createElement("div");
  btnMobile.classList.add("btn-mobile");
  btnMobile.innerHTML = "&#9776;"; // ☰
  document.querySelector(".navbar .container").appendChild(btnMobile);

  // Alternar menu
  btnMobile.addEventListener("click", () => {
    nav.classList.toggle("active");
    btnMobile.innerHTML = nav.classList.contains("active") ? "&times;" : "&#9776;"; // ✖ ou ☰
  });

  // Fechar menu ao clicar em um link
  document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      btnMobile.innerHTML = "&#9776;";
    });
  });

  // Rolagem suave
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: "smooth"
        });
      }
    });
  });

  // Validação do formulário
  const form = document.querySelector(".contato form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nome = form.querySelector("input[type='text']").value.trim();
      const email = form.querySelector("input[type='email']").value.trim();
      const msg = form.querySelector("textarea").value.trim();

      if (!nome || !email || !msg) {
        alert("Por favor, preencha todos os campos!");
        return;
      }

      alert("Mensagem enviada com sucesso! 🚀");
      form.reset();
    });
  }
});
