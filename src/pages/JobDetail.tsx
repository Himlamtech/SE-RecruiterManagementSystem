
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  MapPin, 
  DollarSign, 
  Building, 
  Calendar, 
  ChevronLeft,
  Clock,
  Globe,
  Users,
  CheckCircle
} from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";

// Mock job data - in a real app, this would come from an API
const MOCK_JOBS = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: ['Senior Frontend Developer', 'Backend Engineer', 'ML Engineer', 'DevOps Specialist', 'Full Stack Developer'][i % 5],
  company: ['Google', 'Nvidia', 'Viettel', 'FPT', 'VNG', 'Microsoft', 'Amazon', 'Shopee', 'Tiki'][i % 9],
  location: ['Hanoi', 'Ho Chi Minh', 'Da Nang', 'Remote'][i % 4],
  salaryRange: ['30-50 million', '20-30 million', '40-60 million', '25-35 million', '50-70 million'][i % 5],
  type: ['Full-time', 'Part-time', 'Contract', 'Freelance'][i % 4],
  tags: [
    ['React', 'TypeScript', 'Tailwind'],
    ['Python', 'Django', 'PostgreSQL'],
    ['TensorFlow', 'PyTorch', 'Python'],
    ['Docker', 'Kubernetes', 'AWS'],
    ['JavaScript', 'Node.js', 'MongoDB']
  ][i % 5],
  postedDays: Math.floor(Math.random() * 10) + 1,
  description: `We are looking for an experienced ${['Senior Frontend Developer', 'Backend Engineer', 'ML Engineer', 'DevOps Specialist', 'Full Stack Developer'][i % 5]} to join our team. The ideal candidate will have strong ${['frontend', 'backend', 'machine learning', 'DevOps', 'full stack'][i % 5]} development skills and experience working in agile teams.`,
  responsibilities: [
    `Design and implement ${['user interfaces', 'backend services', 'machine learning models', 'CI/CD pipelines', 'full stack applications'][i % 5]}`,
    `Collaborate with cross-functional teams to define, design, and ship new features`,
    `Ensure the performance, quality, and responsiveness of ${['applications', 'services', 'models', 'infrastructure', 'systems'][i % 5]}`,
    `Identify and correct bottlenecks and fix bugs`,
    `Help maintain code quality, organization, and automatization`
  ],
  requirements: [
    `${i + 3}+ years of experience in ${['frontend', 'backend', 'machine learning', 'DevOps', 'full stack'][i % 5]} development`,
    `Proficiency in ${['JavaScript/TypeScript', 'Python/Java', 'Python/TensorFlow', 'Docker/Kubernetes', 'JavaScript/Python'][i % 5]}`,
    `Experience with ${['React/Vue', 'Django/Flask', 'TensorFlow/PyTorch', 'AWS/Azure', 'React/Node.js'][i % 5]}`,
    `Knowledge of ${['modern frontend frameworks', 'RESTful APIs', 'deep learning algorithms', 'container orchestration', 'database design'][i % 5]}`,
    `Excellent problem-solving skills and attention to detail`
  ],
  benefits: [
    'Competitive salary package',
    'Healthcare coverage',
    'Flexible working hours',
    '13th month salary',
    'Professional development opportunities',
    'Modern office in prime location'
  ],
  companyInfo: `${['Google', 'Nvidia', 'Viettel', 'FPT', 'VNG', 'Microsoft', 'Amazon', 'Shopee', 'Tiki'][i % 9]} is a leading technology company with a mission to ${['organize the world\'s information', 'accelerate computing', 'advance telecommunications', 'provide digital transformation services', 'build digital products'][i % 5]}.`,
  companySize: ['1000+', '5000+', '10000+', '500+', '2000+'][i % 5],
  companyWebsite: `https://www.${['google', 'nvidia', 'viettel', 'fpt', 'vng', 'microsoft', 'amazon', 'shopee', 'tiki'][i % 9]}.com`,
  applicationDeadline: `${new Date(Date.now() + 86400000 * (14 + i)).toLocaleDateString()}`
}));

const JobDetail = () => {
  const { id } = useParams();
  const [isApplying, setIsApplying] = useState(false);
  
  // Find the job by ID
  const job = MOCK_JOBS.find(job => job.id === parseInt(id || '0'));
  
  if (!job) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center flex-col p-8">
          <h1 className="text-3xl font-bold mb-4">Job Not Found</h1>
          <p className="text-gray-600 mb-6">The job listing you're looking for doesn't exist or has been removed.</p>
          <Link to="/jobs">
            <Button variant="default">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Jobs
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  const handleApply = () => {
    setIsApplying(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsApplying(false);
      toast({
        title: "Application Submitted!",
        description: `You have successfully applied for the ${job.title} position at ${job.company}.`,
      });
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-8 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Back button */}
          <Link to="/jobs" className="inline-flex items-center text-himlam-600 mb-6 hover:underline">
            <ChevronLeft className="h-4 w-4 mr-1" /> Back to Jobs
          </Link>
          
          {/* Job header */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-himlam-100 rounded-md flex items-center justify-center mr-4">
                  <div className="text-lg font-bold text-himlam-700">{job.company.substring(0, 2)}</div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">{job.title}</h1>
                  <p className="text-lg text-gray-600">{job.company}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-himlam-300 text-himlam-700">
                      {job.type}
                    </Badge>
                    {job.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="bg-himlam-100 text-himlam-700 border-none">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 md:mt-0">
                <Button 
                  className="bg-himlam-500 hover:bg-himlam-600 w-full md:w-auto"
                  onClick={handleApply}
                  disabled={isApplying}
                >
                  {isApplying ? "Applying..." : "Apply Now"}
                </Button>
              </div>
            </div>
            
            {/* Job details */}
            <Separator className="my-6" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-himlam-500 mr-2" />
                <span className="text-gray-700">{job.location}</span>
              </div>
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 text-himlam-500 mr-2" />
                <span className="text-gray-700">{job.salaryRange} VND</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-himlam-500 mr-2" />
                <span className="text-gray-700">Posted {job.postedDays} days ago</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-himlam-500 mr-2" />
                <span className="text-gray-700">Apply before: {job.applicationDeadline}</span>
              </div>
              <div className="flex items-center">
                <Building className="h-5 w-5 text-himlam-500 mr-2" />
                <span className="text-gray-700">Company size: {job.companySize}</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-5 w-5 text-himlam-500 mr-2" />
                <a href={job.companyWebsite} target="_blank" rel="noopener noreferrer" className="text-himlam-600 hover:underline">
                  Company website
                </a>
              </div>
            </div>
          </div>
          
          {/* Job description and requirements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main content */}
            <div className="col-span-2 space-y-6">
              {/* Job description */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Job Description</h2>
                <p className="text-gray-700 mb-6">{job.description}</p>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Responsibilities:</h3>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  {job.responsibilities.map((item, i) => (
                    <li key={i} className="text-gray-700">{item}</li>
                  ))}
                </ul>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Requirements:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {job.requirements.map((item, i) => (
                    <li key={i} className="text-gray-700">{item}</li>
                  ))}
                </ul>
              </div>
              
              {/* Benefits */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Benefits</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {job.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-himlam-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="col-span-1 space-y-6">
              {/* Company info */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">About the Company</h2>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-himlam-100 rounded-md flex items-center justify-center mr-3">
                    <div className="text-sm font-bold text-himlam-700">{job.company.substring(0, 2)}</div>
                  </div>
                  <h3 className="text-lg font-semibold">{job.company}</h3>
                </div>
                <p className="text-gray-700 mb-4">{job.companyInfo}</p>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Users className="h-4 w-4 mr-2 text-gray-500" />
                  {job.companySize} employees
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Globe className="h-4 w-4 mr-2 text-gray-500" />
                  <a href={job.companyWebsite} className="text-himlam-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    {job.companyWebsite.replace('https://www.', '')}
                  </a>
                </div>
              </div>
              
              {/* Apply button */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Interested in this job?</h3>
                <p className="text-gray-600 mb-4">Submit your application now and we'll get back to you soon.</p>
                <Button 
                  className="w-full bg-himlam-500 hover:bg-himlam-600" 
                  onClick={handleApply}
                  disabled={isApplying}
                >
                  {isApplying ? "Applying..." : "Apply Now"}
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

export default JobDetail;
