
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
  coverImage: "https://images.unsplash.com/photo-1496096265110-f83ad7f96608",
  industry: "Technology",
  location: "Quận 1, Hồ Chí Minh",
  size: "1000-5000",
  website: "https://careers.google.com/locations/vietnam/",
  phone: "+84 28 6288 6888",
  email: "careers-vietnam@google.com",
  founded: 2012,
  description: "Google là công ty công nghệ đa quốc gia của Mỹ, chuyên về các dịch vụ và sản phẩm liên quan đến Internet, bao gồm công nghệ quảng cáo trực tuyến, công cụ tìm kiếm, điện toán đám mây, phần mềm và phần cứng.",
  aboutUs: `Google Vietnam được thành lập vào năm 2012 và đã nhanh chóng phát triển thành một trong những văn phòng quan trọng của Google tại khu vực Đông Nam Á. Văn phòng của chúng tôi tại Thành phố Hồ Chí Minh là nơi làm việc của các nhóm kỹ sư, chuyên gia tiếp thị, và các nhân viên hỗ trợ kinh doanh.
  
  Tại Google Vietnam, chúng tôi cam kết mang đến môi trường làm việc đa dạng, hòa nhập và sáng tạo. Chúng tôi khuyến khích tư duy đổi mới và cung cấp cơ hội cho mọi nhân viên được phát triển và đóng góp vào các dự án có tác động toàn cầu.
  
  Đội ngũ của chúng tôi đang không ngừng phát triển, và chúng tôi luôn tìm kiếm những tài năng mới để cùng chúng tôi giải quyết những thách thức công nghệ phức tạp và phát triển các giải pháp sáng tạo cho người dùng toàn cầu.`,
  benefits: [
    "Chế độ bảo hiểm sức khỏe toàn diện cho nhân viên và gia đình",
    "Chương trình lương thưởng cạnh tranh",
    "Chế độ nghỉ phép linh hoạt",
    "Không gian làm việc hiện đại, sáng tạo",
    "Các hoạt động team building thường xuyên",
    "Cơ hội đào tạo và phát triển toàn cầu",
    "Chương trình hỗ trợ học phí",
    "Văn phòng với đầy đủ tiện nghi: phòng gym, khu vực giải trí, nhà ăn miễn phí"
  ],
  culture: `Google Vietnam tự hào về văn hóa làm việc đề cao sự sáng tạo, tính cởi mở và tinh thần đổi mới. Chúng tôi tin tưởng vào việc trao quyền cho nhân viên để họ có thể tự do sáng tạo và đưa ra các ý tưởng mới.

  Văn hóa làm việc tại Google Vietnam được xây dựng dựa trên các giá trị cốt lõi:
  - Tập trung vào người dùng, mọi thứ khác sẽ theo sau
  - Tốt nhất là làm một việc thật xuất sắc
  - Nhanh vẫn hơn chậm
  - Dân chủ trên web là điều có thể
  - Bạn không cần phải ở văn phòng để có câu trả lời
  - Có thể kiếm tiền mà không làm điều xấu
  - Luôn có nhiều thông tin hơn nữa
  - Nhu cầu thông tin vượt qua mọi biên giới
  - Bạn có thể nghiêm túc mà không cần mặc vest
  - Làm tốt thôi chưa đủ

  Chúng tôi mong muốn tạo ra một môi trường làm việc nơi mọi người đều cảm thấy được tôn trọng, được lắng nghe và có cơ hội để phát triển.`,
  jobOpenings: [
    {
      id: 101,
      title: "Senior Software Engineer",
      location: "Hồ Chí Minh",
      type: "Full-time",
      postedDate: "21/04/2025",
      salary: "Thỏa thuận"
    },
    {
      id: 102,
      title: "Product Manager",
      location: "Hồ Chí Minh",
      type: "Full-time",
      postedDate: "20/04/2025",
      salary: "Thỏa thuận"
    },
    {
      id: 103,
      title: "Data Scientist",
      location: "Hồ Chí Minh",
      type: "Full-time",
      postedDate: "19/04/2025",
      salary: "Thỏa thuận"
    },
    {
      id: 104,
      title: "UX/UI Designer",
      location: "Hồ Chí Minh",
      type: "Full-time",
      postedDate: "17/04/2025",
      salary: "Thỏa thuận"
    },
    {
      id: 105,
      title: "Technical Program Manager",
      location: "Hồ Chí Minh",
      type: "Full-time",
      postedDate: "15/04/2025",
      salary: "Thỏa thuận"
    }
  ],
  reviews: [
    {
      id: 201,
      author: "Nguyễn V.",
      position: "Software Engineer",
      rating: 5,
      date: "15/03/2025",
      pros: "Môi trường làm việc tuyệt vời, cơ hội học hỏi và phát triển rất nhiều, đồng nghiệp thân thiện và luôn sẵn sàng giúp đỡ.",
      cons: "Áp lực công việc đôi khi khá cao, cần có khả năng quản lý thời gian tốt.",
      advice: "Hãy chuẩn bị tốt cho quá trình phỏng vấn và đừng ngại đặt câu hỏi khi cần giúp đỡ."
    },
    {
      id: 202,
      author: "Trần T.",
      position: "Product Manager",
      rating: 4,
      date: "02/02/2025",
      pros: "Được làm việc với những người giỏi nhất trong ngành, chế độ đãi ngộ tốt, văn hóa công ty rất tuyệt vời.",
      cons: "Đôi khi cảm thấy quá nhiều cuộc họp, quy trình phê duyệt có thể mất thời gian.",
      advice: "Nắm vững kỹ năng giao tiếp và xây dựng mối quan hệ tốt với đồng nghiệp."
    },
    {
      id: 203,
      author: "Lê H.",
      position: "Data Analyst",
      rating: 5,
      date: "10/01/2025",
      pros: "Cơ sở vật chất tuyệt vời, cơ hội học hỏi không giới hạn, chế độ phúc lợi rất tốt.",
      cons: "Có thể gặp khó khăn khi cân bằng công việc và cuộc sống cá nhân trong một số dự án.",
      advice: "Tận dụng tối đa các cơ hội học tập và phát triển mà công ty cung cấp."
    }
  ],
  rating: 4.8,
  photos: [
    "https://images.unsplash.com/photo-1497215842964-222b430dc094",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    "https://images.unsplash.com/photo-1606857521015-7f9fcf423740"
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
                  <span>{companyDetails.size} nhân viên</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-himlam-500" />
                  <span>Thành lập: {companyDetails.founded}</span>
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
            <Link to="/companies" className="hover:text-himlam-600">Công ty</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span>{companyDetails.name}</span>
          </div>
          
          {/* Tabs for different sections */}
          <Tabs defaultValue="about" className="mb-12">
            <TabsList className="bg-white shadow-sm mb-6">
              <TabsTrigger value="about">Giới thiệu</TabsTrigger>
              <TabsTrigger value="jobs">Việc làm ({companyDetails.jobOpenings.length})</TabsTrigger>
              <TabsTrigger value="reviews">Đánh giá ({companyDetails.reviews.length})</TabsTrigger>
              <TabsTrigger value="photos">Hình ảnh</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about" className="animate-fade-in">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <h2 className="text-2xl font-bold mb-4">Về {companyDetails.name}</h2>
                    <div className="prose max-w-none text-gray-600">
                      {companyDetails.aboutUs.split("\n").map((paragraph, idx) => (
                        <p key={idx} className="mb-4">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-2xl font-bold mb-4">Văn hóa công ty</h2>
                    <div className="prose max-w-none text-gray-600">
                      {companyDetails.culture.split("\n").map((paragraph, idx) => (
                        <p key={idx} className="mb-4">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
                    <h3 className="text-xl font-bold mb-4">Phúc lợi</h3>
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
                <h2 className="text-2xl font-bold mb-6">Vị trí tuyển dụng ({companyDetails.jobOpenings.length})</h2>
                
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
                              <span>Ngày đăng: {job.postedDate}</span>
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
                              Ứng tuyển
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
                  <h2 className="text-2xl font-bold">Đánh giá từ nhân viên</h2>
                  <div className="mt-4 md:mt-0">
                    <Button className="bg-himlam-500 hover:bg-himlam-600">
                      Viết đánh giá
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
                    <div className="mt-2 text-gray-600">Dựa trên {companyDetails.reviews.length} đánh giá</div>
                  </div>
                  
                  <div className="md:col-span-3">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-xl font-bold text-gray-800">4.7</div>
                        <div className="text-sm text-gray-600">Môi trường làm việc</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-xl font-bold text-gray-800">4.9</div>
                        <div className="text-sm text-gray-600">Phúc lợi</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-xl font-bold text-gray-800">4.6</div>
                        <div className="text-sm text-gray-600">Cân bằng công việc</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-xl font-bold text-gray-800">4.8</div>
                        <div className="text-sm text-gray-600">Cơ hội phát triển</div>
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
                          <div className="font-medium text-gray-800">Điểm tích cực</div>
                          <p className="text-gray-600">{review.pros}</p>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">Điểm hạn chế</div>
                          <p className="text-gray-600">{review.cons}</p>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">Lời khuyên</div>
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
                <h2 className="text-2xl font-bold mb-6">Hình ảnh công ty</h2>
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
