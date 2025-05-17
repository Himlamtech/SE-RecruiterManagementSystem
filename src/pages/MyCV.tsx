
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Plus, Edit, Download, Trash2, Eye } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

// Mock admin credentials
const ADMIN_USER = "admin";
const ADMIN_PASSWORD = "admin";

const MyCV = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("create");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [savedCVs, setSavedCVs] = useState([
    { id: 1, name: "Main CV", lastUpdated: "04/20/2025", template: "Modern" },
    { id: 2, name: "English CV", lastUpdated: "04/15/2025", template: "Minimal" },
  ]);

  // Check if user is already authenticated
  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // Default CV template data
  const defaultCV = {
    personalInfo: {
      firstName: "John",
      lastName: "Doe",
      jobTitle: "Frontend Developer",
      email: "john.doe@example.com",
      phone: "(123) 456-7890",
      address: "New York, NY, USA",
      summary: "Experienced frontend developer with 5+ years of experience in building responsive web applications using React, TypeScript and modern CSS frameworks."
    },
    workExperience: [
      {
        company: "Tech Solutions Inc.",
        position: "Senior Frontend Developer",
        startDate: "2022-01-01",
        endDate: "2025-01-01",
        description: "Led the development of the company's main product, improving performance by 40%. Mentored junior developers and implemented best practices."
      },
      {
        company: "Web Innovations",
        position: "Frontend Developer",
        startDate: "2020-01-01",
        endDate: "2021-12-31",
        description: "Developed and maintained multiple client websites. Implemented responsive designs and ensured cross-browser compatibility."
      }
    ],
    education: {
      school: "University of Technology",
      degree: "Bachelor of Computer Science",
      startYear: "2016",
      endYear: "2020"
    },
    skills: "JavaScript, React, TypeScript, HTML5, CSS3, Tailwind CSS, Git, Jest, RESTful APIs"
  };

  // Function to view CV detail
  const viewCVDetail = (cvId) => {
    // In a real application, you would navigate to a detail view or open a modal
    toast.info(`Viewing CV #${cvId} details`);
    // Here you would navigate to a detail page or open a modal with the CV details
  };

  // Function to handle login
  const handleLogin = (e) => {
    e.preventDefault();
    
    if (username === ADMIN_USER && password === ADMIN_PASSWORD) {
      // Store authentication status
      localStorage.setItem("isAuthenticated", "true");
      setIsAuthenticated(true);
      setShowLoginModal(false);
      
      // Apply default CV
      setActiveTab("create");
      toast.success("Logged in successfully! Default CV template applied");
    } else {
      toast.error("Invalid credentials");
    }
  };

  // Function to apply default CV template
  const applyDefaultCV = () => {
    // First check if user is authenticated
    if (!isAuthenticated) {
      // Show login modal
      setShowLoginModal(true);
    } else {
      // User is already authenticated
      setActiveTab("create");
      toast.success("Default CV template applied");
      // Here we would populate the form fields
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-10 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Manage Your CV</h1>
            <p className="text-lg text-gray-600">
              Create and manage professional CVs to increase your chances of successful job applications
            </p>
          </div>
          
          <div className="flex justify-center mb-8">
            <Button 
              onClick={applyDefaultCV} 
              variant="primary"
            >
              Default CV
            </Button>
          </div>
          
          {showLoginModal && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-xl font-bold mb-4">Admin Login</h2>
                <p className="text-gray-600 mb-4">Please login to access this feature</p>
                
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <Label htmlFor="username">Username</Label>
                    <Input 
                      id="username" 
                      value={username} 
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="admin"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input 
                      id="password" 
                      type="password" 
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="admin"
                    />
                  </div>
                  
                  <div className="flex justify-end gap-2">
                    <Button type="button" variant="outline" onClick={() => setShowLoginModal(false)}>
                      Cancel
                    </Button>
                    <Button type="submit">
                      Login
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          )}
          
          <Tabs 
            defaultValue="create" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full animate-fade-in"
          >
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="create" className="px-6">
                  Create New CV
                </TabsTrigger>
                <TabsTrigger value="manage" className="px-6">
                  My CVs
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="create" className="animate-scale-in">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                      <CardDescription>Enter your personal details</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <Input id="first-name" placeholder="John" defaultValue={isAuthenticated ? defaultCV.personalInfo.firstName : ""} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input id="last-name" placeholder="Doe" defaultValue={isAuthenticated ? defaultCV.personalInfo.lastName : ""} />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="job-title">Job Title</Label>
                        <Input id="job-title" placeholder="Frontend Developer" defaultValue={isAuthenticated ? defaultCV.personalInfo.jobTitle : ""} />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="example@gmail.com" defaultValue={isAuthenticated ? defaultCV.personalInfo.email : ""} />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" placeholder="(123) 456-7890" defaultValue={isAuthenticated ? defaultCV.personalInfo.phone : ""} />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" placeholder="City, State, Country" defaultValue={isAuthenticated ? defaultCV.personalInfo.address : ""} />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="summary">Professional Summary</Label>
                        <Textarea 
                          id="summary" 
                          placeholder="Brief introduction about yourself and your experience..." 
                          defaultValue={isAuthenticated ? defaultCV.personalInfo.summary : ""}
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>Work Experience</CardTitle>
                      <CardDescription>Add your work experience</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mb-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="company">Company</Label>
                            <Input 
                              id="company" 
                              placeholder="Company name" 
                              defaultValue={isAuthenticated ? defaultCV.workExperience[0].company : ""}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="position">Position</Label>
                            <Input 
                              id="position" 
                              placeholder="Your position" 
                              defaultValue={isAuthenticated ? defaultCV.workExperience[0].position : ""}
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mt-4">
                          <div className="space-y-2">
                            <Label htmlFor="start-date">Start Date</Label>
                            <Input 
                              id="start-date" 
                              type="date" 
                              defaultValue={isAuthenticated ? defaultCV.workExperience[0].startDate : ""}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="end-date">End Date</Label>
                            <Input 
                              id="end-date" 
                              type="date"
                              defaultValue={isAuthenticated ? defaultCV.workExperience[0].endDate : ""}
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2 mt-4">
                          <Label htmlFor="description">Job Description</Label>
                          <Textarea 
                            id="description" 
                            placeholder="Describe your responsibilities and achievements..."
                            defaultValue={isAuthenticated ? defaultCV.workExperience[0].description : ""}
                          />
                        </div>
                      </div>
                      
                      {isAuthenticated && (
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mb-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="company2">Company</Label>
                              <Input 
                                id="company2" 
                                placeholder="Company name" 
                                defaultValue={defaultCV.workExperience[1].company}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="position2">Position</Label>
                              <Input 
                                id="position2" 
                                placeholder="Your position" 
                                defaultValue={defaultCV.workExperience[1].position}
                              />
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="space-y-2">
                              <Label htmlFor="start-date2">Start Date</Label>
                              <Input 
                                id="start-date2" 
                                type="date" 
                                defaultValue={defaultCV.workExperience[1].startDate}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="end-date2">End Date</Label>
                              <Input 
                                id="end-date2" 
                                type="date"
                                defaultValue={defaultCV.workExperience[1].endDate}
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-2 mt-4">
                            <Label htmlFor="description2">Job Description</Label>
                            <Textarea 
                              id="description2" 
                              placeholder="Describe your responsibilities and achievements..."
                              defaultValue={defaultCV.workExperience[1].description}
                            />
                          </div>
                        </div>
                      )}
                      
                      <Button className="w-full flex items-center justify-center border-himlam-300 hover:border-himlam-500" variant="outline">
                        <Plus className="h-4 w-4 mr-2" /> Add Experience
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>Education</CardTitle>
                      <CardDescription>Add your educational background</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mb-4">
                        <div className="space-y-2">
                          <Label htmlFor="school">School/University</Label>
                          <Input 
                            id="school" 
                            placeholder="School name" 
                            defaultValue={isAuthenticated ? defaultCV.education.school : ""}
                          />
                        </div>
                        
                        <div className="space-y-2 mt-4">
                          <Label htmlFor="degree">Degree / Major</Label>
                          <Input 
                            id="degree" 
                            placeholder="Bachelor of Computer Science" 
                            defaultValue={isAuthenticated ? defaultCV.education.degree : ""}
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mt-4">
                          <div className="space-y-2">
                            <Label htmlFor="edu-start-date">Start Year</Label>
                            <Input 
                              id="edu-start-date" 
                              type="number" 
                              placeholder="2018" 
                              defaultValue={isAuthenticated ? defaultCV.education.startYear : ""}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="edu-end-date">End Year</Label>
                            <Input 
                              id="edu-end-date" 
                              type="number" 
                              placeholder="2022" 
                              defaultValue={isAuthenticated ? defaultCV.education.endYear : ""}
                            />
                          </div>
                        </div>
                      </div>
                      
                      <Button className="w-full flex items-center justify-center border-himlam-300 hover:border-himlam-500" variant="outline">
                        <Plus className="h-4 w-4 mr-2" /> Add Education
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>Skills</CardTitle>
                      <CardDescription>Add your skills</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="skills">Skills (separated by commas)</Label>
                        <Input 
                          id="skills" 
                          placeholder="JavaScript, React, Node.js, TypeScript, ..." 
                          defaultValue={isAuthenticated ? defaultCV.skills : ""}
                        />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="flex justify-end mt-6">
                    <Button className="bg-himlam-500 hover:bg-himlam-600 text-white">
                      Save CV
                    </Button>
                  </div>
                </div>
                
                <div>
                  <Card className="sticky top-6">
                    <CardHeader>
                      <CardTitle>CV Preview</CardTitle>
                      <CardDescription>Choose a CV template</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="border rounded-lg p-2 cursor-pointer hover:border-himlam-400 transition-colors">
                          <div className="h-72 bg-gray-100 rounded flex items-center justify-center">
                            <FileText className="h-16 w-16 text-gray-400" />
                          </div>
                          <div className="mt-2 text-center">
                            <p className="font-medium">Modern</p>
                          </div>
                        </div>
                        
                        <div className="border rounded-lg p-2 cursor-pointer hover:border-himlam-400 transition-colors">
                          <div className="h-72 bg-gray-100 rounded flex items-center justify-center">
                            <FileText className="h-16 w-16 text-gray-400" />
                          </div>
                          <div className="mt-2 text-center">
                            <p className="font-medium">Minimal</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="manage" className="animate-scale-in">
              <div className="grid md:grid-cols-2 gap-6">
                {savedCVs.map((cv) => (
                  <Card key={cv.id}>
                    <CardHeader className="pb-2">
                      <CardTitle>{cv.name}</CardTitle>
                      <CardDescription>Template: {cv.template}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-40 bg-gray-50 rounded flex items-center justify-center">
                        <FileText className="h-16 w-16 text-purple-400" />
                      </div>
                      <p className="text-sm text-gray-500 mt-2">Updated: {cv.lastUpdated}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between flex-wrap gap-2">
                      <div className="space-x-2">
                        <Button variant="outline" size="sm" onClick={() => viewCVDetail(cv.id)}>
                          <Eye className="h-4 w-4 mr-1" /> View Detail
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-1" /> Edit
                        </Button>
                      </div>
                      <div className="space-x-2">
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1" /> Download
                        </Button>
                        <Button variant="destructive" size="sm">
                          <Trash2 className="h-4 w-4 mr-1" /> Delete
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
                
                <Card className="border-dashed border-2 flex flex-col items-center justify-center p-6 h-full">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <Plus className="h-8 w-8 text-purple-500" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Create New CV</h3>
                  <p className="text-center text-gray-500 mb-4">Create additional CVs tailored for different job positions</p>
                  <Button variant="primary" onClick={() => setActiveTab("create")}>
                    Create New CV
                  </Button>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MyCV;
