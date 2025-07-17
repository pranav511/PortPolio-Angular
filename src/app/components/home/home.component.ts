import { Component, AfterViewInit } from '@angular/core';
import TypeIt from 'typeit';
import { SkillsComponent } from '../skills/skills.component'; // ✅ Update path if needed

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SkillsComponent], // ✅ Import here
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  isDarkMode = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  const body = document.body;

  if (this.isDarkMode) {
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
  }}

  mySkills = [
    { name: 'Node.js', level: 90 },
    { name: 'Express.js', level: 85 },
    { name: 'MySQL', level: 80 },
    { name: 'JWT & Auth', level: 80 },
    { name: 'REST APIs', level: 90 }
  ];

  ngAfterViewInit(): void {
    new TypeIt('#typewriter', {
      strings: [
        "Backend Developer 👨‍💻",
        "Node.js Expert ⚙️",
        "MySQL Pro 💾",
        "REST API Builder 🔧"
      ],
      speed: 80,
      breakLines: false,
      loop: true
    }).go();
  }

  
}

