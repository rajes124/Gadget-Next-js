# Quick Start Guide - GadgetHub with Database

## Prerequisites
- Node.js v18+ installed
- MongoDB running (local or Atlas)
- Firebase project configured
- Environment variables set

---

## Step 1: Setup Environment Variables

### Frontend (`.env.local`)
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project
```

### Backend (`.server/.env`)
```env
MONGODB_URI=mongodb://localhost:27017/gadgethub
JWT_SECRET=your-secret-key-change-this
PORT=5000
```

---

## Step 2: Install Dependencies

### Frontend
```bash
cd d:\Next-Js\techgadget
npm install
```

### Backend
```bash
cd server
npm install
```

---

## Step 3: Start the Application

### Terminal 1 - Backend Server
```bash
cd d:\Next-Js\techgadget\server
npm run dev
# Starts on http://localhost:5000
# Shows: Server running on port 5000
```

### Terminal 2 - Frontend Dev Server
```bash
cd d:\Next-Js\techgadget
npm run dev
# Starts on http://localhost:3000
# Opens browser automatically
```

---

## Step 4: Test the Features

### Register with Google
1. Go to http://localhost:3000/register
2. Click "Sign up with Google"
3. Complete Google authentication
4. Should redirect to /items page
5. Check navbar - profile button should show your email

### View & Edit Profile
1. Click profile button in navbar
2. Click "View Profile" to see full profile
3. Click "Update Profile" to edit display name
4. Fill in new name and click "Save Changes"
5. Check database - should be saved to MongoDB

### Add an Item
1. Go to /add-item
2. Fill in:
   - Product Name: e.g., "Custom Gadget"
   - Price: e.g., 999
   - Category: Select any
   - Description: Add details
   - Image URL: https://images.unsplash.com/photo-... (or any image URL)
3. Click "Add Gadget"
4. Should redirect to /items with new item visible
5. Check database - item should be in MongoDB

### Verify Database
```bash
# MongoDB Compass or mongosh
db.users.find()        # See all users
db.items.find()        # See all items

# Or via Terminal
mongosh
use gadgethub
db.users.find().pretty()
db.items.find().pretty()
```

---

## Key URLs During Development

| Page | URL |
|------|-----|
| Home | http://localhost:3000 |
| Login | http://localhost:3000/login |
| Register | http://localhost:3000/register |
| Items | http://localhost:3000/items |
| Add Item | http://localhost:3000/add-item |
| Profile | http://localhost:3000/profile |
| Backend API | http://localhost:5000/api |

---

## API Testing with cURL

### Test Google Sign-In Endpoint
```bash
curl -X POST http://localhost:5000/api/auth/google \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "displayName": "Test User",
    "googleId": "123456",
    "photoURL": "https://..."
  }'
```

### Test Add Item
```bash
curl -X POST http://localhost:5000/api/items \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Gadget",
    "price": 999,
    "category": "Smartphones",
    "description": "A great gadget",
    "imageUrl": "https://images.unsplash.com/...",
    "addedBy": "test@example.com"
  }'
```

### Get All Items
```bash
curl http://localhost:5000/api/items
```

---

## Troubleshooting

### Backend Won't Start
```
Error: Cannot find module 'mongoose'
Solution: cd server && npm install
```

### Items Not Saving
```
Error: 404 Not Found on /api/items
Solution: 
1. Ensure backend is running on port 5000
2. Check MongoDB is running
3. Verify MONGODB_URI in .env
```

### Google Sign-In Popup Blocked
```
Problem: Google auth popup not appearing
Solution:
1. Check Firebase config in lib/firebase.ts
2. Enable Google OAuth in Firebase Console
3. Add localhost:3000 to authorized domains
```

### CORS Errors
```
Error: Access to XMLHttpRequest blocked by CORS
Solution: Backend already has CORS enabled
If issue persists, check server/index.js has cors() enabled
```

---

## Production Build

### Build Frontend
```bash
npm run build
npm start
# Production server on http://localhost:3000
```

### Deploy Backend
```bash
cd server
npm install --production
npm start
# Set NODE_ENV=production
```

---

## Useful Commands

```bash
# Clear Next.js cache
rm -r .next

# Reinstall all deps
rm -r node_modules
npm install

# Check MongoDB connection
mongosh --eval "db.adminCommand('ping')"

# View logs in realtime
tail -f server.log
```

---

## Features Implemented

✅ Google Sign-In with Firebase & MongoDB
✅ User Profile Management  
✅ Display Name Editing
✅ Item Creation & Storage
✅ Image Previews
✅ Backend Integration
✅ Session Management
✅ Error Handling

---

## Contact & Support

For issues or questions:
1. Check IMPLEMENTATION_GUIDE.md for detailed docs
2. Review error messages carefully
3. Ensure backend is running before testing
4. Check MongoDB connection string
5. Verify Firebase credentials

---

**Happy Coding! 🚀**
