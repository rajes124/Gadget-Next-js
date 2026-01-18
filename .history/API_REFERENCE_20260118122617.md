# API Endpoints Reference - GadgetHub Backend

## Base URL
```
http://localhost:5000/api
```

---

## Authentication Endpoints

### 1. Register with Email/Password
**POST** `/auth/register`

**Request:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "displayName": "John Doe"
}
```

**Response (201):**
```json
{
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "email": "user@example.com",
    "displayName": "John Doe"
  }
}
```

---

### 2. Login with Email/Password
**POST** `/auth/login`

**Request:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response (200):**
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "email": "user@example.com",
    "displayName": "John Doe"
  }
}
```

---

### 3. Google Sign-In/Sign-Up ⭐ NEW
**POST** `/auth/google`

**Request:**
```json
{
  "email": "user@gmail.com",
  "displayName": "John Doe",
  "googleId": "118247953845098765",
  "photoURL": "https://lh3.googleusercontent.com/a/..."
}
```

**Response (200):**
```json
{
  "message": "Google sign-in successful",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "email": "user@gmail.com",
    "displayName": "John Doe",
    "photoURL": "https://lh3.googleusercontent.com/a/...",
    "createdAt": "2024-01-18T10:30:00Z"
  }
}
```

**Note:** Creates new user if doesn't exist, updates if exists

---

### 4. Get Current User
**GET** `/auth/me`

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "email": "user@example.com",
  "displayName": "John Doe",
  "photoURL": "https://...",
  "googleId": "118247...",
  "createdAt": "2024-01-18T10:30:00Z",
  "updatedAt": "2024-01-18T10:30:00Z"
}
```

---

### 5. Update User Profile ⭐ NEW
**POST** `/users/update`

**Request:**
```json
{
  "email": "user@example.com",
  "displayName": "Jane Doe"
}
```

**Response (200):**
```json
{
  "message": "User updated successfully",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "email": "user@example.com",
    "displayName": "Jane Doe",
    "photoURL": "https://..."
  }
}
```

---

## Items Endpoints

### 1. Get All Items
**GET** `/items`

**Query Parameters:**
```
?category=Smartphones
?search=iPhone
?category=Smartphones&search=Pro
```

**Response (200):**
```json
[
  {
    "_id": "507f1f77bcf86cd799439012",
    "name": "iPhone 15 Pro",
    "price": 1500,
    "category": "Smartphones",
    "description": "Latest Apple flagship",
    "imageUrl": "https://images.unsplash.com/...",
    "addedBy": "user@example.com",
    "rating": 4.5,
    "reviews": 12,
    "createdAt": "2024-01-18T10:30:00Z",
    "updatedAt": "2024-01-18T10:30:00Z"
  }
]
```

---

### 2. Get Single Item
**GET** `/items/:id`

**Example:**
```
GET /items/507f1f77bcf86cd799439012
```

**Response (200):**
```json
{
  "_id": "507f1f77bcf86cd799439012",
  "name": "iPhone 15 Pro",
  "price": 1500,
  "category": "Smartphones",
  "description": "Latest Apple flagship",
  "imageUrl": "https://images.unsplash.com/...",
  "addedBy": "user@example.com",
  "rating": 4.5,
  "reviews": 12,
  "createdAt": "2024-01-18T10:30:00Z"
}
```

---

### 3. Create Item ⭐ ENHANCED
**POST** `/items`

**Request:**
```json
{
  "name": "iPhone 15 Pro",
  "price": 1500,
  "category": "Smartphones",
  "description": "Latest Apple flagship with advanced camera",
  "imageUrl": "https://images.unsplash.com/photo-...",
  "addedBy": "user@example.com"
}
```

**Response (201):**
```json
{
  "_id": "507f1f77bcf86cd799439012",
  "name": "iPhone 15 Pro",
  "price": 1500,
  "category": "Smartphones",
  "description": "Latest Apple flagship with advanced camera",
  "imageUrl": "https://images.unsplash.com/photo-...",
  "addedBy": "user@example.com",
  "rating": 0,
  "reviews": 0,
  "createdAt": "2024-01-18T10:30:00Z",
  "updatedAt": "2024-01-18T10:30:00Z"
}
```

**Categories:**
- Smartphones
- Laptops
- Wearables
- Accessories
- Tablets

---

### 4. Update Item
**PATCH** `/items/:id`

**Request:**
```json
{
  "price": 1400,
  "description": "Updated description"
}
```

**Response (200):**
```json
{
  "_id": "507f1f77bcf86cd799439012",
  "name": "iPhone 15 Pro",
  "price": 1400,
  "category": "Smartphones",
  "description": "Updated description",
  "imageUrl": "https://images.unsplash.com/photo-...",
  "addedBy": "user@example.com",
  "rating": 4.5,
  "reviews": 12,
  "updatedAt": "2024-01-18T11:00:00Z"
}
```

---

### 5. Delete Item
**DELETE** `/items/:id`

**Response (200):**
```json
{
  "message": "Item deleted successfully"
}
```

**Response (404):**
```json
{
  "message": "Item not found"
}
```

---

## Error Responses

### 400 Bad Request
```json
{
  "message": "Email and password are required"
}
```

### 401 Unauthorized
```json
{
  "message": "Invalid credentials"
}
```

### 404 Not Found
```json
{
  "message": "User not found"
}
```

### 500 Internal Server Error
```json
{
  "message": "Internal server error"
}
```

---

## Testing with cURL

### Register User
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123",
    "displayName": "Test User"
  }'
```

### Google Sign-In
```bash
curl -X POST http://localhost:5000/api/auth/google \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@gmail.com",
    "displayName": "John Doe",
    "googleId": "123456789",
    "photoURL": "https://..."
  }'
```

### Create Item
```bash
curl -X POST http://localhost:5000/api/items \
  -H "Content-Type: application/json" \
  -d '{
    "name": "iPhone 15",
    "price": 1500,
    "category": "Smartphones",
    "description": "Great phone",
    "imageUrl": "https://...",
    "addedBy": "user@example.com"
  }'
```

### Get All Items
```bash
curl http://localhost:5000/api/items
```

### Get Items by Category
```bash
curl "http://localhost:5000/api/items?category=Smartphones"
```

### Search Items
```bash
curl "http://localhost:5000/api/items?search=iPhone"
```

### Get Single Item
```bash
curl http://localhost:5000/api/items/507f1f77bcf86cd799439012
```

### Update Item
```bash
curl -X PATCH http://localhost:5000/api/items/507f1f77bcf86cd799439012 \
  -H "Content-Type: application/json" \
  -d '{"price": 1400}'
```

### Delete Item
```bash
curl -X DELETE http://localhost:5000/api/items/507f1f77bcf86cd799439012
```

---

## Response Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK - Request successful |
| 201 | Created - Resource created |
| 400 | Bad Request - Invalid data |
| 401 | Unauthorized - Need authentication |
| 404 | Not Found - Resource doesn't exist |
| 500 | Server Error - Internal error |

---

## Required Headers

For authenticated endpoints, include:
```
Authorization: Bearer <jwt-token>
Content-Type: application/json
```

---

## Environment Variables

```env
# Server
PORT=5000
MONGODB_URI=mongodb://localhost:27017/gadgethub
JWT_SECRET=your-secret-key
NODE_ENV=development

# Frontend (.env.local)
NEXT_PUBLIC_FIREBASE_API_KEY=xxx
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=xxx
NEXT_PUBLIC_FIREBASE_PROJECT_ID=xxx
```

---

## Rate Limiting
Currently not implemented. Can be added using `express-rate-limit` package.

---

## CORS
Enabled for localhost:3000

---

**Last Updated:** January 18, 2024
**API Version:** 1.0
**Status:** Production Ready ✅
