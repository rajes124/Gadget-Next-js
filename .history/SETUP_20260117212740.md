# GadgetHub - Installation & Setup Guide

## Quick Start

### 1. Frontend Setup (Next.js)

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser at http://localhost:3000
```

### 2. Backend Setup (Express.js)

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Run development server
npm run dev

# Server runs at http://localhost:5000
```

## Environment Variables

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Backend (server/.env)
```
PORT=5000
MONGODB_URI=mongodb+srv://techgatdget:363CdofBfHc8rAER@website0.ahtmawh.mongodb.net/gadgethub?retryWrites=true&w=majority
JWT_SECRET=your-secret-key-change-in-production
NODE_ENV=development
```

## Database Setup

The MongoDB database is already configured with the provided credentials. The database will be automatically created when the backend server starts.

### Collections
- **users** - User authentication and profiles
- **items** - Gadget products

## Firebase Configuration

Firebase is already configured in `lib/firebase.ts` with the project credentials:
- Project ID: techgad-get
- Auth Domain: techgad-get.firebaseapp.com

## Available Commands

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Backend
```bash
cd server
npm run dev      # Start with nodemon (auto-reload)
npm start        # Start production server
```

## Testing the Application

### 1. Login with Demo Account
- Email: admin@gadgethub.com
- Password: 123456

### 2. Test Features
- ✅ Browse gadgets on `/items`
- ✅ View item details by clicking on a gadget
- ✅ Add a new gadget (only when logged in) at `/add-item`
- ✅ Toggle dark mode in navbar
- ✅ Test responsive design on mobile

### 3. Register New Account
- Go to `/register`
- Fill in email, password, and confirm password
- You'll be auto-logged in and redirected to items page

### 4. Test Protected Routes
- Try accessing `/add-item` without logging in
- You should be redirected to `/login`

## API Endpoints

### Items
```
GET    /api/items              - Get all items with filters
GET    /api/items/:id          - Get single item
POST   /api/items              - Create item
PATCH  /api/items/:id          - Update item
DELETE /api/items/:id          - Delete item
```

### Authentication
```
POST   /api/auth/register      - Register user
POST   /api/auth/login         - Login user
GET    /api/auth/me            - Get current user
```

## Features Overview

### Landing Page (7 Sections)
1. **Hero Section** - Welcome message with CTA buttons
2. **Categories** - Browse by product type
3. **Featured Gadgets** - Showcase popular items
4. **Why Choose Us** - Value propositions
5. **How It Works** - Process explanation
6. **Testimonials** - User reviews
7. **Call to Action** - Final conversion push

### User Features
- ✅ Register and login
- ✅ Google/GitHub OAuth (mock)
- ✅ Forgot password functionality
- ✅ Browse and search gadgets
- ✅ View detailed product info
- ✅ Add new gadgets (authenticated)
- ✅ Dark mode toggle
- ✅ Responsive design

## Troubleshooting

### Port Already in Use
```bash
# Change port in server/.env
PORT=5001
```

### MongoDB Connection Issues
- Verify credentials in `server/.env`
- Check MongoDB Atlas IP whitelist
- Ensure internet connection is stable

### Firebase Issues
- Check Firebase config in `lib/firebase.ts`
- Verify project exists in Firebase console
- Check browser console for detailed errors

### npm Install Issues
- Delete `node_modules` folder
- Delete `package-lock.json`
- Run `npm install` again
- Try `npm install --legacy-peer-deps` if needed

## Project Structure

```
gadgethub/
├── app/                    # Next.js pages and layouts
├── components/             # React components
├── lib/                    # Utilities and configs
├── server/                 # Express backend
├── public/                 # Static assets
├── package.json            # Frontend dependencies
└── README.md              # Main documentation
```

## Deployment

### Frontend (Vercel)
1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel automatically detects Next.js
4. Deploy with one click

### Backend (Render or Railway)
1. Create account on Render/Railway
2. Create new service from GitHub repo
3. Set environment variables
4. Deploy

## Next Steps

- [ ] Add search functionality
- [ ] Implement shopping cart
- [ ] Add payment integration
- [ ] Setup email notifications
- [ ] Add user profiles
- [ ] Implement reviews and ratings
- [ ] Setup CI/CD pipeline

## Support

For detailed information, check:
- `README.md` - Full project documentation
- `lib/firebase.ts` - Firebase configuration
- `server/models/` - Database schemas
- Console logs and error messages

---

**Happy Coding! 🚀**
