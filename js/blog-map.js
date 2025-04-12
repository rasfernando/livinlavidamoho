// Sample blog posts data
const blogPosts = [
    {
        id: 1,
        location: [40.7128, -74.0060], // New York
        title: "Starting Our Journey in NYC",
        date: "January 15, 2024",
        preview: "Our journey began in the bustling streets of New York City. After months of planning and preparation, we finally took the leap...",
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9",
        slug: "starting-our-journey-nyc"
    },
    {
        id: 2,
        location: [36.1699, -115.1398], // Las Vegas
        title: "Desert Adventures in Nevada",
        date: "February 1, 2024",
        preview: "The stark beauty of the Nevada desert took our breath away. Our motorhome proved to be the perfect base for exploring...",
        image: "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d",
        slug: "desert-adventures-nevada"
    },
    // Add more blog posts as needed
];

// Initialize map
const map = L.map('travel-map').setView([39.8283, -98.5795], 4); // Center on USA

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add markers for each blog post
blogPosts.forEach(post => {
    const marker = L.marker(post.location)
        .addTo(map)
        .on('click', () => showBlogPost(post));
});

function showBlogPost(post) {
    const blogPost = document.getElementById('blog-post');
    const postContent = document.getElementById('post-content');
    postContent.innerHTML = `
        <img src="${post.image}" alt="${post.title}">
        <h2>${post.title}</h2>
        <span class="date">${post.date}</span>
        <p>${post.preview}</p>
        <a href="posts/${post.slug}.html" class="read-more-btn">Read Full Story</a>
    `;
    blogPost.classList.remove('hidden');
}

function closeBlogPost() {
    const blogPost = document.getElementById('blog-post');
    blogPost.classList.add('hidden');
} 