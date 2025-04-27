
import { Briefcase, MapPin, DollarSign, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const featuredJobs = [
  {
    id: 1,
    title: 'Senior AI Engineer',
    company: 'Nvidia',
    logo: 'https://placeholder.svg',
    location: 'Hà Nội',
    salaryRange: '60-80 triệu',
    type: 'Full-time',
    tags: ['AI', 'Machine Learning', 'Python', 'TensorFlow'],
    postedDays: 2
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'FPT Software',
    logo: 'https://placeholder.svg',
    location: 'Hồ Chí Minh',
    salaryRange: '25-35 triệu',
    type: 'Full-time',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    postedDays: 3
  },
  {
    id: 3,
    title: 'Backend Engineer',
    company: 'Google',
    logo: 'https://placeholder.svg',
    location: 'Remote',
    salaryRange: '50-70 triệu',
    type: 'Full-time',
    tags: ['Go', 'Microservices', 'Cloud'],
    postedDays: 1
  },
  {
    id: 4,
    title: 'DevOps Engineer',
    company: 'Viettel',
    logo: 'https://placeholder.svg',
    location: 'Hà Nội',
    salaryRange: '35-45 triệu',
    type: 'Full-time',
    tags: ['Kubernetes', 'Docker', 'AWS', 'CI/CD'],
    postedDays: 5
  },
];

const FeaturedJobs = () => {
  return (
    <section className="py-16 px-4 bg-himlam-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Việc làm nổi bật</h2>
            <p className="text-lg text-gray-600">
              Khám phá cơ hội nghề nghiệp từ các công ty công nghệ hàng đầu
            </p>
          </div>
          <Link to="/jobs">
            <Button variant="outline" className="mt-4 md:mt-0 border-himlam-300 hover:border-himlam-500 flex items-center animate-fade-in">
              <span>Xem tất cả</span>
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredJobs.map((job, index) => (
            <Link 
              key={job.id} 
              to={`/jobs/${job.id}`}
              className="group"
            >
              <div 
                className="himlam-card p-6 h-full transition-all duration-300 hover:border-himlam-300 animate-fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-himlam-100 rounded-md flex items-center justify-center mr-4">
                    <div className="text-xs font-bold text-himlam-700">{job.company.substring(0, 2)}</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-himlam-600 transition-colors">
                          {job.title}
                        </h3>
                        <p className="text-gray-600">{job.company}</p>
                      </div>
                      <Badge variant="outline" className="border-himlam-300 text-himlam-700">
                        {job.type}
                      </Badge>
                    </div>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
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
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.tags.map((tag, i) => (
                        <span key={i} className="text-xs py-1 px-2 bg-himlam-100 rounded-full text-himlam-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in">
          <Link to="/jobs">
            <Button className="bg-himlam-500 hover:bg-himlam-600 text-white">
              Xem thêm việc làm
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
