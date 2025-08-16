const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image:
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Rustic Cabin in the Woods",
    description:
      "Cozy up in this rustic cabin surrounded by pine trees. Perfect for hiking, stargazing, and unplugging from city life.",
    image:
      "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 950,
    location: "Asheville",
    country: "United States",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Stay in the heart of Shinjuku with this stylish apartment featuring skyline views and easy subway access.",
    image:
      "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2100,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Alpine Chalet in Switzerland",
    description:
      "A luxurious chalet nestled in the Alps with breathtaking mountain views, a fireplace, and nearby ski slopes.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "Zermatt",
    country: "Switzerland",
  },
  {
    title: "Desert Dome in Morocco",
    description:
      "Experience glamping in the Sahara Desert with this eco-friendly dome offering panoramic views of golden dunes.",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFuZHNjYXBlJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000",
    price: 1250,
    location: "Merzouga",
    country: "Morocco",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Stay in a restored 18th-century villa surrounded by vineyards, rolling hills, and authentic Italian charm.",
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2750,
    location: "Tuscany",
    country: "Italy",
  },
  {
    title: "Lakeview Cottage in Canada",
    description:
      "Relax by the tranquil waters of Lake Muskoka in this charming cottage with a private dock and canoe.",
    image:
      "https://www.travelwithjane.com/wp-content/uploads/2016/05/Luxury-and-peaceful-villa-with-Pool.jpg",
    price: 1400,
    location: "Ontario",
    country: "Canada",
  },
  {
    title: "Clifftop Bungalow in Bali",
    description:
      "Enjoy the ocean breeze in this open-air bungalow perched on a Balinese cliff, perfect for sunset views.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1600,
    location: "Uluwatu",
    country: "Indonesia",
  },
  {
    title: "Countryside Farmhouse in France",
    description:
      "Immerse yourself in the peaceful French countryside with this stone farmhouse surrounded by lavender fields.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZHNjYXBlJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000",
    price: 2000,
    location: "Provence",
    country: "France",
  },
  {
    title: "Ice Hotel in Sweden",
    description:
      "Sleep under shimmering ice sculptures in this famous hotel built entirely of snow and ice blocks.",
    image:
      "https://images.squarespace-cdn.com/content/v1/62707bb295535a1426e4aa2e/b3f9dcf7-7928-498d-a063-9b9845448547/mountain-haven-retreat-vacation-rental-airbnb-shingletown-california_0002.jpg",
    price: 3200,
    location: "Jukkasjärvi",
    country: "Sweden",
  },
  {
    title: "Urban Loft in New York",
    description:
      "Enjoy city life in this chic loft apartment located in SoHo with high ceilings and exposed brick walls.",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 3500,
    location: "New York",
    country: "United States",
  },
  {
    title: "Rainforest Treehouse in Brazil",
    description:
      "Live among the treetops with this eco-friendly treehouse deep in the Amazon rainforest.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1700,
    location: "Manaus",
    country: "Brazil",
  },
  {
    title: "Mediterranean Villa in Greece",
    description:
      "Wake up to turquoise waters in this whitewashed villa on the island of Santorini.",
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2800,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Safari Lodge in Kenya",
    description:
      "Stay close to wildlife in a luxury lodge overlooking the savannah in Maasai Mara.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 3100,
    location: "Maasai Mara",
    country: "Kenya",
  },
  {
    title: "Mountain Cabin in Colorado",
    description:
      "A cozy cabin retreat in the Rockies, perfect for skiing or hiking adventures.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Houseboat in Amsterdam",
    description:
      "Experience canal life in this modern houseboat with city attractions steps away.",
    image:
      "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1900,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Luxury Penthouse in Dubai",
    description:
      "A high-rise penthouse with panoramic city views and world-class amenities.",
    image:
      "https://fetch.getnarrativeapp.com/static/818d60bc-0a16-4757-ab0e-b941d9e2da34/seattle-airbnb-photographer-suncadia-cle-elum-mountain-cabin-photographer-travel-hospitality-vrbo-interior-roslyn-pacific-northwest-.jpg?w=500",
    price: 4500,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Traditional Ryokan in Kyoto",
    description:
      "Stay in an authentic Japanese inn with tatami rooms, hot springs, and kaiseki dining.",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2300,
    location: "Kyoto",
    country: "Japan",
  },
  {
    title: "Cliffside Villa in Portugal",
    description:
      "Marvel at the Atlantic Ocean from this secluded Algarve villa with infinity pool.",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.ah_da4Z0owJkPKrTXoDIDwHaE8?pid=Api&P=0&h=180",
    price: 2600,
    location: "Algarve",
    country: "Portugal",
  },
  {
    title: "Countryside Barn in England",
    description:
      "Charming barn conversion with rustic interiors and rolling hills all around.",
    image:
      "https://cdn1.matadornetwork.com/blogs/1/2022/12/superb-airbnb-play.jpg",
    price: 1550,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Private Island in Fiji",
    description:
      "An exclusive tropical island getaway surrounded by crystal-clear waters.",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 7000,
    location: "Mamanuca Islands",
    country: "Fiji",
  },
  {
    title: "Arctic Igloo in Finland",
    description:
      "Watch the northern lights from your glass-roof igloo in Lapland.",
    image:
      "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 3400,
    location: "Rovaniemi",
    country: "Finland",
  },
  {
    title: "Beach Hut in Thailand",
    description: "A rustic hut steps from the turquoise waters of Koh Samui.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1100,
    location: "Koh Samui",
    country: "Thailand",
  },
  {
    title: "Vineyard Estate in Chile",
    description:
      "Savor local wines and sunsets at this luxurious vineyard villa.",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.YuheE8l2nuk_joE7hu5wVwHaDw?pid=Api&P=0&h=180",
    price: 2100,
    location: "Colchagua Valley",
    country: "Chile",
  },
  {
    title: "Cave House in Turkey",
    description:
      "Stay inside Cappadocia’s iconic cave dwellings with hot air balloons overhead.",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.JTW_kviDY9XH6_6bAwAJtwHaE8?pid=Api&P=0&h=180",
    price: 1750,
    location: "Göreme",
    country: "Turkey",
  },
  {
    title: "Forest Lodge in Slovenia",
    description:
      "Get off-grid in this peaceful lodge surrounded by Triglav National Park.",
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1350,
    location: "Bled",
    country: "Slovenia",
  },
  {
    title: "Luxury Villa in Spain",
    description:
      "Modern villa with sea views and a private infinity pool on Costa del Sol.",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.U_hK6cGl6OQEyoIAMTXU0wHaE7?pid=Api&P=0&h=180",
    price: 2950,
    location: "Marbella",
    country: "Spain",
  },
];

module.exports = { data: sampleListings };
