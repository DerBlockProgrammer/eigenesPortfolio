import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TestimonialCard {
  image: string;
  title: string;
  technologies: string;
  description: string;
}

@Component({
  selector: 'app-rezession',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rezession.component.html',
  styleUrls: ['./rezession.component.scss'],
})
export class RezessionComponent {

  testimonialCards: TestimonialCard[] = [
    {
      image: 'portfolio/sergej.png',
      title: 'G. Mali',
      technologies: 'Team Partner',
      description:
        'Ich hatte das Glück, mit Marc in einer Gruppe zu arbeiten, und obwohl ich selbst noch Anfänger bin, hat er mir unglaublich viel geholfen. Marc ist nicht nur technisch fit, sondern auch super geduldig und erklärt alles verständlich.',
    },
    {
      image: 'portfolio/mopped.png',
      title: 'A. Krupnik',
      technologies: 'Senior Developer',
      description:
        'Für jemanden, der noch in der Aufbauphase seiner Karriere steht, bringt Marc bereits viele Best Practices mit und beweist echtes Potenzial. Die Zusammenarbeit war produktiv, kollegial und hat Spaß gemacht!',
    },
    {
      image: 'portfolio/mann.png',
      title: 'S. Thompson',
      technologies: 'Project Manager',
      description:
        'Marc hat komplexe Projekte strukturiert und zielgerichtet zum Erfolg geführt, stets mit einem klaren Blick für Prioritäten und Teamkommunikation. Seine Fähigkeit, Herausforderungen zu bewältigen und Lösungen zu finden, war entscheidend für den Projekterfolg.',
    },
  ];

 
  currentIndex: number = 0;

 
  get currentTestimonial(): TestimonialCard {
    return this.testimonialCards[this.currentIndex];
  }

  /**

   * @param event 
   */
  changeTestimonial(event: MouseEvent): void {
    const clickPosition =
      event.offsetX / (event.currentTarget as HTMLElement).clientWidth;

    this.currentIndex =
      clickPosition < 0.5
        ? (this.currentIndex - 1 + this.testimonialCards.length) %
          this.testimonialCards.length
        : (this.currentIndex + 1) % this.testimonialCards.length;
  }
}
