import { Component, ElementRef, ViewChild, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Import Router
import { NavController } from '@ionic/angular'; 
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.page.html',
  styleUrls: ['./editor.page.scss'],
  standalone: false,
})
export class EditorPage implements OnInit {
  // Referensi ke elemen HTML yang akan dijadikan PDF
  @ViewChild('printContent', { static: false }) printContent!: ElementRef;

  // Variabel untuk menyimpan ID template dan data input
  templateId: string | null = '';
  dataUndangan = {
    mempelaiPria: '',
    mempelaiWanita: '',
    tanggal: '',
    lokasi: '',
    pesan: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,      // Tambahkan Router untuk navigasi paksa
    private navCtrl: NavController, // Tambahkan NavController untuk navigasi Ionic
    private zone: NgZone // Tambahkan NgZone di constructor
  ) { }

  ngOnInit() {
    // Menangkap parameter templateId dari URL
    this.templateId = this.route.snapshot.paramMap.get('templateId');
  }

  /**
   * Fungsi untuk kembali ke halaman utama
   * Menggunakan navigateByUrl untuk memastikan perpindahan rute berhasil
   */
 kembaliKeHome() {
  // Cara ini akan memaksa browser berpindah ke /home secara fisik.
  // URL DIJAMIN berubah, dan saat di-refresh kamu akan tetap di Home.
  window.location.href = '/home';
}

formatDate(event: any) {
  const date = new Date(event.detail.value);
  const options: Intl.DateTimeFormatOptions = { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  };
  // Mengubah format ISO menjadi format tanggal Indonesia
  this.dataUndangan.tanggal = date.toLocaleDateString('id-ID', options);
}

  /**
   * Fungsi untuk mengonversi HTML Preview menjadi file PDF
   */
  async exportToPDF() {
    try {
      const element = this.printContent.nativeElement;
      const canvas = await html2canvas(element, { scale: 2, useCORS: true });
      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

      // --- BAGIAN KHUSUS APK (ANDROID) ---
      // 1. Ambil data PDF dalam format Base64
      const pdfOutput = pdf.output('datauristring');
      const base64Data = pdfOutput.split(',')[1];
      const fileName = `Undangan_${this.dataUndangan.mempelaiPria || 'SapaTamu'}.pdf`;

      // 2. Simpan file ke memori internal HP (Folder Cache)
      await Filesystem.writeFile({
        path: fileName,
        data: base64Data,
        directory: Directory.Cache
      });

      // 3. Ambil lokasi file yang baru disimpan
      const fileUri = await Filesystem.getUri({
        directory: Directory.Cache,
        path: fileName
      });

      // 4. Munculkan dialog "Kirim" atau "Buka" (Sangat Profesional untuk Play Store)
      await Share.share({
        title: 'Simpan Undangan',
        text: 'Bagikan atau simpan file undangan Anda',
        url: fileUri.uri,
        dialogTitle: 'Simpan PDF',
      });

    } catch (error) {
      console.error('Gagal membuat PDF di Android:', error);
    }
  }
}