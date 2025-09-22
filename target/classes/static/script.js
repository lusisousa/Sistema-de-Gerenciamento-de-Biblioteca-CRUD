const apiUrl = "/api/livros";

async function carregarLivros() {
  const response = await fetch(apiUrl);
  const livros = await response.json();
  const tbody = document.getElementById('livrosTableBody');
  tbody.innerHTML = '';
  livros.forEach(livro => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${livro.id}</td>
      <td>${livro.titulo}</td>
      <td>${livro.autor}</td>
      <td>${livro.isbn}</td>
      <td>${livro.ano}</td>
      <td>${livro.quantidade}</td>
      <td>
        <button class="action" onclick="editarLivro(${livro.id})">Editar</button>
        <button class="action" onclick="deletarLivro(${livro.id})">Excluir</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

async function salvarLivro(e) {
  e.preventDefault();
  const id = document.getElementById('livroId').value;
  const livro = {
    titulo: document.getElementById('titulo').value,
    autor: document.getElementById('autor').value,
    isbn: document.getElementById('isbn').value,
    ano: parseInt(document.getElementById('ano').value),
    quantidade: parseInt(document.getElementById('quantidade').value)
  };
  if (id) {
    await fetch(`${apiUrl}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(livro)
    });
  } else {
    await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(livro)
    });
  }
  document.getElementById('livroForm').reset();
  document.getElementById('livroId').value = '';
  document.getElementById('cancelarEdicao').style.display = 'none';
  carregarLivros();
}

async function editarLivro(id) {
  const response = await fetch(`${apiUrl}/${id}`);
  const livro = await response.json();
  document.getElementById('livroId').value = livro.id;
  document.getElementById('titulo').value = livro.titulo;
  document.getElementById('autor').value = livro.autor;
  document.getElementById('isbn').value = livro.isbn;
  document.getElementById('ano').value = livro.ano;
  document.getElementById('quantidade').value = livro.quantidade;
  document.getElementById('cancelarEdicao').style.display = 'inline-block';
}

async function deletarLivro(id) {
  if (confirm('Deseja excluir este livro?')) {
    await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
    carregarLivros();
  }
}

document.getElementById('livroForm').addEventListener('submit', salvarLivro);
document.getElementById('cancelarEdicao').addEventListener('click', () => {
  document.getElementById('livroForm').reset();
  document.getElementById('livroId').value = '';
  document.getElementById('cancelarEdicao').style.display = 'none';
});

carregarLivros();
