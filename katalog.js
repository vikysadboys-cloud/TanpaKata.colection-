// Fungsi geser slider pas persis 2 frame sekaligus tanpa melompat
function slideContainer(gridId, direction) {
    const container = document.getElementById(gridId);
    const firstItem = container.querySelector('.template-item');
    if (!firstItem) return;
    const itemWidth = firstItem.offsetWidth + 16;
    container.scrollBy({ left: direction * (itemWidth * 2), behavior: 'smooth' });
}

// Kamus Bahasa (ID & EN)
const translations = {
    id: {
        settings: "Pengaturan",
        dark_mode: "Mode Gelap",
        light_mode: "Mode Terang",
        menu_price: "Menu Harga",
        menu_promo: "Menu Promo",
        subtitle: "✨ Kartu Ucapan Digital ✨",
        choose_category: "Silahkan Pilih Kategori Ucapan",
        cat_birthday: "Ulang Tahun",
        cat_wedding: "Pernikahan",
        cat_christmas: "Natal",
        cat_newyear: "Tahun Baru",
        cat_valentine: "Hari Valentine",
        cat_eid: "Idul Fitri",
        title_birthday: "Kategori: Ulang Tahun",
        title_wedding: "Kategori: Pernikahan",
        title_christmas: "Kategori: Natal",
        title_newyear: "Kategori: Tahun Baru",
        title_valentine: "Kategori: Hari Valentine",
        title_eid: "Kategori: Idul Fitri",
        back_home: "⬅ Kembali ke Menu Utama",
        order_btn: "💬 Pesan Sekarang",
        footer: "© 2026 Tanpa Kata.colection. All Rights Reserved.",
        price_title: "📋 Daftar Paket & Harga",
        price_desc_1: "Teks ucapan & 2 frame foto",
        price_desc_2: "Teks ucapan, 5 frame foto dan icon gambar",
        price_desc_3: "Teks ucapan, 10 frame foto , icon gambar dan lagu",
        promo_title: "🔥 Paket Promo Bundling",
        promo_desc_1: "2 kartu ucapan TanpaHemat dan 3 kartu ucapan TanpaRoyal",
        promo_desc_2: "5 kartu ucapan TanpaMedium dan 5 kartu ucapan TanpaRoyal",
        close_btn: "Tutup",
        t_birthday_1: "Ulang Tahun Tema 01", t_birthday_2: "Ulang Tahun Tema 02", t_birthday_3: "Ulang Tahun Tema 03", t_birthday_4: "Ulang Tahun Tema 04", t_birthday_5: "Ulang Tahun Tema 05", t_birthday_6: "Ulang Tahun Tema 06", t_birthday_7: "Ulang Tahun Tema 07", t_birthday_8: "Ulang Tahun Tema 08", t_birthday_9: "Ulang Tahun Tema 09", t_birthday_10: "Ulang Tahun Tema 10",
        t_wedding_1: "Pernikahan Tema 01", t_wedding_2: "Pernikahan Tema 02", t_wedding_3: "Pernikahan Tema 03", t_wedding_4: "Pernikahan Tema 04", t_wedding_5: "Pernikahan Tema 05", t_wedding_6: "Pernikahan Tema 06", t_wedding_7: "Pernikahan Tema 07", t_wedding_8: "Pernikahan Tema 08", t_wedding_9: "Pernikahan Tema 09", t_wedding_10: "Pernikahan Tema 10",
        t_christmas_1: "Natal Tema 01", t_christmas_2: "Natal Tema 02", t_christmas_3: "Natal Tema 03", t_christmas_4: "Natal Tema 04", t_christmas_5: "Natal Tema 05", t_christmas_6: "Natal Tema 06", t_christmas_7: "Natal Tema 07", t_christmas_8: "Natal Tema 08", t_christmas_9: "Natal Tema 09", t_christmas_10: "Natal Tema 10",
        t_newyear_1: "Tahun Baru Tema 01", t_newyear_2: "Tahun Baru Tema 02", t_newyear_3: "Tahun Baru Tema 03", t_newyear_4: "Tahun Baru Tema 04", t_newyear_5: "Tahun Baru Tema 05", t_newyear_6: "Tahun Baru Tema 06", t_newyear_7: "Tahun Baru Tema 07", t_newyear_8: "Tahun Baru Tema 08", t_newyear_9: "Tahun Baru Tema 09", t_newyear_10: "Tahun Baru Tema 10",
        t_valentine_1: "Valentine Tema 01", t_valentine_2: "Valentine Tema 02", t_valentine_3: "Valentine Tema 03", t_valentine_4: "Valentine Tema 04", t_valentine_5: "Valentine Tema 05", t_valentine_6: "Valentine Tema 06", t_valentine_7: "Valentine Tema 07", t_valentine_8: "Valentine Tema 08", t_valentine_9: "Valentine Tema 09", t_valentine_10: "Valentine Tema 10",
        t_eid_1: "Idul Fitri Tema 01", t_eid_2: "Idul Fitri Tema 02", t_eid_3: "Idul Fitri Tema 03", t_eid_4: "Idul Fitri Tema 04", t_eid_5: "Idul Fitri Tema 05", t_eid_6: "Idul Fitri Tema 06", t_eid_7: "Idul Fitri Tema 07", t_eid_8: "Idul Fitri Tema 08", t_eid_9: "Idul Fitri Tema 09", t_eid_10: "Idul Fitri Tema 10"
    },
    en: {
        settings: "Settings",
        dark_mode: "Dark Mode",
        light_mode: "Light Mode",
        menu_price: "Price Menu",
        menu_promo: "Promo Menu",
        subtitle: "✨ Digital Greeting Cards ✨",
        choose_category: "Please Choose a Greeting Category",
        cat_birthday: "Birthday",
        cat_wedding: "Wedding",
        cat_christmas: "Christmas",
        cat_newyear: "New Year",
        cat_valentine: "Valentine's Day",
        cat_eid: "Eid Al-Fitr",
        title_birthday: "Category: Birthday",
        title_wedding: "Category: Wedding",
        title_christmas: "Category: Christmas",
        title_newyear: "Category: New Year",
        title_valentine: "Category: Valentine's Day",
        title_eid: "Category: Eid Al-Fitr",
        back_home: "⬅ Back to Main Menu",
        order_btn: "💬 Order Now",
        footer: "© 2026 Tanpa Kata.colection. All Rights Reserved.",
        price_title: "📋 Pricing & Packages",
        price_desc_1: "Greeting text & 2 photo frames",
        price_desc_2: "Greeting text, 5 photo frames & image icon",
        price_desc_3: "Greeting text, 10 photo frames, image icon & song",
        promo_title: "🔥 Bundling Promo Packages",
        promo_desc_1: "2 TanpaHemat cards and 3 TanpaRoyal cards",
        promo_desc_2: "5 TanpaMedium cards and 5 TanpaRoyal cards",
        close_btn: "Close",
        t_birthday_1: "Birthday Theme 01", t_birthday_2: "Birthday Theme 02", t_birthday_3: "Birthday Theme 03", t_birthday_4: "Birthday Theme 04", t_birthday_5: "Birthday Theme 05", t_birthday_6: "Birthday Theme 06", t_birthday_7: "Birthday Theme 07", t_birthday_8: "Birthday Theme 08", t_birthday_9: "Birthday Theme 09", t_birthday_10: "Birthday Theme 10",
        t_wedding_1: "Wedding Theme 01", t_wedding_2: "Wedding Theme 02", t_wedding_3: "Wedding Theme 03", t_wedding_4: "Wedding Theme 04", t_wedding_5: "Wedding Theme 05", t_wedding_6: "Wedding Theme 06", t_wedding_7: "Wedding Theme 07", t_wedding_8: "Wedding Theme 08", t_wedding_9: "Wedding Theme 09", t_wedding_10: "Wedding Theme 10",
        t_christmas_1: "Christmas Theme 01", t_christmas_2: "Christmas Theme 02", t_christmas_3: "Christmas Theme 03", t_christmas_4: "Christmas Theme 04", t_christmas_5: "Christmas Theme 05", t_christmas_6: "Christmas Theme 06", t_christmas_7: "Christmas Theme 07", t_christmas_8: "Christmas Theme 08", t_christmas_9: "Christmas Theme 09", t_christmas_10: "Christmas Theme 10",
        t_newyear_1: "New Year Theme 01", t_newyear_2: "New Year Theme 02", t_newyear_3: "New Year Theme 03", t_newyear_4: "New Year Theme 04", t_newyear_5: "New Year Theme 05", t_newyear_6: "New Year Theme 06", t_newyear_7: "New Year Theme 07", t_newyear_8: "New Year Theme 08", t_newyear_9: "New Year Theme 09", t_newyear_10: "New Year Theme 10",
        t_valentine_1: "Valentine Theme 01", t_valentine_2: "Valentine Theme 02", t_valentine_3: "Valentine Theme 03", t_valentine_4: "Valentine Theme 04", t_valentine_5: "Valentine Theme 05", t_valentine_6: "Valentine Theme 06", t_valentine_7: "Valentine Theme 07", t_valentine_8: "Valentine Theme 08", t_valentine_9: "Valentine Theme 09", t_valentine_10: "Valentine Theme 10",
        t_eid_1: "Eid Theme 01", t_eid_2: "Eid Theme 02", t_eid_3: "Eid Theme 03", t_eid_4: "Eid Theme 04", t_eid_5: "Eid Theme 05", t_eid_6: "Eid Theme 06", t_eid_7: "Eid Theme 07", t_eid_8: "Eid Theme 08", t_eid_9: "Eid Theme 09", t_eid_10: "Eid Theme 10"
    }
};

let currentLang = 'id';

function toggleLanguage() {
    currentLang = currentLang === 'id' ? 'en' : 'id';
    document.getElementById('langText').innerText = currentLang === 'id' ? 'English' : 'Indonesia';
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            if (el.tagName === 'A' || el.tagName === 'BUTTON') {
                const firstChar = el.innerHTML.trim().charAt(0);
                if (['💬','⚙️','📋','🔥','🌓','🌐','⬅'].includes(firstChar)) {
                    el.innerHTML = el.innerHTML.replace(el.innerText, translations[currentLang][key]);
                } else {
                    el.innerText = translations[currentLang][key];
                }
            } else {
                el.innerText = translations[currentLang][key];
            }
        }
    });

    const themeText = document.getElementById('themeText');
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    themeText.innerText = currentLang === 'en' ? (isDark ? 'Light Mode' : 'Dark Mode') : (isDark ? 'Mode Terang' : 'Mode Gelap');
    closeSettingsMenu();
}

function switchFrame(frameId) {
    const frames = document.querySelectorAll('.frame');
    frames.forEach(frame => frame.classList.remove('active'));
    
    const target = document.getElementById(frameId);
    if(target) {
        target.classList.add('active');
    }
    closeSettingsMenu();
}

function toggleSettingsMenu() {
    document.getElementById('settingsDropdown').classList.toggle('show');
}

function closeSettingsMenu() {
    document.getElementById('settingsDropdown').classList.remove('show');
}

function toggleTheme() {
    const html = document.documentElement;
    const themeText = document.getElementById('themeText');
    const isDark = html.getAttribute('data-theme') === 'dark';
    
    if (isDark) {
        html.removeAttribute('data-theme');
        themeText.innerText = currentLang === 'en' ? 'Dark Mode' : 'Mode Gelap';
    } else {
        html.setAttribute('data-theme', 'dark');
        themeText.innerText = currentLang === 'en' ? 'Light Mode' : 'Mode Terang';
    }
    closeSettingsMenu();
}

function openPriceModal() {
    document.getElementById('priceModal').style.display = 'flex';
    closeSettingsMenu();
}

function openPromoModal() {
    document.getElementById('promoModal').style.display = 'flex';
    closeSettingsMenu();
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function closeModalOutside(event, modalId) {
    const modal = document.getElementById(modalId);
    if (event.target === modal) {
        closeModal(modalId);
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.settings-btn') && !event.target.closest('.settings-dropdown')) {
        closeSettingsMenu();
    }
}

// Fungsi untuk memilih kategori harga
function selectPriceCat(type, catName) {
    document.getElementById('priceCategorySelect').style.display = 'none';
    
    if (type === 'complex') {
        document.getElementById('complexTitle').innerText = '✨ Paket Kategori: ' + catName;
        document.getElementById('priceListComplex').style.display = 'flex';
        document.getElementById('priceListSimple').style.display = 'none';
    } else {
        document.getElementById('simpleTitle').innerText = '✨ Paket Kategori: ' + catName;
        document.getElementById('priceListSimple').style.display = 'flex';
        document.getElementById('priceListComplex').style.display = 'none';
    }
}

// Fungsi kembali ke tombol kategori awal di modal harga
function backToPriceCategories() {
    document.getElementById('priceCategorySelect').style.display = 'grid';
    document.getElementById('priceListComplex').style.display = 'none';
    document.getElementById('priceListSimple').style.display = 'none';
}

// Override fungsi openPriceModal agar mereset tampilan awal saat modal dibuka
window.openPriceModal = function() {
    document.getElementById('priceModal').style.display = 'flex';
    backToPriceCategories();
    if(typeof closeSettingsMenu === 'function') closeSettingsMenu();
};

window.addEventListener('DOMContentLoaded', function() {
    const hash = window.location.hash;
    if (hash) {
        const targetFrameId = 'frame' + hash.replace('#', '-');
        if (document.getElementById(targetFrameId)) {
            switchFrame(targetFrameId);
        }
    }
});