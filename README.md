# Best Deals - Affiliate Marketing Website

A modern, responsive affiliate marketing website built with React, TailwindCSS, and Firebase. Features a beautiful frontend for displaying products with discounts and offers, plus a comprehensive admin dashboard for managing products.

## 🚀 Features

### Frontend (User Side)
- **Responsive Product Grid**: Beautiful card-based layout that works on all devices
- **Real-time Updates**: Products update instantly when changed in admin
- **Search & Filter**: Search products by name/description and filter by category
- **Categories**: Fashion, Home, and Beauty categories
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Smooth Animations**: Framer Motion animations for enhanced UX
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Mobile-First Design**: Optimized for mobile devices

### Admin Dashboard
- **Secure Authentication**: Firebase Auth with email/password login
- **Product Management**: Add, edit, and delete products
- **Real-time Table**: View all products with edit/delete options
- **Image Preview**: Preview product images before saving
- **Form Validation**: Comprehensive validation for all fields
- **Status Toggle**: Activate/deactivate products
- **Statistics**: Dashboard with product counts and metrics

### Technical Features
- **Firebase Integration**: Firestore for real-time data, Auth for security
- **Responsive Design**: TailwindCSS for modern, mobile-friendly UI
- **Real-time Sync**: Frontend updates instantly when admin makes changes
- **Image Hosting**: Uses Imgur URLs for product images
- **Performance Optimized**: Lazy loading and efficient rendering
- **PWA Ready**: Progressive Web App capabilities

## 🛠️ Tech Stack

- **Frontend**: React 18, React Router DOM
- **Styling**: TailwindCSS, Framer Motion
- **Backend**: Firebase (Firestore, Authentication)
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **SEO**: React Helmet Async

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd affiliate-marketing-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication (Email/Password)
   - Create a Firestore database
   - Get your Firebase config

4. **Configure Firebase**
   - Open `src/firebase/config.js`
   - Replace the placeholder config with your actual Firebase configuration:
   ```javascript
   const firebaseConfig = {
     apiKey: "your-api-key",
     authDomain: "your-project.firebaseapp.com",
     projectId: "your-project-id",
     storageBucket: "your-project.appspot.com",
     messagingSenderId: "your-sender-id",
     appId: "your-app-id"
   };
   ```

5. **Set up Firestore Security Rules**
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       // Allow read access to products for everyone
       match /products/{productId} {
         allow read: if true;
         allow write: if request.auth != null;
       }
     }
   }
   ```

6. **Create Admin User**
   - Go to Firebase Console > Authentication
   - Add a new user with email and password
   - This will be your admin login credentials

7. **Start the development server**
   ```bash
   npm start
   ```

## 🎨 Customization

### Colors and Theme
- Edit `tailwind.config.js` to customize the color scheme
- Modify `src/index.css` for additional custom styles

### Categories
- Update the categories array in `src/components/SearchAndFilter.js`
- Modify the categories in `src/components/ProductForm.js`

### Styling
- All components use TailwindCSS classes
- Custom animations are defined in `tailwind.config.js`
- Component-specific styles are in `src/index.css`

## 📱 Usage

### For Users
1. Visit the homepage to see all products
2. Use the search bar to find specific products
3. Filter by category (Fashion, Home, Beauty)
4. Click "Buy Now" to visit the affiliate link
5. Toggle dark/light theme using the button in the header

### For Admins
1. Navigate to `/admin/login`
2. Sign in with your Firebase credentials
3. Add new products with the form
4. Edit existing products by clicking the edit icon
5. Delete products with the trash icon
6. Toggle product visibility with the status button

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`
5. Deploy!

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Build: `npm run build`
5. Deploy: `firebase deploy`

## 📊 Product Structure

Each product in Firestore has the following structure:
```javascript
{
  name: "Product Name",
  description: "Product description",
  price: 29.99,
  imageUrl: "https://i.imgur.com/example.jpg",
  affiliateLink: "https://example.com/product?ref=your-id",
  category: "fashion", // fashion, home, beauty
  active: true, // visible on frontend
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

## 🔧 Environment Variables

Create a `.env` file in the root directory:
```env
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues:
1. Check the Firebase configuration
2. Ensure Firestore rules are set correctly
3. Verify admin user exists in Firebase Auth
4. Check browser console for errors

## 🎯 Roadmap

- [ ] Add product images upload functionality
- [ ] Implement user reviews and ratings
- [ ] Add analytics dashboard
- [ ] Create email newsletter signup
- [ ] Add product comparison feature
- [ ] Implement wishlist functionality
- [ ] Add social media sharing
- [ ] Create mobile app version

---

Built with ❤️ using React, TailwindCSS, and Firebase

