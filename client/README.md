## SEF Website – Client (Next.js App)

This is the **frontend** application for the **Shah Emdadia Freelancers (SEF) Website**, built with **Next.js 15**, **React 19**, **Tailwind CSS**, and **TypeScript-ready tooling**.

The project is organized as a monorepo:

- `server/` – Node.js + Express + PostgreSQL backend API (see `server/README.md` and `API_README.md` for full API docs).
- `client/` – This Next.js application (landing site + role-based admin dashboard).

You are currently in the `client/` folder.

---

## 1. Project Setup & Running Locally

### 1.1. Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** (ships with Node.js) or **pnpm/yarn** if preferred

### 1.2. Install dependencies

From the `client` directory:

```bash
cd client
npm install
```

> The backend has its own dependencies – see `server/package.json` and `server/README.md`.

### 1.3. Environment variables

Create a `client/.env.local` file (not committed to git) and set:

```env
# Base URL of the backend API (update to your environment)
NEXT_PUBLIC_API_URL=http://localhost:5001/api

# Optional: Google Analytics (used in src/app/layout.js)
NEXT_PUBLIC_GoogleAnalitics_GID=G-XXXXXXXXXX
```

### 1.4. Start the frontend

From `client/`:

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

### 1.5. Start the backend (in another terminal)

From the repository root:

```bash
cd server
npm install
npm run dev
```

The backend will run on `http://localhost:5001` by default.

---

## 2. High-Level User Journey

This section explains the end-to-end journey a typical user goes through, from visiting the marketing site to using the role-based dashboard.

### 2.1. Visiting the Landing Page (`/`)

1. A user navigates to `https://your-domain.com` (or `http://localhost:3000` in development).
2. They land on the **Home** page (`/`), which showcases:
   - A **hero section** (“Let’s Build Your Career”) with a call-to-action.
   - **Featured courses** (e.g., Graphics Design, Web Development).
   - **About SEF**, **facilities**, **upcoming seminars**, and **consultancy** sections.
3. The global navigation (via `NavbarManager`) lets users move between:
   - `Home` (marketing landing)
   - `Courses`
   - `Bootcamps`
   - `Seminars`
   - `Reviews`
   - `Contact Us`
   - `Free Seminar`
   - `Free Consultancy`
   - `Admin Login` (`/admin/login`)

> All landing pages are implemented in `src/app` under `clientsite/`, `contact-us/`, `free-seminar/`, `free-consultancy/`, etc.

---

## 3. Authentication & Roles (High-Level)

> The UI and routing for roles are implemented. The actual login & token validation will be wired to the backend later via the API layer (`src/lib/api`).

### 3.1. Logging in

1. From any page, the user clicks **“Admin Login”**, which navigates to `/admin/login`.
2. On `/admin/login`, the user enters their **email** and **password**.
3. Once your backend is connected:
   - The login form will call an API (e.g. `POST /api/auth/login`).
   - On success, you will:
     - Store the returned token (e.g. in `localStorage` or cookies).
     - Store the user object and `role` using the `AuthProvider` (see below).
4. After login, the user is redirected to the main dashboard route (`/dashboard`).

### 3.2. Auth state & role storage

- The file `src/context/AuthContext.jsx` defines:
  - `AuthProvider` – wraps the dashboard and exposes auth state.
  - `useAuth()` – hook to access `{ user, role, isAuthenticated, setUser }`.
  - `ROLE` – constants for all supported roles:

    ```js
    export const ROLE = {
      SYSTEM_ADMIN: "systemAdmin",
      ADMIN: "admin",
      TEACHER: "teacher",
      STUDENT: "student",
      INVESTIGATOR: "banker",
    };
    ```

- The current user is also mirrored into `localStorage` under the key `authUser` so that state can be rehydrated on reload.

> When you implement the real login, call `setUser({ id, email, role, ... })` from `useAuth()` after a successful API response.

---

## 4. Dashboard Architecture & Role-Based Access

The dashboard lives entirely under the `/dashboard` route and is **role-aware**.

### 4.1. Dashboard route structure

Located at `client/src/app/dashboard`:

```text
dashboard/
├── layout.jsx           # Shared layout & role guard
├── page.jsx             # Main dashboard overview
├── components/
│   ├── DashboardSidebar.jsx  # Role-aware sidebar & navigation
│   └── RoleGuard.jsx         # Client-side route protection
├── systemAdmin/
│   └── page.jsx         # System Admin area
├── admin/
│   └── page.jsx         # Admin area
├── teacher/
│   └── page.jsx         # Teacher area
├── student/
│   └── page.jsx         # Student area
└── investigator/
    └── page.jsx         # Investigator area
```

There is also an **unauthorized** page at `src/app/unauthorized/page.jsx` which is used when a user is blocked from a route.

### 4.2. Roles & permissions (centralized)

All role logic is defined in `src/lib/auth/permissions.js`:

- `ROLE_CONFIG` maps each role to:
  - A human-readable label.
  - `allowedPrefixes`: which `/dashboard` subpaths are accessible.
  - `menu`: which sidebar links to show for that role.

For example:

```js
// Example for the Admin role:
ADMIN: {
  label: "Admin",
  allowedPrefixes: ["/dashboard", "/dashboard/admin", "/dashboard/student", "/dashboard/investigator"],
  menu: [
    { label: "Overview", path: "/dashboard" },
    { label: "Admin Area", path: "/dashboard/admin" },
    { label: "Student Area", path: "/dashboard/student" },
    { label: "Investigator Area", path: "/dashboard/investigator" },
  ],
},
```

Helper functions:

- `getRoleConfig(role)` – returns the config for a specific role.
- `getMenuForRole(role)` – returns the menu items to display for that role.
- `canAccessPath(role, pathname)` – returns `true` if a given role can access the current `/dashboard` path.

This centralization ensures **no duplicated permission logic** across pages.

### 4.3. RoleGuard (client-side protection)

`src/app/dashboard/components/RoleGuard.jsx`:

- Runs on the client (`"use client"`).
- Uses `useAuth()` to read `role` and `isAuthenticated`.
- Uses `usePathname()` and `canAccessPath()` to check if the current user can access the route.
- Behavior:
  - If **not authenticated**: redirects to `/unauthorized`.
  - If **authenticated but not allowed**: redirects to `/dashboard`.

This component wraps all dashboard pages via `dashboard/layout.jsx`, so any new route under `/dashboard` is automatically protected as long as it’s rendered inside this layout.

### 4.4. Sidebar & navigation per role

`src/app/dashboard/components/DashboardSidebar.jsx`:

- Reads `role` from `useAuth()`.
- Computes `menuItems = getMenuForRole(role)`.
- Always shows a link to `/dashboard` (“Overview”).
- Renders only the items specified in `menuItems`, for example:
  - **systemAdmin**: sees links for System Admin, Admin, Teacher, Student, Investigator, Reports, Financial, etc. (configure in `ROLE_CONFIG`).
  - **admin**: sees admin-specific links (e.g., Admin Area, Student management, Investigator management).
  - **teacher**: sees only the teacher-related links.
  - **student**: sees only their profile and exam-related pages.
  - **investigator**: sees only financial and query-related pages.
- Highlights the active link based on `usePathname()`.

To add real pages:

1. Create a new file, e.g. `client/src/app/dashboard/admin/users/page.jsx`.
2. Add a corresponding menu entry in `ROLE_CONFIG[ROLE.ADMIN].menu`:

   ```js
   { label: "Users", path: "/dashboard/admin/users" }
   ```

3. Ensure the path (`/dashboard/admin/users`) is included in the appropriate `allowedPrefixes` for the roles that should access it.

### 4.5. Example: Role-specific access

Given the current `ROLE_CONFIG`, the following rules apply:

- **systemAdmin**
  - Can access any route starting with `/dashboard` (full access).
  - Sees menu items for all sub-areas (systemAdmin, admin, teacher, student, investigator, etc.).
- **admin**
  - Can access `/dashboard`, `/dashboard/admin`, `/dashboard/student`, `/dashboard/investigator`.
  - Cannot access `/dashboard/systemAdmin` or `/dashboard/teacher` (will be redirected back to `/dashboard`).
- **teacher**
  - Can access `/dashboard` and `/dashboard/teacher` only.
  - Other `/dashboard/...` URLs redirect back to `/dashboard`.
- **student**
  - Can access `/dashboard` and `/dashboard/student` only.
- **investigator**
  - Can access `/dashboard` and `/dashboard/investigator` only.

---

## 5. API Layer (ready for integration)

The client includes a small, centralized API layer to make wiring backend endpoints straightforward.

Located in `client/src/lib/api/`:

- `client.js`:
  - Exports a configured `axios` instance:

    ```js
    import axios from "axios";

    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

    export const apiClient = axios.create({
      baseURL: API_BASE_URL,
      withCredentials: true,
    });

    apiClient.interceptors.request.use((config) => {
      if (typeof window !== "undefined") {
        const token = window.localStorage.getItem("authToken");
        if (token) {
          config.headers = config.headers || {};
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
      return config;
    });

    export const apiGet = (url, config) => apiClient.get(url, config);
    export const apiPost = (url, data, config) => apiClient.post(url, data, config);
    export const apiPut = (url, data, config) => apiClient.put(url, data, config);
    export const apiDelete = (url, config) => apiClient.delete(url, config);
    ```

- `auth.js`:

  ```js
  import { apiPost, apiGet } from "./client";

  const ENDPOINTS = {
    login: "/auth/login", // replace with real backend path
    me: "/auth/me",
  };

  export const login = (credentials) => apiPost(ENDPOINTS.login, credentials);

  export const getCurrentUser = () => apiGet(ENDPOINTS.me);
  ```

- `common.js`:
  - Generic helpers (`getResource`, `createResource`, `updateResource`, `deleteResource`) and placeholder functions like `getDashboardData`, `createItem`, etc., ready for you to point at real endpoints.

> When you implement the login page, import `login` from `src/lib/api/auth` and call it inside the `/admin/login` form submit handler. On success, call `setUser(...)` from `useAuth()` and store the token.

---

## 6. How to Extend the Dashboard

When you’re ready to add real features:

1. **Define the permission** in `src/lib/auth/permissions.js`:
   - Add a new path to the appropriate role’s `allowedPrefixes`.
   - Add a corresponding `menu` entry so it appears in the sidebar.
2. **Create the page** under `src/app/dashboard/<role>/<feature>/page.jsx`.
3. **Call backend APIs** from that page using the helpers in `src/lib/api`.
4. **Keep business logic in hooks/services**, UI in components, and keep role checks inside `permissions.js` / `RoleGuard` – this keeps the system maintainable.

---

## 7. Summary

- The **frontend** is a standalone Next.js app in `client/`.
- The **backend** is a separate Express/Node service in `server/`.
- The home/landing pages are public and static/dynamic as per `API_README.md`.
- The **dashboard** under `/dashboard` is fully wired for **role-based access**:
  - Centralized role/permission config.
  - `AuthProvider` + `useAuth` for user/role state.
  - `RoleGuard` for client-side route protection.
  - Role-aware `DashboardSidebar` and per-role pages (`systemAdmin`, `admin`, `teacher`, `student`, `investigator`).
- The **API layer** is ready for you to plug in backend endpoints without changing the core UI/UX.

Once you connect the login & API calls, users will be able to:

1. Visit the marketing site.
2. Log in via `/admin/login`.
3. Be routed to `/dashboard` with a role (systemAdmin/admin/teacher/student/investigator).
4. See only the dashboard sections they’re allowed to access.
5. Be prevented from accessing restricted routes, with clean redirects and an `/unauthorized` page as a fallback.


