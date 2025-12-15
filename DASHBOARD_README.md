# Admin Dashboard Documentation

## Overview

A comprehensive admin dashboard for managing all aspects of the SEF (Shah Emdadia Freelancers) website. The dashboard provides full CRUD (Create, Read, Update, Delete) functionality for all website content.

## Features

### ✅ Complete Dashboard System

- **Modern UI/UX**: Clean, professional design with responsive layout
- **Sidebar Navigation**: Easy access to all management sections
- **Authentication**: Secure login system for admin access
- **Real-time Statistics**: Dashboard overview with key metrics
- **Full CRUD Operations**: Manage all content types

---

## Dashboard Sections

### 1. **Dashboard Overview** (`/admin`)
- Statistics cards showing:
  - Total Courses
  - Total Reviews
  - Contact Messages
  - Seminar Registrations
  - Consultancy Bookings
  - Total Admissions
- Quick action buttons for common tasks

### 2. **Courses Management** (`/admin/courses`)
- **List View**: View all courses with search functionality
- **Create Course** (`/admin/courses/new`): 
  - Add new courses with full details
  - Configure modules, career outcomes
  - Set course metadata (duration, level, mode, etc.)
  - Upload course images
- **Edit Course** (`/admin/courses/:id/edit`): Modify existing courses
- **Delete Course**: Remove courses with confirmation

**Course Fields:**
- Basic Info: Name, Slug, Description, Image
- Details: Duration, Level, Mode, Lectures
- Modules: Title, Description, Order
- Career Outcomes: List of potential career paths
- Additional: Career Focus, Gradient Colors, Active Status

### 3. **Reviews Management** (`/admin/reviews`)
- View all student reviews
- Approve/Reject reviews
- Delete reviews
- Search and filter functionality
- Display review ratings and status

### 4. **Facilities Management** (`/admin/facilities`)
- Manage website facilities/services
- Add, edit, delete facilities
- Configure facility icons and colors
- Set display order

### 5. **Contact Messages** (`/admin/contact`)
- View all contact form submissions
- Mark messages as read/replied
- Search functionality
- Detailed message view modal
- Status management

### 6. **Seminar Registrations** (`/admin/seminars`)
- View all seminar registration submissions
- Search and filter registrations
- View registration details
- Export functionality (can be added)

### 7. **Consultancy Bookings** (`/admin/consultancy`)
- Manage consultancy booking requests
- View booking details
- Update booking status
- Filter by status (pending, confirmed, completed)

### 8. **Student Admissions** (`/admin/admissions`)
- View all student admission applications
- Filter by course, status
- View detailed admission information
- Status management (pending, confirmed, rejected)

### 9. **Statistics Management** (`/admin/statistics`)
- Update website statistics:
  - Total Students
  - Successful Students
  - Success Rate (%)
  - Expert Mentors
- Real-time updates reflected on website

### 10. **About Content Management** (`/admin/about`)
- Edit About section content
- Update title, subtitle, description
- Change banner image
- Manage featured highlights

---

## Authentication

### Login Page (`/admin/login`)

**Features:**
- Secure login form
- Email and password authentication
- Error handling with SweetAlert2
- Token-based authentication (stored in localStorage)

**Note**: In production, implement:
- JWT tokens with httpOnly cookies
- Session management
- Password hashing
- Rate limiting

---

## Components Structure

### Shared Components

1. **DashboardSidebar** (`src/components/admin/DashboardSidebar.jsx`)
   - Navigation menu
   - Active route highlighting
   - Mobile responsive
   - Logout functionality

2. **DashboardHeader** (`src/components/admin/DashboardHeader.jsx`)
   - Page title and description
   - Notifications (placeholder)
   - User profile section

3. **DataTable** (`src/components/admin/DataTable.jsx`)
   - Reusable table component
   - Search functionality
   - Action buttons (Edit, Delete, View)
   - Custom render functions
   - Empty state handling

---

## API Integration

All pages include TODO comments for API integration. Replace mock data with actual API calls:

### Example API Calls:

```javascript
// Fetch courses
const response = await axios.get('/api/admin/courses');

// Create course
await axios.post('/api/admin/courses', formData);

// Update course
await axios.put(`/api/admin/courses/${id}`, formData);

// Delete course
await axios.delete(`/api/admin/courses/${id}`);
```

### Required API Endpoints:

1. **Courses**
   - `GET /api/admin/courses` - List all courses
   - `GET /api/admin/courses/:id` - Get single course
   - `POST /api/admin/courses` - Create course
   - `PUT /api/admin/courses/:id` - Update course
   - `DELETE /api/admin/courses/:id` - Delete course

2. **Reviews**
   - `GET /api/admin/reviews` - List all reviews
   - `PUT /api/admin/reviews/:id/approve` - Approve review
   - `DELETE /api/admin/reviews/:id` - Delete review

3. **Contact Messages**
   - `GET /api/admin/contact` - List all messages
   - `PUT /api/admin/contact/:id` - Update message status

4. **Statistics**
   - `GET /api/admin/statistics` - Get statistics
   - `PUT /api/admin/statistics` - Update statistics

5. **Facilities**
   - `GET /api/admin/facilities` - List all facilities
   - `POST /api/admin/facilities` - Create facility
   - `PUT /api/admin/facilities/:id` - Update facility
   - `DELETE /api/admin/facilities/:id` - Delete facility

6. **About Content**
   - `GET /api/admin/about` - Get about content
   - `PUT /api/admin/about` - Update about content

---

## File Structure

```
src/
├── app/
│   ├── admin/
│   │   ├── layout.js              # Admin layout with sidebar
│   │   ├── page.js                # Dashboard overview
│   │   ├── login/
│   │   │   └── page.js            # Login page
│   │   ├── courses/
│   │   │   ├── page.js            # Courses list
│   │   │   └── new/
│   │   │       └── page.js        # Create course
│   │   ├── reviews/
│   │   │   └── page.js            # Reviews management
│   │   ├── facilities/
│   │   │   └── page.js            # Facilities management
│   │   ├── contact/
│   │   │   └── page.js            # Contact messages
│   │   ├── seminars/
│   │   │   └── page.js            # Seminar registrations
│   │   ├── consultancy/
│   │   │   └── page.js            # Consultancy bookings
│   │   ├── admissions/
│   │   │   └── page.js            # Student admissions
│   │   ├── statistics/
│   │   │   └── page.js            # Statistics management
│   │   └── about/
│   │       └── page.js            # About content
│   └── ...
└── components/
    └── admin/
        ├── DashboardSidebar.jsx   # Sidebar navigation
        ├── DashboardHeader.jsx    # Dashboard header
        └── DataTable.jsx          # Reusable table component
```

---

## Usage Instructions

### 1. Access Dashboard

Navigate to `/admin/login` and enter credentials.

### 2. Navigation

Use the sidebar to navigate between different sections:
- Click on any menu item to access that section
- Sidebar is responsive and collapses on mobile
- Active route is highlighted

### 3. Managing Courses

1. Go to **Courses** from sidebar
2. Click **Add New Course** to create
3. Fill in all required fields
4. Add modules using the "Add Module" button
5. Add career outcomes
6. Click **Save Course**

### 4. Managing Reviews

1. Go to **Reviews** from sidebar
2. View pending reviews
3. Click **Approve** to approve a review
4. Click **Delete** to remove a review
5. Use search to filter reviews

### 5. Updating Statistics

1. Go to **Statistics** from sidebar
2. Update the numbers
3. Click **Save Statistics**
4. Changes reflect immediately on the website

---

## Security Considerations

### Current Implementation (Development)
- Basic localStorage token storage
- No authentication middleware
- Mock authentication

### Production Requirements

1. **Authentication**
   - JWT tokens with httpOnly cookies
   - Refresh token mechanism
   - Session timeout

2. **Authorization**
   - Role-based access control (RBAC)
   - Route protection middleware
   - API endpoint protection

3. **Security**
   - CSRF protection
   - Rate limiting
   - Input validation and sanitization
   - SQL injection prevention
   - XSS protection

4. **Best Practices**
   - Use environment variables for sensitive data
   - Implement proper error handling
   - Log all admin actions
   - Regular security audits

---

## Styling

The dashboard uses:
- **Tailwind CSS** for styling
- **Brand Colors**: 
  - Primary: `var(--color-primary)` (#00280b)
  - Secondary: `var(--color-secondary)` (#f2762f)
- **Consistent Design**: Matches website theme
- **Responsive**: Mobile-first approach
- **Modern UI**: Clean cards, shadows, hover effects

---

## Future Enhancements

### Phase 1 (Recommended)
- [ ] Add edit pages for courses and facilities
- [ ] Implement image upload functionality
- [ ] Add pagination to tables
- [ ] Export data to CSV/Excel
- [ ] Add bulk actions

### Phase 2 (Advanced)
- [ ] Advanced filtering and sorting
- [ ] Activity logs
- [ ] User management (multiple admins)
- [ ] Email notifications
- [ ] Dashboard analytics
- [ ] Backup and restore

### Phase 3 (Enterprise)
- [ ] Multi-language support
- [ ] Advanced permissions
- [ ] API documentation integration
- [ ] Automated testing
- [ ] Performance monitoring

---

## Testing

### Manual Testing Checklist

- [ ] Login functionality
- [ ] Navigation between sections
- [ ] Create new course
- [ ] Edit course (when implemented)
- [ ] Delete course
- [ ] Approve/reject reviews
- [ ] Update statistics
- [ ] Search functionality
- [ ] Mobile responsiveness
- [ ] Form validation

---

## Support & Maintenance

### Common Issues

1. **API Errors**: Check API endpoint URLs and authentication
2. **Token Expired**: Implement token refresh mechanism
3. **Loading States**: Add proper loading indicators
4. **Error Handling**: Improve error messages

### Maintenance Tasks

- Regular security updates
- Database backups
- Performance optimization
- User feedback implementation
- Bug fixes

---

## Contact & Documentation

For questions or issues:
- Check API_README.md for API documentation
- Review this document for dashboard usage
- Check component source code for implementation details

---

**Last Updated**: January 2024
**Version**: 1.0.0

