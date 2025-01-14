import React from 'react';
import ReactDOM from 'react-dom/client';
import './pages/css/index.css';
import App from './pages/App';
import BlogPage from './pages/components/BlogPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GlobalStyle from './pages/GlobalStyles';

// Define site information
const info = {
  webName: "Global",
  routes: {
    lifestyle: "#lifestyle",
    technology: "#technology",
  },
  socialLinks: {
    twitter: "https://twitter.com/johndoe",
    facebook: "https://facebook.com/johndoe",
    linkedIn: "https://linkedin.com/in/johndoe",    
  },
};

const authors = [
  "Alice Johnson", "Bob Smith", "Catherine Lee", "David Brown", 
  "Emma Wilson", "Frank Harris", "Grace Martin", "Henry White", 
  "Isabella Young", "Jack Green", "Karen Hall", "Liam Adams", 
  "Mia Scott", "Nathan Carter", "Olivia Clark", "Paul Moore"
];

// Helper function to assign a random author
const assignRandomAuthor = (posts) => {
  return posts.map(post => ({
    ...post,
    author: authors[Math.floor(Math.random() * authors.length)]
  }));
};


// Sample data for LIFESTYLE
const featuredLifestylePosts = assignRandomAuthor([
  {
    link: '/blogs/mindfulness-fast-paced-world',
    image: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1731009778/samples/landscapes/architecture-signs.jpg',
    altText: 'Mindfulness in a fast-paced world',
    category: 'Lifestyle',
    date: 'Jul 3',
    title: 'Mindfulness in a fast-paced world',
    excerpt: 'Discussing the importance of mindfulness practices...',
  },
  {
    link: '/blogs/healthy-eating-busy-schedule',
    image: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1731009778/samples/people/bicycle.jpg',
    altText: 'Healthy eating with a busy schedule',
    category: 'Lifestyle',
    date: 'Jul 10',
    title: 'Healthy eating with a busy schedule',
    excerpt: 'Tips and tricks for maintaining a nutritious diet on the go...',
  },
]);

const recentLifestylePosts = assignRandomAuthor([
  {
    link: '/blogs/eco-friendly-commute',
    image: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1731009779/samples/ecommerce/accessories-bag.jpg',
    altText: 'Eco-friendly commute ideas',
    category: 'Lifestyle',
    date: 'Jul 12',
    title: 'Eco-friendly commute ideas',
    excerpt: 'Exploring greener ways to travel in the city...',
  },
  {
    link: '/blogs/morning-routines',
    image: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1731009779/samples/landscapes/nature-mountains.jpg',
    altText: 'Morning routines',
    category: 'Lifestyle',
    date: 'Jul 13',
    title: 'Morning routines for success',
    excerpt: 'Why a consistent morning routine can boost productivity...',
  },
  {
    link: '/blogs/street-fashion-trends',
    image: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1731009784/samples/balloons.jpg',
    altText: 'Street fashion trends',
    category: 'Lifestyle',
    date: 'Jul 14',
    title: 'Street fashion trends to watch',
    excerpt: 'Urban style insights from around the globe...',
  },
  {
    link: '/blogs/digital-nomad-lifestyle',
    image: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1731009787/cld-sample-3.jpg',
    altText: 'Digital nomad lifestyle',
    category: 'Lifestyle',
    date: 'Jul 15',
    title: 'Pros & cons of a digital nomad lifestyle',
    excerpt: 'Working remotely from anywhere in the world...',
  },
  {
    link: '/blogs/balancing-work-life',
    image: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1731009787/cld-sample-5.jpg',
    altText: 'Balancing work and life',
    category: 'Lifestyle',
    date: 'Jul 16',
    title: 'Balancing work and life effectively',
    excerpt: 'Strategies to maintain a healthy work-life equilibrium...',
  },
  {
    link: '/blogs/sustainable-fashion',
    image: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1731009784/samples/smile.jpg',
    altText: 'Sustainable fashion choices',
    category: 'Lifestyle',
    date: 'Jul 17',
    title: 'Making sustainable fashion choices',
    excerpt: 'How to shop ethically without breaking the bank...',
  },
]);

// Sample data for TECHNOLOGY
const featuredTechPosts = assignRandomAuthor([
  {
    link: '/blogs/ai-transforming-industries',
    image: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1736460433/tech-blogs-1_gsnmnc.jpg',
    altText: 'AI: Transforming industries one byte at a time',
    category: 'Technology',
    date: 'Jul 3',
    title: 'AI: Transforming industries one byte at a time',
    excerpt: 'A look at how AI is revolutionizing various industries...',
  },
  {
    link: '/blogs/future-of-smart-homes',
    image: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1736460453/Social-4_vntc4z.webp',
    altText: 'Smart homes of the future',
    category: 'Technology',
    date: 'Jul 8',
    title: 'Smart homes of the future',
    excerpt: 'Is it just convenience or are there major privacy concerns...?',
  },
]);

const recentTechPosts = assignRandomAuthor([
  {
    link: '/blogs/blockchain-basics',
    image: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1736460459/photo-1499750310107-5fef28a66643_eyvdu2.jpg',
    altText: 'Blockchain basics',
    category: 'Technology',
    date: 'Jul 9',
    title: 'Blockchain for absolute beginners',
    excerpt: 'Demystifying the hype around distributed ledgers...',
  },
  {
    link: '/blogs/vr-ar-trends',
    image: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1736460473/content-syndication-5350x2675_wlyo5p.png',
    altText: 'VR/AR trends',
    category: 'Technology',
    date: 'Jul 10',
    title: 'VR & AR trends in gaming',
    excerpt: 'How immersive technologies are shaping the next generation of games...',
  },
  {
    link: '/blogs/tech-innovators',
    image: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1736460481/unnamed_adg3ae.jpg',
    altText: 'Profiles of tech innovators',
    category: 'Technology',
    date: 'Jul 11',
    title: 'Profiles of tech innovators',
    excerpt: 'Meet the minds behind groundbreaking modern technologies...',
  },
  {
    link: '/blogs/quantum-computing',
    image: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1736460491/CPA_Blog_How-Will-Tech-Impact-Accounting_Header_oxkruv.webp',
    altText: 'Quantum computing breakthroughs',
    category: 'Technology',
    date: 'Jul 12',
    title: 'Quantum computing breakthroughs',
    excerpt: 'Exploring the potential of quantum machines in solving complex problems...',
  },
  {
    link: '/blogs/cybersecurity-tips',
    image: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1736460631/marvin-meyer-SYTO3xs06fU-unsplash_xjjz9c.jpg',
    altText: 'Cybersecurity best practices',
    category: 'Technology',
    date: 'Jul 13',
    title: 'Cybersecurity tips for everyone',
    excerpt: 'Protect your data and privacy with these essential steps...',
  },
  {
    link: '/blogs/cloud-computing-future',
    image: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1736460640/carlos-muza-hpjSkU2UYSU-unsplash_hrl0yz.jpg',
    altText: 'The future of cloud computing',
    category: 'Technology',
    date: 'Jul 14',
    title: 'The future of cloud computing',
    excerpt: 'Where is the cloud headed in the next decade...?',
  },
]);

const allPosts = [
  ...featuredLifestylePosts,
  ...recentLifestylePosts,
  ...featuredTechPosts,
  ...recentTechPosts,
];

// Configure routing
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <App
        lifestylePosts={{
          featured: featuredLifestylePosts,
          recent: recentLifestylePosts,
        }}
        technologyPosts={{
          featured: featuredTechPosts,
          recent: recentTechPosts,
        }}
        info={info}
      />
    ),
  },
  {
    path: '/blogs/:blogId',
    element: <BlogPage posts={allPosts} />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyle />
    <RouterProvider router={router} />
  </>
);
