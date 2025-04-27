
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
    { id: 1, name: "CV Chính", lastUpdated: "20/04/2025", template: "Modern" },
    { id: 2, name: "CV Tiếng Anh", lastUpdated: "15/04/2025", template: "Minimal" },
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-10 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Quản lý CV của bạn</h1>
            <p className="text-lg text-gray-600">
              Tạo và quản lý CV chuyên nghiệp để tăng cơ hội ứng tuyển thành công
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
                  Tạo CV mới
                </TabsTrigger>
                <TabsTrigger value="manage" className="px-6">
                  CVs của tôi
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="create" className="animate-scale-in">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Thông tin cá nhân</CardTitle>
                      <CardDescription>Điền thông tin cá nhân của bạn</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">Họ</Label>
                          <Input id="first-name" placeholder="Nguyễn Văn" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Tên</Label>
                          <Input id="last-name" placeholder="A" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="job-title">Vị trí ứng tuyển</Label>
                        <Input id="job-title" placeholder="Frontend Developer" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="example@gmail.com" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Số điện thoại</Label>
                        <Input id="phone" placeholder="0901234567" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="address">Địa chỉ</Label>
                        <Input id="address" placeholder="Quận 1, TP. Hồ Chí Minh" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="summary">Tóm tắt bản thân</Label>
                        <Textarea id="summary" placeholder="Giới thiệu ngắn gọn về bản thân và kinh nghiệm của bạn..." />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>Kinh nghiệm làm việc</CardTitle>
                      <CardDescription>Thêm kinh nghiệm làm việc của bạn</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mb-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="company">Công ty</Label>
                            <Input id="company" placeholder="Tên công ty" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="position">Vị trí</Label>
                            <Input id="position" placeholder="Vị trí của bạn" />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mt-4">
                          <div className="space-y-2">
                            <Label htmlFor="start-date">Ngày bắt đầu</Label>
                            <Input id="start-date" type="date" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="end-date">Ngày kết thúc</Label>
                            <Input id="end-date" type="date" />
                          </div>
                        </div>
                        
                        <div className="space-y-2 mt-4">
                          <Label htmlFor="description">Mô tả công việc</Label>
                          <Textarea id="description" placeholder="Mô tả về trách nhiệm và thành tựu của bạn..." />
                        </div>
                      </div>
                      
                      <Button className="w-full flex items-center justify-center border-himlam-300 hover:border-himlam-500" variant="outline">
                        <Plus className="h-4 w-4 mr-2" /> Thêm kinh nghiệm
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>Học vấn</CardTitle>
                      <CardDescription>Thêm thông tin học vấn của bạn</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mb-4">
                        <div className="space-y-2">
                          <Label htmlFor="school">Trường học</Label>
                          <Input id="school" placeholder="Tên trường" />
                        </div>
                        
                        <div className="space-y-2 mt-4">
                          <Label htmlFor="degree">Bằng cấp / Chuyên ngành</Label>
                          <Input id="degree" placeholder="Cử nhân Khoa học Máy tính" />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mt-4">
                          <div className="space-y-2">
                            <Label htmlFor="edu-start-date">Năm bắt đầu</Label>
                            <Input id="edu-start-date" type="number" placeholder="2018" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="edu-end-date">Năm kết thúc</Label>
                            <Input id="edu-end-date" type="number" placeholder="2022" />
                          </div>
                        </div>
                      </div>
                      
                      <Button className="w-full flex items-center justify-center border-himlam-300 hover:border-himlam-500" variant="outline">
                        <Plus className="h-4 w-4 mr-2" /> Thêm học vấn
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>Kỹ năng</CardTitle>
                      <CardDescription>Thêm các kỹ năng của bạn</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="skills">Kỹ năng (phân cách bằng dấu phẩy)</Label>
                        <Input id="skills" placeholder="JavaScript, React, Node.js, TypeScript, ..." />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="flex justify-end mt-6">
                    <Button className="bg-himlam-500 hover:bg-himlam-600 text-white">
                      Lưu CV
                    </Button>
                  </div>
                </div>
                
                <div>
                  <Card className="sticky top-6">
                    <CardHeader>
                      <CardTitle>Xem trước CV</CardTitle>
                      <CardDescription>Chọn mẫu CV phù hợp</CardDescription>
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
                      <p className="text-sm text-gray-500 mt-2">Cập nhật: {cv.lastUpdated}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-1" /> Sửa
                      </Button>
                      <div className="space-x-2">
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1" /> Tải về
                        </Button>
                        <Button variant="destructive" size="sm">
                          <Trash2 className="h-4 w-4 mr-1" /> Xóa
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
                
                <Card className="border-dashed border-2 flex flex-col items-center justify-center p-6 h-full">
                  <div className="w-16 h-16 rounded-full bg-himlam-100 flex items-center justify-center mb-4">
                    <Plus className="h-8 w-8 text-himlam-500" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Tạo CV mới</h3>
                  <p className="text-center text-gray-500 mb-4">Tạo thêm CV mới phù hợp với từng vị trí ứng tuyển</p>
                  <Button className="bg-himlam-500 hover:bg-himlam-600 text-white" onClick={() => setActiveTab("create")}>
                    Tạo CV mới
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
