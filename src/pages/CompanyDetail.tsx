
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Users,
  Building,
  Star,
  Globe,
  Phone,
  Mail,
  ChevronRight,
  Briefcase,
  Calendar,
  Clock,
  User,
} from "lucide-react";

// Mock data for company details
const companyDetails = {
  id: 1,
  name: "Google Vietnam",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png",
  coverImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  industry: "Technology",
  location: "District 1, Ho Chi Minh City",
  size: "1000-5000",
  website: "https://careers.google.com/locations/vietnam/",
  phone: "+84 28 6288 6888",
  email: "careers-vietnam@google.com",
  founded: 2012,
  description: "Google is an American multinational technology company specializing in Internet-related services and products, including online advertising technologies, search engine, cloud computing, software, and hardware.",
  aboutUs: `Google Vietnam was established in 2012 and has quickly grown to become one of Google's important offices in Southeast Asia. Our office in Ho Chi Minh City is home to teams of engineers, marketing specialists, and business support staff.
  
  At Google Vietnam, we are committed to providing a diverse, inclusive, and creative work environment. We encourage innovative thinking and provide opportunities for every employee to develop and contribute to projects with global impact.
  
  Our team is continuously growing, and we are always looking for new talent to join us in solving complex technological challenges and developing innovative solutions for users worldwide.`,
  benefits: [
    "Comprehensive health insurance for employees and families",
    "Competitive salary and bonus program",
    "Flexible leave policy",
    "Modern, creative workspace",
    "Regular team building activities",
    "Global training and development opportunities",
    "Tuition assistance program",
    "Office with full amenities: gym, recreation areas, free cafeteria"
  ],
  culture: `Google Vietnam takes pride in a work culture that values creativity, openness, and innovation. We believe in empowering employees to freely create and bring new ideas to the table.

  The work culture at Google Vietnam is built on core values:
  - Focus on the user and all else will follow
  - It's best to do one thing really well
  - Fast is better than slow
  - Democracy on the web works
  - You don't need to be at your desk to need an answer
  - You can make money without doing evil
  - There's always more information out there
  - The need for information crosses all borders
  - You can be serious without a suit
  - Great just isn't good enough

  We strive to create a work environment where everyone feels respected, heard, and has opportunities to grow.`,
  jobOpenings: [
    {
      id: 101,
      title: "Senior Software Engineer",
      location: "Ho Chi Minh City",
      type: "Full-time",
      postedDate: "04/21/2025",
      salary: "Negotiable"
    },
    {
      id: 102,
      title: "Product Manager",
      location: "Ho Chi Minh City",
      type: "Full-time",
      postedDate: "04/20/2025",
      salary: "Negotiable"
    },
    {
      id: 103,
      title: "Data Scientist",
      location: "Ho Chi Minh City",
      type: "Full-time",
      postedDate: "04/19/2025",
      salary: "Negotiable"
    },
    {
      id: 104,
      title: "UX/UI Designer",
      location: "Ho Chi Minh City",
      type: "Full-time",
      postedDate: "04/17/2025",
      salary: "Negotiable"
    },
    {
      id: 105,
      title: "Technical Program Manager",
      location: "Ho Chi Minh City",
      type: "Full-time",
      postedDate: "04/15/2025",
      salary: "Negotiable"
    }
  ],
  reviews: [
    {
      id: 201,
      author: "Nguyen V.",
      position: "Software Engineer",
      rating: 5,
      date: "03/15/2025",
      pros: "Excellent work environment, many learning and development opportunities, friendly colleagues who are always ready to help.",
      cons: "Work pressure can be quite high at times, requires good time management skills.",
      advice: "Prepare well for the interview process and don't hesitate to ask questions when you need help."
    },
    {
      id: 202,
      author: "Tran T.",
      position: "Product Manager",
      rating: 4,
      date: "02/02/2025",
      pros: "Working with the best in the industry, great benefits, excellent company culture.",
      cons: "Sometimes feels like too many meetings, approval processes can be time-consuming.",
      advice: "Master communication skills and build good relationships with colleagues."
    },
    {
      id: 203,
      author: "Le H.",
      position: "Data Analyst",
      rating: 5,
      date: "01/10/2025",
      pros: "Excellent facilities, unlimited learning opportunities, great benefits package.",
      cons: "Can be challenging to balance work and personal life in some projects.",
      advice: "Take full advantage of the learning and development opportunities the company provides."
    }
  ],
  rating: 4.8,
  photos: [
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    "https://images.unsplash.com/photo-1497215842964-222b430dc094",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
  ]
};

const CompanyDetail = () => {
  const { id } = useParams();
  
  // In a real app, you would fetch the company details based on the ID
  // For now we just use our mock data
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        {/* Cover image */}
        <div 
          className="h-64 md:h-80 w-full bg-cover bg-center" 
          style={{ backgroundImage: `url(${companyDetails.coverImage})` }}
        >
          <div className="h-full w-full bg-black bg-opacity-50 flex items-end">
            <div className="container mx-auto px-4 pb-6">
              <div className="flex items-center">
                <div className="h-24 w-24 md:h-32 md:w-32 rounded-lg bg-white border-4 border-white flex items-center justify-center overflow-hidden">
                  <img src={companyDetails.logo} alt={companyDetails.name} className="max-w-full max-h-full p-2" />
                </div>
                <div className="ml-6 text-white">
                  <h1 className="text-3xl md:text-4xl font-bold">{companyDetails.name}</h1>
                  <div className="flex items-center mt-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <span className="ml-2 text-lg">{companyDetails.rating}/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Company details */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-sm mb-6">
            <div className="p-6">
              <div className="flex flex-wrap gap-6 text-gray-600">
                <div className="flex items-center">
                  <Building className="mr-2 h-5 w-5 text-himlam-500" />
                  <span>{companyDetails.industry}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-himlam-500" />
                  <span>{companyDetails.location}</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 h-5 w-5 text-himlam-500" />
                  <span>{companyDetails.size} employees</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-himlam-500" />
                  <span>Founded: {companyDetails.founded}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-6">
                <Button asChild variant="outline" className="border-himlam-300 hover:border-himlam-500">
                  <a href={companyDetails.website} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Globe className="mr-2 h-4 w-4" />
                    Website
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-himlam-300 hover:border-himlam-500">
                  <a href={`tel:${companyDetails.phone}`} className="flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    {companyDetails.phone}
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-himlam-300 hover:border-himlam-500">
                  <a href={`mailto:${companyDetails.email}`} className="flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </a>
                </Button>
              </div>
              
              <div className="mt-6">
                <p className="text-gray-600">{companyDetails.description}</p>
              </div>
            </div>
          </div>
          
          {/* Navigation path */}
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <Link to="/companies" className="hover:text-himlam-600">Companies</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span>{companyDetails.name}</span>
          </div>
          
          {/* Tabs for different sections */}
          <Tabs defaultValue="about" className="mb-12">
            <TabsList className="bg-white shadow-sm mb-6">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="jobs">Jobs ({companyDetails.jobOpenings.length})</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({companyDetails.reviews.length})</TabsTrigger>
              <TabsTrigger value="photos">Photos</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about" className="animate-fade-in">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <h2 className="text-2xl font-bold mb-4">About {companyDetails.name}</h2>
                    <div className="prose max-w-none text-gray-600">
                      {companyDetails.aboutUs.split("\n").map((paragraph, idx) => (
                        <p key={idx} className="mb-4">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-2xl font-bold mb-4">Company Culture</h2>
                    <div className="prose max-w-none text-gray-600">
                      {companyDetails.culture.split("\n").map((paragraph, idx) => (
                        <p key={idx} className="mb-4">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
                    <h3 className="text-xl font-bold mb-4">Benefits</h3>
                    <ul className="space-y-3">
                      {companyDetails.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-himlam-100 flex items-center justify-center mt-0.5">
                            <div className="h-2 w-2 rounded-full bg-himlam-500"></div>
                          </div>
                          <span className="ml-3 text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="jobs" className="animate-fade-in">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-6">Open Positions ({companyDetails.jobOpenings.length})</h2>
                
                <div className="space-y-4">
                  {companyDetails.jobOpenings.map(job => (
                    <div key={job.id} className="border border-gray-100 rounded-lg p-5 hover:border-himlam-200 transition-colors">
                      <div className="md:flex md:justify-between">
                        <div>
                          <Link to={`/jobs/${job.id}`} className="text-xl font-semibold text-gray-800 hover:text-himlam-600 transition-colors">
                            {job.title}
                          </Link>
                          <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 text-gray-600">
                            <div className="flex items-center">
                              <MapPin className="mr-1 h-4 w-4 text-himlam-500" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center">
                              <Briefcase className="mr-1 h-4 w-4 text-himlam-500" />
                              <span>{job.type}</span>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="mr-1 h-4 w-4 text-himlam-500" />
                              <span>Posted: {job.postedDate}</span>
                            </div>
                          </div>
                          <div className="mt-2">
                            <Badge className="bg-himlam-50 text-himlam-700 border-himlam-200 hover:bg-himlam-100">
                              {job.salary}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="flex items-center mt-4 md:mt-0">
                          <Button asChild className="bg-himlam-500 hover:bg-himlam-600">
                            <Link to={`/jobs/${job.id}`}>
                              Apply Now
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="animate-fade-in">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="md:flex md:justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Employee Reviews</h2>
                  <div className="mt-4 md:mt-0">
                    <Button className="bg-himlam-500 hover:bg-himlam-600">
                      Write a Review
                    </Button>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="bg-himlam-50 rounded-lg p-6 text-center">
                    <div className="text-5xl font-bold text-himlam-700">{companyDetails.rating}</div>
                    <div className="flex justify-center mt-2">
                      {Array(5).fill(0).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${i < Math.floor(companyDetails.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                        />
                      ))}
                    </div>
                    <div className="mt-2 text-gray-600">Based on {companyDetails.reviews.length} reviews</div>
                  </div>
                  
                  <div className="md:col-span-3">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-xl font-bold text-gray-800">4.7</div>
                        <div className="text-sm text-gray-600">Work Environment</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-xl font-bold text-gray-800">4.9</div>
                        <div className="text-sm text-gray-600">Benefits</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-xl font-bold text-gray-800">4.6</div>
                        <div className="text-sm text-gray-600">Work-Life Balance</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-xl font-bold text-gray-800">4.8</div>
                        <div className="text-sm text-gray-600">Growth Opportunities</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {companyDetails.reviews.map(review => (
                    <div key={review.id} className="border-b border-gray-100 pb-6 last:border-0">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-himlam-100 rounded-full flex items-center justify-center text-himlam-700 font-medium">
                            {review.author.charAt(0)}
                          </div>
                          <div className="ml-3">
                            <div className="font-medium">{review.author}</div>
                            <div className="text-sm text-gray-500">{review.position}</div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-500">{review.date}</div>
                      </div>
                      
                      <div className="flex mb-3">
                        {Array(5).fill(0).map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                          />
                        ))}
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="font-medium text-gray-800">Pros</div>
                          <p className="text-gray-600">{review.pros}</p>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">Cons</div>
                          <p className="text-gray-600">{review.cons}</p>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">Advice</div>
                          <p className="text-gray-600">{review.advice}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="photos" className="animate-fade-in">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-6">Company Photos</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {companyDetails.photos.map((photo, idx) => (
                    <div key={idx} className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <img src={photo} alt={`${companyDetails.name} - ${idx + 1}`} className="w-full h-64 object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompanyDetail;
