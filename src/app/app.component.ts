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
  generateQr() {
    this.qrCode = (document.getElementById('link') as HTMLInputElement).value;

    if (!this.qrCode) {
      alert('Insira um valor válido no campo!');
      return;
    }
    this.qrPath = `https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=${this.qrCode}`;
  }
}
