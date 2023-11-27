// Função para abrir o modal
function openModal() {
  document.getElementById('MyModal').style.display = 'none';
  document.getElementById('img01').src = document.getElementById('img/capa2.webp').scr;
  document.getElementById('caption').innerHTML = document.getElementById('myImage').alt;
}

// Função para fechar o modal
function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

//modal box
// Função para abrir o modal
function openModal (closeModalBtn) {
  document.getElementById('myModal').style.display = 'block';
}

// Função para fechar o modal
function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}
