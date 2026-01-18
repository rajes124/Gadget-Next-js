# GadgetHub - Smart Gadget Discovery Platform

A modern, full-stack web application for discovering, browsing, and sharing the latest tech gadgets.

## 🌟 Features

### Frontend (Next.js)
- ✅ **7-Section Landing Page**
  - Hero Section with CTA buttons
  - Categories Section (Smartphones, Laptops, Wearables, Accessories)
  - Featured Gadgets showcase
  - Why GadgetHub section
  - How It Works process flow
  - Testimonials section
  - Call-to-Action section

- ✅ **Authentication System**
  - Firebase Email/Password login
  - User registration with validation
  - Forgot Password functionality
  - Google OAuth integration (mock)
  - GitHub OAuth integration (mock)
  - Cookie-based session management

- ✅ **Protected Routes**
  - `/add-item` - Only accessible to logged-in users
  - Automatic redirect to login for unauthorized access

- ✅ **Gadget Management**
  - Browse all gadgets
  - Search and filter by category
  - View detailed product information
  - Add new gadgets (authenticated users)
  - Responsive product cards

- ✅ **Dark Mode**
  - Toggle light/dark theme
  - LocalStorage persistence
  - Smooth transitions across all pages

- ✅ **Modern UI/UX**
  - Gradient backgrounds and text
  - Glass-morphism effects
  - Smooth animations and transitions
  - Fully responsive design (mobile, tablet, desktop)

### Backend (Express.js + MongoDB)
- ✅ **REST API Endpoints**
  - GET `/api/items` - Get all items with filters
  - GET `/api/items/:id` - Get single item details
  - POST `/api/items` - Create new item
  - PATCH `/api/items/:id` - Update item
  - DELETE `/api/items/:id` - Delete item

- ✅ **Authentication API**
  - POST `/api/auth/register` - User registration
  - POST `/api/auth/login` - User login
  - GET `/api/auth/me` - Get current user

- ✅ **MongoDB Integration**
  - User authentication with password hashing
  - Item management with timestamps
  - Category classification

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Firebase** - Authentication service
- **React Hot Toast** - Notifications
- **next-themes** - Dark mode support
- **js-cookie** - Cookie management
- **Axios** - HTTP client

### Backend
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB ODM
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT authentication
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

## 📋 Database Credentials

```
MongoDB Username: techgatdget
MongoDB Password: 363CdofBfHc8rAER
Connection String: mongodb+srv://techgatdget:363CdofBfHc8rAER@website0.ahtmawh.mongodb.net/gadgethub?retryWrites=true&w=majority
```

## 🔐 Demo Credentials

```
Email: admin@gadgethub.com
Password: 123456
```

## 📂 Project Structure

```
gadgethub/
├── app/                          # Next.js app directory
│   ├── page.tsx                  # Landing page
│   ├── login/page.tsx            # Login page
│   ├── register/page.tsx         # Registration page
│   ├── forgot-password/page.tsx  # Forgot password page
│   ├── items/
│   │   ├── page.tsx              # Items list
│   │   └── [id]/page.tsx         # Item details
│   ├── add-item/page.tsx         # Add new item (protected)
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles
│
├── components/
│   ├── Navbar.tsx                # Navigation bar
│   ├── Footer.tsx                # Footer
│   ├── Providers.tsx             # App providers
│   └── sections/
│       ├── HeroSection.tsx       # Hero section
│       ├── CategoriesSection.tsx # Categories
│       ├── FeaturedSection.tsx   # Featured gadgets
│       ├── WhyChooseSection.tsx  # Why GadgetHub
│       ├── HowItWorksSection.tsx # How it works
│       ├── TestimonialsSection.tsx # Testimonials
│       └── CTASection.tsx        # Call to action
│
├── lib/
│   ├── firebase.ts               # Firebase configuration
│   ├── auth.ts                   # Authentication functions
│   └── cookies.ts                # Cookie management
│
├── server/
│   ├── index.js                  # Express server
│   ├── package.json              # Backend dependencies
│   ├── models/
│   │   ├── Item.js               # Item schema
│   │   └── User.js               # User schema
│   ├── routes/
│   │   ├── items.routes.js       # Items API routes
│   │   └── auth.routes.js        # Auth API routes
│   └── .env.example              # Environment variables
│
├── public/                       # Static files
├── package.json                  # Frontend dependencies
├── tailwind.config.ts            # Tailwind configuration
├── next.config.js                # Next.js configuration
└── README.md                     # This file
```

## 🚀 Setup & Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- MongoDB account

### Frontend Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   npm start
   ```

The frontend will be available at `http://localhost:3000`

### Backend Setup

1. **Navigate to server directory**
   ```bash
   cd server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create `.env` file** (copy from `.env.example`)
   ```bash
   cp .env.example .env
   ```

4. **Update environment variables** in `.env` if needed

5. **Run development server**
   ```bash
   npm run dev
   ```

   Or for production:
   ```bash
   npm start
   ```

The backend API will be available at `http://localhost:5000`

## 📚 API Routes

### Items API

**Get all items** (with filters)
```
GET /api/items?category=Smartphones&search=iPhone
```

**Get single item**
```
GET /api/items/:id
```

**Create new item**
```
POST /api/items
Body: {
  "name": "iPhone 15 Pro",
  "price": 1500,
  "category": "Smartphones",
  "description": "Latest Apple flagship",
  "imageUrl": "https://...",
  "addedBy": "user@email.com"
}
```

**Update item**
```
PATCH /api/items/:id
Body: { ...update fields }
```

**Delete item**
```
DELETE /api/items/:id
```

### Auth API

**Register**
```
POST /api/auth/register
Body: {
  "email": "user@email.com",
  "password": "password123",
  "displayName": "John Doe"
}
```

**Login**
```
POST /api/auth/login
Body: {
  "email": "user@email.com",
  "password": "password123"
}
```

**Get current user**
```
GET /api/auth/me
Header: Authorization: Bearer {token}
```

## 🔑 Frontend Routes

| Route | Purpose | Protected |
|-------|---------|-----------|
| `/` | Landing page | No |
| `/login` | Login page | No |
| `/register` | Registration page | No |
| `/forgot-password` | Password reset | No |
| `/items` | Browse all gadgets | No |
| `/items/:id` | Product details | No |
| `/add-item` | Add new gadget | Yes |

## 🎨 Design Features

- **Gradient UI**: Purple, indigo, and violet color scheme
- **Glass-morphism**: Modern frosted glass effect on cards
- **Dark Mode**: Full dark mode support with smooth transitions
- **Responsive**: Mobile-first design (works on all screen sizes)
- **Animations**: Smooth hover effects and page transitions
- **Accessibility**: Semantic HTML and ARIA labels

## 🔐 Security Features

- Password hashing with bcryptjs
- JWT token authentication
- CORS protection
- Environment variable for secrets
- Input validation on both frontend and backend
- Protected routes with user verification

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🚀 Deployment

### Frontend (Vercel)
```bash
npm run build
# Deploy to Vercel
```

### Backend (Render/Railway)
1. Push backend code to GitHub
2. Connect repository to Render/Railway
3. Set environment variables
4. Deploy

## 📝 Notes

- Demo credentials are pre-filled in the login form
- Dark mode preference is stored in localStorage
- User sessions are managed via cookies
- All gadgets are fetched from MongoDB
- Images can be added as URLs

## 🐛 Troubleshooting

**MongoDB connection error:**
- Verify MongoDB credentials in `.env`
- Check internet connection
- Ensure IP is whitelisted in MongoDB Atlas

**Firebase auth error:**
- Verify Firebase config in `lib/firebase.ts`
- Check browser console for detailed error

**Port already in use:**
- Change PORT in `.env` file
- Or kill the process using the port

## 📞 Support

For issues or questions, please check:
1. Console for error messages
2. MongoDB Atlas dashboard
3. Firebase console
4. Network tab in browser dev tools

## 📄 License

This project is open source and available under the MIT License.

---

**Created with ❤️ for tech enthusiasts and gadget lovers**
