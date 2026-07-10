import { Component, OnInit } from '@angular/core';
import { ResearchProject } from '../../shared/models';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {
  research: ResearchProject[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getResearch().subscribe(r => this.research = r);
  }
}
