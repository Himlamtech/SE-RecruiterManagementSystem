
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, MapPin, DollarSign, Briefcase, Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const MOCK_JOBS = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: ['Senior Frontend Developer', 'Backend Engineer', 'ML Engineer', 'DevOps Specialist', 'Full Stack Developer'][i % 5],
  company: ['Google', 'Nvidia', 'Viettel', 'FPT', 'VNG', 'Microsoft', 'Amazon', 'Shopee', 'Tiki'][i % 9],
  location: ['Hà Nội', 'Hồ Chí Minh', 'Đà Nẵng', 'Remote'][i % 4],
  salaryRange: ['30-50 triệu', '20-30 triệu', '40-60 triệu', '25-35 triệu', '50-70 triệu'][i % 5],
  type: ['Full-time', 'Part-time', 'Contract', 'Freelance'][i % 4],
  tags: [
    ['React', 'TypeScript', 'Tailwind'],
    ['Python', 'Django', 'PostgreSQL'],
    ['TensorFlow', 'PyTorch', 'Python'],
    ['Docker', 'Kubernetes', 'AWS'],
    ['JavaScript', 'Node.js', 'MongoDB']
  ][i % 5],
  postedDays: Math.floor(Math.random() * 10) + 1
}));

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [salaryRange, setSalaryRange] = useState([20, 60]);
  
  const locations = ['Hà Nội', 'Hồ Chí Minh', 'Đà Nẵng', 'Remote'];
  const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Freelance'];
  const categories = ['Frontend', 'Backend', 'Full Stack', 'DevOps', 'AI/ML', 'Mobile', 'Data Science'];
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-himlam py-12 px-4">
          <div className="container mx-auto text-center max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 animate-fade-in">
              Tìm việc làm IT phù hợp với bạn
            </h1>
            <form onSubmit={handleSearch} className="flex w-full relative animate-fade-in">
              <Input
                type="text"
                placeholder="Tìm kiếm vị trí, công ty, kỹ năng..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-32 border-himlam-200 focus:border-himlam-400"
              />
              <Button 
                type="submit" 
                className="absolute right-0 h-full bg-himlam-500 hover:bg-himlam-600"
              >
                <Search className="h-4 w-4 mr-2" /> Tìm kiếm
              </Button>
            </form>
            <div className="mt-4 text-gray-600 animate-fade-in">
              <p>Tìm thấy {MOCK_JOBS.length} việc làm phù hợp</p>
            </div>
          </div>
        </section>
        
        {/* Filters and Results */}
        <div className="container mx-auto py-8 px-4">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Filter Section */}
            <div className="w-full md:w-1/4">
              <div className="md:hidden mb-4">
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-between"
                  onClick={() => setFilterOpen(!filterOpen)}
                >
                  <div className="flex items-center">
                    <Filter className="h-4 w-4 mr-2" />
                    <span>Bộ lọc</span>
                  </div>
                  {filterOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </Button>
              </div>
              
              <div className={`bg-white p-6 rounded-lg shadow-sm border border-gray-100 ${filterOpen ? 'block' : 'hidden md:block'} animate-fade-in`}>
                <h3 className="font-semibold text-lg mb-4">Lọc kết quả</h3>
                
                {/* Salary Range */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-2">Mức lương (triệu VND)</h4>
                  <div className="px-2">
                    <Slider
                      defaultValue={[20, 60]}
                      max={100}
                      min={0}
                      step={5}
                      value={salaryRange}
                      onValueChange={(values) => setSalaryRange(values)}
                      className="mt-2"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-2">
                      <span>{salaryRange[0]} triệu</span>
                      <span>{salaryRange[1]} triệu</span>
                    </div>
                  </div>
                </div>
                
                {/* Location */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-2">Địa điểm</h4>
                  <div className="space-y-2">
                    {locations.map((location, i) => (
                      <div key={i} className="flex items-center">
                        <Checkbox id={`location-${i}`} />
                        <label htmlFor={`location-${i}`} className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          {location}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Job Type */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-2">Loại công việc</h4>
                  <div className="space-y-2">
                    {jobTypes.map((type, i) => (
                      <div key={i} className="flex items-center">
                        <Checkbox id={`type-${i}`} />
                        <label htmlFor={`type-${i}`} className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Category */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-2">Danh mục</h4>
                  <div className="space-y-2">
                    {categories.map((category, i) => (
                      <div key={i} className="flex items-center">
                        <Checkbox id={`category-${i}`} />
                        <label htmlFor={`category-${i}`} className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full bg-himlam-500 hover:bg-himlam-600 mt-4">
                  Áp dụng bộ lọc
                </Button>
              </div>
            </div>
            
            {/* Job Listings */}
            <div className="w-full md:w-3/4">
              <div className="space-y-4">
                {MOCK_JOBS.map((job, index) => (
                  <Link 
                    key={job.id} 
                    to={`/jobs/${job.id}`}
                    className="block"
                  >
                    <div 
                      className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-himlam-300 transition-all duration-300 animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div>
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-himlam-100 rounded-md flex items-center justify-center mr-3">
                              <div className="text-xs font-bold text-himlam-700">{job.company.substring(0, 2)}</div>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-800 hover:text-himlam-600 transition-colors">
                                {job.title}
                              </h3>
                              <p className="text-gray-600">{job.company}</p>
                            </div>
                          </div>
                          
                          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                            <div className="flex items-center text-sm text-gray-600">
                              <MapPin className="h-4 w-4 mr-1 text-himlam-500" />
                              {job.location}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <DollarSign className="h-4 w-4 mr-1 text-himlam-500" />
                              {job.salaryRange}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Briefcase className="h-4 w-4 mr-1 text-himlam-500" />
                              {job.postedDays} ngày trước
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 md:mt-0">
                          <Badge variant="outline" className="border-himlam-300 text-himlam-700">
                            {job.type}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex flex-wrap gap-2">
                        {job.tags.map((tag, i) => (
                          <span key={i} className="text-xs py-1 px-2 bg-himlam-100 rounded-full text-himlam-700">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="mt-8 flex justify-center animate-fade-in">
                <Button variant="outline" className="border-himlam-300 hover:border-himlam-500 mr-2">
                  Trang trước
                </Button>
                <Button variant="outline" className="border-himlam-300 hover:border-himlam-500">
                  Trang sau
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Jobs;
