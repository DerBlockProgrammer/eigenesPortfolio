import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PortfolioCard {
  image: string;
  title: string;
  technologies: string;
  description: string;
  liveLink: string;
  githubLink: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  portfolioCards: PortfolioCard[] = [
    {
      image: 'portfolio/join.png',
      title: 'Join',
      technologies: 'Angular | TypeScript | HTML | CSS | Firebase',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag-and-drop functions, assign users and categories.',
      liveLink: '#',
      githubLink: '#',
    },
    {
      image: 'portfolio/Sharkie.png',
      title: 'El Pollo Loco',
      technologies: 'JavaScript | HTML | CSS',
      description:
        'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe find coins and help to fight against the killer chicken.',
      liveLink: '#',
      githubLink: '#',
    },
    {
      image: 'portfolio/pokedex.png',
      title: 'PokeDex',
      technologies: 'Angular | Javascript',
      description:
        'My Pokédex program allows users to search for and view detailed information about various Pokémon, including their names, types, abilities, and stats, providing an interactive and organized way to explore the Pokémon world.',
      liveLink: '#',
      githubLink: '#',
    },
  ];
}
