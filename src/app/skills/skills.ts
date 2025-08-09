import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  // Hard skills grouped by category (name + profiencency 0 - 100)
  hardSkills = [
    { category: 'Frontend', skills: [
      { name: 'Angular', value: 90, icon: 'bi-file-earmark-code-fill' },
      { name: 'HTML/CSS', value: 95, icon: 'bi-braces' },
      { name: 'Bootstrap', value: 90, icon: 'bi-boostrap' }
    ]},
    { category: 'Backend', skills: [
      { name: 'Java', value: 85, icon: 'bi-cpu' },
      { name: 'Node.js', value: 80, icon: 'bi-cloud' },
      { name: 'Spring Boot', value: 75, icon: 'bi-gear-fill' }
    ]},
    { category: 'Data & Tools', skills: [
      { name: 'SQL', value: 80, icon: 'bi-database' },
      { name: 'Git', value: 85, icon: 'bi-git' },
      { name: 'Unit Testing', value: 70, icon: 'bi-check-circle' }
    ]}
  ];

  // Soft Skills - Short description
  softSkills = [
    { name: 'Communication', desc: 'Clear verbal & written communication with stakeholders.', icon: 'bi-chat-dots-fill' },
    { name: 'Teamwork', desc: 'Collaborates effectively within cross-functional teams.', icon: 'bi-people-fill' },
    { name: 'Problem Solving', desc: 'Breaks down complex issues and finds pragmatic solutions.', icon: 'bi-lightbulb-fill' },
    { name: 'Time Management', desc: 'Delivers on deadlines with good prioritisation.', icon: 'bi-clock-fill' },
    { name: 'Adaptability', desc: 'Quick learner; comfortable with new stacks and tools.', icon: 'bi-arrow-repeat' }
  ];
}
