SapaTamu - Aplikasi Undangan Digital 
Aplikasi SapaTamu adalah platform pembuatan undangan digital berbasis mobile dan web yang dibangun menggunakan Ionic Angular dan Capacitor. Project ini dikembangkan untuk memenuhi tugas besar/UTS mata kuliah Sistem Informasi.
🚀 Fitur Utama
•	Custom Templates: Tersedia 4 pilihan tema menarik dengan desain yang sangat kontras:
o	🟦 Modern Blue: Desain tegas dan profesional.
o	🟨 Luxury Gold: Kesan klasik, mewah, dan elegan.
o	🌸 Floral Garden: Tampilan lembut, cantik, dan estetik.
o	⬛ Minimalist Dark: Gaya maskulin, simpel, dan premium.
•	Interactive Form: Pengisian data mempelai secara real-time dengan integrasi Date Picker untuk pemilihan tanggal yang akurat.
•	Export to PDF: Mengonversi desain undangan secara instan menjadi file PDF menggunakan jsPDF dan html2canvas.
•	Native Sharing: Fitur berbagi file PDF langsung ke WhatsApp, Telegram, atau media sosial lainnya menggunakan fitur asli Android (Khusus versi APK).
•	Responsive Design: Layout yang adaptif, memberikan pengalaman pengguna yang baik di perangkat smartphone maupun desktop.
🛠️ Teknologi yang Digunakan
•	Framework Utama: Ionic v7 + Angular
•	Native Bridge: Capacitor (untuk akses fitur Android)
•	Libraries Penting: - jsPDF: Untuk pembuatan dokumen PDF.
o	html2canvas: Untuk mengubah elemen HTML menjadi gambar.
o	@capacitor/share: Untuk fitur berbagi file native.
o	@capacitor/filesystem: Untuk manajemen penyimpanan file di perangkat.
•	Bahasa & Styling: TypeScript, SCSS (SASS), HTML5.
📸 Cara Menjalankan Project
Ikuti langkah-langkah di bawah ini untuk menjalankan project di lingkungan lokal Anda:
1.	Clone repository ini:
2.	git clone [https://github.com/USERNAME_KAMU/sapatamu-app.git](https://github.com/USERNAME_KAMU/sapatamu-app.git)
3.	Install dependencies: Pastikan Anda sudah menginstal Node.js dan Ionic CLI.
4.	npm install
5.	Jalankan di browser (Development Mode):
6.	ionic serve
7.	Build ke Android (Untuk membuat APK): Pastikan Anda sudah menginstal Android Studio.
8.	ionic build
9.	npx cap sync android
10.	npx cap open android
Dikembangkan oleh Rivan - 2026

