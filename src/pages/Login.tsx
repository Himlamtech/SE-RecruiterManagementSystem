
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { LogIn, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const loginSchema = z.object({
  email: z.string().email({
    message: "Email không hợp lệ.",
  }),
  password: z.string().min(6, {
    message: "Mật khẩu phải có ít nhất 6 ký tự.",
  }),
});

const registerSchema = z.object({
  name: z.string().min(2, {
    message: "Tên phải có ít nhất 2 ký tự.",
  }),
  email: z.string().email({
    message: "Email không hợp lệ.",
  }),
  password: z.string().min(6, {
    message: "Mật khẩu phải có ít nhất 6 ký tự.",
  }),
  confirmPassword: z.string(),
  role: z.enum(["candidate", "employer"]),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Mật khẩu không khớp.",
  path: ["confirmPassword"],
});

const Login = () => {
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const registerForm = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "candidate",
    },
  });

  const onLoginSubmit = (values: z.infer<typeof loginSchema>) => {
    console.log(values);
    toast({
      title: "Đăng nhập thành công",
      description: "Chào mừng bạn quay trở lại HimLam.",
    });
    // Redirect to home page if successful
  };

  const onRegisterSubmit = (values: z.infer<typeof registerSchema>) => {
    console.log(values);
    toast({
      title: "Đăng ký thành công",
      description: "Vui lòng kiểm tra email để xác nhận tài khoản.",
    });
    // Redirect to login tab if successful
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-3xl font-bold text-gray-800">Chào mừng đến với HimLam</h1>
            <p className="text-gray-600 mt-2">Nền tảng tuyển dụng hàng đầu cho ngành IT</p>
          </div>
          
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid grid-cols-2 mb-8">
              <TabsTrigger value="login">Đăng nhập</TabsTrigger>
              <TabsTrigger value="register">Đăng ký</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login" className="animate-scale-in">
              <Card>
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl text-center">Đăng nhập</CardTitle>
                  <CardDescription className="text-center">
                    Nhập email và mật khẩu để truy cập vào tài khoản của bạn
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...loginForm}>
                    <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-4">
                      <FormField
                        control={loginForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <Input 
                                  placeholder="you@example.com" 
                                  className="pl-10" 
                                  {...field} 
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={loginForm.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mật khẩu</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <Input 
                                  type={showPassword ? "text" : "password"} 
                                  placeholder="******" 
                                  className="pl-10" 
                                  {...field} 
                                />
                                <button 
                                  type="button" 
                                  onClick={togglePasswordVisibility} 
                                  className="absolute right-3 top-3"
                                  tabIndex={-1}
                                >
                                  {showPassword ? (
                                    <EyeOff className="h-4 w-4 text-gray-400" />
                                  ) : (
                                    <Eye className="h-4 w-4 text-gray-400" />
                                  )}
                                </button>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="flex items-center justify-end">
                        <Link to="/forgot-password" className="text-sm text-himlam-600 hover:underline">
                          Quên mật khẩu?
                        </Link>
                      </div>
                      <Button type="submit" className="w-full bg-himlam-500 hover:bg-himlam-600">
                        <LogIn className="mr-2 h-4 w-4" /> Đăng nhập
                      </Button>
                    </form>
                  </Form>
                  
                  <div className="mt-6">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <Separator className="w-full" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-gray-500">Hoặc đăng nhập với</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <Button variant="outline" type="button" className="border-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google mr-2" viewBox="0 0 16 16">
                          <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                        </svg>
                        Google
                      </Button>
                      <Button variant="outline" type="button" className="border-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github mr-2" viewBox="0 0 16 16">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg>
                        GitHub
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="register" className="animate-scale-in">
              <Card>
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl text-center">Tạo tài khoản mới</CardTitle>
                  <CardDescription className="text-center">
                    Nhập thông tin của bạn để tạo tài khoản
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...registerForm}>
                    <form onSubmit={registerForm.handleSubmit(onRegisterSubmit)} className="space-y-4">
                      <FormField
                        control={registerForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Họ tên</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Nguyễn Văn A" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={registerForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <Input 
                                  placeholder="you@example.com" 
                                  className="pl-10" 
                                  {...field} 
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={registerForm.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mật khẩu</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <Input 
                                  type={showPassword ? "text" : "password"} 
                                  placeholder="******" 
                                  className="pl-10" 
                                  {...field} 
                                />
                                <button 
                                  type="button" 
                                  onClick={togglePasswordVisibility} 
                                  className="absolute right-3 top-3"
                                  tabIndex={-1}
                                >
                                  {showPassword ? (
                                    <EyeOff className="h-4 w-4 text-gray-400" />
                                  ) : (
                                    <Eye className="h-4 w-4 text-gray-400" />
                                  )}
                                </button>
                              </div>
                            </FormControl>
                            <FormDescription>
                              Mật khẩu phải có ít nhất 6 ký tự
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={registerForm.control}
                        name="confirmPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Xác nhận mật khẩu</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <Input 
                                  type={showConfirmPassword ? "text" : "password"} 
                                  placeholder="******" 
                                  className="pl-10" 
                                  {...field} 
                                />
                                <button 
                                  type="button" 
                                  onClick={toggleConfirmPasswordVisibility} 
                                  className="absolute right-3 top-3"
                                  tabIndex={-1}
                                >
                                  {showConfirmPassword ? (
                                    <EyeOff className="h-4 w-4 text-gray-400" />
                                  ) : (
                                    <Eye className="h-4 w-4 text-gray-400" />
                                  )}
                                </button>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={registerForm.control}
                        name="role"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Bạn là</FormLabel>
                            <div className="flex gap-4">
                              <label className={`flex-1 border rounded-md p-3 cursor-pointer ${field.value === "candidate" ? "border-himlam-500 bg-himlam-50" : "border-gray-200"}`}>
                                <input
                                  type="radio"
                                  value="candidate"
                                  checked={field.value === "candidate"}
                                  onChange={() => field.onChange("candidate")}
                                  className="sr-only"
                                />
                                <div className="text-center">
                                  <div className="font-medium">Người tìm việc</div>
                                  <div className="text-sm text-gray-500">Tìm kiếm công việc mới</div>
                                </div>
                              </label>
                              <label className={`flex-1 border rounded-md p-3 cursor-pointer ${field.value === "employer" ? "border-himlam-500 bg-himlam-50" : "border-gray-200"}`}>
                                <input
                                  type="radio"
                                  value="employer"
                                  checked={field.value === "employer"}
                                  onChange={() => field.onChange("employer")}
                                  className="sr-only"
                                />
                                <div className="text-center">
                                  <div className="font-medium">Nhà tuyển dụng</div>
                                  <div className="text-sm text-gray-500">Đăng tin tuyển dụng</div>
                                </div>
                              </label>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button type="submit" className="w-full bg-himlam-500 hover:bg-himlam-600">
                        Đăng ký
                      </Button>
                    </form>
                  </Form>
                  
                  <div className="mt-4 text-center text-sm">
                    <p>
                      Bằng việc đăng ký, bạn đồng ý với{" "}
                      <Link to="/terms" className="text-himlam-600 hover:underline">
                        Điều khoản dịch vụ
                      </Link>{" "}
                      và{" "}
                      <Link to="/privacy" className="text-himlam-600 hover:underline">
                        Chính sách bảo mật
                      </Link>{" "}
                      của chúng tôi.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
