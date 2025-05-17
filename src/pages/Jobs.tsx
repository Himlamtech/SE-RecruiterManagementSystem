
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Search, MapPin, DollarSign, Briefcase, Filter, ChevronDown, ChevronUp } from 'lucide-react';

const MOCK_JOBS = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: ['Senior Frontend Developer', 'Backend Engineer', 'ML Engineer', 'DevOps Specialist', 'Full Stack Developer'][i % 5],
  company: ['Google', 'Nvidia', 'Viettel', 'FPT', 'VNG', 'Microsoft', 'Amazon', 'Shopee', 'Tiki'][i % 9],
  location: ['Hanoi', 'Ho Chi Minh', 'Da Nang', 'Remote'][i % 4],
  salaryRange: ['30-50 million', '20-30 million', '40-60 million', '25-35 million', '50-70 million'][i % 5],
  salaryMin: [30, 20, 40, 25, 50][i % 5],
  salaryMax: [50, 30, 60, 35, 70][i % 5],
  type: ['Full-time', 'Part-time', 'Contract', 'Freelance'][i % 4],
  category: ['Frontend', 'Backend', 'AI/ML', 'DevOps', 'Full Stack'][i % 5],
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
  const [salaryRange, setSalaryRange] = useState<number[]>([20, 60]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredJobs, setFilteredJobs] = useState(MOCK_JOBS);
  const [isFiltering, setIsFiltering] = useState(false);
  
  const locations = ['Hanoi', 'Ho Chi Minh', 'Da Nang', 'Remote'];
  const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Freelance'];
  const categories = ['Frontend', 'Backend', 'Full Stack', 'DevOps', 'AI/ML', 'Mobile', 'Data Science'];
  
  // Toggle selection for checkboxes
  const toggleLocation = (location: string) => {
    setSelectedLocations(prev => 
      prev.includes(location) 
        ? prev.filter(loc => loc !== location)
        : [...prev, location]
    );
  };
  
  const toggleJobType = (type: string) => {
    setSelectedJobTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };
  
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(cat => cat !== category)
        : [...prev, category]
    );
  };
  
  // Apply filters
  const applyFilters = () => {
    setIsFiltering(true);
    
    const filtered = MOCK_JOBS.filter(job => {
      // Filter by salary range
      const jobMinSalary = job.salaryMin;
      const jobMaxSalary = job.salaryMax;
      
      const salaryMatch = 
        (jobMinSalary >= salaryRange[0] && jobMinSalary <= salaryRange[1]) || 
        (jobMaxSalary >= salaryRange[0] && jobMaxSalary <= salaryRange[1]);
      
      // Filter by location
      const locationMatch = selectedLocations.length === 0 || selectedLocations.includes(job.location);
      
      // Filter by job type
      const typeMatch = selectedJobTypes.length === 0 || selectedJobTypes.includes(job.type);
      
      // Filter by category
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(job.category);
      
      // Filter by search query
      const searchMatch = 
        searchQuery === '' || 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return salaryMatch && locationMatch && typeMatch && categoryMatch && searchMatch;
    });
    
    setFilteredJobs(filtered);
    
    toast({
      title: "Filters Applied",
      description: `Found ${filtered.length} matching jobs`,
    });
    
    setTimeout(() => setIsFiltering(false), 500);
  };
  
  // Reset filters
  const resetFilters = () => {
    setSalaryRange([20, 60]);
    setSelectedLocations([]);
    setSelectedJobTypes([]);
    setSelectedCategories([]);
    setSearchQuery('');
    setFilteredJobs(MOCK_JOBS);
    
    toast({
      title: "Filters Reset",
      description: "All filters have been cleared"
    });
  };
  
  // Handle search form submit
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    applyFilters();
  };
  
  // Apply initial filters on component mount
  useEffect(() => {
    setFilteredJobs(MOCK_JOBS);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-himlam py-12 px-4">
          <div className="container mx-auto text-center max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 animate-fade-in">
              Find IT jobs that fit you
            </h1>
            <form onSubmit={handleSearch} className="flex w-full relative animate-fade-in">
              <Input
                type="text"
                placeholder="Search position, company, skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-32 border-himlam-200 focus:border-himlam-400"
              />
              <Button 
                type="submit" 
                className="absolute right-0 h-full bg-himlam-500 hover:bg-himlam-600"
              >
                <Search className="h-4 w-4 mr-2" /> Search
              </Button>
            </form>
            <div className="mt-4 text-gray-600 animate-fade-in">
              <p>Found {filteredJobs.length} matching jobs</p>
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
                    <span>Filters</span>
                  </div>
                  {filterOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </Button>
              </div>
              
              <div className={`bg-white p-6 rounded-lg shadow-sm border border-gray-100 ${filterOpen ? 'block' : 'hidden md:block'} animate-fade-in`}>
                <h3 className="font-semibold text-lg mb-4">Filter Results</h3>
                
                {/* Salary Range */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-2">Salary Range (million VND)</h4>
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
                      <span>{salaryRange[0]} million</span>
                      <span>{salaryRange[1]} million</span>
                    </div>
                  </div>
                </div>
                
                {/* Location */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-2">Location</h4>
                  <div className="space-y-2">
                    {locations.map((location, i) => (
                      <div key={i} className="flex items-center">
                        <Checkbox 
                          id={`location-${i}`} 
                          checked={selectedLocations.includes(location)}
                          onCheckedChange={() => toggleLocation(location)}
                        />
                        <label 
                          htmlFor={`location-${i}`} 
                          className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {location}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Job Type */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-2">Job Type</h4>
                  <div className="space-y-2">
                    {jobTypes.map((type, i) => (
                      <div key={i} className="flex items-center">
                        <Checkbox 
                          id={`type-${i}`}
                          checked={selectedJobTypes.includes(type)}
                          onCheckedChange={() => toggleJobType(type)}
                        />
                        <label 
                          htmlFor={`type-${i}`} 
                          className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Category */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-2">Category</h4>
                  <div className="space-y-2">
                    {categories.map((category, i) => (
                      <div key={i} className="flex items-center">
                        <Checkbox 
                          id={`category-${i}`}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => toggleCategory(category)}
                        />
                        <label 
                          htmlFor={`category-${i}`} 
                          className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    className="flex-1 bg-himlam-500 hover:bg-himlam-600"
                    onClick={applyFilters} 
                    disabled={isFiltering}
                  >
                    {isFiltering ? "Applying..." : "Apply Filters"}
                  </Button>
                  <Button
                    variant="outline"
                    className="border-himlam-300"
                    onClick={resetFilters}
                  >
                    Reset
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Job Listings */}
            <div className="w-full md:w-3/4">
              <div className="space-y-4">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job, index) => (
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
                                {job.postedDays} days ago
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
                        
                        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
                          <span className="text-himlam-600 hover:text-himlam-700 text-sm font-medium">
                            View Details →
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="text-center py-10 bg-white rounded-lg shadow-sm border border-gray-100">
                    <div className="text-gray-500 mb-2 text-lg">No jobs match your filters</div>
                    <p className="text-gray-600 mb-4">Try adjusting your search criteria or reset filters</p>
                    <Button
                      variant="outline"
                      className="border-himlam-300"
                      onClick={resetFilters}
                    >
                      Reset Filters
                    </Button>
                  </div>
                )}
              </div>
              
              {filteredJobs.length > 0 && (
                <div className="mt-8 flex justify-center animate-fade-in">
                  <Button variant="outline" className="border-himlam-300 hover:border-himlam-500 mr-2">
                    Previous Page
                  </Button>
                  <Button variant="outline" className="border-himlam-300 hover:border-himlam-500">
                    Next Page
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Jobs;
