import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  constructor(private sanitizer: DomSanitizer) { }
  getSafeImageUrl(): any {
    const imagePath = 'assets/barbershop.svg'; // Укажите путь к вашему файлу SVG
    return this.sanitizer.bypassSecurityTrustResourceUrl(imagePath);
  }
  
}
