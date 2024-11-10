function sendEmail() {
    // Ambil nilai dari form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Format email yang akan dikirim
    const emailRecipient = "syahrulsyaban3009@gmail.com"; // Ganti dengan alamat email tujuan Anda
    const mailtoLink = `mailto:${emailRecipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`)}`;

    // Buka aplikasi email default dengan link yang telah dibuat
    window.location.href = mailtoLink;
}
