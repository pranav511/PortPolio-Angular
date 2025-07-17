import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports:  [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
projects = [
    {
      title: 'Vendora E-commerce',
      description: 'A full-featured MEAN stack e-commerce app with Razorpay, JWT Auth, and Role-based admin.',
      image: 'assets/images/vendora.png',
      github: 'https://github.com/pranav/511',
      live: 'https://vendora.live'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern animated portfolio website built using Angular 17 & TailwindCSS.',
      image: 'assets/images/portfolio.png',
      github: 'https://github.com/pranav/portfolio',
      live: 'https://pranav.dev'
    },
    {
      title: 'Video Maker App',
      description: 'A Node.js app to upload media and generate automated videos with transitions.',
      image: 'assets/images/video-maker.png',
      github: '#',
      live: '#'
    }
  ];
}
