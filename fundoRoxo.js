const fundo = document.querySelector('.fundo-roxo');
const inputTop = document.getElementById('fundoTop');
const inputHeight = document.getElementById('fundoHeight');
const btnAplicar = document.getElementById('aplicarFundo');
const btnSalvar = document.getElementById('salvarHTML');

// Carrega valores salvos
const saved = JSON.parse(localStorage.getItem('fundoRoxo')) || {};
if(saved.top) fundo.style.top = saved.top;
if(saved.height) fundo.style.height = saved.height;
if(saved.top) inputTop.value = parseInt(saved.top);
if(saved.height) inputHeight.value = parseInt(saved.height);

// Aplica alterações ao fundo
btnAplicar.addEventListener('click', () => {
  const top = inputTop.value + 'px';
  const height = inputHeight.value + 'px';
  fundo.style.top = top;
  fundo.style.height = height;
  // Salva no localStorage
  localStorage.setItem('fundoRoxo', JSON.stringify({top, height}));
});

// Salva o HTML atualizado
btnSalvar.addEventListener('click', () => {
  const html = document.documentElement.outerHTML;
  const blob = new Blob([html], {type: "text/html"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = "index_atualizado.html";
  a.click();
  URL.revokeObjectURL(url);
});
