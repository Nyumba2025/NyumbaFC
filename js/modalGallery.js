// js/modalGallery.js - Lógica para a galeria de imagens com modal

function initializeGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('gallery-modal');
    if (!galleryItems.length || !modal) {
        return; // Não executa se os elementos não existirem
    }

    const modalImage = document.getElementById('enlarged-gallery-image');
    const modalCaption = document.getElementById('gallery-modal-caption');
    const prevButton = document.getElementById('gallery-modal-prev');
    const nextButton = document.getElementById('gallery-modal-next');

    let currentCategoryImages = [];
    let currentIndex = 0;

    // --- Funções do Modal ---

    function openModal(category, index) {
        const lang = document.documentElement.lang || 'pt';
        currentCategoryImages = langData[lang].galleryContent[category] || [];
        currentIndex = index;

        if (currentCategoryImages.length === 0) {
            console.error(`Nenhuma imagem encontrada para a categoria: ${category}`);
            return;
        }

        updateModalContent();
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Impede o scroll da página
        modal.setAttribute('aria-hidden', 'false');
        document.addEventListener('keydown', handleKeydown);
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Restaura o scroll
        modal.setAttribute('aria-hidden', 'true');
        document.removeEventListener('keydown', handleKeydown);
    }

    function updateModalContent() {
        const lang = document.documentElement.lang || 'pt';
        const image = currentCategoryImages[currentIndex];

        modalImage.src = image.src;
        modalImage.alt = image[lang]; // Usa a tradução correta para o alt text
        modalCaption.textContent = image[lang];

        // Habilita/desabilita botões de navegação
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

    function handleKeydown(e) {
        if (e.key === 'Escape') {
            closeModal();
        } else if (e.key === 'ArrowRight') {
            showNextImage();
        } else if (e.key === 'ArrowLeft') {
            showPrevImage();
        }
    }

    // Adiciona eventos de clique aos itens da galeria
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const category = item.dataset.category;
            // Abre a galeria na primeira imagem da categoria
            openModal(category, 0);
        });

        // Permite abrir com a tecla Enter para acessibilidade
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                item.click();
            }
        });
    });

    // Eventos de navegação e fecho do modal
    prevButton.addEventListener('click', showPrevImage);
    nextButton.addEventListener('click', showNextImage);

    // **A CORREÇÃO PRINCIPAL ESTÁ AQUI**
    // Fecha o modal ao clicar na área de fundo (o próprio modal)
    // mas não nos seus filhos (imagem, botões, etc.)
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Atualiza as imagens da galeria se o idioma mudar com o modal aberto
    document.addEventListener('languageChanged', () => {
        if (modal.style.display === 'flex' && currentCategoryImages.length > 0) {
            const lang = document.documentElement.lang || 'pt';
            // Re-busca a categoria atual para obter as novas traduções
            const category = document.querySelector(`[data-category] img[src='${currentCategoryImages[0].src}']`)?.closest('.gallery-item')?.dataset.category;
            if (category) {
                currentCategoryImages = langData[lang].galleryContent[category] || [];
                updateModalContent();
            }
        }
    });
}

// Adiciona a função ao escopo global para ser chamada pelo utils.js
window.initializeGallery = initializeGallery;