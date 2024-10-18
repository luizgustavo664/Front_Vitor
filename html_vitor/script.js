// Função para buscar modelos
function searchModel() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const models = ["superstar", "gazelle", "adi2000", "campus", "samba"];
    
    if (models.includes(searchTerm)) {
        window.location.href = `tenis.html?model=${searchTerm}`;
    } else {
        alert("Modelo não encontrado! Tente: Superstar, Gazelle, Adi 2000, Campus ou Samba.");
    }
}

// Selecionar tamanho
document.querySelectorAll('.size-box').forEach(box => {
    box.addEventListener('click', function() {
        document.querySelectorAll('.size-box').forEach(b => b.classList.remove('selected'));
        box.classList.add('selected');
    });
});

// Selecionar cor
document.querySelectorAll('.color-box').forEach(box => {
    box.addEventListener('click', function() {
        document.querySelectorAll('.color-box').forEach(b => b.classList.remove('selected'));
        box.classList.add('selected');
    });
});

// Redirecionar para a página de compra
function redirectToPurchase() {
    const selectedSize = document.querySelector('.size-box.selected');
    const selectedColor = document.querySelector('.color-box.selected');
    
    if (!selectedSize || !selectedColor) {
        alert("Por favor, selecione um tamanho e uma cor antes de comprar.");
        return;
    }
    
    const size = selectedSize.getAttribute('data-size');
    const color = selectedColor.getAttribute('data-color');
    const modelName = document.getElementById('model-title').textContent.split(' ')[1].toLowerCase();

    window.location.href = `purchase.html?model=${modelName}&size=${size}&color=${color}`;
}

// Código para a página de detalhes do tênis
const urlParams = new URLSearchParams(window.location.search);
const modelName = urlParams.get('model');

const modelImages = {
    "superstar": "https://via.placeholder.com/400x300?text=Adidas+Superstar",
    "gazelle": "https://via.placeholder.com/400x300?text=Adidas+Gazelle",
    "adi2000": "https://via.placeholder.com/400x300?text=Adidas+Adi+2000",
    "campus": "https://via.placeholder.com/400x300?text=Adidas+Campus",
    "samba": "https://via.placeholder.com/400x300?text=Adidas+Samba"
};

// Atualiza o título e a imagem com base no modelo
if (modelImages[modelName]) {
    document.getElementById('model-title').textContent = `Adidas ${modelName.charAt(0).toUpperCase() + modelName.slice(1)}`;
    document.getElementById('model-image').src = modelImages[modelName];
    document.getElementById('model-image').alt = `Adidas ${modelName.charAt(0).toUpperCase() + modelName.slice(1)}`;
}
function redirectToPurchase() {
    const selectedSize = document.querySelector('.size-box.selected');
    const selectedColor = document.querySelector('.color-box.selected');
    
    if (!selectedSize || !selectedColor) {
        alert("Por favor, selecione um tamanho e uma cor antes de comprar.");
        return;
    }

    const size = selectedSize.getAttribute('data-size');
    const color = selectedColor.getAttribute('data-color');
    
    // Redireciona para a página de compra com os parâmetros de tamanho e cor
    window.location.href = `purchase.html?size=${size}&color=${color}`;
}
