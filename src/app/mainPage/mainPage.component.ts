import { Component } from '@angular/core';
import { TitelViewMeComponent } from "./titel-view-me/titel-view-me.component";
import { GithubLinksComponent } from "./github-links/github-links.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillsComponent } from "./skills/skills.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { RezessionComponent } from "./rezession/rezession.component";
import { ContactComponent } from "./contact/contact.component";
import { ContactLineComponent } from "./contact-line/contact-line.component";
import { LineComponent } from "./line/line.component";


@Component({
  selector: 'app-main',
  imports: [TitelViewMeComponent, GithubLinksComponent, AboutMeComponent, SkillsComponent, PortfolioComponent, RezessionComponent, ContactComponent, ContactLineComponent, LineComponent, ],
  templateUrl: './mainPage.component.html',
  styleUrl: './mainPage.component.scss'
})
export class MainComponent {

}
