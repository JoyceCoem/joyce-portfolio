# Joyce Coem — Portfolio Site

Full-stack portfolio: **Angular** frontend, **ASP.NET Core** Web API backend, **SQL Server** database.

## Structure

```
joyce-portfolio/
├── frontend/portfolio-app/   # Angular app
├── backend/Portfolio.Api/    # ASP.NET Core Web API
├── database/
│   ├── schema.sql             # Table definitions
│   └── seed.sql                # Real content: projects, achievements, research, certifications
└── README.md
```

## 1. Database setup

Requires SQL Server (LocalDB is fine for local dev — ships with Visual Studio).

```bash
sqlcmd -S "(localdb)\mssqllocaldb" -i database/schema.sql
sqlcmd -S "(localdb)\mssqllocaldb" -i database/seed.sql
```

Update the connection string in `backend/Portfolio.Api/appsettings.json` if you're using a
different SQL Server instance (e.g. Azure SQL, a local named instance, or a Docker container).

## 2. Backend setup

```bash
cd backend/Portfolio.Api
dotnet restore
dotnet run
```

The API runs on `https://localhost:5001` (or `http://localhost:5000`) by default and exposes:

- `GET /api/projects` / `GET /api/projects/{slug}`
- `GET /api/achievements`
- `GET /api/research` / `GET /api/research/{slug}`
- `GET /api/certifications`
- `POST /api/contact`

Swagger UI is available at `/swagger` in development.

## 3. Frontend setup

```bash
cd frontend/portfolio-app
npm install
ng serve
```

Visit `http://localhost:4200`.

If `ng` isn't recognised, install the Angular CLI globally first: `npm install -g @angular/cli`.

**Note:** the frontend works even without the backend running — `PortfolioService`
(`src/app/core/services/portfolio.service.ts`) falls back to local seed data
(`portfolio-data.ts`) if the API call fails, so you can preview the site instantly.

## 4. Add your assets

Drop these into `frontend/portfolio-app/src/assets/`:

- `profile-photo.jpg` — your professional photo (used on the Home page)
- `Joyce_Coem_CV_Software.pdf` — the CV PDF for the View/Download buttons

## 5. Things still worth finishing

- **Phishing Simulation / AI Mental Health Companion**: tech stack fields are placeholders —
  update `database/seed.sql` (and `portfolio-data.ts` for the fallback) once finalised.
- **Easy-config** and **LibraryManagement** repos: not yet added as project entries — add if
  you want them included.
- **CV PDF**: only the "Graduate Software Engineer" version has a View/Download button wired
  up by default; swap the file or add a second button for the "Technical Support" version.
- Consider adding real screenshots for each project (referenced nowhere yet, but the design
  has room in `project-detail.component.html` if you want to extend it).

## Deployment notes

- **Frontend**: `ng build` outputs to `dist/portfolio-app` — deployable to any static host
  (Azure Static Web Apps, Netlify, GitHub Pages with a redirect rule for Angular routing).
- **Backend**: standard ASP.NET Core deployment — Azure App Service is a natural fit given
  your existing Azure exposure.
- **CORS**: update `Cors:AllowedOrigin` in `appsettings.json` to your deployed frontend URL.
