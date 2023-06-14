import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'qr-code-generator';
  qrCode = '';
  qrPath = '';

  generateQr(): void {
    this.qrCode = (document.getElementById('link') as HTMLInputElement).value;

    if (!this.qrCode) {
      alert('Insira um link válido no campo!');

      return;
    }

    this.qrPath = this.generateQrPath(this.qrCode);
  }

  private generateQrPath(qrCode: string): string {
    const qrPath = `https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=${qrCode}`;
    return qrPath;
  }
}
