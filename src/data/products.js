const products = [
{
id: 1,
title: "MAROON SHOE",
price: 1400,
oldPrice: 3000,
rating: 5,
image: "/images/BrownShoe.jpg",
gallery: [
"/images/BrownShoe.jpg",
"/images/pyramidHeels.jpg",
],
colors: ["Maroon", "Camel"],
sizes: [36, 37, 38, 39, 40, 41],
description: "Experience comfort and style with NaqshAra Elevation Sandals, designed for everyday wear and special occasions alike. These sandals feature a thoughtfully crafted sole that provides excellent support and cushioning for all-day comfort. The elevated design offers a flattering silhouette while maintaining practicality for Pakistani summers and casual outings. Perfect for pairing with traditional or contemporary outfits, these sandals blend functionality with aesthetic appeal. The durable construction ensures long-lasting wear, making them a reliable addition to your footwear collection. Whether you're heading to the market, attending gatherings, or enjoying leisurely walks, NaqshAra Elevation Sandals deliver the comfort and elegance you deserve.",
tag: "sale",
stock: 12,
},

{
id: 2,
title: "CHUNKY SHOE",
price: 1499,
oldPrice: 4800,
rating: 5,
image: "/images/Chunky.jpg",
gallery: [
"/images/Chunky.jpg",
"/images/mary.jpg",
],
colors: ["black", "White"],
sizes: [36, 37, 38, 39, 40, 41],
description: "Experience comfort and style with NaqshAra Elevation Sandals, designed for everyday wear and special occasions alike. These sandals feature a thoughtfully crafted sole that provides excellent support and cushioning for all-day comfort. The elevated design offers a flattering silhouette while maintaining practicality for Pakistani summers and casual outings. Perfect for pairing with traditional or contemporary outfits, these sandals blend functionality with aesthetic appeal. The durable construction ensures long-lasting wear, making them a reliable addition to your footwear collection. Whether you're heading to the market, attending gatherings, or enjoying leisurely walks, NaqshAra Elevation Sandals deliver the comfort and elegance you deserve.",
tag: "sale",
stock: 12,
},

{
id: 3,
title: "SQUARE HEELS",
price: 1100,
oldPrice: 4600,
rating: 5,
image: "/images/whiteHeels.jpg",
gallery: [
"/images/whiteHeels.jpg",
"/images/SquareHeels.jpg",


],
colors: ["Pearl", "Silver", "Gold"],
sizes: [36, 37, 38, 39, 40, 41],
description: "Experience comfort and style with NaqshAra Elevation Sandals, designed for everyday wear and special occasions alike. These sandals feature a thoughtfully crafted sole that provides excellent support and cushioning for all-day comfort. The elevated design offers a flattering silhouette while maintaining practicality for Pakistani summers and casual outings. Perfect for pairing with traditional or contemporary outfits, these sandals blend functionality with aesthetic appeal. The durable construction ensures long-lasting wear, making them a reliable addition to your footwear collection. Whether you're heading to the market, attending gatherings, or enjoying leisurely walks, NaqshAra Elevation Sandals deliver the comfort and elegance you deserve.",
tag: ["sale", "best"],
stock: 12,
},

{
id: 4,
title: "WHITE PUMPS",
price: 1399,
oldPrice: 4200,
rating: 5,
image: "/images/pumps.jpg",
gallery: [
"/images/pumps.jpg",
"/images/blacknet.jpg",
],
colors: ["White", "Red", "Black"],
sizes: [36, 37, 38, 39, 40, 41],
description: "Experience comfort and style with NaqshAra Elevation Sandals, designed for everyday wear and special occasions alike. These sandals feature a thoughtfully crafted sole that provides excellent support and cushioning for all-day comfort. The elevated design offers a flattering silhouette while maintaining practicality for Pakistani summers and casual outings. Perfect for pairing with traditional or contemporary outfits, these sandals blend functionality with aesthetic appeal. The durable construction ensures long-lasting wear, making them a reliable addition to your footwear collection. Whether you're heading to the market, attending gatherings, or enjoying leisurely walks, NaqshAra Elevation Sandals deliver the comfort and elegance you deserve..",
tag: ["sale", "best"],
stock: 12,
},

{
id: 5,
title: "MULES",
price: 2860,
oldPrice: 4000,
image: "/images/brownmule.jpg",
gallery: [
"/images/brownmule.jpg",
"/images/blackmules.jpg",
],
colors: ["Black", "Brown"],
sizes: [36, 37, 38, 39, 40, 41],
description: "Experience comfort and style with NaqshAra Elevation Sandals, designed for everyday wear and special occasions alike. These sandals feature a thoughtfully crafted sole that provides excellent support and cushioning for all-day comfort. The elevated design offers a flattering silhouette while maintaining practicality for Pakistani summers and casual outings. Perfect for pairing with traditional or contemporary outfits, these sandals blend functionality with aesthetic appeal. The durable construction ensures long-lasting wear, making them a reliable addition to your footwear collection. Whether you're heading to the market, attending gatherings, or enjoying leisurely walks, NaqshAra Elevation Sandals deliver the comfort and elegance you deserve.",
tag: "best",
stock: 0,
},

{
id: 6,
title: "MULE PUMPS",
price: 2999,
oldPrice: 4200,
image: "/images/blackmule.jpg",
gallery: [
"/images/blackmule.jpg",
"/images/whitemule.jpg",
],
colors: ["Black", "White"],
sizes: [36, 37, 38, 39, 40, 41],
description: "Experience comfort and style with NaqshAra Elevation Sandals, designed for everyday wear and special occasions alike. These sandals feature a thoughtfully crafted sole that provides excellent support and cushioning for all-day comfort. The elevated design offers a flattering silhouette while maintaining practicality for Pakistani summers and casual outings. Perfect for pairing with traditional or contemporary outfits, these sandals blend functionality with aesthetic appeal. The durable construction ensures long-lasting wear, making them a reliable addition to your footwear collection. Whether you're heading to the market, attending gatherings, or enjoying leisurely walks, NaqshAra Elevation Sandals deliver the comfort and elegance you deserve.",
tag: "new",
stock: 12,
},

{
id: 7,
title: "BRIDAL SHOES",
price: 3360,
oldPrice: 4800,
image: "/images/partywhite.jpg",
gallery: [
"/images/partywhite.jpg",
"/images/partyblack.jpg",
],
colors: ["White", "Black"],
sizes: [36, 37, 38, 39, 40, 41],
description: "Experience comfort and style with NaqshAra Elevation Sandals, designed for everyday wear and special occasions alike. These sandals feature a thoughtfully crafted sole that provides excellent support and cushioning for all-day comfort. The elevated design offers a flattering silhouette while maintaining practicality for Pakistani summers and casual outings. Perfect for pairing with traditional or contemporary outfits, these sandals blend functionality with aesthetic appeal. The durable construction ensures long-lasting wear, making them a reliable addition to your footwear collection. Whether you're heading to the market, attending gatherings, or enjoying leisurely walks, NaqshAra Elevation Sandals deliver the comfort and elegance you deserve.",
tag: "new",
stock: 12,
},

{
id: 8,
title: "LOW HEEL SHOES",
price: 2499,
oldPrice: 3500,
image: "/images/lowcamel.jpg",
gallery: [
"/images/lowcamel.jpg",
"/images/lowpink.jpg",
],
colors: ["Pink", "Mustard"],
sizes: [36, 37, 38, 39, 40, 41],
description: "Experience comfort and style with NaqshAra Elevation Sandals, designed for everyday wear and special occasions alike. These sandals feature a thoughtfully crafted sole that provides excellent support and cushioning for all-day comfort. The elevated design offers a flattering silhouette while maintaining practicality for Pakistani summers and casual outings. Perfect for pairing with traditional or contemporary outfits, these sandals blend functionality with aesthetic appeal. The durable construction ensures long-lasting wear, making them a reliable addition to your footwear collection. Whether you're heading to the market, attending gatherings, or enjoying leisurely walks, NaqshAra Elevation Sandals deliver the comfort and elegance you deserve.",
tag: "new",
stock: 12,
},

{
id: 9,
title: "BLOCK HEELS",
price: 2999,
oldPrice: 4200,
rating: 5,
image: "/images/blockheels.jpg",
gallery: [
"/images/blockheels.jpg",
"/images/blockbrown.jpg",
],
colors: ["Camel", "Brown"],
sizes: [36, 37, 38, 39, 40, 41],
description: "Experience comfort and style with NaqshAra Elevation Sandals, designed for everyday wear and special occasions alike. These sandals feature a thoughtfully crafted sole that provides excellent support and cushioning for all-day comfort. The elevated design offers a flattering silhouette while maintaining practicality for Pakistani summers and casual outings. Perfect for pairing with traditional or contemporary outfits, these sandals blend functionality with aesthetic appeal. The durable construction ensures long-lasting wear, making them a reliable addition to your footwear collection. Whether you're heading to the market, attending gatherings, or enjoying leisurely walks, NaqshAra Elevation Sandals deliver the comfort and elegance you deserve..",
tag: "new",
stock: 12,
},

{
id: 10,
title: "HEELS",
price: 3299,
oldPrice: 4800,
rating: 5,
image: "/images/red.jpg",
gallery: [
"/images/red.jpg",
"/images/gray.jpg",
],
colors: ["Maroon", "Gray"],
sizes: [36, 37, 38, 39, 40, 41],
description: "Experience comfort and style with NaqshAra Elevation Sandals, designed for everyday wear and special occasions alike. These sandals feature a thoughtfully crafted sole that provides excellent support and cushioning for all-day comfort. The elevated design offers a flattering silhouette while maintaining practicality for Pakistani summers and casual outings. Perfect for pairing with traditional or contemporary outfits, these sandals blend functionality with aesthetic appeal. The durable construction ensures long-lasting wear, making them a reliable addition to your footwear collection. Whether you're heading to the market, attending gatherings, or enjoying leisurely walks, NaqshAra Elevation Sandals deliver the comfort and elegance you deserve.",
tag: "best",
stock: 12,
},

];

export default products;
