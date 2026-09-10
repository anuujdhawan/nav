import { FileText, Phone, Globe, Award } from 'lucide-react';

const ProcessSection = () => {
  const processSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Free assessment of your profile and immigration goals",
      icon: <Phone className="w-8 h-8" />,
      color: "accent-orange-red"
    },
    {
      step: 2,
      title: "Document Preparation",
      description: "Expert assistance with all required documentation",
      icon: <FileText className="w-8 h-8" />,
      color: "muted-brown-grey"
    },
    {
      step: 3,
      title: "Application Submission",
      description: "Careful review and submission of your application",
      icon: <Globe className="w-8 h-8" />,
      color: "accent-orange-red"
    },
    {
      step: 4,
      title: "Success & Support",
      description: "Continuous support until your goal is achieved",
      icon: <Award className="w-8 h-8" />,
      color: "muted-brown-grey"
    }
  ];

  return (
    <section className="py-24 bg-[#f5f5dc] relative overflow-hidden">
      {/* Background Shadows */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-[#f5f5dc]/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-[#436175]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-[#585a5e]/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-dark-blue-grey mb-6">
            Our Process
          </h2>
          <p className="text-lg sm:text-xl text-[#585a5e] max-w-3xl mx-auto leading-relaxed">
            A systematic approach to ensure your immigration journey is smooth and successful
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((process) => (
            <div key={process.step} className="group text-center">
              <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  process.color === 'accent-orange-red' 
                    ? 'bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white group-hover:shadow-lg' 
                    : 'bg-[#436175]/20 text-[#585a5e] group-hover:bg-[#436175] group-hover:text-white group-hover:shadow-lg'
                }`}>
                  {process.icon}
                </div>
                <div className={`absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-8 sm:h-8 text-white rounded-full flex items-center justify-center font-bold text-[10px] sm:text-sm shadow-lg ${
                  process.color === 'accent-orange-red' ? 'bg-[#436175]' : 'bg-[#585a5e]'
                }`}>
                  {process.step}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-dark-blue-grey mb-3">
                {process.title}
              </h3>
              <p className="text-[#585a5e] leading-relaxed text-sm sm:text-base">
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
