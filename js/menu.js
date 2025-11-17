// js/menu.js - VERSÃO COM NOMES CORRETOS DAS IMAGENS

console.log('✅ menu.js carregado - nomes corrigidos');

document.addEventListener('DOMContentLoaded', function() {
    console.log('🎯 Inicializando menu...');
    
    // 1. CONFIGURAR BOTÃO DO MENU À LA CARTE
    const toggleBtn = document.getElementById('alacarte-toggle-button');
    const alacarteContent = document.getElementById('alacarte-menu-content');
    
    if (toggleBtn && alacarteContent) {
        console.log('✅ Botão encontrado');
        
        toggleBtn.addEventListener('click', function() {
            console.log('🔄 Botão clicado!');
            const isOpen = alacarteContent.classList.toggle('open');
            
            // Usar o sistema de tradução para definir o texto do botão
            toggleBtn.textContent = isOpen ? getLangText('aLaCarteButtonOpen') : getLangText('aLaCarteButtonClosed');
            console.log(isOpen ? '📖 Menu à la carte ABERTO' : '📕 Menu à la carte FECHADO');
        });
    } else {
        console.error('❌ Elementos do toggle não encontrados');
    }
    
    // 2. CRIAR CARROSSEL COM NOMES CORRETOS
    createCarouselWithCorrectNames();
    
    // 3. CONFIGURAR MODAL
    setupModal();
    
    console.log('🎉 Menu inicializado com sucesso');
});

function createCarouselWithCorrectNames() {
    const container = document.querySelector('.daily-menu-images');
    const subtitle = document.getElementById('daily-menu-subtitle');
    
    if (!container) {
        console.error('❌ Container do menu não encontrado');
        return;
    }
    
    console.log('🖼️ Criando carrossel com nomes corretos...');
    
    // DIAS COM NOMES CORRETOS DAS IMAGENS
    const days = [
        { 
            id: 1, 
            img: 'images/2a.jpg',  // Segunda-feira
            pt: '2ª Feira', 
            en: 'Monday' 
        },
        { 
            id: 2, 
            img: 'images/3a.jpg',  // Terça-feira
            pt: '3ª Feira', 
            en: 'Tuesday' 
        },
        { 
            id: 3, 
            img: 'images/4a.jpg',  // Quarta-feira
            pt: '4ª Feira', 
            en: 'Wednesday' 
        },
        { 
            id: 4, 
            img: 'images/5a.jpg',  // Quinta-feira
            pt: '5ª Feira', 
            en: 'Thursday' 
        },
        { 
            id: 5, 
            img: 'images/6a.jpg',  // Sexta-feira
            pt: '6ª Feira', 
            en: 'Friday' 
        }
    ];
    
    container.innerHTML = '';
    
    days.forEach(day => {
        const item = document.createElement('div');
        item.className = 'daily-menu-item';
        item.id = `day-${day.id}`;
        
        const img = document.createElement('img');
        img.src = day.img;
        img.alt = `Prato especial de ${day.pt}`;
        img.loading = 'lazy';
        
        // Fallback se a imagem não carregar
        img.onerror = function() {
            console.warn(`⚠️ Imagem não carregada: ${day.img}`);
            this.style.backgroundColor = '#f0f0f0';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.innerHTML = `<span style="color: #666; font-size: 12px; text-align: center;">${day.pt}<br>Imagem<br>não disponível</span>`;
        };
        
        const caption = document.createElement('p');
        // Usar o sistema de tradução para a legenda
        const lang = document.documentElement.lang || 'pt';
        caption.textContent = day[lang];
        caption.setAttribute('data-lang-key-day', day.id); // Para futuras atualizações
        
        item.appendChild(img);
        item.appendChild(caption);
        container.appendChild(item);
        
        // Clique para abrir modal
        item.addEventListener('click', function() {
            openImageModal(day.img, img.alt);
        });
    });
    
    // Destacar dia atual
    highlightCurrentDay();
    
    console.log('✅ Carrossel criado com nomes corretos');
}

function highlightCurrentDay() {
    const today = new Date().getDay(); // 0=Domingo, 1=Segunda, etc.
    const subtitle = document.getElementById('daily-menu-subtitle');
    
    console.log(`📅 Dia atual: ${today}`);
    
    // Remover destaque de todos
    document.querySelectorAll('.daily-menu-item').forEach(item => {
        item.classList.remove('highlighted');
    });
    
    // Garantir que a animação de piscar é removida por defeito
    if (subtitle) {
        subtitle.classList.remove('blinking-text');
    }

    if (today >= 1 && today <= 5) {
        // Destacar o dia correspondente
        const todayItem = document.getElementById(`day-${today}`);
        if (todayItem) {
            todayItem.classList.add('highlighted');
            console.log(`✅ Destacando: ${todayItem.querySelector('p').textContent}`);
        }
        
        // Atualizar subtítulo
        if (subtitle) {
            const dayName = getLangText('dayNames')[today];
            subtitle.textContent = `${getLangText('dailyMenuSubtitleToday')} ${dayName}`;
        }
    } else {
        // Fim de semana
        if (subtitle) {
            subtitle.textContent = getLangText('dailyMenuWeekend');
            // Adicionar a classe para o efeito de piscar
            subtitle.classList.add('blinking-text');
        }
    }
}

function setupModal() {
    const modal = document.getElementById('menu-modal');
    const modalImg = document.getElementById('enlarged-menu-image');
    
    if (!modal || !modalImg) {
        console.log('ℹ️ Modal não encontrado - continuando sem modal');
        return;
    }
    
    // GARANTIR que o modal está fechado
    modal.style.display = 'none';
    
    // Fechar modal ao clicar fora
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeImageModal();
        }
    });
    
    // Fechar modal com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeImageModal();
        }
    });
    
    console.log('✅ Modal configurado');
}

function openImageModal(imgSrc, altText) {
    const modal = document.getElementById('menu-modal');
    const modalImg = document.getElementById('enlarged-menu-image');
    const modalHint = document.getElementById('modal-close-hint');
    
    if (modal && modalImg && modalHint) {
        modalImg.src = imgSrc;
        modalImg.alt = altText;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';

        // Traduzir a dica de fechar
        modalHint.textContent = getLangText('menuModalCloseHint');

        console.log('🖼️ Modal aberto com imagem:', imgSrc);
    }
}

function closeImageModal() {
    const modal = document.getElementById('menu-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        console.log('📕 Modal fechado');
    }
}

// Suporte para mudança de idioma
document.addEventListener('languageChanged', function() {
    console.log('🌐 Idioma alterado - atualizando menu...');
    const lang = document.documentElement.lang || 'pt';

    // Atualizar legendas dos dias
    document.querySelectorAll('.daily-menu-item p[data-lang-key-day]').forEach(caption => {
        const dayId = caption.getAttribute('data-lang-key-day');
        const dayName = getLangText('dayNames')[dayId];
        if (dayName) caption.textContent = dayName;
    });

    highlightCurrentDay();
});