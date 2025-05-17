
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Search, Clock, User } from "lucide-react";

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "10 Essential Skills for Frontend Developers in 2025",
    excerpt: "Discover the latest skills and technologies that every Frontend Developer needs to master for career success...",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    category: "career",
    author: "Michael Johnson",
    date: "04/23/2025",
    readTime: "5 min",
    tags: ["Frontend", "Web Development", "Career"]
  },
  {
    id: 2,
    title: "Effective Methods for Technical Interview Preparation",
    excerpt: "Strategies and approaches to help you best prepare for technical interviews in the IT industry...",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    category: "tips",
    author: "Hannah Smith",
    date: "04/20/2025",
    readTime: "8 min",
    tags: ["Interview", "Career Tips", "Technical Interview"]
  },
  {
    id: 3,
    title: "AI Technology Trends Reshaping the Job Market in 2025",
    excerpt: "Analysis of the newest AI technologies and their impact on the labor market in 2025...",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    category: "tech",
    author: "Thomas Lee",
    date: "04/18/2025",
    readTime: "10 min",
    tags: ["AI", "Technology", "Future of Work"]
  },
  {
    id: 4,
    title: "Building an Impressive Developer Portfolio",
    excerpt: "Tips for creating a standout portfolio that attracts employers and showcases your abilities...",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    category: "career",
    author: "Lily Parker",
    date: "04/15/2025",
    readTime: "7 min",
    tags: ["Portfolio", "Career Development", "Web Development"]
  },
  {
    id: 5,
    title: "IT Salary Comparison Across Major Cities in 2025",
    excerpt: "Detailed analysis of IT salary differences between major cities and regions...",
    image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6",
    category: "insight",
    author: "Mark Wilson",
    date: "04/12/2025",
    readTime: "6 min",
    tags: ["Salary", "IT Market", "Regional Comparison"]
  },
  {
    id: 6,
    title: "5 Most In-Demand Programming Languages in 2025",
    excerpt: "The programming languages most sought after by employers and why you should learn them...",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    category: "tech",
    author: "Daniel Wright",
    date: "04/10/2025",
    readTime: "9 min",
    tags: ["Programming Languages", "Tech Trends", "Coding"]
  }
];

// Featured post data
const featuredPost = {
  id: 7,
  title: "How to Successfully Transition Your Career into IT",
  excerpt: "Specific steps to help you smoothly transition from another field to IT, from learning new skills to finding suitable job opportunities...",
  image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28",
  category: "career",
  author: "Victoria Chen",
  date: "04/25/2025",
  readTime: "12 min",
  tags: ["Career Change", "IT Industry", "Learning Path"]
};

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Implement search functionality here
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-10 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">IT Career Blog</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore articles about careers, interview skills, and the latest technology trends in the IT industry
            </p>
            
            <form onSubmit={handleSearch} className="mt-8 max-w-xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="pl-10 pr-20 py-6 border-himlam-200 focus:border-himlam-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button 
                  type="submit" 
                  className="absolute right-1.5 top-1/2 transform -translate-y-1/2 bg-himlam-500 hover:bg-himlam-600"
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
                <TabsTrigger value="career">Careers</TabsTrigger>
                <TabsTrigger value="tech">Technology</TabsTrigger>
                <TabsTrigger value="tips">Interview Tips</TabsTrigger>
                <TabsTrigger value="insight">Market Analysis</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-6 animate-fade-in">
              {/* Featured post */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <BookOpen className="mr-2 text-himlam-500" size={24} />
                  Featured Article
                </h2>
                
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img 
                        src={featuredPost.image} 
                        alt={featuredPost.title}
                        className="h-64 md:h-full w-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-6 md:p-8">
                      <div className="flex items-center text-sm mb-2">
                        <span className="bg-himlam-100 text-himlam-700 rounded-full px-3 py-1">
                          {featuredPost.category === "career" ? "Career" :
                           featuredPost.category === "tech" ? "Technology" :
                           featuredPost.category === "tips" ? "Interview Tips" :
                           "Market Analysis"}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3">
                        <Link to={`/blog/${featuredPost.id}`} className="hover:text-himlam-600 transition-colors">
                          {featuredPost.title}
                        </Link>
                      </h3>
                      
                      <p className="text-gray-600 mb-4">
                        {featuredPost.excerpt}
                      </p>
                      
                      <div className="flex items-center text-sm text-gray-500 mb-6">
                        <User size={16} className="mr-1" />
                        <span>{featuredPost.author}</span>
                        <span className="mx-2">•</span>
                        <Clock size={16} className="mr-1" />
                        <span>{featuredPost.readTime}</span>
                        <span className="mx-2">•</span>
                        <span>{featuredPost.date}</span>
                      </div>
                      
                      <Button asChild className="bg-himlam-500 hover:bg-himlam-600">
                        <Link to={`/blog/${featuredPost.id}`}>
                          Read More
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* All posts */}
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <BookOpen className="mr-2 text-himlam-500" size={24} />
                Latest Articles
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-w-16 aspect-h-9">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="h-48 w-full object-cover"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center text-sm mb-2">
                        <span className="bg-himlam-100 text-himlam-700 rounded-full px-3 py-1">
                          {post.category === "career" ? "Career" :
                           post.category === "tech" ? "Technology" :
                           post.category === "tips" ? "Interview Tips" :
                           "Market Analysis"}
                        </span>
                      </div>
                      <CardTitle className="text-xl">
                        <Link to={`/blog/${post.id}`} className="hover:text-himlam-600 transition-colors">
                          {post.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <User size={16} className="mr-1" />
                        <span>{post.author}</span>
                        <span className="mx-2">•</span>
                        <Clock size={16} className="mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button asChild variant="ghost" className="text-himlam-600 p-0 hover:text-himlam-700 hover:bg-transparent">
                        <Link to={`/blog/${post.id}`}>
                          Read More
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="mt-10 text-center">
                <Button variant="outline" className="border-himlam-300 hover:border-himlam-500">
                  View More Articles
                </Button>
              </div>
            </TabsContent>
            
            {/* Other tab contents would be similar but filtered by category */}
            {["career", "tech", "tips", "insight"].map((category) => (
              <TabsContent key={category} value={category} className="mt-6 animate-fade-in">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {blogPosts
                    .filter((post) => post.category === category)
                    .map((post) => (
                      <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="aspect-w-16 aspect-h-9">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="h-48 w-full object-cover"
                          />
                        </div>
                        <CardHeader className="pb-2">
                          <div className="flex items-center text-sm mb-2">
                            <span className="bg-himlam-100 text-himlam-700 rounded-full px-3 py-1">
                              {category === "career" ? "Career" :
                               category === "tech" ? "Technology" :
                               category === "tips" ? "Interview Tips" :
                               "Market Analysis"}
                            </span>
                          </div>
                          <CardTitle className="text-xl">
                            <Link to={`/blog/${post.id}`} className="hover:text-himlam-600 transition-colors">
                              {post.title}
                            </Link>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-4">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center text-sm text-gray-500">
                            <User size={16} className="mr-1" />
                            <span>{post.author}</span>
                            <span className="mx-2">•</span>
                            <Clock size={16} className="mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-0">
                          <Button asChild variant="ghost" className="text-himlam-600 p-0 hover:text-himlam-700 hover:bg-transparent">
                            <Link to={`/blog/${post.id}`}>
                              Read More
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          {/* Subscribe section */}
          <div className="bg-himlam-50 border border-himlam-100 rounded-xl p-8 mt-12">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Subscribe to New Articles</h3>
              <p className="text-gray-600 mb-6">
                Receive notifications about new articles on careers, technology, and job opportunities
              </p>
              
              <form className="flex gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow"
                  required
                />
                <Button type="submit" className="bg-himlam-500 hover:bg-himlam-600">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
