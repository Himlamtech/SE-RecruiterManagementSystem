
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Plus, Edit, Download, Trash2 } from "lucide-react";

const MyCV = () => {
  const [activeTab, setActiveTab] = useState("create");
  const [savedCVs, setSavedCVs] = useState([
    { id: 1, name: "Main CV", lastUpdated: "04/20/2025", template: "Modern" },
    { id: 2, name: "English CV", lastUpdated: "04/15/2025", template: "Minimal" },
  ]);

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
                          <Input id="first-name" placeholder="John" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input id="last-name" placeholder="Doe" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="job-title">Job Title</Label>
                        <Input id="job-title" placeholder="Frontend Developer" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="example@gmail.com" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" placeholder="(123) 456-7890" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" placeholder="City, State, Country" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="summary">Professional Summary</Label>
                        <Textarea id="summary" placeholder="Brief introduction about yourself and your experience..." />
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
                            <Input id="company" placeholder="Company name" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="position">Position</Label>
                            <Input id="position" placeholder="Your position" />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mt-4">
                          <div className="space-y-2">
                            <Label htmlFor="start-date">Start Date</Label>
                            <Input id="start-date" type="date" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="end-date">End Date</Label>
                            <Input id="end-date" type="date" />
                          </div>
                        </div>
                        
                        <div className="space-y-2 mt-4">
                          <Label htmlFor="description">Job Description</Label>
                          <Textarea id="description" placeholder="Describe your responsibilities and achievements..." />
                        </div>
                      </div>
                      
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
                          <Input id="school" placeholder="School name" />
                        </div>
                        
                        <div className="space-y-2 mt-4">
                          <Label htmlFor="degree">Degree / Major</Label>
                          <Input id="degree" placeholder="Bachelor of Computer Science" />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mt-4">
                          <div className="space-y-2">
                            <Label htmlFor="edu-start-date">Start Year</Label>
                            <Input id="edu-start-date" type="number" placeholder="2018" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="edu-end-date">End Year</Label>
                            <Input id="edu-end-date" type="number" placeholder="2022" />
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
                        <Input id="skills" placeholder="JavaScript, React, Node.js, TypeScript, ..." />
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
                        <FileText className="h-16 w-16 text-himlam-400" />
                      </div>
                      <p className="text-sm text-gray-500 mt-2">Updated: {cv.lastUpdated}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-1" /> Edit
                      </Button>
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
                  <div className="w-16 h-16 rounded-full bg-himlam-100 flex items-center justify-center mb-4">
                    <Plus className="h-8 w-8 text-himlam-500" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Create New CV</h3>
                  <p className="text-center text-gray-500 mb-4">Create additional CVs tailored for different job positions</p>
                  <Button className="bg-himlam-500 hover:bg-himlam-600 text-white" onClick={() => setActiveTab("create")}>
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
