
import AdminLayout from "@/components/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Briefcase, 
  Users, 
  FileText, 
  Building
} from "lucide-react";

const statsCards = [
  {
    title: "Total Job Postings",
    value: "24",
    icon: Briefcase,
    change: "+5% from last month",
    color: "bg-blue-500",
  },
  {
    title: "Active Candidates",
    value: "142",
    icon: Users,
    change: "+12% from last month",
    color: "bg-green-500",
  },
  {
    title: "Applications",
    value: "89",
    icon: FileText,
    change: "+8% from last month",
    color: "bg-purple-500",
  },
  {
    title: "Partner Companies",
    value: "16",
    icon: Building,
    change: "+2 new this month",
    color: "bg-amber-500",
  },
];

const AdminDashboard = () => {
  return (
    <AdminLayout title="Dashboard">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {statsCards.map((card, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                {card.title}
              </CardTitle>
              <div className={`${card.color} p-2 rounded-md`}>
                <card.icon className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
              <p className="text-xs text-muted-foreground">{card.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Recent Job Postings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {["Senior Frontend Developer", "DevOps Engineer", "UI/UX Designer", "Full Stack Developer"].map((job, i) => (
                <div key={i} className="flex items-center justify-between pb-3 border-b">
                  <div>
                    <p className="font-medium">{job}</p>
                    <p className="text-sm text-muted-foreground">Posted {5 - i} days ago</p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {Math.floor(Math.random() * 10) + 2} applicants
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Top Candidates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {["Nguyen Van A", "Tran Thi B", "Le Van C", "Pham Thi D"].map((candidate, i) => (
                <div key={i} className="flex items-center justify-between pb-3 border-b">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                      {candidate.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">{candidate}</p>
                      <p className="text-xs text-muted-foreground">Frontend Developer</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
