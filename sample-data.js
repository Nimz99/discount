// Sample product data for testing
// You can use this data to populate your Firestore database

export const sampleProducts = [
  {
    name: "Wireless Bluetooth Headphones",
    description: "Premium noise-canceling wireless headphones with 30-hour battery life. Perfect for music lovers and professionals.",
    price: 89.99,
    imageUrl: "https://i.imgur.com/8JZqX2L.jpg",
    affiliateLink: "https://amazon.com/dp/B08N5WRWNW?ref=your-affiliate-id",
    category: "fashion",
    active: true,
  },
  {
    name: "Smart Home Security Camera",
    description: "1080p HD security camera with night vision, motion detection, and two-way audio. Keep your home safe 24/7.",
    price: 129.99,
    imageUrl: "https://i.imgur.com/QWERTY1.jpg",
    affiliateLink: "https://amazon.com/dp/B07X6C9RMF?ref=your-affiliate-id",
    category: "home",
    active: true,
  },
  {
    name: "Organic Face Serum",
    description: "Natural anti-aging face serum with vitamin C and hyaluronic acid. Suitable for all skin types.",
    price: 34.99,
    imageUrl: "https://i.imgur.com/ABCDEF2.jpg",
    affiliateLink: "https://amazon.com/dp/B08F7PTF54?ref=your-affiliate-id",
    category: "beauty",
    active: true,
  },
  {
    name: "Premium Coffee Maker",
    description: "Programmable coffee maker with built-in grinder and thermal carafe. Brew the perfect cup every time.",
    price: 199.99,
    imageUrl: "https://i.imgur.com/1234567.jpg",
    affiliateLink: "https://amazon.com/dp/B00FLYWNYQ?ref=your-affiliate-id",
    category: "home",
    active: true,
  },
  {
    name: "Designer Leather Handbag",
    description: "Handcrafted leather handbag with multiple compartments. Perfect for work or casual outings.",
    price: 149.99,
    imageUrl: "https://i.imgur.com/9876543.jpg",
    affiliateLink: "https://amazon.com/dp/B08N5KWB9L?ref=your-affiliate-id",
    category: "fashion",
    active: true,
  },
  {
    name: "LED Makeup Mirror",
    description: "10x magnification makeup mirror with adjustable LED lighting. Perfect for precise makeup application.",
    price: 79.99,
    imageUrl: "https://i.imgur.com/5556667.jpg",
    affiliateLink: "https://amazon.com/dp/B07C7WQLLM?ref=your-affiliate-id",
    category: "beauty",
    active: true,
  },
  {
    name: "Smart Fitness Watch",
    description: "Advanced fitness tracker with heart rate monitor, GPS, and 7-day battery life. Track your health goals.",
    price: 299.99,
    imageUrl: "https://i.imgur.com/7778889.jpg",
    affiliateLink: "https://amazon.com/dp/B08N5KWB9L?ref=your-affiliate-id",
    category: "fashion",
    active: true,
  },
  {
    name: "Robot Vacuum Cleaner",
    description: "Smart robot vacuum with mapping technology and app control. Keep your floors clean automatically.",
    price: 399.99,
    imageUrl: "https://i.imgur.com/9990001.jpg",
    affiliateLink: "https://amazon.com/dp/B07C7WQLLM?ref=your-affiliate-id",
    category: "home",
    active: true,
  },
  {
    name: "Natural Hair Care Set",
    description: "Complete hair care set with shampoo, conditioner, and styling products. Sulfate-free and cruelty-free.",
    price: 49.99,
    imageUrl: "https://i.imgur.com/1112223.jpg",
    affiliateLink: "https://amazon.com/dp/B08F7PTF54?ref=your-affiliate-id",
    category: "beauty",
    active: true,
  },
  {
    name: "Portable Bluetooth Speaker",
    description: "Waterproof portable speaker with 360-degree sound and 20-hour battery life. Perfect for outdoor adventures.",
    price: 69.99,
    imageUrl: "https://i.imgur.com/3334445.jpg",
    affiliateLink: "https://amazon.com/dp/B08N5WRWNW?ref=your-affiliate-id",
    category: "fashion",
    active: true,
  },
  {
    name: "Smart Thermostat",
    description: "WiFi-enabled smart thermostat with energy-saving features and mobile app control.",
    price: 249.99,
    imageUrl: "https://i.imgur.com/5556667.jpg",
    affiliateLink: "https://amazon.com/dp/B00FLYWNYQ?ref=your-affiliate-id",
    category: "home",
    active: true,
  },
  {
    name: "Luxury Skincare Set",
    description: "Complete skincare routine with cleanser, toner, and moisturizer. Dermatologist recommended.",
    price: 89.99,
    imageUrl: "https://i.imgur.com/7778889.jpg",
    affiliateLink: "https://amazon.com/dp/B08F7PTF54?ref=your-affiliate-id",
    category: "beauty",
    active: true,
  }
];

// Instructions for adding sample data to Firestore:
/*
1. Open your Firebase Console
2. Go to Firestore Database
3. Create a collection called "products"
4. For each product in the sampleProducts array:
   - Click "Add document"
   - Use auto-generated ID
   - Add the following fields:
     * name (string)
     * description (string)
     * price (number)
     * imageUrl (string)
     * affiliateLink (string)
     * category (string)
     * active (boolean)
     * createdAt (timestamp) - use serverTimestamp()
     * updatedAt (timestamp) - use serverTimestamp()

Note: Replace the affiliate links with your actual affiliate links from your preferred affiliate programs.
*/

