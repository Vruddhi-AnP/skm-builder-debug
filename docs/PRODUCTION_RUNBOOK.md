# SKM Platform Production Runbook

## 1. Scope

This runbook covers production setup, deployment prerequisites, database release safety, Admin provisioning, health verification, rollback guidance, and post-deployment smoke checks for the existing SKM MVP.

No production hosting provider is currently defined in the repository. Provider-specific deployment URLs, HTTPS termination, runtime process configuration, and final production smoke results must be recorded after the deployment target is confirmed.

## 2. Runtime Requirements

- Node.js >=20.9.0
- pnpm 9.0.0
- PostgreSQL
- Production Web environment
- Production API environment
- Production PostgreSQL database

Install dependencies from the repository root:

```bash
pnpm install --frozen-lockfile
```

Generate the Prisma client:

```bash
pnpm db:generate
```

## 3. API Environment

Required API environment variables:

```text
DATABASE_URL
JWT_SECRET
NODE_ENV
FRONTEND_URL
```

Optional:

```text
PORT
```

Production requirements:

- `NODE_ENV=production`
- `JWT_SECRET` must contain at least 32 characters.
- `DATABASE_URL` must point to the intended production PostgreSQL database.
- `FRONTEND_URL` must be the exact deployed frontend HTTP/HTTPS origin, for example `https://app.example.com`.
- Do not include secrets in source control.
- Do not commit the real `.env` file.

Use `apps/api/.env.example` only as a template.

## 4. Web Environment

Required Web environment variable:

```text
NEXT_PUBLIC_API_URL
```

Example:

```text
NEXT_PUBLIC_API_URL=https://api.example.com/api
```

Requirements:

- The value must point to the deployed API.
- The value must include the `/api` prefix.
- `NEXT_PUBLIC_API_URL` must be configured before the production Web build.
- Changes to `NEXT_PUBLIC_*` values require rebuilding the Web application.
- Never place secrets in `NEXT_PUBLIC_*` variables because they are exposed to browser code.
- Do not commit the real `.env.local` file.

Use `apps/web/.env.example` only as a template.

## 5. Database Migration

Before applying production migrations, take a verified database backup.

Apply committed Prisma migrations with:

```bash
pnpm --filter api db:deploy
```

Do not run `prisma migrate dev` against production.

Do not manually edit the production schema or the `_prisma_migrations` table.

Verify migration state after deployment:

```bash
pnpm --filter api exec prisma migrate status
```

Expected result:

```text
Database schema is up to date!
```

## 6. Build

Build the API:

```bash
pnpm --filter api build
```

Build the Web application:

```bash
pnpm --filter web build
```

Or build the complete workspace:

```bash
pnpm build
```

## 7. Start

Start the compiled API:

```bash
pnpm --filter api start:prod
```

Start the production Web application:

```bash
pnpm --filter web start
```

Actual process supervision, public ports, domains, and HTTPS termination depend on the selected production hosting platform.

## 8. Admin Provisioning

Admin accounts must not be created through the public signup API.

Required temporary provisioning variables:

```text
ADMIN_EMAIL
ADMIN_PASSWORD
```

Optional:

```text
ADMIN_NAME
```

`ADMIN_PASSWORD` must contain at least 12 characters.

After configuring those variables securely in the deployment environment, run:

```bash
pnpm --filter api provision:admin
```

The provisioning operation is idempotent. Running it again for the same Admin email does not create a duplicate Admin account.

Do not commit Admin credentials or retain temporary provisioning passwords in source control.

## 9. Health Verification

After starting the API, verify:

```text
GET /api/health
```

Expected application state:

```text
status = ok
database = connected
```

When:

```text
NODE_ENV=production
```

Swagger documentation at `/docs` is disabled.

## 10. Backup

Before applying a production migration, create a PostgreSQL custom-format backup or use the approved equivalent backup mechanism provided by the production database platform.

PostgreSQL CLI example:

```bash
pg_dump --format=custom --file=skm-predeploy.dump "<DATABASE_URL>"
```

Replace `<DATABASE_URL>` securely at execution time.

Store production backups only in the approved secure backup location.

Do not commit database backup files to the repository.

## 11. Restore Verification

Restore a backup into a separate verification database first. Do not overwrite the active production database as the first restore test.

Example:

```bash
createdb skm_restore_test
pg_restore --exit-on-error --no-owner --no-privileges --dbname=skm_restore_test skm-predeploy.dump
```

Point a temporary `DATABASE_URL` to the restored database and verify:

- database connectivity
- Prisma migration state
- expected application records
- application health where applicable

Only perform a production database cutover through the approved deployment/database procedure.

## 12. Rollback Approach

### Application rollback

1. Identify the previous known-good Git SHA.
2. Build and redeploy that SHA.
3. Verify `/api/health`.
4. Run the production smoke checklist.

### Database rollback

Prisma Migrate does not provide an automatic production `down` migration workflow.

Therefore:

1. Take and verify a backup before production schema migration.
2. Avoid destructive schema changes unless a specific migration rollback plan has been reviewed.
3. If restoration is required, restore the pre-deployment backup into a controlled database environment first.
4. Validate connectivity, migration metadata, and required application records.
5. Perform production cutover only through the approved database/deployment process.
6. Do not manually modify `_prisma_migrations`.

## 13. Production Smoke Checklist

After deployment, use fresh test accounts and verify:

- Founder signup and login
- consent flow
- Founder profile creation
- Startup profile creation
- Builder save and resume
- logout/login persistence
- readiness score
- blueprint generation/export
- Advisor discovery
- consultation request creation
- duplicate/open consultation behavior
- Admin consultation queue
- Admin consultation status update
- Founder sees persisted consultation status
- separate Founder account isolation
- separate Advisor account isolation

Record pass/fail evidence for the final handover.

## 14. Deployment-Specific Details

The following values cannot be finalized until the production hosting target is confirmed:

- production Web URL
- production API URL
- production PostgreSQL host/service
- HTTPS termination
- process/runtime configuration
- production environment variable storage
- deployment command/process
- final production smoke results

These details must be added to the final handover once the deployment environment is available.

## 15. Release Handover Evidence

The final handover should include:

- release branch
- final Git SHA
- lint result
- test result
- API build result
- Web build result
- migration status
- production deployment URLs
- environment/setup details
- Admin provisioning result
- backup/restore verification
- rollback approach
- regression results
- production smoke results
- known issues, limitations, or blockers
