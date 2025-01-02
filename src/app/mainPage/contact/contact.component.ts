import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
    privacy: false
  };

  mailTest = true;
  messageSent = false; // Neue Variable für den Status der Nachricht
  privacyError = false; // Fehlerstatus für Datenschutzprüfung

  post = {
    endPoint: 'https://marc-vossler.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  /**
   * Verarbeitet das Formular und sendet die Daten, falls sie gültig sind und das Datenschutzfeld angekreuzt wurde.
   * @param ngForm - Die Angular Formulardaten.
   * @param privacyChecked - Zustand der Datenschutz-Checkbox.
   */
  onSubmit(ngForm: NgForm, privacyChecked: boolean): void {
    this.privacyError = !privacyChecked; // Setzt den Fehlerstatus basierend auf der Datenschutzprüfung

    if (ngForm.form.valid && privacyChecked) {
      this.mailTest ? this.simulateMailSend(ngForm) : this.sendMail(ngForm);
    } else {
      alert("Bitte füllen Sie alle Felder aus und stimmen Sie der Datenschutzerklärung zu.");
    }
  }

  /**
   * Simuliert das Versenden einer E-Mail, wenn `mailTest` aktiv ist.
   * @param ngForm - Die Angular Formulardaten.
   */
  private simulateMailSend(ngForm: NgForm): void {
    console.log("Mail gesendet (Simuliert):", this.contactData);
    this.showSuccessMessage();
    ngForm.resetForm();
  }

  /**
   * Sendet die E-Mail-Daten an den angegebenen Endpunkt.
   * @param ngForm - Die Angular Formulardaten.
   */
  private sendMail(ngForm: NgForm): void {
    this.http.post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
      .subscribe({
        next: () => {
          this.showSuccessMessage();
          ngForm.resetForm();
        },
        error: (error) => console.error("Fehler beim Senden der Mail:", error),
        complete: () => console.info('E-Mail erfolgreich gesendet'),
      });
  }

  /**
   * Zeigt die Erfolgsnachricht und setzt sie nach 3 Sekunden zurück.
   */
  private showSuccessMessage(): void {
    this.messageSent = true;
    setTimeout(() => {
      this.messageSent = false; // Nachricht nach 3 Sekunden ausblenden
    }, 1500); // 3000 ms = 3 Sekunden
  }
}
