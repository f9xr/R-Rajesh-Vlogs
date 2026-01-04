// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Animations
gsap.from("#hero-title", { duration: 1, y: 50, opacity: 0, ease: "power3.out", delay: 0.5 });
gsap.from("#hero-subtitle", { duration: 1, y: 30, opacity: 0, ease: "power3.out", delay: 0.8 });
gsap.from("#hero-cta", { duration: 1, y: 20, opacity: 0, ease: "power3.out", delay: 1 });

// Scroll Animations for Sections
const sections = document.querySelectorAll("section");
sections.forEach((section) => {
    gsap.from(section.children, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
    });
});

// Vehicle Bento Grid Hover Effects
const vehicleCards = document.querySelectorAll(".group");
vehicleCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        gsap.to(card, { scale: 1.02, duration: 0.3, ease: "power1.out" });
    });
    card.addEventListener("mouseleave", () => {
        gsap.to(card, { scale: 1, duration: 0.3, ease: "power1.out" });
    });
});


// Language Switcher Logic
const languageContent = {
    en: {
        nav_about: "My Journey",
        nav_kitchen: "Kitchen",
        nav_fleet: "Fleet",
        hero_tag: "India's #1 Trucking Influencer",
        hero_title_1: "THE KING OF THE",
        hero_title_2: "HIGHWAY",
        hero_desc: "From 18 wheels to 2.7 Million subscribers. Join me, Rajesh Rawani, on the journey of a lifetime across India's roads.",
        about_title: "The Journey",
        about_sub: "From Mechanic to 2.7M Subscribers",
        about_text: "I started as a cleaner, earning a few hundred rupees, fixing trucks by the roadside. The road was never easy, but the steering wheel became my destiny. Today, I drive not just a truck, but a movement.",
        kitchen_title: "The Mobile Kitchen",
        fleet_title: "The Digital Fleet",
        contact_title: "Fan Pit Stop 🏁"
    },
    hi: {
        nav_about: "मेरी यात्रा",
        nav_kitchen: "रसोई",
        nav_fleet: "गाड़ियाँ",
        hero_tag: "भारत का #1 ट्रकिंग इन्फ्लुएंसर",
        hero_title_1: "हाइवे का",
        hero_title_2: "राजा",
        hero_desc: "18 पहियों से 2.7 मिलियन सब्सक्राइबर्स तक। भारत की सड़कों पर मेरे (राजेश रवानी) साथ जीवन की इस यात्रा में शामिल हों।",
        about_title: "मेरा सफर",
        about_sub: "मैकेनिक से 2.7M सब्सक्राइबर्स तक",
        about_text: "मैंने एक क्लीनर के रूप में शुरुआत की, सड़क किनारे ट्रक ठीक करके कुछ सौ रुपये कमाता था। राह कभी आसान नहीं थी, लेकिन स्टीयरिंग व्हील मेरी किस्मत बन गई। आज मैं सिर्फ ट्रक नहीं, बल्कि एक आंदोलन चला रहा हूँ।",
        kitchen_title: "ट्रक वाली रसोई",
        fleet_title: "मेरा काफिला",
        contact_title: "संपर्क करें 🏁"
    },
    hinglish: {
        nav_about: "Mera Safar",
        nav_kitchen: "Rasoi",
        nav_fleet: "Gaadiyan",
        hero_tag: "India’s #1 Trucking Influencer",
        hero_title_1: "HIGHWAY KA",
        hero_title_2: "KING",
        hero_desc: "18 wheels se 2.7 Million subscribers tak. Join kariye mujhe (Rajesh Rawani) mere life ke sabse bade safar par.",
        about_title: "Mera Safar",
        about_sub: "Mechanic se 2.7M Subscribers tak",
        about_text: "Maine as a cleaner start kiya tha, roadside trucks fix karke kuch rupaye kamata tha. Raasta easy nahi tha, par steering wheel meri kismat ban gayi. Aaj main sirf truck nahi, ek movement drive kar raha hoon.",
        kitchen_title: "Mobile Kitchen",
        fleet_title: "Digital Fleet",
        contact_title: "Fan Zone 🏁"
    }
};

function setLanguage(lang) {
    const data = languageContent[lang];
    if (!data) return;

    // Update Text Content
    if (document.querySelector('a[href="#about"]')) document.querySelector('a[href="#about"]').textContent = data.nav_about;
    if (document.querySelector('a[href="#kitchen"]')) document.querySelector('a[href="#kitchen"]').textContent = data.nav_kitchen;
    if (document.querySelector('a[href="#garage"]')) document.querySelector('a[href="#garage"]').textContent = data.nav_fleet;

    // Check elements exist before updating to avoid errors
    const heroTag = document.querySelector('.animate-pulse');
    if (heroTag) heroTag.textContent = data.hero_tag;

    // Use specific IDs or classes carefully if IDs aren't present. 
    // Ideally update HTML to have IDs for these elements. 
    // For now, using direct selectors based on current structure.

    // A more robust apporach for the hero title since it has span inside
    const heroH1 = document.querySelector('h1.font-display');
    if (heroH1) {
        heroH1.innerHTML = `${data.hero_title_1} <br> <span class="text-transparent bg-clip-text bg-gradient-to-r from-tata-blue to-cyan-400 text-glow">${data.hero_title_2}</span>`;
    }

    const heroP = document.querySelector('.container .text-lg.text-gray-300');
    if (heroP) heroP.textContent = data.hero_desc;

    // Add updates for other sections as needed...

    // Save preference
    localStorage.setItem('preferredLanguage', lang);
}

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    const select = document.getElementById('langSelect');
    if (select) {
        select.value = savedLang;
        setLanguage(savedLang);
        select.addEventListener('change', (e) => setLanguage(e.target.value));
    }
});
