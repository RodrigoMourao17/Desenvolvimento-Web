// Menu hambúrguer: toggle visibilidade do menu
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
}

// Função para criar um card com dados do produto (index)
function criarCardProduto(produto) {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <h3>${produto.title} (ID: ${produto.id})</h3>
    <img src="${produto.thumbnail || produto.images?.[0]}" alt="${produto.title}" />
    <p><strong>Categoria:</strong> ${produto.category}</p>
    <p>${produto.description}</p>
  `;

  return card;
}

// Função para criar card smartphone
function criarCardSmartphone(smartphone) {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <h3>${smartphone.title}</h3>
    <img src="${smartphone.images[0]}" alt="${smartphone.title}" />
  `;

  return card;
}

// Função para buscar produto por ID na API e mostrar na galeria (index)
async function buscarProdutoPorId() {
  const galeria = document.getElementById('galeria');
  galeria.innerHTML = ''; // limpa galeria

  let id = prompt('Digite um ID de produto entre 1 e 30:');
  if (!id) return;

  id = Number(id);
  if (isNaN(id) || id < 1 || id > 30) {
    alert('ID inválido! Por favor, digite um número entre 1 e 30.');
    return;
  }

  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if (!response.ok) throw new Error('Produto não encontrado');
    const produto = await response.json();

    const card = criarCardProduto(produto);
    galeria.appendChild(card);
  } catch (error) {
    alert('Erro ao buscar o produto: ' + error.message);
  }
}

// Função para buscar todos os smartphones e mostrar na galeria (smartphones)
async function listarSmartphones() {
  const galeria = document.getElementById('galeria');
  galeria.innerHTML = ''; // limpa galeria

  try {
    const response = await fetch('https://dummyjson.com/products/category/smartphones');
    if (!response.ok) throw new Error('Erro ao carregar smartphones');
    const data = await response.json();

    data.products.forEach((smartphone) => {
      const card = criarCardSmartphone(smartphone);
      galeria.appendChild(card);
    });
  } catch (error) {
    alert('Erro ao buscar smartphones: ' + error.message);
  }
}

// Eventos dos botões conforme a página
const btnBuscarProduto = document.getElementById('btn-buscar-produto');
if (btnBuscarProduto) {
  btnBuscarProduto.addEventListener('click', buscarProdutoPorId);
}

const btnListarSmartphones = document.getElementById('btn-listar-smartphones');
if (btnListarSmartphones) {
  btnListarSmartphones.addEventListener('click', listarSmartphones);
}
