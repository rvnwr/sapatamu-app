# SapaTamu - Aplikasi Undangan Digital

Aplikasi **SapaTamu** adalah platform pembuatan undangan digital berbasis mobile dan web yang dibangun menggunakan **Ionic Angular** dan **Capacitor**. Project ini dikembangkan untuk memenuhi tugas besar mata kuliah Sistem Informasi.

## 🚀 Fitur Utama
* **Custom Templates**: Tersedia 4 pilihan tema menarik (Modern Blue, Luxury Gold, Floral Garden, & Minimalist Dark).
* **Interactive Form**: Pengisian data mempelai secara real-time dengan integrasi Date Picker.
* **Export to PDF**: Mengonversi desain undangan menjadi file PDF secara instan.
* **Native Sharing**: Fitur berbagi file PDF langsung ke WhatsApp (Khusus versi APK).
* **Responsive Design**: Layout adaptif untuk smartphone maupun desktop.

## 🛠️ Teknologi yang Digunakan
* **Framework**: Ionic v7 + Angular
* **Native Bridge**: Capacitor
* **Libraries**: `jsPDF`, `html2canvas`, `@capacitor/share`, `@capacitor/filesystem`
* **Language**: TypeScript, SCSS, HTML5

## 📸 Cara Menjalankan Project

Jalankan perintah berikut secara berurutan di terminal Anda:

```bash
# Clone repository dan masuk ke folder project
git clone [https://github.com/USERNAME_KAMU/sapatamu-app.git](https://github.com/USERNAME_KAMU/sapatamu-app.git)
cd sapatamu-app

# Install dependencies dan jalankan di browser
npm install
ionic serve

# Build untuk Android (Opsional)
ionic build
npx cap sync android
