function mesaj_yolla(event) {
    event.preventDefault();
    alert("Mesajınız başarıyla gönderildi, en kısa sürede size dönüş yapacağız!");
    event.target.reset();
}