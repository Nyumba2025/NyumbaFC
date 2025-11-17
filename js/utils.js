// js/utils.js - Funções utilitárias compartilhadas

// Função para carregar includes com tratamento de erro
function loadInclude(elementId, filePath) {
    return fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            const element = document.getElementById(elementId);
            if (element) {
                element.innerHTML = data;
                return true;
            }
            return false;
        })
        .catch(error => {
            console.error(`Erro ao carregar ${filePath}:`, error);
            return false;
        });
}

// Função para destacar página atual na navegação
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('current-page');
            link.setAttribute('aria-current', 'page');
        }
    });
}

// Preload de imagens para melhor performance
function preloadImages(imageArray) {
    imageArray.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Lazy loading melhorado
function initializeLazyLoading() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
}

// Error handling para imagens
function setupImageErrorHandling() {
    document.addEventListener('error', function(e) {
        if (e.target.tagName === 'IMG') {
            console.warn('Imagem não carregada:', e.target.src);
            e.target.alt = 'Imagem não disponível';
            e.target.style.background = '#f0f0f0';
        }
    }, true);
}

// Debounce para otimização de performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Carrega o script do widget de meteorologia de forma dinâmica.
 * Garante que o script só é adicionado uma vez.
 */
function loadWeatherWidget() {
    const SCRIPT_ID = 'weatherwidget-io-js';
    if (document.getElementById(SCRIPT_ID)) {
        return; // Não adiciona o script se ele já existir
    }
    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = 'https://weatherwidget.io/js/widget.min.js';
    script.async = true;
    document.body.appendChild(script);
}

// Função para inicializar componentes após carregar includes
function initializeComponents() {
    if (typeof initializeLang === 'function') {
        initializeLang();
    }
    
    if (typeof initializeDateTime === 'function') {
        initializeDateTime();
    }
    
    if (typeof initializeGallery === 'function') {
        initializeGallery();
    }
    
    if (typeof initializeMenu === 'function') {
        initializeMenu();
    }
    
    highlightCurrentPage();
    initializeLazyLoading();
    setupImageErrorHandling();

    // Carrega o widget de meteorologia após os includes estarem prontos
    loadWeatherWidget();
}

// Error handling global
window.addEventListener('error', function(e) {
    console.error('Erro global:', e.error);
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('Promise rejeitada:', e.reason);
});

// Exportar funções
window.loadInclude = loadInclude;
window.highlightCurrentPage = highlightCurrentPage;
window.initializeComponents = initializeComponents;
window.preloadImages = preloadImages;
window.debounce = debounce;