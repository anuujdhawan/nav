import type { BlogPost } from '@/lib/blogData';
import HeroSection from '../components/home/HeroSection';
import IntroVideoSection from '../components/home/IntroVideoSection';
import ProcessSection from '../components/home/ProcessSection';
import SuccessStoriesSection from '../components/home/SuccessStoriesSection';
import ServicesSection from '../components/home/ServicesSection';
import BlogsSection from '../components/home/BlogsSection';
import FAQSection from '../components/home/FAQSection';
import CTASection from '../components/home/CTASection';

export default function HomeContent({ latestPosts }: { latestPosts: BlogPost[] }) {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <IntroVideoSection />
      <ProcessSection />
      <SuccessStoriesSection />
      <ServicesSection />
      <BlogsSection posts={latestPosts} />
      <FAQSection />
      <CTASection />
    </div>
  );
}
