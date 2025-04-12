// First, let's define our product types
const productTypes = {
    clothing: ["Hoodies", "T-Shirts", "Tank Tops", "Pants", "Shorts", "Dresses", "Leggings"],
    accessories: ["Hats", "Bags", "Socks", "Bandanas"]
};

// Update products with types
const products = [
    {
        id: 1,
        name: "Adventure T-Shirt",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
        category: "unisex",
        type: "T-Shirts"
    },
    {
        id: 2,
        name: "Mountain Hiking Shorts",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800",
        category: "mens",
        type: "Shorts"
    },
    {
        id: 3,
        name: "Wanderlust Tank Top",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800",
        category: "womens",
        type: "Tank Tops"
    },
    {
        id: 4,
        name: "Travel Hoodie",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800",
        category: "unisex",
        type: "Hoodies"
    },
    {
        id: 5,
        name: "Adventure Leggings",
        price: 44.99,
        image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800",
        category: "womens",
        type: "Leggings"
    },
    {
        id: 6,
        name: "Camping Beanie",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=800",
        category: "unisex",
        type: "Hats"
    },
    {
        id: 7,
        name: "Trail Runner Socks",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1533678725663-c4b9f92d3a6b?w=800",
        category: "unisex",
        type: "Socks"
    },
    {
        id: 8,
        name: "Men's Cargo Pants",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800",
        category: "mens",
        type: "Pants"
    },
    {
        id: 9,
        name: "Sunset Crop Top",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
        category: "womens",
        type: "Tank Tops"
    },
    {
        id: 10,
        name: "Adventure Cap",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800",
        category: "unisex",
        type: "Hats"
    },
    {
        id: 11,
        name: "Hiking Bandana",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1532347922424-c652d9b7208e?w=800",
        category: "unisex",
        type: "Bandanas"
    },
    {
        id: 12,
        name: "Men's Board Shorts",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",
        category: "mens",
        type: "Shorts"
    },
    {
        id: 13,
        name: "Travel Dress",
        price: 54.99,
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800",
        category: "womens",
        type: "Dresses"
    },
    {
        id: 14,
        name: "Adventure Backpack",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
        category: "unisex",
        type: "Bags"
    },
    {
        id: 15,
        name: "Camping Sweater",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1616258734679-57e515f9cdc5?w=800",
        category: "unisex",
        type: "Hoodies"
    },
    {
        id: 16,
        name: "Men's Flannel Shirt",
        price: 44.99,
        image: "images/flannel1.jpg",
        category: "mens",
        type: "T-Shirts"
    },
    {
        id: 17,
        name: "Women's Windbreaker",
        price: 64.99,
        image: "images/windbreaker1.jpg",
        category: "womens",
        type: "Jackets"
    },
    {
        id: 18,
        name: "Travel Scarf",
        price: 19.99,
        image: "images/scarf1.jpg",
        category: "unisex",
        type: "Accessories"
    },
    {
        id: 19,
        name: "Adventure Joggers",
        price: 49.99,
        image: "images/joggers1.jpg",
        category: "unisex",
        type: "Pants"
    },
    {
        id: 20,
        name: "Men's Polo Shirt",
        price: 39.99,
        image: "images/polo1.jpg",
        category: "mens",
        type: "T-Shirts"
    },
    {
        id: 21,
        name: "Women's Shorts",
        price: 34.99,
        image: "images/wshorts1.jpg",
        category: "womens",
        type: "Shorts"
    },
    {
        id: 22,
        name: "Travel Wallet",
        price: 29.99,
        image: "images/wallet1.jpg",
        category: "unisex",
        type: "Accessories"
    },
    {
        id: 23,
        name: "Adventure Belt",
        price: 24.99,
        image: "images/belt1.jpg",
        category: "unisex",
        type: "Accessories"
    },
    {
        id: 24,
        name: "Men's Swim Trunks",
        price: 39.99,
        image: "images/swim1.jpg",
        category: "mens",
        type: "Shorts"
    },
    {
        id: 25,
        name: "Women's Swimsuit",
        price: 49.99,
        image: "images/swimsuit1.jpg",
        category: "womens",
        type: "Swimsuit"
    },
    {
        id: 26,
        name: "Travel Tote",
        price: 44.99,
        image: "images/tote1.jpg",
        category: "unisex",
        type: "Bags"
    },
    {
        id: 27,
        name: "Adventure Sunglasses",
        price: 89.99,
        image: "images/sunglasses1.jpg",
        category: "unisex",
        type: "Accessories"
    },
    {
        id: 28,
        name: "Men's Adventure Boots",
        price: 99.99,
        image: "images/boots1.jpg",
        category: "mens",
        type: "Boots"
    },
    {
        id: 29,
        name: "Women's Hiking Boots",
        price: 99.99,
        image: "images/wboots1.jpg",
        category: "womens",
        type: "Boots"
    },
    {
        id: 30,
        name: "Travel Water Bottle",
        price: 24.99,
        image: "images/bottle1.jpg",
        category: "unisex",
        type: "Accessories"
    }
]; 