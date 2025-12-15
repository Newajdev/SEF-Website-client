# API Analysis Report - SEF Website

## Executive Summary

This document provides a comprehensive analysis of the APIs required to make the SEF (Shah Emdadia Freelancers) website fully dynamic. Based on the current codebase analysis, **11 main API endpoints** are required, with additional supporting endpoints for full functionality.

---

## Total API Count

### Primary APIs: **11 Main Endpoints**
### Supporting APIs: **5 Additional Endpoints**
### **Total: 16 API Endpoints**

---

## API Categories

1. **Content Management APIs** (4 endpoints)
2. **User Interaction APIs** (5 endpoints)
3. **Course Management APIs** (3 endpoints)
4. **Analytics & Statistics APIs** (2 endpoints)
5. **Administration APIs** (2 endpoints)

---

## Detailed API Schema

### 1. Courses API

#### 1.1 GET `/api/courses`
**Description**: Fetch all courses for the home page courses section

**Request**:
```http
GET /api/courses
```

**Response**:
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Graphics Design",
      "slug": "graphics-design",
      "description": "Master the art of visual layout, typography, and color theory...",
      "image": "/asset/courses/graphics.jpg",
      "careerFocus": "Become a professional Graphic Designer",
      "gradient": "from-indigo-900 via-purple-900 to-indigo-800",
      "duration": "6 Months",
      "level": "Beginner to Advanced",
      "mode": "Online & Offline",
      "isActive": true,
      "createdAt": "2024-01-15T00:00:00Z",
      "updatedAt": "2024-01-15T00:00:00Z"
    }
  ],
  "total": 4
}
```

**Schema**:
```typescript
interface Course {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  careerFocus: string;
  gradient: string;
  duration: string;
  level: string;
  mode: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
```

---

#### 1.2 GET `/api/courses/:slug`
**Description**: Get detailed course information for course detail pages

**Request**:
```http
GET /api/courses/graphics-design
```

**Response**:
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Graphics Design",
    "slug": "graphics-design",
    "description": "Master Adobe Photoshop, Illustrator, and InDesign to create stunning visuals.",
    "fullDescription": "Transform your creative vision into professional designs...",
    "image": "/asset/courses/graphics.jpg",
    "duration": "6 Months",
    "level": "Beginner to Advanced",
    "mode": "Online & Offline",
    "lectures": "24+",
    "modules": [
      {
        "id": 1,
        "title": "Introduction to Design",
        "description": "Understanding design principles, color theory, and visual communication",
        "order": 1
      },
      {
        "id": 2,
        "title": "Photoshop Mastery",
        "description": "Advanced photo editing, manipulation, and digital painting techniques",
        "order": 2
      }
    ],
    "forWhom": "Beginners interested in design, marketing professionals, freelancers...",
    "careerOutcomes": [
      "Graphic Designer",
      "Brand Identity Designer",
      "Digital Illustrator"
    ],
    "isActive": true,
    "createdAt": "2024-01-15T00:00:00Z",
    "updatedAt": "2024-01-15T00:00:00Z"
  }
}
```

**Schema**:
```typescript
interface CourseModule {
  id: number;
  title: string;
  description: string;
  order: number;
}

interface CourseDetail extends Course {
  fullDescription: string;
  lectures: string;
  modules: CourseModule[];
  forWhom: string;
  careerOutcomes: string[];
}
```

---

#### 1.3 GET `/api/courses/:slug/reviews`
**Description**: Get reviews/testimonials for a specific course

**Request**:
```http
GET /api/courses/graphics-design/reviews?limit=10&page=1
```

**Response**:
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "fullName": "Rahman Ahmed",
      "courseName": "Graphics Design",
      "review": "This course completely changed my career path...",
      "photoUrl": "https://example.com/photo.jpg",
      "rating": 5,
      "role": "Graphics Designer",
      "createdAt": "2024-01-20T00:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 25,
    "totalPages": 3
  }
}
```

**Schema**:
```typescript
interface CourseReview {
  id: number;
  fullName: string;
  courseName: string;
  review: string;
  photoUrl: string;
  rating: number;
  role?: string;
  createdAt: string;
}
```

---

### 2. Reviews API

#### 2.1 GET `/api/reviews`
**Description**: Get all reviews (for reviews page)

**Request**:
```http
GET /api/reviews?courseId=&limit=20&page=1
```

**Response**:
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "fullName": "Rahman Ahmed",
      "courseName": "Graphics Design",
      "review": "This course completely changed my career path...",
      "photoUrl": "https://example.com/photo.jpg",
      "createdAt": "2024-01-20T00:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "totalPages": 8
  }
}
```

---

#### 2.2 POST `/api/reviews`
**Description**: Submit a new review (already exists)

**Request**:
```http
POST /api/reviews
Content-Type: application/json

{
  "photoUrl": "https://example.com/photo.jpg",
  "fullName": "John Doe",
  "courseName": "Graphics Design",
  "review": "Amazing course with great instructors!"
}
```

**Response**:
```json
{
  "success": true,
  "message": "John Doe your review is added succesfully..",
  "data": {
    "id": 151,
    "fullName": "John Doe",
    "courseName": "Graphics Design",
    "review": "Amazing course with great instructors!",
    "photoUrl": "https://example.com/photo.jpg",
    "createdAt": "2024-01-25T00:00:00Z"
  }
}
```

**Schema**:
```typescript
interface CreateReviewRequest {
  photoUrl: string;
  fullName: string;
  courseName: string;
  review: string;
}
```

---

### 3. Statistics API

#### 3.1 GET `/api/statistics`
**Description**: Get website statistics for the About section

**Request**:
```http
GET /api/statistics
```

**Response**:
```json
{
  "success": true,
  "data": {
    "totalStudents": 10000,
    "successfulStudents": 8500,
    "successRate": 95,
    "expertMentors": 50,
    "totalCourses": 4,
    "totalReviews": 150,
    "lastUpdated": "2024-01-25T00:00:00Z"
  }
}
```

**Schema**:
```typescript
interface Statistics {
  totalStudents: number;
  successfulStudents: number;
  successRate: number;
  expertMentors: number;
  totalCourses: number;
  totalReviews: number;
  lastUpdated: string;
}
```

---

### 4. Facilities API

#### 4.1 GET `/api/facilities`
**Description**: Get all facilities/services

**Request**:
```http
GET /api/facilities
```

**Response**:
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Live Interactive Classes",
      "description": "Join real-time sessions with industry experts and get instant feedback.",
      "icon": "FaVideo",
      "color": "from-blue-500 to-cyan-500",
      "order": 1,
      "isActive": true
    },
    {
      "id": 2,
      "title": "Recorded Class Access",
      "description": "Never miss a lesson with 24/7 access to all recorded sessions.",
      "icon": "FaChalkboardTeacher",
      "color": "from-purple-500 to-pink-500",
      "order": 2,
      "isActive": true
    }
  ],
  "total": 8
}
```

**Schema**:
```typescript
interface Facility {
  id: number;
  title: string;
  description: string;
  icon: string; // React icon name
  color: string; // Tailwind gradient classes
  order: number;
  isActive: boolean;
}
```

---

### 5. Contact Form API

#### 5.1 POST `/api/contact`
**Description**: Submit contact form

**Request**:
```http
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "mobile": "+8801700000000",
  "message": "I would like to know more about your courses."
}
```

**Response**:
```json
{
  "success": true,
  "message": "Message sent! We'll get back to you soon.",
  "data": {
    "id": 123,
    "name": "John Doe",
    "mobile": "+8801700000000",
    "message": "I would like to know more about your courses.",
    "status": "pending",
    "createdAt": "2024-01-25T00:00:00Z"
  }
}
```

**Schema**:
```typescript
interface ContactRequest {
  name: string;
  mobile: string;
  message: string;
}

interface ContactResponse {
  id: number;
  name: string;
  mobile: string;
  message: string;
  status: "pending" | "read" | "replied";
  createdAt: string;
}
```

---

### 6. Seminar Registration API

#### 6.1 GET `/api/seminars`
**Description**: Get available seminars

**Request**:
```http
GET /api/seminars?upcoming=true
```

**Response**:
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Web Development Career Path",
      "description": "Learn about career opportunities in web development",
      "date": "2024-02-15T10:00:00Z",
      "duration": "2 hours",
      "location": "Online",
      "availableSeats": 50,
      "isActive": true
    }
  ]
}
```

**Schema**:
```typescript
interface Seminar {
  id: number;
  title: string;
  description: string;
  date: string; // ISO 8601
  duration: string;
  location: string;
  availableSeats: number;
  isActive: boolean;
}
```

---

#### 6.2 POST `/api/seminars/register`
**Description**: Register for a seminar

**Request**:
```http
POST /api/seminars/register
Content-Type: application/json

{
  "name": "John Doe",
  "mobile": "+8801700000000",
  "email": "john@example.com",
  "gender": "Male",
  "seminarId": 1,
  "receiveOffers": true
}
```

**Response**:
```json
{
  "success": true,
  "message": "Your seminar booking has been confirmed. We'll send you the details soon.",
  "data": {
    "id": 456,
    "name": "John Doe",
    "seminarTitle": "Web Development Career Path",
    "registrationDate": "2024-01-25T00:00:00Z",
    "status": "confirmed"
  }
}
```

**Schema**:
```typescript
interface SeminarRegistrationRequest {
  name: string;
  mobile: string;
  email: string;
  gender: "Male" | "Female";
  seminarId: number;
  receiveOffers: boolean;
}
```

---

### 7. Consultancy Booking API

#### 7.1 POST `/api/consultancy/book`
**Description**: Book a free consultancy session

**Request**:
```http
POST /api/consultancy/book
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "mobile": "+8801700000000",
  "gender": "Male",
  "type": "Online",
  "preferredDate": "2024-02-20"
}
```

**Response**:
```json
{
  "success": true,
  "message": "We have received your consultancy request. Our team will contact you soon.",
  "data": {
    "id": 789,
    "name": "John Doe",
    "email": "john@example.com",
    "type": "Online",
    "preferredDate": "2024-02-20",
    "status": "pending",
    "createdAt": "2024-01-25T00:00:00Z"
  }
}
```

**Schema**:
```typescript
interface ConsultancyBookingRequest {
  name: string;
  email: string;
  mobile: string;
  gender: "Male" | "Female";
  type: "Online" | "Offline";
  preferredDate: string; // YYYY-MM-DD format
}
```

---

### 8. Admission API (Already Exists)

#### 8.1 POST `/api/admission/new-admission`
**Description**: Submit student admission form (already implemented)

**Request Schema**:
```typescript
interface AdmissionRequest {
  photoUrl: string;
  coursName: string;
  courseType: string;
  englishName: string;
  banglaName: string;
  studPhone: string;
  email: string;
  gender: string;
  bloodGroup: string;
  nid: string;
  gurdName: string;
  gurdRelation: string;
  gurdPhone: string;
  fatherName: string;
  motherName: string;
  fullAddress: string;
  paymentDetails: {
    paymentMethod: string;
    accountNumber: string;
    amount: string;
    transID: string;
    referance: string;
  };
}
```

---

### 9. About Content API

#### 9.1 GET `/api/about`
**Description**: Get about section content

**Request**:
```http
GET /api/about
```

**Response**:
```json
{
  "success": true,
  "data": {
    "title": "About SEF",
    "subtitle": "Empowering individuals with expert-led skills for a successful career in tech",
    "description": "Shah Emdadia Freelancers (SEF) is a premier IT training institute...",
    "bannerImage": "/asset/background.png",
    "features": [
      {
        "id": 1,
        "title": "Experienced Mentors",
        "description": "Learn from industry experts with years of real-world experience",
        "icon": "FaChalkboardTeacher"
      }
    ]
  }
}
```

**Schema**:
```typescript
interface AboutContent {
  title: string;
  subtitle: string;
  description: string;
  bannerImage: string;
  features: {
    id: number;
    title: string;
    description: string;
    icon: string;
  }[];
}
```

---

### 10. Home Page Content API

#### 10.1 GET `/api/home`
**Description**: Get all home page content in one request (optimization)

**Request**:
```http
GET /api/home
```

**Response**:
```json
{
  "success": true,
  "data": {
    "courses": [...],
    "statistics": {...},
    "facilities": [...],
    "aboutPreview": {...}
  }
}
```

---

## Database Schema Recommendations

### Courses Table
```sql
CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  full_description TEXT,
  image VARCHAR(500),
  career_focus TEXT,
  gradient VARCHAR(100),
  duration VARCHAR(50),
  level VARCHAR(100),
  mode VARCHAR(100),
  lectures VARCHAR(50),
  for_whom TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Course Modules Table
```sql
CREATE TABLE course_modules (
  id SERIAL PRIMARY KEY,
  course_id INTEGER REFERENCES courses(id),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  order_number INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Course Career Outcomes Table
```sql
CREATE TABLE course_career_outcomes (
  id SERIAL PRIMARY KEY,
  course_id INTEGER REFERENCES courses(id),
  outcome VARCHAR(255) NOT NULL,
  order_number INTEGER
);
```

### Reviews Table
```sql
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  course_name VARCHAR(255) NOT NULL,
  review TEXT NOT NULL,
  photo_url VARCHAR(500),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  role VARCHAR(255),
  is_approved BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Statistics Table
```sql
CREATE TABLE statistics (
  id SERIAL PRIMARY KEY,
  total_students INTEGER DEFAULT 0,
  successful_students INTEGER DEFAULT 0,
  success_rate DECIMAL(5,2) DEFAULT 0,
  expert_mentors INTEGER DEFAULT 0,
  last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Facilities Table
```sql
CREATE TABLE facilities (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  icon VARCHAR(100),
  color VARCHAR(100),
  order_number INTEGER,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Contact Messages Table
```sql
CREATE TABLE contact_messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  mobile VARCHAR(50) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Seminar Registrations Table
```sql
CREATE TABLE seminar_registrations (
  id SERIAL PRIMARY KEY,
  seminar_id INTEGER,
  name VARCHAR(255) NOT NULL,
  mobile VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL,
  gender VARCHAR(20),
  receive_offers BOOLEAN DEFAULT false,
  status VARCHAR(20) DEFAULT 'confirmed',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Consultancy Bookings Table
```sql
CREATE TABLE consultancy_bookings (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  mobile VARCHAR(50) NOT NULL,
  gender VARCHAR(20),
  type VARCHAR(20) NOT NULL,
  preferred_date DATE,
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## API Implementation Priority

### Phase 1 (Critical - Week 1)
1. ✅ GET `/api/courses` - Home page courses
2. ✅ GET `/api/courses/:slug` - Course detail pages
3. ✅ GET `/api/statistics` - About section stats
4. ✅ POST `/api/contact` - Contact form

### Phase 2 (High Priority - Week 2)
5. ✅ GET `/api/facilities` - Facilities section
6. ✅ GET `/api/reviews` - Reviews page
7. ✅ GET `/api/courses/:slug/reviews` - Course testimonials
8. ✅ POST `/api/seminars/register` - Seminar registration

### Phase 3 (Medium Priority - Week 3)
9. ✅ GET `/api/seminars` - Seminars list
10. ✅ POST `/api/consultancy/book` - Consultancy booking
11. ✅ GET `/api/about` - About content

### Phase 4 (Optimization - Week 4)
12. ✅ GET `/api/home` - Combined home page data
13. Admin endpoints for content management

---

## Authentication & Authorization

### Public Endpoints (No Auth Required)
- All GET endpoints
- POST `/api/contact`
- POST `/api/reviews`
- POST `/api/seminars/register`
- POST `/api/consultancy/book`
- POST `/api/admission/new-admission`

### Admin Endpoints (Auth Required)
- POST/PUT/DELETE `/api/courses`
- POST/PUT/DELETE `/api/facilities`
- PUT `/api/statistics`
- PUT `/api/about`
- GET `/api/contact` (admin view)
- GET `/api/seminars/registrations` (admin view)
- GET `/api/consultancy/bookings` (admin view)

---

## Error Handling

All APIs should follow this error response format:

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid email format",
    "details": {
      "field": "email",
      "value": "invalid-email"
    }
  }
}
```

### Standard HTTP Status Codes
- `200` - Success
- `201` - Created
- `400` - Bad Request (validation errors)
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

---

## Rate Limiting Recommendations

- **Public GET endpoints**: 100 requests/minute per IP
- **Public POST endpoints**: 10 requests/minute per IP
- **Admin endpoints**: 1000 requests/minute per user

---

## Caching Strategy

- **Courses list**: Cache for 1 hour
- **Course details**: Cache for 1 hour
- **Statistics**: Cache for 24 hours
- **Facilities**: Cache for 24 hours
- **Reviews**: Cache for 30 minutes

---

## API Base URL

```
Production: https://sef-server.onrender.com/api
Development: http://localhost:5000/api
```

---

## Notes

1. All date fields should use ISO 8601 format
2. All image URLs should be absolute URLs or relative paths from public directory
3. Implement pagination for list endpoints (default: 20 items per page)
4. Implement filtering and sorting for list endpoints
5. Add request validation using a validation library
6. Implement proper CORS settings
7. Add API versioning (e.g., `/api/v1/courses`)
8. Implement comprehensive logging
9. Add API documentation using Swagger/OpenAPI
10. Implement database indexing for frequently queried fields

---

## Summary

- **Total API Endpoints**: 16
- **GET Endpoints**: 9
- **POST Endpoints**: 6
- **PUT/DELETE Endpoints**: 1 (Admin operations)
- **Database Tables**: 9 main tables
- **Estimated Development Time**: 3-4 weeks
- **Priority**: Critical endpoints first, then optimization

---

**Last Updated**: January 2024
**Document Version**: 1.0

