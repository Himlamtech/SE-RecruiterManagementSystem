
import { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Search, Eye, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Mock candidate data
const initialCandidates = [
  {
    id: 1,
    name: "Nguyen Van A",
    email: "nguyenvana@email.com",
    phone: "0901234567",
    position: "Frontend Developer",
    skills: ["React", "TypeScript", "Tailwind CSS"],
    experience: "5 years",
    status: "New",
    applied: "2025-05-12",
  },
  {
    id: 2,
    name: "Tran Thi B",
    email: "tranthib@email.com",
    phone: "0902345678",
    position: "UI/UX Designer",
    skills: ["Figma", "Adobe XD", "Sketch"],
    experience: "3 years",
    status: "Interviewed",
    applied: "2025-05-10",
  },
  {
    id: 3,
    name: "Le Van C",
    email: "levanc@email.com",
    phone: "0903456789",
    position: "Backend Engineer",
    skills: ["Node.js", "Express", "MongoDB"],
    experience: "4 years",
    status: "Shortlisted",
    applied: "2025-05-09",
  },
  {
    id: 4,
    name: "Pham Thi D",
    email: "phamthid@email.com",
    phone: "0904567890",
    position: "Full Stack Developer",
    skills: ["React", "Node.js", "PostgreSQL"],
    experience: "6 years",
    status: "Hired",
    applied: "2025-05-05",
  },
  {
    id: 5,
    name: "Hoang Van E",
    email: "hoangvane@email.com",
    phone: "0905678901",
    position: "DevOps Engineer",
    skills: ["Docker", "Kubernetes", "AWS"],
    experience: "4 years",
    status: "Rejected",
    applied: "2025-05-01",
  },
];

const Candidates = () => {
  const [candidates, setCandidates] = useState(initialCandidates);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [currentCandidate, setCurrentCandidate] = useState<any>(null);

  const filteredCandidates = candidates.filter(candidate => 
    candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    candidate.position.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewCandidate = (candidate: any) => {
    setCurrentCandidate(candidate);
    setViewDialogOpen(true);
  };

  const updateCandidateStatus = (id: number, status: string) => {
    setCandidates(candidates.map(candidate => 
      candidate.id === id ? {...candidate, status} : candidate
    ));
    setViewDialogOpen(false);
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'New': return 'bg-blue-100 text-blue-800';
      case 'Interviewed': return 'bg-purple-100 text-purple-800';
      case 'Shortlisted': return 'bg-yellow-100 text-yellow-800';
      case 'Hired': return 'bg-green-100 text-green-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <AdminLayout title="Candidates">
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
          <Input
            placeholder="Search candidates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="bg-white rounded-md shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Experience</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Applied Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCandidates.map((candidate) => (
              <TableRow key={candidate.id}>
                <TableCell className="font-medium">{candidate.name}</TableCell>
                <TableCell>{candidate.position}</TableCell>
                <TableCell>{candidate.experience}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusBadgeClass(candidate.status)}`}>
                    {candidate.status}
                  </span>
                </TableCell>
                <TableCell>{candidate.applied}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" onClick={() => handleViewCandidate(candidate)}>
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={viewDialogOpen} onOpenChange={setViewDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Candidate Profile</DialogTitle>
            <DialogDescription>
              View and manage candidate information
            </DialogDescription>
          </DialogHeader>

          {currentCandidate && (
            <div className="py-4">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-lg font-medium mr-4">
                  {currentCandidate.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{currentCandidate.name}</h3>
                  <p className="text-sm text-gray-500">{currentCandidate.position}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p>{currentCandidate.email}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Phone</p>
                  <p>{currentCandidate.phone}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-500">Skills</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {currentCandidate.skills.map((skill: string, i: number) => (
                    <span key={i} className="px-2 py-1 text-xs bg-gray-100 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-500">Experience</p>
                <p>{currentCandidate.experience}</p>
              </div>
              
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-500">Current Status</p>
                <span className={`px-2 py-1 text-xs rounded-full ${getStatusBadgeClass(currentCandidate.status)}`}>
                  {currentCandidate.status}
                </span>
              </div>
              
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-500">Resume</p>
                <Card className="mt-2">
                  <CardContent className="p-4">
                    <p className="text-sm">View candidate's resume and CV documents</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Download Resume
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="border-t pt-4">
                <p className="text-sm font-medium mb-2">Update Status</p>
                <div className="flex flex-wrap gap-2">
                  {['New', 'Interviewed', 'Shortlisted', 'Hired', 'Rejected'].map(status => (
                    <Button 
                      key={status}
                      variant="outline"
                      size="sm"
                      className={currentCandidate.status === status ? 'bg-gray-100' : ''}
                      onClick={() => updateCandidateStatus(currentCandidate.id, status)}
                    >
                      {status}
                    </Button>
                  ))}
                </div>
              </div>

              <DialogFooter className="mt-6">
                <Button variant="outline" onClick={() => setViewDialogOpen(false)}>Close</Button>
                <Button>Contact Candidate</Button>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default Candidates;
