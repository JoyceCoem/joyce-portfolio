import { Component, OnInit } from '@angular/core';
import { Achievement } from '../../shared/models';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {
  achievements: Achievement[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getAchievements().subscribe(a => this.achievements = a);
  }
}
