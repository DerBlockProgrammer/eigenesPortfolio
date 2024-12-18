import { Component } from '@angular/core';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  profileImage: string;
}

@Component({
  selector: 'app-rezession',
  templateUrl: './rezession.component.html',
  styleUrls: ['./rezession.component.scss']
})
export class RezessionComponent {
  testimonials: Testimonial[] = [
    {
      quote: "Ich hatte das Glück, mit Marc in einer Gruppe zu arbeiten, und obwohl ich selbst noch Anfänger bin, hat er mir unglaublich viel geholfen. Marc ist nicht nur technisch fit, sondern auch super geduldig und erklärt alles verständlich. Egal, ob es um HTML, CSS oder JavaScript ging – er hat mir die Konzepte Schritt für Schritt gezeigt, sodass ich wirklich mitlernen konnte.",
      author: "G. Mali",
      position: "Team Partner",
      profileImage: "public/kopf.png"
    },
    {
      quote: "Für jemanden, der noch in der Aufbauphase seiner Karriere steht, bringt Marc bereits viele Best Practices mit und beweist echtes Potenzial. Mit seinem Fokus auf sauberen Code und seinem Interesse, Neues zu lernen, wird er in kurzer Zeit ein noch höheres Level erreichen. Die Zusammenarbeit war produktiv, kollegial und hat Spaß gemacht – definitiv jemand, mit dem man gerne Projekte angeht! 🚀",
      author: "A. Krupnik",
      position: "Senior Developer",
      profileImage: "assets/images/profile2.png"
    },
    {
      quote: "An exceptional leader who always brings the team together.",
      author: "S. Thompson",
      position: "Project Manager",
      profileImage: "assets/images/profile3.png"
    }
  ];

  currentIndex: number = 0;


  changeTestimonial(event: MouseEvent): void {
    const clickPosition = event.offsetX / (event.currentTarget as HTMLElement).clientWidth;
    if (clickPosition < 0.5) {
    
        this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
    } else {
       
        this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    }
}



  get currentTestimonial(): Testimonial {
    return this.testimonials[this.currentIndex];
  }
}
