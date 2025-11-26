// src/data/blogData.js
import blogMainImage from '../assets/images/blog_main.webp'
import blogMain1 from '../assets/images/blog1.webp'
import blogMain2 from '../assets/images/blog2.webp'
import blogMain3 from '../assets/images/blog3.webp'
import blogMain4 from '../assets/images/blog4.webp'
import blogMain5 from '../assets/images/blog5.webp'
import blogMain6 from '../assets/images/blog6.webp'
import blogMain7 from '../assets/images/blog7.webp'
import blogMain8 from '../assets/images/blog8.webp'
import blogMain9 from '../assets/images/blog9.webp'
import blogMain10 from '../assets/images/blog10.webp'
// Bạn sẽ cần chuẩn bị các ảnh này trong thư mục public/images/blog/
// Hoặc thay thế bằng URL từ một dịch vụ ảnh.

export const heroArticle = {
  title: "Next-generation high performance laptops for gaming, creation, or study",
  buttonText: "Read article",
  backgroundImage: blogMainImage,
};

export const blogPosts = [
  {
    id: 1,
    tag: "GEAR",
    title: "What is AI tech—and which devices are worth renting with Grover?",
    description: "If you're thinking about starting your own podcast—or you're looking to take your game to the next level—...",
    image: blogMain1,
    bgColor: "bg-yellow-100",
  },
  {
    id: 2,
    tag: "GEAR",
    title: "How to choose a podcast microphone",
    description: "If you're thinking about starting your own podcast—or you're looking to take your game to the next level—...",
    image: blogMain2,
    bgColor: "bg-pink-100",
  },
  {
    id: 3,
    tag: "NEWS",
    title: "Best Laptops for Small Businesses – B2B Solutions",
    description: "Best Laptops for Small Businesses...",
    image: blogMain3,
    bgColor: "bg-pink-100",
  },
  {
    id: 4,
    tag: "TECH",
    title: "7 ways to transfer data from one android smartphone to another",
    description: "Transferring data from one smartphone to another can be a daunting task, especially if you have a lot to...",
    image: blogMain4,
    bgColor: "bg-cyan-100",
  },
  {
    id: 5,
    tag: "GAMING",
    title: "Calling all gamers: why the Xbox Series S is worth your time",
    description: "Right now, you're almost as likely to get your hands on an Xbox Series X or a PlayStation 5 as you are to s...",
    image: blogMain5,
    bgColor: "bg-pink-100",
  },
  {
    id: 6,
    tag: "TECH",
    title: "Welcome to the metaverse! Oculus Quest 2 vs. other virtual reality glasses",
    description: "The metaverse is coming... but what exactly is it? And how can you dip your toe into the world of VR?...",
    image: blogMain6,
    bgColor: "bg-teal-100",
  },
  {
    id: 7,
    tag: "NEWS",
    title: "A guide to the best laptops for small businesses",
    description: "A laptop is the perfect hardware choice for small business owners and employees due to the benefit...",
    image: blogMain7,
    bgColor: "bg-gray-100",
  },
  {
    id: 8,
    tag: "GEAR",
    title: "How to find the right iPhone 15 model for you",
    description: "The new iPhone 15 series was recently released and is ready to rent from Grover. The question that...",
    image: blogMain8,
    bgColor: "bg-gray-100",
  },
   {
    id: 9,
    tag: "TECH",
    title: "Why Renting Smart Home Technology is the Future of Modern Living",
    description: "Renting smart technology for a modern, flexible lifestyle.",
    image: blogMain9,
    bgColor: "bg-yellow-50",
  },
  // Thêm các bài viết khác ở đây để nút "Load more" có tác dụng
   {
    id: 10,
    tag: "GAMING",
    title: "Entertainment on the go: Are tablets good for gaming?",
    description: "Light, portable, powerful and with premium features galore, a tablet is the perfect gaming accessory for...",
    image: blogMain10,
    bgColor: "bg-pink-100",
  },
];