import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Project, Achievement, ResearchProject, Certification } from '../../shared/models';
import {
  FALLBACK_PROJECTS,
  FALLBACK_ACHIEVEMENTS,
  FALLBACK_RESEARCH,
  FALLBACK_CERTIFICATIONS
} from './portfolio-data';

// Point this at your deployed ASP.NET Core API.
// While developing, `ng serve` + `dotnet run` on http://localhost:5000 works out of the box.
const API_BASE = 'http://localhost:5000/api';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${API_BASE}/projects`).pipe(
      catchError(() => of(FALLBACK_PROJECTS))
    );
  }

  getProjectBySlug(slug: string): Observable<Project | undefined> {
    return this.http.get<Project>(`${API_BASE}/projects/${slug}`).pipe(
      catchError(() => of(FALLBACK_PROJECTS.find(p => p.slug === slug)))
    );
  }

  getAchievements(): Observable<Achievement[]> {
    return this.http.get<Achievement[]>(`${API_BASE}/achievements`).pipe(
      catchError(() => of(FALLBACK_ACHIEVEMENTS))
    );
  }

  getResearch(): Observable<ResearchProject[]> {
    return this.http.get<ResearchProject[]>(`${API_BASE}/research`).pipe(
      catchError(() => of(FALLBACK_RESEARCH))
    );
  }

  getCertifications(): Observable<Certification[]> {
    return this.http.get<Certification[]>(`${API_BASE}/certifications`).pipe(
      catchError(() => of(FALLBACK_CERTIFICATIONS))
    );
  }

  submitContact(payload: { name: string; email: string; message: string }): Observable<{ success: boolean } | { error: string }> {
    return this.http.post<{ success: boolean }>(`${API_BASE}/contact`, payload).pipe(
      catchError(() => of({ error: 'Could not reach the server. Please email me directly instead.' }))
    );
  }
}
