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
  };

  mailTest = false;

  post = {
    endPoint: 'https://marcvossler.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  /**
   * Verarbeitet das Formular und sendet die Daten, falls sie gültig sind.
   * @param ngForm - Die Angular Formulardaten.
   */
  onSubmit(ngForm: NgForm): void {
    if (ngForm.form.valid) {
      this.mailTest ? this.simulateMailSend(ngForm) : this.sendMail(ngForm);
    }
  }

  /**
   * Simuliert das Versenden einer E-Mail, wenn `mailTest` aktiv ist.
   * @param ngForm - Die Angular Formulardaten.
   */
  private simulateMailSend(ngForm: NgForm): void {
    console.log("Mail gesendet (Simuliert):", this.contactData);
    ngForm.resetForm();
  }

  /**
   * Sendet die E-Mail-Daten an den angegebenen Endpunkt.
   * @param ngForm 
   */
  private sendMail(ngForm: NgForm): void {
    this.http.post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
      .subscribe({
        next: () => ngForm.resetForm(),
        error: (error) => console.error("Fehler beim Senden der Mail:", error),
        complete: () => console.info('E-Mail erfolgreich gesendet'),
      });
  }
}
