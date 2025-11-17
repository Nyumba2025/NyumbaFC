// js/lang.js - Sistema de Internacionalização Global

const CONTACT_INFO = {
    email: "nyumba.maputo@gmail.com",
    phone: "+258 846695390",
    phoneRaw: "258846695390",
    instagram: "@nyumbafoodconcept",
    instagramUrl: "https://www.instagram.com/nyumbafoodconcept"
};

const langData = {
    pt: {
        // Navegação
        navHome: "Principal",
        navGallery: "Galeria", 
        navMenu: "Menu", 
        navContact: "Contactos e Mapa",
        
        // Página Principal
        mainWelcome: "Nyumba Food Concept",
        mainSubtitle: "O Sabor de Maputo, Elevado com Atitude",
        mainP1: "Há espaços onde se come. E depois há o Nyumba Food – Concept, onde cada prato parece ter sido criado para impressionar. Instalado no ambiente calmo e encantador do Parque dos Continuadores, este quiosque transforma cada refeição numa viagem bem guiada — com paragens seguras na tradição, mas sempre com rota ousada rumo ao inesperado.",
        mainP2: "O Menu é uma celebração de fronteiras gastronómicas inteligentemente atravessadas: a cozinha moçambicana no seu esplendor, a herança portuguesa tratada com respeito e criatividade, e ainda sabores de outras latitudes — desde hambúrgueres cheios de carácter a composições que surpreendem pela precisão e pela alma. Nada aqui é feito “porque sim”; tudo tem intenção, técnica e aquele toque requintado que distingue quem vive verdadeiramente para cozinhar.",
        mainP3: "Na esplanada ao almoço, num jantar descontraído ou num cocktail ao final do dia, o Nyumba oferece sempre aquela vibração boa que faz o visitante sentir que está exactamente no lugar certo. E os Pratos do Chefe? De execução impecável, mostram até onde esta cozinha pode ir quando decide impressionar.",
        mainP4: "Em Maputo, poucos lugares tratam o sabor com tanta atitude e cuidado. O Nyumba está aberto todos os dias — e cada visita deixa vontade de voltar.",
        ctaMenu: "Explorar o Menu", 
        ctaGallery: "Ver Galeria",

        // Galeria
        galleryTitle: "Venha conhecer-nos",
        itemPratosTitle: "Pratos do Chefe", 
        itemPratosDesc: "As nossas criações exclusivas e destaques gastronómicos.",
        itemEsplanadaTitle: "A Nossa Esplanada", 
        itemEsplanadaDesc: "O ambiente acolhedor e tranquilo no coração do parque.",
        itemCocktailsTitle: "Cocktails Artesanais", 
        itemCocktailsDesc: "Bebidas refrescantes e cheias de sabor para o seu final de tarde.",
        itemCozinhaTitle: "Cozinha do Quiosque", 
        itemCozinhaDesc: "Onde a magia acontece: a preparação dos nossos pratos.",
        modalCloseHint: "Prima ESC ou clique na área escura para fechar.",

        // Menu
        menuTitle: "Especialidades do Dia",
        dailyMenuTitle: "Menu Semanal de Almoço",
        dailyMenuSubtitleToday: "Destaque de Hoje:",
        dailyMenuWeekend: "Fim-de-semana: Hoje não há Menu Especial. Consulte o Menu À La Carte.",
        aLaCarteButtonOpen: "Ocultar Menu",
        menuModalCloseHint: "Clique ou prima ESC para fechar.",
        aLaCarteButtonClosed: "Ver Menu Completo",
        alacarteTitle: "Menu À La Carte",
        petiscosTitle: "Petiscos",
        sopasTitle: "Sopas", 
        snacksTitle: "Snacks",
        dessertsTitle: "Sobremesas",
        'petisco-1-title': 'Rabada',
        'petisco-2-title': 'Amêijoas a Nyumba',
        'petisco-3-title': 'Cabeça de Salmão',
        'petisco-4-title': 'Camarão Alhinho',
        'petisco-5-title': 'Chouriço (c/ Batata e Salada)',
        'petisco-6-title': 'Tábua de 7 Queijos e Broa',
        'petisco-7-title': 'Dobradinha',
        'sopa-1-title': 'Creme de Cenoura',
        'sopa-2-title': 'Creme de Abóbora',
        'sopa-3-title': 'Sopa de Mandioca',
        'sopa-4-title': 'Caldo Verde',
        'sopa-5-title': 'Sopa de Feijão',
        'sopa-6-title': 'Sopa de Legumes',
        'snack-1-title': 'Salgados (4)',
        'snack-2-title': 'Hamburguer Simples (c/ Ovo ou Queijo e Batata)',
        'snack-3-title': 'Hamburguer Completo',
        'snack-3-desc': 'Com queijo, ovo, alface, queijo cheddar, maionese caseira, alface, cebola caramelizada e batata frita',
        'snack-4-title': 'Nyumba Burguer',
        'snack-4-desc': 'Com maionese caseira, fiambre ou bacon, queijo mozzarella, batatas fritas, cebola caramelizada, picles, rúcula',
        'snack-5-title': 'Hamburguer de Alheira',
        'snack-5-desc': 'Com ovo, rúcula, queijo mozzarella e batata frita',
        'snack-6-title': 'Hamburguer de Frango',
        'snack-6-desc': 'Com ovo, queijo mozzarella, alface e batata',
        'snack-7-title': 'Prego no Pão',
        'snack-8-title': 'Cachorro quente (c/ Batatas)',
        'snack-9-title': 'Tosta Mista',
        'snack-10-title': 'Tosta de Atum',
        'snack-11-title': 'Tosta de Caranguejo',
        'snack-12-title': 'Tosta de Frango',
        'snack-13-title': 'Matabicho Thafo',
        'snack-13-desc': 'Com 2 ovos, tomate, salsichas, torradas, feijão doce, bacon',
        'dessert-1-title': 'Sorvete',
        'dessert-2-title': 'Salada de Fruta',
        'dessert-3-title': 'Pudim',
        'dessert-4-title': 'Bolo de Chocolate',
        'dessert-5-title': 'Doce de Mandioca',
        'dessert-6-title': 'Arroz Doce',

        // Contactos
        contactTitle: "Fale Connosco",
        contactSubtitle: "Estamos ansiosos por recebê-lo e responder às suas questões.",
        itemPhoneTitle: "Telefone e WhatsApp", 
        itemPhoneDesc: "Ligue-nos diretamente ou envie uma mensagem instantânea.",
        itemEmailTitle: "E-mail",
        itemEmailDesc: "Envie-nos um e-mail para pedidos de reserva ou informações gerais.",
        itemInstagramTitle: "Redes Sociais", 
        itemInstagramDesc: "Siga-nos para ver as novidades e os pratos do dia.",

        // Rodapé
        'footer-title': "Nyumba Food Concept",
        'footer-slogan': "Onde a tradição encontra a inovação na gastronomia moçambicana.",
        'footer-hours-title': "Horário",
        'footer-hours-days': "Segunda a Domingo: 10:00 - 22:00",
        'footer-hours-note': "Aberto todos os dias",
        'footer-location-title': "Onde Estamos",
        'footer-weather-title': "Tempo em Maputo",
        footerCopyright: "© 2025 José Freire. Todos os direitos reservados.",

        // Dias da semana
        dayNames: { 
            1: "2ª Feira", 
            2: "3ª Feira", 
            3: "4ª Feira", 
            4: "5ª Feira", 
            5: "6ª Feira", 
            6: "Sábado", 
            0: "Domingo" 
        },

    },
    en: {
        // Navigation
        navHome: "Home",
        navGallery: "Gallery",
        navMenu: "Menu",
        navContact: "Contacts & Map",
        
        // Main Page
        mainWelcome: "Nyumba Food Concept",
        mainSubtitle: "The Flavor of Maputo, Elevated with Attitude",
        mainP1: "There are places where you eat. And then there is Nyumba Food – Concept, where every dish seems crafted to impress. Set in the calm and charming atmosphere of Parque dos Continuadores, this kiosk turns every meal into a well-guided journey—with safe stops in tradition, but always with a bold route towards the unexpected.",
        mainP2: "The Menu is a celebration of cleverly crossed gastronomic borders: Mozambican cuisine in its splendor, Portuguese heritage treated with respect and creativity, and flavors from other latitudes—from burgers full of character to compositions that surprise with their precision and soul. Nothing here is done 'just because'; everything has intention, technique, and that refined touch that distinguishes those who truly live to cook.",
        mainP3: "On the terrace for lunch, a relaxed dinner, or a cocktail at the end of the day, Nyumba always offers that good vibe that makes visitors feel they are in exactly the right place. And the Chef's Dishes? Impeccably executed, they show just how far this kitchen can go when it decides to impress.",
        mainP4: "In Maputo, few places treat flavor with such attitude and care. Nyumba is open every day—and every visit leaves you wanting to return.",
        ctaMenu: "Explore Menu",
        ctaGallery: "View Gallery",

        // Gallery
        galleryTitle: "Come meet us",
        itemPratosTitle: "Chef's Dishes",
        itemPratosDesc: "Our exclusive creations and gastronomic highlights.",
        itemEsplanadaTitle: "Our Terrace", 
        itemEsplanadaDesc: "The cozy and peaceful atmosphere in the heart of the park.",
        itemCocktailsTitle: "Artisanal Cocktails",
        itemCocktailsDesc: "Refreshing and creative drinks for your late afternoon.",
        itemCozinhaTitle: "Kiosk Kitchen",
        itemCozinhaDesc: "Where the magic happens: the preparation of our dishes.",
        modalCloseHint: "Press ESC or click dark area to close.",

        // Menu
        menuTitle: "Daily Specials",
        dailyMenuTitle: "Weekly Lunch Menu", 
        dailyMenuSubtitleToday: "Today's Highlight:",
        dailyMenuWeekend: "Weekend: No special menu today. Please check the À La Carte Menu.",
        aLaCarteButtonOpen: "Hide Menu",
        menuModalCloseHint: "Click or press ESC to close.",
        aLaCarteButtonClosed: "View Full Menu", 
        alacarteTitle: "À La Carte Menu",
        petiscosTitle: "Appetizers",
        sopasTitle: "Soups",
        snacksTitle: "Snacks",
        dessertsTitle: "Desserts",
        'petisco-1-title': 'Oxtail',
        'petisco-2-title': 'Nyumba-style Clams',
        'petisco-3-title': 'Salmon Head',
        'petisco-4-title': 'Garlic Shrimp',
        'petisco-5-title': 'Chouriço (w/ Potatoes and Salad)',
        'petisco-6-title': 'Board of 7 Cheeses and Cornbread',
        'petisco-7-title': 'Tripe',
        'sopa-1-title': 'Cream of Carrot',
        'sopa-2-title': 'Cream of Pumpkin',
        'sopa-3-title': 'Cassava Soup',
        'sopa-4-title': 'Caldo Verde (Kale Soup)',
        'sopa-5-title': 'Bean Soup',
        'sopa-6-title': 'Vegetable Soup',
        'snack-1-title': 'Savory Pastries (4)',
        'snack-2-title': 'Simple Burger (w/ Egg or Cheese and Fries)',
        'snack-3-title': 'Full Burger',
        'snack-3-desc': 'With cheese, egg, lettuce, cheddar cheese, homemade mayo, lettuce, caramelized onion, and fries',
        'snack-4-title': 'Nyumba Burger',
        'snack-4-desc': 'With homemade mayo, ham or bacon, mozzarella, fries, caramelized onion, pickles, arugula',
        'snack-5-title': 'Alheira Burger',
        'snack-5-desc': 'With egg, arugula, mozzarella, and fries',
        'snack-6-title': 'Chicken Burger',
        'snack-6-desc': 'With egg, mozzarella, lettuce, and fries',
        'snack-7-title': 'Prego (Steak Sandwich)',
        'snack-8-title': 'Hot Dog (w/ Fries)',
        'snack-9-title': 'Ham and Cheese Toastie',
        'snack-10-title': 'Tuna Toastie',
        'snack-11-title': 'Crab Toastie',
        'snack-12-title': 'Chicken Toastie',
        'snack-13-title': 'Matabicho Thafo (Big Breakfast)',
        'snack-13-desc': 'With 2 eggs, tomato, sausages, toast, sweet beans, bacon',
        'dessert-1-title': 'Ice Cream',
        'dessert-2-title': 'Fruit Salad',
        'dessert-3-title': 'Pudding',
        'dessert-4-title': 'Chocolate Cake',
        'dessert-5-title': 'Cassava Sweet',
        'dessert-6-title': 'Rice Pudding',

        // Contacts
        contactTitle: "Contact Us",
        contactSubtitle: "We look forward to welcoming you and answering your questions.",
        itemPhoneTitle: "Phone and WhatsApp",
        itemPhoneDesc: "Call us directly or send an instant message.",
        itemEmailTitle: "E-mail",
        itemEmailDesc: "Send us an email for reservations or inquiries.",
        itemInstagramTitle: "Social Media", 
        itemInstagramDesc: "Follow us to see news and daily specials.",

        // Footer
        'footer-title': "Nyumba Food Concept",
        'footer-slogan': "Where tradition meets innovation in Mozambican gastronomy.",
        'footer-hours-title': "Opening Hours",
        'footer-hours-days': "Monday to Sunday: 10:00 AM - 10:00 PM",
        'footer-hours-note': "Open every day",
        'footer-location-title': "Where We Are",
        'footer-weather-title': "Weather in Maputo",
        footerCopyright: "© 2025 José Freire. All rights reserved.",

        // Days of the week
        dayNames: { 
            1: "Monday", 
            2: "Tuesday", 
            3: "Wednesday", 
            4: "Thursday", 
            5: "Friday", 
            6: "Saturday", 
            0: "Sunday" 
        },
    }
};

// --- SISTEMA DE PERSISTÊNCIA ---
function getStoredLang() {
    return localStorage.getItem('nyumba-lang') || 'pt';
}

function storeLang(lang) {
    localStorage.setItem('nyumba-lang', lang);
}

function updateText(id, text) {
    const el = document.getElementById(id);
    if (el) el.innerText = text;
}

function getLangText(key) {
    const lang = document.documentElement.lang || 'pt';
    return langData[lang][key] || "";
}

function updateCommonElements(t) {
    // Navegação
    updateText("nav-home", t.navHome);
    updateText("nav-gallery", t.navGallery);
    updateText("nav-menu", t.navMenu);
    updateText("nav-contact", t.navContact);

    // Rodapé
    updateText('footer-title', t['footer-title']);
    updateText('footer-slogan', t['footer-slogan']);
    updateText('footer-hours-title', t['footer-hours-title']);
    updateText('footer-hours-days', t['footer-hours-days']);
    updateText('footer-hours-note', t['footer-hours-note']);
    updateText('footer-location-title', t['footer-location-title']);
    updateText('footer-weather-title', t['footer-weather-title']);
    updateText("footer-copyright", t.footerCopyright);
}

function updateHomePage(t) {
    updateText("main-welcome", t.mainWelcome);
    updateText("main-subtitle", t.mainSubtitle);
    updateText("main-p1", t.mainP1);
    updateText("main-p2", t.mainP2);
    updateText("main-p3", t.mainP3);
    updateText("main-p4", t.mainP4);
    updateText("cta-menu", t.ctaMenu);
    updateText("cta-gallery", t.ctaGallery);
}

function updateGalleryPage(t) {
    updateText("gallery-title", t.galleryTitle);
    updateText("item-pratos-title", t.itemPratosTitle);
    updateText("item-pratos-desc", t.itemPratosDesc);
    updateText("item-esplanada-title", t.itemEsplanadaTitle);
    updateText("item-esplanada-desc", t.itemEsplanadaDesc);
    updateText("item-cocktails-title", t.itemCocktailsTitle);
    updateText("item-cocktails-desc", t.itemCocktailsDesc);
    updateText("item-cozinha-title", t.itemCozinhaTitle);
    updateText("item-cozinha-desc", t.itemCozinhaDesc);
    updateText("gallery-modal-close-hint", t.modalCloseHint);
}

function updateMenuPage(t) {
    updateText("menu-title", t.menuTitle);
    updateText("daily-menu-title", t.dailyMenuTitle);

    const alacarteButton = document.getElementById('alacarte-toggle-button');
    if (alacarteButton) {
        const isOpen = alacarteButton.getAttribute('aria-expanded') === 'true';
        alacarteButton.innerText = isOpen ? t.aLaCarteButtonOpen : t.aLaCarteButtonClosed;
    }

    updateText("alacarte-title", t.alacarteTitle);
    updateText("petiscos-section-title", t.petiscosTitle);
    updateText("sopas-section-title", t.sopasTitle);
    updateText("snacks-section-title", t.snacksTitle);
    updateText("desserts-section-title", t.dessertsTitle);

    // Traduzir todos os itens do menu à la carte
    Object.keys(t).forEach(key => {
        if (key.startsWith('petisco-') || key.startsWith('sopa-') || key.startsWith('snack-') || key.startsWith('dessert-')) {
            updateText(key, t[key]);
        }
    });
}

function updateContactPage(t) {
    updateText("contact-title", t.contactTitle);
    updateText("contact-subtitle", t.contactSubtitle);
    updateText("item-phone-title", t.itemPhoneTitle);
    updateText("item-phone-desc", t.itemPhoneDesc);
    updateText("item-email-title", t.itemEmailTitle);
    updateText("item-email-desc", t.itemEmailDesc);
    updateText("item-instagram-title", t.itemInstagramTitle);
    updateText("item-instagram-desc", t.itemInstagramDesc);
}

function setLang(lang) {
    const t = langData[lang];
    document.documentElement.lang = lang;
    storeLang(lang);

    // Atualizar o estado visual do seletor de idioma
    document.getElementById('lang-pt').classList.toggle('active', lang === 'pt');
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');

    updateCommonElements(t);

    // Atualizar conteúdo específico da página
    const bodyId = document.body.id;
    if (bodyId === 'home-page') updateHomePage(t);
    if (bodyId === 'gallery-page') updateGalleryPage(t);
    if (bodyId === 'menu-page') updateMenuPage(t);
    if (bodyId === 'contact-page') updateContactPage(t);

    // Disparar evento customizado para outros scripts
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: lang }));
    updateDateTime();
}

// --- INICIALIZAÇÃO ---
function initializeLang() {
    const savedLang = getStoredLang();
    setLang(savedLang);
}

// Exportar funções para uso global
window.setLang = setLang;
window.getLangText = getLangText;
window.updateText = updateText;
window.initializeLang = initializeLang;