import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    { img: './skills/html.png', alt: 'HTML' },
    { img: './skills/css.png', alt: 'CSS' },
    { img: './skills/javascript.png', alt: 'JavaScript' },
    { img: './skills/typescript.png', alt: 'TypeScript' },
    { img: './skills/angular.png', alt: 'Angular' },
    { img: './skills/firebase.png', alt: 'Firebase' },
    { img: './skills/git.png', alt: 'Git' },
    { img: './skills/restApi.png', alt: 'Rest API' },
    { img: './skills/scrum.png', alt: 'Scrum' },
    { img: './skills/material.png', alt: 'Material Design' },
    { img: './skills/learning.png', alt: 'Continually learning' },
  ];
}
