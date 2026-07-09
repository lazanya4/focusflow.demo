let tumSure = 25 * 60;
let kalanSure = tumSure;
let timerInterval =  null;
let bitisZamani = null;

function updateTimerDisplay() {
    const minutes = Math.floor(kalanSure / 60);
    const seconds = kalanSure % 60;

    const mStr = String(minutes).padStart(2, '0');
    const sStr = String(seconds).padStart(2, '0');

    if(document.getElementById('m1')) {
        document.getElementById('m1').innerText = mStr[0];
        document.getElementById('m2').innerText = mStr[1];
        document.getElementById('s1').innerText = sStr[0];
        document.getElementById('s2').innerText = sStr[1];
    }

    const bar = document.getElementById('progress-fill');
    const percentText = document.getElementById('progress-percent');
    if(bar) {
        const progressPercent = ((tumSure - kalanSure) / tumSure) * 100;
        bar.style.width = `${progressPercent}%`;
        if(percentText) percentText.innerText = `${Math.floor(progressPercent)}%`;
    }

}

const alarmSesi = new Audio('audio.wav'); 

function startTimer() {
    if (timerInterval !== null) return;

    bitisZamani = Date.now() + kalanSure * 1000;

    if(document.getElementById('startBtn')) document.getElementById('startBtn').style.display = 'none';
    if(document.getElementById('pauseBtn')) document.getElementById('pauseBtn').style.display = 'inline-block';

    timerInterval = setInterval(() => {
        kalanSure = Math.round((bitisZamani - Date.now()) / 1000);
        updateTimerDisplay();

        if (kalanSure <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            
            alarmSesi.play();
            
            setTimeout(() => {
                alert("Süre doldu! Harika çalıştın, şimdi mola zamanı.");
                resetTimer();
            }, 500);
        }
    }, 1000);
}

function pauseTimer() {
    bitisZamani = Date.now() + kalanSure * 1000;
    clearInterval(timerInterval);
    timerInterval = null;
    const startBtn = document.getElementById('startBtn');
    if(startBtn) {
        startBtn.style.display = 'inline-block';
        startBtn.innerText = 'Devam Et';
    }
    if(document.getElementById('pauseBtn')) document.getElementById('pauseBtn').style.display = 'none';
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    kalanSure = tumSure;
    updateTimerDisplay();
    
    const startBtn = document.getElementById('startBtn');
    if(startBtn) {
        startBtn.style.display = 'inline-block';
        startBtn.innerText = 'Başlat';
    }
    if(document.getElementById('pauseBtn')) document.getElementById('pauseBtn').style.display = 'none';
    
}

const motivasyonSozleri = [
    { text: "Konsantrasyon, başarıya giden en kısa yoldur.", author: "Ralph Waldo Emerson" },
    { text: "Büyük işler, küçük adımlarla başlar.", author: "Lao Tzu" },
    { text: "Zamanını yönet, hayatını yönet.", author: "Peter Drucker" },
    { text: "Odaklanma gücü, dehanın yarısıdır.", author: "Voltaire" },
    { text: "Derin çalışma, modern dünyanın süper gücüdür.", author: "Cal Newport" },
    { text: "Umutsuz durumlar yoktur, umutsuz insanlar vardır. Ben hiçbir zaman umudumu yitirmedim.", author: "Mustafa Kemal Atatürk" },
    { text: "Vaktinin değerini bilmeyen, hiçbir şeyin değerini bilmez.", author: "Charles Darwin" },
    { text: "Zafer, 'Zafer benimdir!' diyebilenindir.", author: "Mustafa Kemal Atatürk" },
    { text: "İmkânsız, yalnızca cesareti olmayanların sözlüğünde yer alır.", author: "Napoléon Bonaparte" },
    { text: "En büyük risk, hiç risk almamaktır.", author: "Mark Zuckerberg" },
    { text: "Gecenin en karanlık anı, şafağa en yakın olduğu andır.", author: "Victor Hugo" },
];

function rastgeleSozGetir() {
    const textEl = document.getElementById('quote-text');
    const authorEl = document.getElementById('quote-author');
    
    if (textEl && authorEl) {
        const rastgeleIndeks = Math.floor(Math.random() * motivasyonSozleri.length);
        const secilenSoz = motivasyonSozleri[rastgeleIndeks];
        textEl.innerText = `"${secilenSoz.text}"`;
        authorEl.innerText = `- ${secilenSoz.author}`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    rastgeleSozGetir();
});