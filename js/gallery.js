// js/gallery.js - Lógica e dados para a galeria de imagens

const galleryData = {
    pt: {
        pratos: [
            { src: 'images/pc1.jpg', title: 'Primeiro prato em destaque', description: 'Cores e frescura.' },
            { src: 'images/pc2.jpg', title: 'Especialidade de Marisco', description: 'Um clássico Nyumba.' },
            { src: 'images/pc3.jpg', title: 'Opção vegetariana', description: 'Com vegetais da época.' },
            { src: 'images/pc4.jpg', title: 'Prato da semana', description: 'Carne grelhada com legumes.' },
            { src: '#', title: 'Prato 5', description: 'Descrição do prato 5' },
            { src: '#', title: 'Prato 6', description: 'Descrição do prato 6' },
            { src: '#', title: 'Prato 7', description: 'Descrição do prato 7' },
            { src: '#', title: 'Prato 8', description: 'Descrição do prato 8' },
            { src: '#', title: 'Prato 9', description: 'Descrição do prato 9' },
            { src: '#', title: 'Prato 10', description: 'Descrição do prato 10' },
        ],
        esplanada: [
            { src: 'images/es1.jpg', title: 'Vista geral da esplanada', description: 'Ambiente ao pôr do sol.' },
            { src: 'images/es2.jpg', title: 'Detalhe das mesas', description: 'Ideal para grupos.' },
            { src: 'images/es3.jpg', title: 'Ambiente calmo', description: 'Rodeado de natureza.' },
            { src: 'images/es4.jpg', title: 'Detalhe do quiosque', description: 'A partir da esplanada.' },
            { src: '#', title: 'Esplanada 5', description: 'Descrição da esplanada 5' },
            { src: '#', title: 'Esplanada 6', description: 'Descrição da esplanada 6' },
            { src: '#', title: 'Esplanada 7', description: 'Descrição da esplanada 7' },
            { src: '#', title: 'Esplanada 8', description: 'Descrição da esplanada 8' },
            { src: '#', title: 'Esplanada 9', description: 'Descrição da esplanada 9' },
            { src: '#', title: 'Esplanada 10', description: 'Descrição da esplanada 10' },
        ],
        cocktails: [
            { src: 'images/ck1.jpg', title: 'Cocktail Verde da Casa', description: 'Muito refrescante.' },
            { src: 'images/ck2.jpg', title: 'Clássico com um toque Nyumba', description: 'A nossa melhor bebida.' },
            { src: 'images/ck3.jpg', title: 'Bebida de frutas exóticas', description: 'Da nossa região.' },
            { src: 'images/ck4.jpg', title: 'Gin Tónico com especiarias', description: 'Com frutas vermelhas.' },
            { src: '#', title: 'Cocktail 5', description: 'Descrição do cocktail 5' },
            { src: '#', title: 'Cocktail 6', description: 'Descrição do cocktail 6' },
            { src: '#', title: 'Cocktail 7', description: 'Descrição do cocktail 7' },
            { src: '#', title: 'Cocktail 8', description: 'Descrição do cocktail 8' },
            { src: '#', title: 'Cocktail 9', description: 'Descrição do cocktail 9' },
            { src: '#', title: 'Cocktail 10', description: 'Descrição do cocktail 10' },
        ],
        cozinha: [
            { src: 'images/cz1.jpg', title: 'Vista da área de preparação', description: 'Higiene e ordem.' },
            { src: 'images/cz2.jpg', title: 'O nosso chefe em ação', description: 'A preparar a sua refeição.' },
            { src: 'images/cz3.jpg', title: 'Detalhes dos utensílios', description: 'Sempre limpos.' },
            { src: 'images/cz4.jpg', title: 'Pratos prontos a servir', description: 'No balcão.' },
            { src: '#', title: 'Cozinha 5', description: 'Descrição da cozinha 5' },
            { src: '#', title: 'Cozinha 6', description: 'Descrição da cozinha 6' },
            { src: '#', title: 'Cozinha 7', description: 'Descrição da cozinha 7' },
            { src: '#', title: 'Cozinha 8', description: 'Descrição da cozinha 8' },
            { src: '#', title: 'Cozinha 9', description: 'Descrição da cozinha 9' },
            { src: '#', title: 'Cozinha 10', description: 'Descrição da cozinha 10' },
        ],
    },
    // Adicione aqui a estrutura para 'en' se a galeria for multi-idioma
};

function initializeGallery() {
    // Seleciona os itens da galeria que representam as categorias
    const categoryItems = document.querySelectorAll('.gallery-item[data-category]');
    const modal = document.getElementById('gallery-modal');

    if (!categoryItems.length || !modal) {
        // Se não houver itens de categoria, não faz nada.
        return;
    }

    const modalImage = document.getElementById('enlarged-gallery-image');
    const modalCaption = document.getElementById('gallery-modal-caption');
    const prevButton = document.getElementById('gallery-modal-prev');
    const nextButton = document.getElementById('gallery-modal-next');

    let currentCategoryImages = [];
    let currentIndex = 0;

    // --- Funções do Modal ---

    function openModal(category) {
        const lang = document.documentElement.lang || 'pt';
        // Filtra as imagens da categoria que têm um 'src' válido
        currentCategoryImages = (galleryData[lang][category] || []).filter(img => img.src && img.src !== '#');
        currentIndex = 0;

        if (currentCategoryImages.length === 0) {
            console.error(`Nenhuma imagem válida encontrada para a categoria: ${category}`);
            return;
        }

        updateModalContent();
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    function updateModalContent() {
        if (currentIndex < 0 || currentIndex >= currentCategoryImages.length) return;

        const image = currentCategoryImages[currentIndex];
        modalImage.src = image.src;
        modalCaption.textContent = image.title;

        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === currentCategoryImages.length - 1;
    }

    function showNextImage() {
        if (currentIndex < currentCategoryImages.length - 1) {
            currentIndex++;
            updateModalContent();
        }
    }

    function showPrevImage() {
        if (currentIndex > 0) {
            currentIndex--;
            updateModalContent();
        }
    }

    // --- Gestão de Eventos ---

    // Adiciona evento de clique a cada "pasta" (categoria)
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            const category = item.dataset.category;
            if (category) {
                openModal(category);
            }
        });
    });

    // Eventos de navegação e fecho do modal
    prevButton?.addEventListener('click', () => {
        showPrevImage();
    });

    nextButton?.addEventListener('click', () => {
        showNextImage();
    });

    modal?.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal?.style.display === 'flex') {
            closeModal();
        } else if (e.key === 'ArrowRight') {
            showNextImage();
        } else if (e.key === 'ArrowLeft') {
            showPrevImage();
        }
    });
}