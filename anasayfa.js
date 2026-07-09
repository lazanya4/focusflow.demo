const saat_yazisi = document.getElementById("saat");

function saati_goster() {

    const mevcudiyet = new Date();

    let saat = mevcudiyet.getHours();
    let dakika = mevcudiyet.getMinutes();  
    let saniye = mevcudiyet.getSeconds();

    if (saat < 10) saat = "0" + saat;
    if (dakika < 10) dakika = "0" + dakika;
    if (saniye < 10) saniye = "0" + saniye;

    saat_yazisi.textContent = saat + "\n" + dakika + "\n" + saniye;
}

setInterval(saati_goster, 1000);


const selamlama = document.getElementById("selamlama");
const saat = new Date().getHours();

if (saat >= 0 && saat < 6) {
    selamlama.textContent = "Uykunu alıyor musun?";
} else if (saat >= 6 && saat < 12) {
    selamlama.textContent = "Erken Kalkan Yol Alır, Günaydın!"
} else if (saat >= 12 && saat < 18) {
    selamlama.textContent = "Geç Olsun Güç Olmasın, İyi Günler!"
} else {
    selamlama.textContent = "Dinlenmek Çalışmak Kadar Önemlidir, İyi Akşamlar!"
}

