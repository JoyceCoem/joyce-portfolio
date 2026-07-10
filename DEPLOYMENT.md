# Deploying Joyce's Portfolio — Free Azure Stack

Everything below fits Azure's free tiers: Azure Static Web Apps (frontend),
Azure App Service F1 (backend), Azure SQL Database free offer (database).

Sign up for **Azure for Students** first if you haven't (azure.microsoft.com/free/students)
— no credit card required, and it gives you $100 credit on top of these free tiers.

## 1. Database — Azure SQL Database (free tier)

1. In the Azure Portal, search **Azure SQL** → **Create** → **SQL Database**.
2. Create a new SQL Server (choose a username/password, note them down).
3. Under **Compute + storage**, click **Configure database**, then switch the
   **Free offer** toggle to **Applied to this database**. Confirm you see the
   free-tier limits (32 GB, 100,000 vCore-seconds/month).
4. Once created, go to the database → **Networking** → allow
   "Allow Azure services and resources to access this server", and add your
   own IP so you can connect from your machine.
5. Connect via SSMS or Azure Data Studio using the connection string shown in
   the portal, then run `database/schema.sql` followed by `database/seed.sql`.

## 2. Backend — Azure App Service (F1 free tier)

1. Update `backend/Portfolio.Api/appsettings.json` with your Azure SQL
   connection string (found in the portal under **Connection strings** →
   ADO.NET). It'll look like:
   ```
   Server=tcp:<yourserver>.database.windows.net,1433;Database=JoycePortfolioDb;User ID=<user>;Password=<password>;Encrypt=True;TrustServerCertificate=False;
   ```
2. In the Azure Portal: **Create a resource** → **Web App**.
   - Runtime stack: **.NET 8**
   - Pricing plan: **F1 (Free)**
3. Deploy using the VS Code Azure extension ("Deploy to Web App"), or from the
   CLI:
   ```bash
   cd backend/Portfolio.Api
   dotnet publish -c Release -o ./publish
   az webapp up --name joyce-portfolio-api --resource-group <your-rg> --plan <your-plan> --sku F1
   ```
4. In the Web App's **Configuration**, add your connection string there too
   (safer than committing it), and set `Cors:AllowedOrigin` to your Static Web
   App URL from step 3 below (you'll get that URL first, then circle back).

Note: F1 apps sleep after ~20 minutes of inactivity and take a few seconds to
wake up on the next request — totally fine for a portfolio site.

## 3. Frontend — Azure Static Web Apps (free tier)

Easiest path: push this repo to GitHub, then connect it in the portal for
automatic CI/CD.

1. Push `joyce-portfolio/` to a GitHub repo.
2. In the Azure Portal: **Create a resource** → **Static Web App**.
   - Plan: **Free**
   - Connect your GitHub repo and branch.
   - Build details: App location `frontend/portfolio-app`, output location
     `dist/portfolio-app`.
3. Azure auto-generates a GitHub Actions workflow that builds and deploys on
   every push. First deploy takes a few minutes.
4. You'll get a free `*.azurestaticapps.net` URL with HTTPS included.
5. Before deploying, update `API_BASE` in
   `frontend/portfolio-app/src/app/core/services/portfolio.service.ts` to your
   deployed backend's URL (e.g. `https://joyce-portfolio-api.azurewebsites.net/api`).

## 4. Wire CORS together

Once both are deployed:
- Backend `appsettings.json` (or App Service Configuration) →
  `Cors:AllowedOrigin` = your Static Web Apps URL
- Frontend `portfolio.service.ts` → `API_BASE` = your App Service URL + `/api`

Redeploy both after this change.

## 5. Optional: custom domain later

When you're ready for a real domain (e.g. joycecoem.com), both Static Web Apps
and App Service support free custom domain mapping + free managed SSL
certificates — no extra cost beyond buying the domain itself.

## Cost check

All three services above are free-tier by design. The only way to incur
charges is manually switching a resource to a paid tier, or exceeding the free
database's monthly compute (100,000 vCore-seconds — generous for a portfolio
site's traffic). Set a spending alert in **Cost Management + Billing** just as
a safety net.
