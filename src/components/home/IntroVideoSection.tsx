import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle } from 'lucide-react';

const IntroVideoSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Your Journey Starts Here
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Welcome to Navigator Immigration, where dreams become reality. Watch our introductory video to learn how we&apos;ve helped thousands of individuals and families achieve their immigration goals with expert guidance and personalized support.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-[#436175]" />
                <span className="text-gray-700">15+ years of proven success</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-[#436175]" />
                <span className="text-gray-700">10,000+ successful cases</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-[#436175]" />
                <span className="text-gray-700">98% client satisfaction rate</span>
              </div>
            </div>
            
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#436175] to-[#585a5e] px-6 py-3 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:scale-[1.02] hover:from-[#585a5e] hover:to-[#436175] sm:px-8 sm:py-4 sm:text-base"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
          
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative h-[400px] bg-gray-100">
                <Image
                  src="/img/images/intro.jpeg"
                  alt="Professional immigration consultation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="   px-4 py-2 rounded-full shadow-lg">
                    <span className="text-sm font-bold text-gray-900">About Navigator Immigration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroVideoSection;
