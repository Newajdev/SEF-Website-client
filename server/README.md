# SEF Backend API

Node.js + Express service that powers the SEF admin dashboard and public forms.

## Tech stack

- Express.js with modular routers
- PostgreSQL (Neon) via `pg`
- JWT authentication + RBAC
- bcrypt password hashing

## Getting started

1. Copy `server/env.sample` to `server/.env` and update the values:
   - `DATABASE_URL` (connection string already provided)
   - `JWT_SECRET` (generate a strong value)
   - `ADMIN_REGISTRATION_KEY` (used once to bootstrap a superadmin if needed)
2. Install dependencies:

```bash
cd server
npm install
```

3. Apply the schema:

```bash
psql "$DATABASE_URL" -f db/schema.sql
```

4. Run the API:

```bash
npm run dev
```

## API overview

| Method | Route | Description | Roles |
| --- | --- | --- | --- |
| POST | `/api/auth/login` | Login with email/password | public |
| POST | `/api/auth/register-admin` | Create admin/mod via token or bootstrap key | superadmin/admin or key |
| GET | `/api/auth/me` | Return current user | any authenticated |
| POST | `/api/admin/add-admin` | Create admin/moderator | superadmin/admin (logic enforced) |
| GET | `/api/admin/admins` | List staff | superadmin/admin |
| GET/POST/... | `/api/admissions` | Manage admission leads | moderators+ |
| GET/POST/... | `/api/contact` | Manage contact messages | moderators+ |
| GET/POST/... | `/api/seminars` | Manage seminar registrations | moderators+ |
| GET/POST/... | `/api/consultancy` | Manage consultancy requests | moderators+ |
| GET/POST/... | `/api/courses` | CRUD courses | admin+ |
| GET/POST/... | `/api/facilities` | CRUD facilities | admin+ |

All dashboard routes require a Bearer token issued by `/api/auth/login`.

