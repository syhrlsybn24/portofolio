function sendMessage() {
    // Ambil nilai dari form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Format pesan untuk dikirim ke WhatsApp
    const whatsappMessage = `Nama: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0APesan: ${message}`;
    const phoneNumber = "6285175462304"; // Ganti dengan nomor WhatsApp Anda

    // Buat link WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // Buka WhatsApp
    window.open(whatsappURL, '_blank');
}
