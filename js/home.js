/**
 * Nyumba Food Concept - Home Page Script
 */

// homeLangData is now loaded from js/home-data.js

// Define the update function called by main.js
window.updatePageContent = function (l) {
    const t = homeLangData[l];

    updateText("main-welcome", t.mainWelcome);
    updateText("main-subtitle", t.mainSubtitle);
    updateText("main-p1", t.mainP1);
    updateText("main-p2", t.mainP2);
    updateText("cta-menu", t.ctaMenu);
    updateText("cta-gallery", t.ctaGallery);
};
