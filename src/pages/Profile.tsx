
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FileText, Briefcase, Bell, Settings } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white shadow-sm rounded-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>US</AvatarFallback>
              </Avatar>
              
              <div className="text-center md:text-left mt-4 md:mt-0">
                <h1 className="text-2xl font-bold text-gray-800">Nguyễn Văn A</h1>
                <p className="text-gray-600">Frontend Developer</p>
                <p className="mt-2 text-gray-500">Hồ Chí Minh, Việt Nam</p>
                
                <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4">
                  <Button className="bg-himlam-500 hover:bg-himlam-600 text-white">Cập nhật hồ sơ</Button>
                  <Button variant="outline" className="border-himlam-300 hover:border-himlam-500">
                    Xem hồ sơ công khai
                  </Button>
                </div>
              </div>
              
              <div className="hidden md:flex ml-auto space-x-4">
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Settings className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-gray-50 p-4 rounded-lg flex items-center">
                <div className="bg-himlam-100 rounded-full p-2 mr-4">
                  <FileText className="h-6 w-6 text-himlam-600" />
                </div>
                <div>
                  <div className="text-xl font-bold">2</div>
                  <div className="text-sm text-gray-600">CV đã tạo</div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg flex items-center">
                <div className="bg-himlam-100 rounded-full p-2 mr-4">
                  <Briefcase className="h-6 w-6 text-himlam-600" />
                </div>
                <div>
                  <div className="text-xl font-bold">5</div>
                  <div className="text-sm text-gray-600">Đơn ứng tuyển</div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg flex items-center">
                <div className="bg-himlam-100 rounded-full p-2 mr-4">
                  <Bell className="h-6 w-6 text-himlam-600" />
                </div>
                <div>
                  <div className="text-xl font-bold">3</div>
                  <div className="text-sm text-gray-600">Thông báo mới</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="personal" className="px-6">
                  Thông tin cá nhân
                </TabsTrigger>
                <TabsTrigger value="applications" className="px-6">
                  Đơn ứng tuyển
                </TabsTrigger>
                <TabsTrigger value="saved-jobs" className="px-6">
                  Việc làm đã lưu
                </TabsTrigger>
                <TabsTrigger value="settings" className="px-6">
                  Cài đặt
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="personal" className="animate-scale-in">
                <Card>
                  <CardHeader>
                    <CardTitle>Thông tin cá nhân</CardTitle>
                    <CardDescription>
                      Cập nhật thông tin cá nhân của bạn
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">Họ</Label>
                          <Input id="first-name" defaultValue="Nguyễn Văn" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Tên</Label>
                          <Input id="last-name" defaultValue="A" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="nguyenvana@gmail.com" />
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Số điện thoại</Label>
                          <Input id="phone" defaultValue="0901234567" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="dob">Ngày sinh</Label>
                          <Input id="dob" type="date" defaultValue="1995-01-01" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="address">Địa chỉ</Label>
                        <Input id="address" defaultValue="Quận 1, TP. Hồ Chí Minh" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="job-title">Vị trí/Chức danh</Label>
                        <Input id="job-title" defaultValue="Frontend Developer" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="bio">Giới thiệu bản thân</Label>
                        <Textarea 
                          id="bio" 
                          defaultValue="Frontend Developer với 3 năm kinh nghiệm làm việc với React, TypeScript và các công nghệ hiện đại. Tôi đam mê tạo ra các giao diện người dùng đẹp mắt và trải nghiệm người dùng tuyệt vời."
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="skills">Kỹ năng</Label>
                        <Textarea 
                          id="skills" 
                          defaultValue="JavaScript, TypeScript, React, HTML, CSS, Tailwind CSS, Redux, GraphQL, Git"
                        />
                      </div>
                      
                      <div className="flex justify-end pt-4">
                        <Button className="bg-himlam-500 hover:bg-himlam-600 text-white">
                          Lưu thay đổi
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="applications" className="animate-scale-in">
                <Card>
                  <CardHeader>
                    <CardTitle>Đơn ứng tuyển của bạn</CardTitle>
                    <CardDescription>
                      Quản lý và theo dõi các đơn ứng tuyển
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          id: 1, 
                          title: "Frontend Developer", 
                          company: "FPT Software", 
                          appliedDate: "22/04/2025",
                          status: "Đang xem xét"
                        },
                        {
                          id: 2, 
                          title: "React Developer", 
                          company: "VNG", 
                          appliedDate: "20/04/2025",
                          status: "Phỏng vấn"
                        },
                        {
                          id: 3, 
                          title: "UI Developer", 
                          company: "Tiki", 
                          appliedDate: "18/04/2025",
                          status: "Đã từ chối"
                        },
                        {
                          id: 4, 
                          title: "Frontend Engineer", 
                          company: "Shopee", 
                          appliedDate: "15/04/2025",
                          status: "Đang xem xét"
                        },
                        {
                          id: 5, 
                          title: "Web Developer", 
                          company: "Momo", 
                          appliedDate: "10/04/2025",
                          status: "Đã từ chối"
                        }
                      ].map((application) => (
                        <div key={application.id} className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                          <div className="flex flex-col md:flex-row md:items-center justify-between">
                            <div>
                              <h3 className="text-lg font-medium text-gray-800">{application.title}</h3>
                              <p className="text-gray-600">{application.company}</p>
                              <p className="text-sm text-gray-500 mt-1">Ngày ứng tuyển: {application.appliedDate}</p>
                            </div>
                            <div className="mt-2 md:mt-0">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                application.status === "Phỏng vấn" 
                                  ? "bg-green-100 text-green-800" 
                                  : application.status === "Đã từ chối"
                                    ? "bg-red-100 text-red-800"
                                    : "bg-yellow-100 text-yellow-800"
                              }`}>
                                {application.status}
                              </span>
                            </div>
                          </div>
                          <div className="mt-4 flex justify-end">
                            <Button variant="outline" className="text-sm border-himlam-300 hover:border-himlam-500">
                              Xem chi tiết
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="saved-jobs" className="animate-scale-in">
                <Card>
                  <CardHeader>
                    <CardTitle>Việc làm đã lưu</CardTitle>
                    <CardDescription>
                      Quản lý các việc làm bạn đã lưu để ứng tuyển sau
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          id: 1, 
                          title: "Senior Frontend Developer", 
                          company: "Google", 
                          location: "Hồ Chí Minh",
                          savedDate: "23/04/2025",
                          salary: "50-70 triệu"
                        },
                        {
                          id: 2, 
                          title: "React Native Developer", 
                          company: "Microsoft", 
                          location: "Hà Nội",
                          savedDate: "21/04/2025",
                          salary: "40-60 triệu"
                        },
                        {
                          id: 3, 
                          title: "Full Stack Engineer", 
                          company: "Amazon", 
                          location: "Remote",
                          savedDate: "19/04/2025",
                          salary: "60-80 triệu"
                        }
                      ].map((job) => (
                        <div key={job.id} className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                          <div className="flex flex-col md:flex-row md:items-center justify-between">
                            <div>
                              <h3 className="text-lg font-medium text-gray-800">{job.title}</h3>
                              <p className="text-gray-600">{job.company}</p>
                              <div className="flex flex-wrap gap-x-4 mt-1">
                                <p className="text-sm text-gray-500">Địa điểm: {job.location}</p>
                                <p className="text-sm text-gray-500">Lương: {job.salary}</p>
                              </div>
                              <p className="text-sm text-gray-500 mt-1">Đã lưu: {job.savedDate}</p>
                            </div>
                          </div>
                          <div className="mt-4 flex justify-end space-x-2">
                            <Button className="text-sm bg-himlam-500 hover:bg-himlam-600 text-white">
                              Ứng tuyển
                            </Button>
                            <Button variant="outline" className="text-sm border-himlam-300 hover:border-himlam-500">
                              Xem chi tiết
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="settings" className="animate-scale-in">
                <Card>
                  <CardHeader>
                    <CardTitle>Cài đặt tài khoản</CardTitle>
                    <CardDescription>
                      Quản lý cài đặt và tùy chọn cho tài khoản của bạn
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Đổi mật khẩu</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="current-password">Mật khẩu hiện tại</Label>
                            <Input id="current-password" type="password" />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="new-password">Mật khẩu mới</Label>
                            <Input id="new-password" type="password" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="confirm-password">Xác nhận mật khẩu</Label>
                            <Input id="confirm-password" type="password" />
                          </div>
                        </div>
                        <div className="pt-2">
                          <Button className="bg-himlam-500 hover:bg-himlam-600 text-white">
                            Cập nhật mật khẩu
                          </Button>
                        </div>
                      </div>
                      
                      <div className="space-y-4 pt-6 border-t border-gray-100">
                        <h3 className="text-lg font-medium">Thông báo</h3>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Thông báo qua email</h4>
                            <p className="text-sm text-gray-500">Nhận thông báo về việc làm phù hợp qua email</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" id="email-notifications" className="rounded border-gray-300 text-himlam-600 focus:ring-himlam-500" defaultChecked />
                            <Label htmlFor="email-notifications">Bật</Label>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Thông báo trên web</h4>
                            <p className="text-sm text-gray-500">Nhận thông báo trên trình duyệt</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" id="web-notifications" className="rounded border-gray-300 text-himlam-600 focus:ring-himlam-500" />
                            <Label htmlFor="web-notifications">Bật</Label>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4 pt-6 border-t border-gray-100">
                        <h3 className="text-lg font-medium text-red-600">Nguy hiểm</h3>
                        
                        <div>
                          <p className="text-sm text-gray-500 mb-4">Xóa vĩnh viễn tài khoản và tất cả dữ liệu của bạn</p>
                          <Button variant="destructive">
                            Xóa tài khoản
                          </Button>
                        </div>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
