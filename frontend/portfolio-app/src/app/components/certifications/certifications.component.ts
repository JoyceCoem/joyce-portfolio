import { Component, OnInit } from '@angular/core';
import { Certification } from '../../shared/models';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {
  certifications: Certification[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getCertifications().subscribe(c => this.certifications = c);
  }
}
