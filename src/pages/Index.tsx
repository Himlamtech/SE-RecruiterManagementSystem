
import Hero from "@/components/Hero";
import JobStats from "@/components/JobStats";
import FeaturedJobs from "@/components/FeaturedJobs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <JobStats />
        <FeaturedJobs />
        
        {/* Companies section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 animate-fade-in">Top Recruitment Partners</h2>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {['Google', 'Microsoft', 'Nvidia', 'FPT', 'Viettel', 'VNG'].map((company, index) => (
                <div 
                  key={index} 
                  className="w-24 h-24 rounded-full bg-himlam-50 flex items-center justify-center shadow-sm border border-gray-100 animate-fade-in hover:shadow-md transition-shadow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="font-semibold text-himlam-700">{company}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
