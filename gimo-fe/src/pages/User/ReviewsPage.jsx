import React from 'react';
import Header from '../../components/layout/user/Header';
import Footer from '../../components/layout/user/Footer';
import ReviewCard from './components/ReviewCard';
import AccordionItem from './components/AccordionItem';
import ReviewPoster from '../../assets/images/review.webp'
import ChPlay from '../../assets/images/ggplaypng.png'
import AppStore from '../../assets/images/appstore.png'

// Icons & Images
import { IoStar, IoGiftOutline } from 'react-icons/io5';
import { FaAppStore, FaGooglePlay } from 'react-icons/fa';

// --- Mock Data ---
const trustpilotReviews = [
  { id: 1, name: 'Avi Y.', title: 'Comment and recommendation', timeAgo: '20 minutes ago' },
  { id: 2, name: 'Stan P.', title: 'Stanislav, comp pay', timeAgo: '1 hour ago' },
  { id: 3, name: 'Mario B.', title: 'Rig power for me for the best', timeAgo: '3 days ago' },
  { id: 4, name: 'Cassia', title: 'Lusting was so easy!!!', timeAgo: '3 days ago' },
  { id: 5, name: 'Abraham R.', title: 'The Purchase was easy and I enjoyed', timeAgo: '3 days ago' },
];

const faqData = [
  {
    id: 1,
    question: 'What if I damage a device or cause signs of use?',
    answer: 'Our Grover Care policy covers 90% of repair costs for any damages. You only pay 10% of the cost. Normal signs of use are completely free.'
  },
  {
    id: 2,
    question: 'How can I cancel my rental?',
    answer: 'You can cancel your rental at any time. Simply return the device to us, and your monthly payments will stop. Please refer to our return policy for details.'
  },
  {
    id: 3,
    question: 'How do I pay and when do I get charged?',
    answer: 'We accept various payment methods including credit cards and PayPal. You will be charged on a monthly basis from the day you receive your device.'
  },
  {
    id: 4,
    question: 'Can anyone rent with Grover?',
    answer: 'Anyone over the age of 18 can rent with Grover, subject to a standard credit check to ensure a secure experience for everyone.'
  },
];

const ReviewsPage = () => {
  return (
    <div className="bg-white font-sans">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16">
          <div>
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Grover reviews and feedback</h1>
            <p className="text-gray-600">
              Renting tech is a new concept, so it's natural for a prospective renter to be a bit unsure. Rest assured though: We're always working to provide our customers with the best possible experience.
            </p>
          </div>
          <div>
            <img 
              src= {ReviewPoster} // Cung cấp ảnh này
              alt="Woman using a tablet" 
              className="rounded-lg w-full h-auto object-cover" 
            />
          </div>
        </section>

        {/* Trustpilot Reviews Section */}
        <section className="text-center py-16">
          <h3 className="text-sm uppercase font-bold text-gray-500 tracking-wider">WHAT OUR USERS SAY?</h3>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2">20.000 reviews and counting</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Check what our users think of us and help us grow by leaving your feedback on Trustpilot.
          </p>
          <div className="mt-10 relative">
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide justify-center">
              {trustpilotReviews.map(review => (
                <ReviewCard key={review.id} {...review} />
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            Rated <strong>9.7 / 10</strong> based on <strong>20.842 reviews</strong>. Showing our 4 & 5 star reviews.
          </p>
          <img src="/images/reviews/trustpilot-logo.svg" alt="Trustpilot" className="h-6 mx-auto mt-2" />
          <button className="mt-8 bg-pink-600 text-white font-bold py-3 px-8 rounded-full hover:bg-pink-700 transition-colors">
            Leave a review
          </button>
        </section>

        {/* App Promo Section */}
        <section className="bg-gray-50 rounded-lg text-center py-16 my-16">
          <img src="/images/reviews/app-logo.svg" alt="Grover App Logo" className="h-16 mx-auto mb-4" />
          <p className="text-sm uppercase font-bold text-gray-500 tracking-wider">GROVER APP</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2">Rated with 4.8/5 stars</h2>
          <p className="text-gray-600 mt-4">Download the app to get the best Grover experience.</p>
          <div className="flex justify-center gap-4 mt-8">
            <a href="#"><img src={ChPlay} alt="App Store" className="h-12" /></a>
            <a href="#"><img src={AppStore} alt="Google Play" className="h-12" /></a>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto py-16">
            <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-10">Frequently Asked Questions</h2>
            <div>
                {faqData.map(item => (
                    <AccordionItem key={item.id} question={item.question} answer={item.answer} />
                ))}
            </div>
            <div className="text-center mt-8">
                 <button className="bg-pink-600 text-white font-bold py-3 px-8 rounded-full hover:bg-pink-700 transition-colors">
                    Show all FAQs
                </button>
            </div>
        </section>

        {/* Invite Friends Banner - Tái sử dụng từ trang Blog */}
        <section className="bg-gray-100 rounded-lg p-6 flex items-center justify-between my-16">
            <div className='flex items-center gap-4'>
                <IoGiftOutline className='text-pink-500 w-8 h-8'/>
                <p className='text-gray-700'>
                    <strong>Invite friends, get $50 Grover Bucks.</strong> Earn $50 to save on tech, and your friend gets their first month free.
                </p>
            </div>
            <button className='bg-gray-800 text-white font-semibold py-2 px-6 rounded-full whitespace-nowrap hover:bg-gray-900'>
                Invite friends
            </button>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default ReviewsPage;