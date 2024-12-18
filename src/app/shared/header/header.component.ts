import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen: boolean = false;

  // Öffnen/Schließen des Menüs
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Schließen des Menüs beim Link-Klick
  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
