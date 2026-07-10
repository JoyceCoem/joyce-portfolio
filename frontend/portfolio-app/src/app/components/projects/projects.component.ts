import { Component, OnInit } from '@angular/core';
import { Project } from '../../shared/models';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getProjects().subscribe(projects => this.projects = projects);
  }

  techList(technologies: string): string[] {
    return technologies.split(',').map(t => t.trim()).filter(Boolean);
  }
}
