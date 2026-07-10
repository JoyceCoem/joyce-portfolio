import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../shared/models';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  project?: Project;

  constructor(private route: ActivatedRoute, private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.portfolioService.getProjectBySlug(slug).subscribe(project => this.project = project);
    }
  }

  techList(technologies: string): string[] {
    return technologies.split(',').map(t => t.trim()).filter(Boolean);
  }
}
