import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Users, Briefcase, GraduationCap, Building, CheckCircle } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Canada Services",
      description: "Canada Immgration",
      icon: <Users className="w-8 h-8" />,
      href: "/skilled",
      color: "accent-orange-red",
      image: "/img/images/canada.jpeg",
      features: ["Express Entry/PNP/CEC", "RCIP/AIP", "Work Permits", "Visit Visas/Family Sponsorships"]
    },
    {
      title: "Australia Services",
      description: "Australia Immigration",
      icon: <Users className="w-8 h-8" />,
      href: "/skilled",
      color: "accent-orange-red",
      image: "/img/images/australia.jpeg",
      features: ["Subclass 190/189/489", "Subclass 482", "Visa Visa", "Family Sponsorships"]
    },
    {
      title: "Work Permits Services",
      description: "Europe Work Permits",
      icon: <Briefcase className="w-8 h-8" />,
      href: "/work-permits",
      color: "muted-brown-grey",
      image: "/img/images/work-permit.jpeg",
      features: ["Poland","Portugal","Norway","Germany & Many more."]
    },
    {
      title: "Student Services",
      description: "Study Abroad Programs",
      icon: <GraduationCap className="w-8 h-8" />,
      href: "/student-visa",
      color: "accent-orange-red",
      image: "/img/images/student-visa-2.jpeg",
      features: ["Canada","Australia","New Zealand","Europe & More."]
    },
    {
      title: "Business Services",
      description: "Investment & Entrepreneur Programs",
      icon: <Building className="w-8 h-8" />,
      href: "/business-immigration",
      color: "accent-orange-red",
      image: "/img/images/business-immigration.jpeg",
      features: ["Europe Business Setup", "Investor Programs",  "Second Passport", "Citizenship by Investment"]
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#f5f5dc]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-blue-grey mb-4 sm:mb-6">Comprehensive Immigration Solutions</h2>
          <p className="text-lg sm:text-xl text-[#585a5e] max-w-3xl mx-auto leading-relaxed">
            Tailored immigration pathways designed to meet your unique goals and aspirations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6">
          {services.map((service) => (
            <div key={service.title}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={service.image} 
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 20vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center ${
                        service.color === 'accent-orange-red' 
                          ? 'bg-orange-100' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {service.icon}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-[#585a5e] sm:p-6 flex flex-col flex-grow">
                  <span className="text-lg font-semibold text-[#ffffff] sm:text-xl text-[#ffffff] mb-2">{service.title}</span>
                  <p className="text-white mb-4 flex-grow">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-white">
                        <CheckCircle className={`w-4 h-4 mr-2 flex-shrink-0 ${
                          service.color === 'accent-orange-red' ? 'text-[#ffffff]' : 'text-[#ffffff]'
                        }`} />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    href={service.href}
                    className={`inline-flex items-center justify-center font-bold px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg border-2 transition-colors duration-200 text-sm sm:text-base ${
                      service.color === 'accent-orange-red' 
                        ? 'border-white text-white hover:border-[#436175] hover:bg-[#436175] hover:shadow-lg' 
                        : 'border-white text-white hover:border-[#436175] hover:bg-[#436175] hover:shadow-lg'
                      }`}
                  >
                    Explore {service.title}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
