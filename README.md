# react-firebase-house-marketplace

This is a House Marketplace React application that allows users to sign up and create listings for properties that they have for rent or sale.

The application uses Firebase v9 to authenticate and store users and to store listing details and images. The application also uses React Toastify to generate success and error messages, Leaflet to generate a map of the location of the listing, and Swiper to create a carousel of the latest properties posted on the home page.

### Technology

- React
- Firebase v9
- React Toastify
- Leaflet
- Swiper

### Requirements

- You must have Node Installed
- If you would like to use geocoding for the listing/listing map, create a Google Geocoding API key and add it to your environment variables (See Environment Variables section below) otherwise you can set the geolocationEnabled state to false
- To install House Marketplace App run:
  `npm install`
- Define Environment Variables in .env or .env.local file (See Environment Variables section below)
- To run the application use:
  `npm start`

### Environment Variables

- REACT_APP_GEOCODE_API_KEY='YOUR_GOOGLE_GEOCODE_API_KEY_HERE'
