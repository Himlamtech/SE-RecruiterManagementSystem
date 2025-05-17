
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Users, Building, Star, Briefcase } from "lucide-react";

// Mock data for companies
const companies = [
  {
    id: 1,
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png",
    industry: "Technology",
    location: "San Francisco",
    size: "1000-5000",
    description: "Google is an American multinational technology company focusing on Internet-related services and products, including online advertising technologies, a search engine, cloud computing, software, and hardware.",
    openPositions: 12,
    rating: 4.8
  },
  {
    id: 2,
    name: "FPT Software",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/FPT_logo.png",
    industry: "Software Development",
    location: "Boston, New York, San Francisco",
    size: "5000-10000",
    description: "FPT Software is a global technology company providing technology services for global markets.",
    openPositions: 25,
    rating: 4.2
  },
  {
    id: 3,
    name: "Verizon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Verizon_2015_logo_-vector.svg/1280px-Verizon_2015_logo_-vector.svg.png",
    industry: "Telecommunications",
    location: "New York",
    size: ">10000",
    description: "Verizon is one of America's largest telecommunications companies, operating in telecommunications, information technology, and digital services.",
    openPositions: 18,
    rating: 4.5
  },
  {
    id: 4,
    name: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png",
    industry: "Internet & Social Media",
    location: "Menlo Park",
    size: "1000-5000",
    description: "Meta is a leading technology company known for social networks, digital platforms, and innovative technologies.",
    openPositions: 15,
    rating: 4.3
  },
  {
    id: 5,
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
    industry: "Technology",
    location: "Redmond",
    size: "500-1000",
    description: "Microsoft is a multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, and personal computers.",
    openPositions: 8,
    rating: 4.7
  },
  {
    id: 6,
    name: "PayPal",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png",
    industry: "Fintech",
    location: "San Jose",
    size: "500-1000",
    description: "PayPal is a leading online payments system that supports online money transfers and serves as an electronic alternative to traditional paper methods.",
    openPositions: 20,
    rating: 4.4
  },
  {
    id: 7,
    name: "AT&T",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/AT%26T_logo_2016.svg/2560px-AT%26T_logo_2016.svg.png",
    industry: "Telecommunications",
    location: "Dallas",
    size: "1000-5000",
    description: "AT&T is an American multinational telecommunications company providing wireless services, broadband, and various digital solutions.",
    openPositions: 10,
    rating: 4.0
  },
  {
    id: 8,
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
    industry: "E-commerce",
    location: "Seattle",
    size: "1000-5000",
    description: "Amazon is one of the largest e-commerce platforms in the world, offering millions of products across various categories.",
    openPositions: 17,
    rating: 4.2
  }
];

// Featured companies
const featuredCompanies = [1, 3, 5]; // IDs of featured companies

const Companies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery, "in location:", locationFilter);
    // Implement search functionality here
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-10 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Explore IT Companies</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn about top technology companies and career opportunities globally
            </p>
            
            <form onSubmit={handleSearch} className="mt-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                <div className="relative md:col-span-3">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    type="text"
                    placeholder="Company name or industry..."
                    className="pl-10 border-himlam-200 focus:border-himlam-400"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="relative md:col-span-3">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    type="text"
                    placeholder="Location: New York, San Francisco..."
                    className="pl-10 border-himlam-200 focus:border-himlam-400"
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="md:col-span-1 bg-himlam-500 hover:bg-himlam-600"
                >
                  Search
                </Button>
              </div>
            </form>
          </div>
          
          {/* Categories tabs */}
          <Tabs defaultValue="all" className="mb-12">
            <div className="flex justify-center">
              <TabsList className="bg-gray-100">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="technology">Technology</TabsTrigger>
                <TabsTrigger value="software">Software</TabsTrigger>
                <TabsTrigger value="fintech">Fintech</TabsTrigger>
                <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-6 animate-fade-in">
              {/* Featured companies */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Building className="mr-2 text-himlam-500" size={24} />
                  Featured Companies
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {companies
                    .filter(company => featuredCompanies.includes(company.id))
                    .map(company => (
                      <Link 
                        to={`/companies/${company.id}`}
                        key={company.id} 
                        className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
                      >
                        <div className="p-6">
                          <div className="flex items-center mb-4">
                            <div className="h-16 w-16 rounded-lg bg-white border border-gray-100 p-2 flex items-center justify-center mr-4">
                              <img src={company.logo} alt={company.name} className="max-w-full max-h-full" />
                            </div>
                            <div>
                              <h3 className="font-bold text-xl text-gray-900">{company.name}</h3>
                              <div className="flex items-center mt-1">
                                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                <span className="ml-1 text-sm">{company.rating}/5</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mb-4">
                            <div className="flex items-center text-gray-600 mb-2">
                              <Building className="mr-2 h-4 w-4" />
                              <span className="text-sm">{company.industry}</span>
                            </div>
                            <div className="flex items-center text-gray-600 mb-2">
                              <MapPin className="mr-2 h-4 w-4" />
                              <span className="text-sm">{company.location}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <Users className="mr-2 h-4 w-4" />
                              <span className="text-sm">{company.size} employees</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between mt-6">
                            <Badge variant="outline" className="flex items-center border-himlam-300 bg-himlam-50 text-himlam-600">
                              <Briefcase className="mr-1 h-3 w-3" />
                              {company.openPositions} open positions
                            </Badge>
                            <Button variant="ghost" className="text-himlam-600">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
              
              {/* All companies */}
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Building className="mr-2 text-himlam-500" size={24} />
                All Companies
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {companies.map(company => (
                  <Link 
                    to={`/companies/${company.id}`}
                    key={company.id} 
                    className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="h-14 w-14 rounded-lg bg-white border border-gray-100 p-2 flex items-center justify-center mr-3">
                          <img src={company.logo} alt={company.name} className="max-w-full max-h-full" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-gray-900">{company.name}</h3>
                          <div className="flex items-center mt-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            <span className="ml-1 text-sm">{company.rating}/5</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <div className="flex items-center text-gray-600 text-sm mb-1">
                          <Building className="mr-2 h-4 w-4" />
                          <span>{company.industry}</span>
                        </div>
                        <div className="flex items-center text-gray-600 text-sm">
                          <MapPin className="mr-2 h-4 w-4" />
                          <span>{company.location}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <Badge variant="outline" className="flex items-center text-xs border-himlam-300 bg-himlam-50 text-himlam-600">
                          <Briefcase className="mr-1 h-3 w-3" />
                          {company.openPositions} positions
                        </Badge>
                        <Button variant="ghost" size="sm" className="text-himlam-600">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="mt-10 text-center">
                <Button variant="outline" className="border-himlam-300 hover:border-himlam-500">
                  View More Companies
                </Button>
              </div>
            </TabsContent>
            
            {/* Other tab contents would be similar but filtered by industry */}
            {["technology", "software", "fintech", "ecommerce"].map((industry) => (
              <TabsContent key={industry} value={industry} className="mt-6 animate-fade-in">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {companies
                    .filter((company) => 
                      company.industry.toLowerCase().includes(industry) || 
                      (industry === "technology" && company.industry === "Technology") ||
                      (industry === "software" && company.industry === "Software Development") ||
                      (industry === "fintech" && company.industry === "Fintech") ||
                      (industry === "ecommerce" && company.industry === "E-commerce")
                    )
                    .map(company => (
                      <Link 
                        to={`/companies/${company.id}`}
                        key={company.id} 
                        className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
                      >
                        <div className="p-6">
                          <div className="flex items-center mb-4">
                            <div className="h-14 w-14 rounded-lg bg-white border border-gray-100 p-2 flex items-center justify-center mr-3">
                              <img src={company.logo} alt={company.name} className="max-w-full max-h-full" />
                            </div>
                            <div>
                              <h3 className="font-bold text-lg text-gray-900">{company.name}</h3>
                              <div className="flex items-center mt-1">
                                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                <span className="ml-1 text-sm">{company.rating}/5</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mb-3">
                            <div className="flex items-center text-gray-600 text-sm mb-1">
                              <Building className="mr-2 h-4 w-4" />
                              <span>{company.industry}</span>
                            </div>
                            <div className="flex items-center text-gray-600 text-sm">
                              <MapPin className="mr-2 h-4 w-4" />
                              <span>{company.location}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between mt-4">
                            <Badge variant="outline" className="flex items-center text-xs border-himlam-300 bg-himlam-50 text-himlam-600">
                              <Briefcase className="mr-1 h-3 w-3" />
                              {company.openPositions} positions
                            </Badge>
                            <Button variant="ghost" size="sm" className="text-himlam-600">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          {/* Register as company section */}
          <div className="bg-himlam-50 border border-himlam-100 rounded-xl p-8 mt-12">
            <div className="md:flex items-center justify-between">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Are you an employer?</h3>
                <p className="text-gray-600 mb-6 md:mb-0">
                  Register to become a HimLam recruitment partner to access thousands of potential IT candidates
                </p>
              </div>
              <div>
                <Button asChild className="bg-himlam-500 hover:bg-himlam-600">
                  <Link to="/register-company">
                    Register Now
                  </Link>
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

export default Companies;
