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
    hashtags: ['#mindfulness', '#wellness', '#balance'],
    subtitles: [
      { title: 'What is Mindfulness?', content: 'An introduction to the concept and benefits of mindfulness.' },
      { title: 'Mindfulness Techniques', content: 'Simple practices to incorporate mindfulness into your daily life.' },
      { title: 'Overcoming Challenges', content: 'How to deal with distractions and stay focused.' },
      { title: 'Mindfulness and Productivity', content: 'The positive impact of mindfulness on work and life balance.' },
    ],
  },
  {
    link: '/blogs/healthy-eating-busy-schedule',
    image: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1731009778/samples/people/bicycle.jpg',
    altText: 'Healthy eating with a busy schedule',
    category: 'Lifestyle',
    date: 'Jul 10',
    title: 'Healthy eating with a busy schedule',
    excerpt: 'Tips and tricks for maintaining a nutritious diet on the go...',
    hashtags: ['#healthyEating', '#nutrition', '#busyLife'],
    subtitles: [
      { title: 'The Importance of Nutrition', content: 'Why healthy eating matters in a hectic schedule.' },
      { title: 'Meal Prep Tips', content: 'Quick and easy strategies for planning your meals.' },
      { title: 'Snacking Smart', content: 'How to choose snacks that fuel your body and mind.' },
      { title: 'Dining Out Healthily', content: 'Navigating restaurant menus to make healthier choices.' },
    ],
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
    hashtags: ['#ecoFriendly', '#sustainableTravel', '#greenLiving'],
    subtitles: [
      { title: 'Why Eco-Commutes Matter', content: 'The environmental impact of our daily travel choices.' },
      { title: 'Top Sustainable Modes', content: 'From biking to carpooling, explore greener options.' },
      { title: 'Saving Costs with Green Travel', content: 'How eco-friendly commutes can save you money.' },
      { title: 'Inspiring Urban Solutions', content: 'Cities leading the way in sustainable transportation.' },
    ],
  },
  {
    link: '/blogs/morning-routines',
    image: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1731009779/samples/landscapes/nature-mountains.jpg',
    altText: 'Morning routines',
    category: 'Lifestyle',
    date: 'Jul 13',
    title: 'Morning routines for success',
    excerpt: 'Why a consistent morning routine can boost productivity...',
    hashtags: ['#productivity', '#morningHabits', '#success'],
    subtitles: [
      { title: 'Benefits of Morning Routines', content: 'How starting your day right improves productivity.' },
      { title: 'Key Habits to Include', content: 'The essential elements of a successful morning routine.' },
      { title: 'Time Management Tips', content: 'Making time for routines even on busy mornings.' },
      { title: 'Success Stories', content: 'Examples of influential people with powerful routines.' },
    ],
  },
  {
    link: '/blogs/street-fashion-trends',
    image: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1731009784/samples/balloons.jpg',
    altText: 'Street fashion trends',
    category: 'Lifestyle',
    date: 'Jul 14',
    title: 'Street fashion trends to watch',
    excerpt: 'Urban style insights from around the globe...',
    hashtags: ['#mindfulness', '#wellness', '#balance'],
    subtitles: [
      { title: 'What is Street Fashion?', content: 'Understanding the influence of streetwear on culture.' },
      { title: 'Icons of Street Fashion', content: 'Key figures who revolutionized urban style.' },
      { title: 'Streetwear and Identity', content: 'How street fashion shapes personal expression.' },
      { title: 'Global Trends', content: 'Street fashion movements around the world.' },
    ],

  },
  {
    link: '/blogs/digital-nomad-lifestyle',
    image: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1731009787/cld-sample-3.jpg',
    altText: 'Digital nomad lifestyle',
    category: 'Lifestyle',
    date: 'Jul 15',
    title: 'Pros & cons of a digital nomad lifestyle',
    excerpt: 'Working remotely from anywhere in the world...',
    hashtags: ['#mindfulness', '#wellness', '#balance'],
    subtitles: [
      { title: 'The Rise of Digital Nomads', content: 'What it means to be a digital nomad in today’s world.' },
      { title: 'Benefits of Remote Work', content: 'Flexibility and freedom in a nomadic lifestyle.' },
      { title: 'Challenges of Digital Nomad Life', content: 'From loneliness to unreliable internet, what to expect.' },
      { title: 'Building a Routine', content: 'How to stay productive while working from anywhere.' },
    ],

  },
  {
    link: '/blogs/balancing-work-life',
    image: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1731009787/cld-sample-5.jpg',
    altText: 'Balancing work and life',
    category: 'Lifestyle',
    date: 'Jul 16',
    title: 'Balancing work and life effectively',
    excerpt: 'Strategies to maintain a healthy work-life equilibrium...',
    hashtags: ['#mindfulness', '#wellness', '#balance'],
    subtitles: [
      { title: 'Defining Work-Life Balance', content: 'What it means and why it matters.' },
      { title: 'Tips for Balance', content: 'Practical strategies to manage work and personal life.' },
      { title: 'Signs of Imbalance', content: 'Recognizing when it’s time to take a step back.' },
      { title: 'The Role of Employers', content: 'How companies can support their employees.' },
    ],

  },
  {
    link: '/blogs/sustainable-fashion',
    image: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1731009784/samples/smile.jpg',
    altText: 'Sustainable fashion choices',
    category: 'Lifestyle',
    date: 'Jul 17',
    title: 'Making sustainable fashion choices',
    excerpt: 'How to shop ethically without breaking the bank...',
    hashtags: ['#mindfulness', '#wellness', '#balance'],
    subtitles: [
      { title: 'The Rise of Sustainable Fashion', content: 'How the industry is shifting toward ethical practices.' },
      { title: 'Shopping Sustainably', content: 'Tips for finding eco-friendly brands.' },
      { title: 'Challenges in Sustainability', content: 'What’s holding back the fashion industry.' },
      { title: 'Consumer Responsibility', content: 'How your choices can impact the planet.' },
    ],

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
    hashtags: ['#AI', '#automation', '#data'],
    subtitles: [
      { title: 'The Rise of AI', content: 'Discover how artificial intelligence is shaping industries.' },
      { title: 'AI in Everyday Life', content: 'Applications of AI that affect our daily routines.' },
      { title: 'Ethics in Automation', content: 'Examining the ethical implications of AI technology.' },
      { title: 'Future Prospects', content: 'Predictions for how AI will evolve and impact society.' },
    ],
  },
  {
    link: '/blogs/future-of-smart-homes',
    image: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1736460453/Social-4_vntc4z.webp',
    altText: 'Smart homes of the future',
    category: 'Technology',
    date: 'Jul 8',
    title: 'Smart homes of the future',
    excerpt: 'Is it just convenience or are there major privacy concerns...?',
    hashtags: ['#SmartHomes', '#IoT', '#Privacy'],
    subtitles: [
      { title: 'What is a Smart Home?', content: 'A brief overview of the smart home ecosystem.' },
      { title: 'Key Benefits', content: 'Convenience, efficiency, and security features of smart homes.' },
      { title: 'Privacy Concerns', content: 'Addressing risks in data collection and usage.' },
      { title: 'The Road Ahead', content: 'Emerging technologies that will shape smart homes.' },
    ],
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
    hashtags: ['#blockchain', '#crypto', '#future'],
    subtitles: [
      { title: 'What is Blockchain?', content: 'Understand the foundational technology behind cryptocurrencies.' },
      { title: 'Key Features', content: 'Decentralization, security, and transparency explained.' },
      { title: 'Use Cases', content: 'How blockchain is transforming industries like finance and healthcare.' },
      { title: 'The Future of Blockchain', content: 'Predictions for the technology’s evolution.' },
    ],
  },
  {
    link: '/blogs/vr-ar-trends',
    image: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1736460473/content-syndication-5350x2675_wlyo5p.png',
    altText: 'VR/AR trends',
    category: 'Technology',
    date: 'Jul 10',
    title: 'VR & AR trends in gaming',
    excerpt: 'How immersive technologies are shaping the next generation of games...',
    hashtags: ['#technology', '#ai', '#future'],
    subtitles: [
      { title: 'What is VR and AR?', content: 'The basics of virtual and augmented reality.' },
      { title: 'Gaming Applications', content: 'How immersive tech is transforming gaming experiences.' },
      { title: 'Other Uses of VR/AR', content: 'Beyond gaming: education, training, and more.' },
      { title: 'The Future of Immersion', content: 'Where VR and AR are headed in the next decade.' },
    ], 

  },
  {
    link: '/blogs/tech-innovators',
    image: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1736460481/unnamed_adg3ae.jpg',
    altText: 'Profiles of tech innovators',
    category: 'Technology',
    date: 'Jul 11',
    title: 'Profiles of tech innovators',
    excerpt: 'Meet the minds behind groundbreaking modern technologies...',
    hashtags: ['#technology', '#ai', '#future'],
    subtitles: [
      { title: 'Meet the Innovators', content: 'Profiles of individuals shaping modern technology.' },
      { title: 'Key Inventions', content: 'Groundbreaking innovations from these tech pioneers.' },
      { title: 'Lessons from Innovators', content: 'What we can learn from their journeys.' },
      { title: 'Inspiration for the Future', content: 'How today’s innovators influence the next generation.' },
    ],
    

  },
  {
    link: '/blogs/quantum-computing',
    image: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1736460491/CPA_Blog_How-Will-Tech-Impact-Accounting_Header_oxkruv.webp',
    altText: 'Quantum computing breakthroughs',
    category: 'Technology',
    date: 'Jul 12',
    title: 'Quantum computing breakthroughs',
    excerpt: 'Exploring the potential of quantum machines in solving complex problems...',
    hashtags: ['#technology', '#ai', '#future'],
    subtitles: [
      { title: 'Understanding Quantum Computing', content: 'The basics of quantum mechanics and its applications.' },
      { title: 'Potential Breakthroughs', content: 'How quantum computing could solve complex problems.' },
      { title: 'Challenges in Development', content: 'The hurdles scientists face in building quantum computers.' },
      { title: 'The Future of Quantum Tech', content: 'Predictions for quantum computing’s impact on industries.' },
    ],
    

  },
  {
    link: '/blogs/cybersecurity-tips',
    image: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1736460631/marvin-meyer-SYTO3xs06fU-unsplash_xjjz9c.jpg',
    altText: 'Cybersecurity best practices',
    category: 'Technology',
    date: 'Jul 13',
    title: 'Cybersecurity tips for everyone',
    excerpt: 'Protect your data and privacy with these essential steps...',
    hashtags: ['#technology', '#ai', '#future'],
    subtitles: [
      { title: 'Cybersecurity Basics', content: 'The importance of protecting your data online.' },
      { title: 'Common Threats', content: 'Identifying phishing, malware, and other risks.' },
      { title: 'Best Practices', content: 'Steps to enhance your personal and professional cybersecurity.' },
      { title: 'Future of Cybersecurity', content: 'Trends shaping the evolution of digital security.' },
    ],

  },
  {
    link: '/blogs/cloud-computing-future',
    image: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1736460640/carlos-muza-hpjSkU2UYSU-unsplash_hrl0yz.jpg',
    altText: 'The future of cloud computing',
    category: 'Technology',
    date: 'Jul 14',
    title: 'The future of cloud computing',
    excerpt: 'Where is the cloud headed in the next decade...?',
    hashtags: ['#technology', '#ai', '#future'],
    subtitles: [
      { title: 'What is Cloud Computing?', content: 'Understanding the foundation of cloud-based systems.' },
      { title: 'Benefits of Cloud Adoption', content: 'Why businesses and individuals rely on cloud services.' },
      { title: 'Risks in the Cloud', content: 'Security and privacy concerns to consider.' },
      { title: 'The Next Decade', content: 'Predictions for the future of cloud technologies.' },
    ],

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
