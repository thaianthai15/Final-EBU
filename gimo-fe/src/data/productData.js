// src/data/productData.js
import top1 from '../assets/images/top_1.webp'
import top2 from '../assets/images/top_2.webp'
import top3 from '../assets/images/top_3.webp'
import top4 from '../assets/images/top_4.webp'
import top5 from '../assets/images/top_5.webp'
import top6 from '../assets/images/top_6.webp'
import top7 from '../assets/images/top_7.webp'
import top8 from '../assets/images/top_8.jpeg'
import top9 from '../assets/images/top_9.webp'
import top10 from '../assets/images/top_10.webp'

// Đặt các ảnh này vào thư mục public/images/products/
export const products = [
  {
    id: 1,
    name: 'Canon EOS R8 Camera Kit with RF 24-105mm f/4.0-7.1 IS STM Kit Lens',
    image: top1,
    tags: ['-20%', 'BLACK FRIDAY'],
    specs: '26MP Vollformat Kit, 4K60 10-bit, C-Log3, Dual Pixel II, 6-Achsen IBIS, Zwei UHS-II-Slots',
    originalPrice: 129.90,
    currentPrice: 99.90,
  },
  {
    id: 2,
    name: 'Apple iPhone 17 Pro - 256GB',
    image: top2,
    tags: ['NEW TO GROVER'],
    specs: '6.3" LTPO Super Retina XDR OLED, Triple Rear Camera, 12GB RAM, Apple A19 Pro, 5G',
    originalPrice: null,
    currentPrice: 99.90,
  },
  {
    id: 3,
    name: 'Sony Alpha 7 IV Camera Kit with FE 28-70mm f/3.5-5.6 OSS Lens',
    image: top3,
    tags: ['-20%', 'BLACK FRIDAY'],
    specs: 'Hybrid 33MP Exmor R Sensor, 8K 30p, 4K 120p, 7K oversampled for 8K 30p, 5-axis stabilization...',
    originalPrice: 134.90,
    currentPrice: 114.90,
  },
  {
    id: 4,
    name: 'Acer Nitro 50 (N50-650) Gaming Desktop - Intel® Core™ i5-14400F - 16GB - 1TB SSD',
    image: top4,
    tags: ['-20%'],
    specs: 'i5-14400F - 16GB - 1TB SSD - RTX™ 4060 - W11H - 3/2026 ESET-Security - 3M McAfee...',
    originalPrice: 69.90,
    currentPrice: 54.90,
  },
  {
    id: 5,
    name: 'Apple iPhone 16 - 128GB - Dual SIM',
    image: top5,
    tags: [],
    specs: '6.1" OLED Super Retina XDR, Dual rear camera, Apple A18, 5G',
    originalPrice: null,
    currentPrice: 44.90,
  },
  {
    id: 6,
    name: 'Sony WH-1000 XM5 Noise-cancelling Over-ear Bluetooth Headphones',
    image: top6,
    tags: [],
    specs: '30h Akku, 30mm Treiber',
    originalPrice: null,
    currentPrice: 22.90,
  },
  {
    id: 7,
    name: 'Apple Airpods Pro 2 in-ear Bluetooth Headphones',
    image: top7,
    tags: [],
    specs: '',
    originalPrice: 19.90,
    currentPrice: 19.90,
  },
  {
    id: 8,
    name: 'Nintendo Switch 2 Console',
    image: top8,
    tags: [],
    specs: '2.8", 1080p, 120fps, 2x Joy-Con 2, 1TB',
    originalPrice: 33.90,
    currentPrice: 24.90,
  },
  {
    id: 9,
    name: 'Sony PlayStation 5 Slim Digital Console',
    image: top9,
    tags: [],
    specs: '4K & 8K Ready, 120fps, HDR, 1TB SSD',
    originalPrice: 49.90,
    currentPrice: 22.90,
  },
];