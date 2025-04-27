
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search query
    console.log('Search query:', searchQuery);
  };

  return (
    <div className="relative bg-gradient-to-b from-himlam-100 to-white py-20 px-4 overflow-hidden">
      {/* Animated circles in background */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-himlam-200/30 animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-himlam-100/40 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-40 left-1/4 w-16 h-16 rounded-full bg-himlam-300/20 animate-float" style={{ animationDelay: '1.5s' }}></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-himlam-900 leading-tight">
              Tìm công việc <span className="text-himlam-500">IT lý tưởng</span> cho sự nghiệp của bạn
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              HimLam kết nối bạn với hàng ngàn cơ hội việc làm từ các công ty công nghệ hàng đầu trên toàn quốc
            </p>
            
            <form onSubmit={handleSearch} className="flex w-full max-w-md relative">
              <Input
                type="text"
                placeholder="Tìm kiếm vị trí, công ty, kỹ năng..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-32 border-himlam-200 focus:border-himlam-400 shadow-sm"
              />
              <Button 
                type="submit" 
                className="absolute right-0 h-full bg-himlam-500 hover:bg-himlam-600"
              >
                <Search className="h-4 w-4 mr-2" /> Tìm kiếm
              </Button>
            </form>
          </div>

          <div className="md:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
              alt="Job seeker" 
              className="max-w-full h-auto rounded-lg shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-500"
              style={{ maxHeight: '400px' }}
            />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="p-4 bg-white/70 backdrop-blur rounded-lg shadow-sm border border-himlam-100">
            <div className="text-3xl font-bold text-himlam-600">10,000+</div>
            <div className="text-sm text-gray-600">Việc làm</div>
          </div>
          <div className="p-4 bg-white/70 backdrop-blur rounded-lg shadow-sm border border-himlam-100">
            <div className="text-3xl font-bold text-himlam-600">5,000+</div>
            <div className="text-sm text-gray-600">Công ty</div>
          </div>
          <div className="p-4 bg-white/70 backdrop-blur rounded-lg shadow-sm border border-himlam-100">
            <div className="text-3xl font-bold text-himlam-600">20,000+</div>
            <div className="text-sm text-gray-600">Ứng viên</div>
          </div>
          <div className="p-4 bg-white/70 backdrop-blur rounded-lg shadow-sm border border-himlam-100">
            <div className="text-3xl font-bold text-himlam-600">95%</div>
            <div className="text-sm text-gray-600">Tỷ lệ thành công</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
