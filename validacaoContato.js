const btn = document.querySelector("[data-form-button]");

function mudaCorDaBorda(elemento, cor) {
  elemento.style.borderColor = cor;
}

function mudaCor(elemento, cor) {
  elemento.style.color = cor;
}

function validaCampo(campo, label, valor, erro) {
  if (valor === "" || valor.length > 50) {
    mudaCorDaBorda(campo, "red");
    mudaCor(label, "red");
    erro.innerHTML = "Por favor, revise o campo!";
    return false;
  } else {
    mudaCorDaBorda(campo, "var(--cinza)");
    mudaCor(label, "var(--texto)");
    erro.innerHTML = "";
    return true;
  }
}

function validarFormatoEmail(email, label, valor, erro) {
  function validaEmailFormato(emailValue) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(emailValue);
  }

  if (validaEmailFormato(valor)) {
    mudaCorDaBorda(email, "var(--cinza)");
    mudaCor(label, "var(--texto)");
    erro.innerHTML = "";
    return true;
  } else {
    mudaCorDaBorda(email, "red");
    mudaCor(label, "red");
    erro.innerHTML = "Por favor, revise seu email!";
    return false;
  }
}

function validarNome() {
  const nome = document.querySelector("[data-form-nome]");
  const labelNome = document.querySelector("[data-form-label-nome]");
  const erroNome = document.querySelector("[data-form-erro-nome]");

  return validaCampo(nome, labelNome, nome.value, erroNome);
}

function validarEmail() {
  const email = document.querySelector("[data-form-email]");
  const labelEmail = document.querySelector("[data-form-label-email]");
  const erroEmail = document.querySelector("[data-form-erro-email]");

  return validarFormatoEmail(email, labelEmail, email.value, erroEmail);
}

function validarAssunto() {
  const assunto = document.querySelector("[data-form-subject]");
  const labelAssunto = document.querySelector("[data-form-label-subject]");
  const erroAssunto = document.querySelector("[data-form-erro-subject]");

  return validaCampo(assunto, labelAssunto, assunto.value, erroAssunto);
}

function validarMensagem() {
  const mensagem = document.querySelector("[data-form-message]");
  const labelMensagem = document.querySelector("[data-form-label-message]");
  const erroMensagem = document.querySelector("[data-form-erro-message]");

  return validaCampo(mensagem, labelMensagem, mensagem.value, erroMensagem);
}

function envia(evento) {
  evento.preventDefault();
}

btn.addEventListener("click", envia);
