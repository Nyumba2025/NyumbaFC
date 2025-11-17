// js/dateTime.js - Sistema de Data e Hora

function updateDateTime() {
    const now = new Date();
    const langCode = document.documentElement.lang || 'pt';
    const dateTimeElement = document.getElementById('date-time');
    
    if (!dateTimeElement) return;
    
    try {
        const date = now.toLocaleDateString(langCode === 'en' ? 'en-US' : 'pt-PT', {
            weekday: 'long', 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric'
        });
        const time = now.toLocaleTimeString(langCode === 'en' ? 'en-US' : 'pt-PT', {
            hour: '2-digit', 
            minute: '2-digit'
        });
        dateTimeElement.textContent = `${date} | ${time}`;
    } catch (error) {
        console.error('Erro ao atualizar data/hora:', error);
        dateTimeElement.textContent = langCode === 'en' ? 'Date/Time unavailable' : 'Data/Hora indisponível';
    }
}

function initializeDateTime() {
    updateDateTime();
    setInterval(updateDateTime, 60000);
}

// Exportar para uso global
window.updateDateTime = updateDateTime;
window.initializeDateTime = initializeDateTime;