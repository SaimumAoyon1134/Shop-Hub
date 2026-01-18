# ShopHub - Next.js E-commerce Application

A modern e-commerce application built with Next.js 16, featuring a complete shopping experience with authentication, product listings, and admin functionality.

## 🚀 Features

### Core Features

- **Landing Page**: Beautiful 7-section homepage with hero, features, testimonials, and more
- **Authentication System**: Mock login with cookie-based session management
- **Product Catalog**: Browse and search through products with filtering
- **Product Details**: Detailed product pages with images and specifications
- **Protected Admin Area**: Add new products functionality (requires login)
- **Responsive Design**: Fully responsive UI that works on all devices
- **Dark Theme**: Modern dark-themed interface with glassmorphism effects
- **Toast Notifications**: User feedback system for actions and errors

### Technical Features

- Client-side authentication with cookie storage
- RESTful API integration with Express.js backend
- Dynamic routing for product details
- Form validation and error handling
- Loading states and skeleton screens
- SEO-friendly structure

## 🛠️ Technologies Used

### Frontend

- **Next.js 16** - React framework with App Router
- **React 19** - Latest React version
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling framework
- **React Hot Toast** - Notification system
- **Client-side Context API** - State management

### Backend

- **Express.js** - API server
- **Node.js** - Runtime environment
- **RESTful API** - Standard API architecture
- **Mock Data** - In-memory data storage

## 📁 Project Structure

```
my-app/
├── app/                    # Next.js app directory
│   ├── components/         # Reusable components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── context/           # React context providers
│   │   └── AuthContext.tsx
│   ├── lib/               # Utility functions
│   │   └── auth.ts
│   ├── login/             # Login page
│   │   └── page.tsx
│   ├── items/             # Items listing and details
│   │   ├── page.tsx
│   │   └── [id]/
│   │       └── page.tsx
│   ├── add-item/          # Add item form (protected)
│   │   └── page.tsx
│   ├── types/             # TypeScript types
│   │   └── index.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── api-server/            # Express.js API server
│   ├── controllers/
│   │   └── itemController.js
│   ├── models/
│   │   └── itemModel.js
│   ├── routes/
│   │   └── items.js
│   └── server.js
├── public/
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd my-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development servers**

   Open two terminal windows:

   **Terminal 1 - Start Next.js frontend:**

   ```bash
   npm run dev
   ```

   **Terminal 2 - Start Express.js API server:**

   ```bash
   node api-server/server.js
   ```

4. **Access the application**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - API Server: [http://localhost:3001](http://localhost:3001)

## 🔐 Authentication

### Demo Credentials

- **Email**: `user@example.com`
- **Password**: `password123`

The authentication system uses mock credentials stored in the auth utility. In a production environment, this would integrate with a proper authentication service.

## 🌐 Available Routes

| Route         | Description                  | Authentication Required |
| ------------- | ---------------------------- | ----------------------- |
| `/`           | Landing page with 7 sections | No                      |
| `/login`      | User login page              | No                      |
| `/items`      | Browse all products          | No                      |
| `/items/[id]` | Product details page         | No                      |
| `/add-item`   | Add new product form         | Yes                     |

## 🎯 API Endpoints

The Express.js server runs on port 3001 and provides the following endpoints:

### Items API

- `GET /api/items` - Get all items
- `GET /api/items/:id` - Get item by ID
- `POST /api/items` - Add new item
- `PUT /api/items/:id` - Update item
- `DELETE /api/items/:id` - Delete item
- `GET /api/health` - Health check

## 🎨 UI/UX Features

Based on user preferences, the application includes:

- **Dark Theme**: Default dark interface with blue accents
- **Hover Effects**: Enhanced hover states with blue shadows
- **Focus States**: Neon glow effects with glassy prism styling
- **Smooth Animations**: All transitions are smooth and polished
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop

## 🧪 Testing the Application

1. **Browse Products**: Visit `/items` to see the product catalog
2. **View Product Details**: Click on any product to see detailed information
3. **Try Authentication**: Use the demo credentials to log in
4. **Add Products**: Navigate to `/add-item` (requires login) to add new products
5. **Search & Filter**: Use the search bar and category filters on the items page

## 📱 Responsive Features

The application is fully responsive and includes:

- Mobile-first design approach
- Touch-friendly navigation
- Adaptive layouts for all screen sizes
- Optimized images and loading states

## 🚀 Deployment

### Full-Stack Deployment (Recommended)

The application is designed for deployment to Vercel with both frontend and backend in a single deployment:

1. Push your code to a Git repository
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in the Vercel dashboard
4. Deploy!

The Next.js API routes will handle all backend functionality, eliminating the need for a separate backend server in production.

### Environment Variables

Required environment variables for deployment:

```
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
```

### Local Development

For local development, the application still supports the dual-server setup:

- Frontend: Next.js server running on port 3000
- Backend: Express.js server running on port 3001

In production on Vercel, all API requests will be handled by Next.js API routes instead of the Express server.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the styling utility
- Unsplash for placeholder images
- All the open-source contributors who made this possible

# Shop-Hub
