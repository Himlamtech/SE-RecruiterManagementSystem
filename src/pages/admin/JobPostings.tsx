
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
import { Plus, Search, Edit, Trash2 } from "lucide-react";

// Mock job posting data
const initialJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Google",
    location: "Ho Chi Minh",
    type: "Full-time",
    status: "Active",
    posted: "2025-05-10",
    applications: 8,
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "FPT",
    location: "Hanoi",
    type: "Full-time",
    status: "Active",
    posted: "2025-05-08",
    applications: 5,
  },
  {
    id: 3,
    title: "DevOps Specialist",
    company: "Microsoft",
    location: "Da Nang",
    type: "Contract",
    status: "Draft",
    posted: "2025-05-15",
    applications: 0,
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "VNG",
    location: "Ho Chi Minh",
    type: "Part-time",
    status: "Active",
    posted: "2025-05-05",
    applications: 12,
  },
  {
    id: 5,
    title: "Full Stack Developer",
    company: "Tiki",
    location: "Hanoi",
    type: "Full-time",
    status: "Closed",
    posted: "2025-04-20",
    applications: 15,
  },
];

const JobPostings = () => {
  const [jobs, setJobs] = useState(initialJobs);
  const [searchQuery, setSearchQuery] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentJob, setCurrentJob] = useState<any>(null);

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    job.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddEdit = (job?: any) => {
    if (job) {
      setCurrentJob(job);
    } else {
      setCurrentJob({
        id: jobs.length + 1,
        title: "",
        company: "",
        location: "",
        type: "Full-time",
        status: "Draft",
        posted: new Date().toISOString().split('T')[0],
        applications: 0,
      });
    }
    setDialogOpen(true);
  };

  const handleDeleteJob = (id: number) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  const handleSaveJob = (e: React.FormEvent) => {
    e.preventDefault();
    if (jobs.find(job => job.id === currentJob.id)) {
      // Update existing job
      setJobs(jobs.map(job => job.id === currentJob.id ? currentJob : job));
    } else {
      // Add new job
      setJobs([...jobs, currentJob]);
    }
    setDialogOpen(false);
  };

  return (
    <AdminLayout title="Job Postings">
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
          <Input
            placeholder="Search jobs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button onClick={() => handleAddEdit()}>
          <Plus className="h-4 w-4 mr-2" /> Add Job
        </Button>
      </div>

      <div className="bg-white rounded-md shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Job Title</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Posted Date</TableHead>
              <TableHead>Applications</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredJobs.map((job) => (
              <TableRow key={job.id}>
                <TableCell className="font-medium">{job.title}</TableCell>
                <TableCell>{job.company}</TableCell>
                <TableCell>{job.location}</TableCell>
                <TableCell>{job.type}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    job.status === 'Active' ? 'bg-green-100 text-green-800' :
                    job.status === 'Draft' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {job.status}
                  </span>
                </TableCell>
                <TableCell>{job.posted}</TableCell>
                <TableCell>{job.applications}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" onClick={() => handleAddEdit(job)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDeleteJob(job.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>{currentJob?.id ? "Edit" : "Add"} Job Posting</DialogTitle>
            <DialogDescription>
              {currentJob?.id ? "Edit job details below." : "Fill in the details for the new job posting."}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSaveJob} className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium">Job Title</label>
                <Input
                  id="title"
                  value={currentJob?.title || ""}
                  onChange={(e) => setCurrentJob({...currentJob, title: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">Company</label>
                <Input
                  id="company"
                  value={currentJob?.company || ""}
                  onChange={(e) => setCurrentJob({...currentJob, company: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="location" className="text-sm font-medium">Location</label>
                <Input
                  id="location"
                  value={currentJob?.location || ""}
                  onChange={(e) => setCurrentJob({...currentJob, location: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="type" className="text-sm font-medium">Job Type</label>
                <select 
                  id="type"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2"
                  value={currentJob?.type || "Full-time"}
                  onChange={(e) => setCurrentJob({...currentJob, type: e.target.value})}
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Freelance">Freelance</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="status" className="text-sm font-medium">Status</label>
                <select 
                  id="status"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2"
                  value={currentJob?.status || "Draft"}
                  onChange={(e) => setCurrentJob({...currentJob, status: e.target.value})}
                >
                  <option value="Active">Active</option>
                  <option value="Draft">Draft</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="posted" className="text-sm font-medium">Posted Date</label>
                <Input
                  id="posted"
                  type="date"
                  value={currentJob?.posted || ""}
                  onChange={(e) => setCurrentJob({...currentJob, posted: e.target.value})}
                />
              </div>
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default JobPostings;
