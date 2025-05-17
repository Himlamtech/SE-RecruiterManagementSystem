
import { useState } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";

// Mock data for IT positions
const positionData = [
  { name: 'AI Engineer', salary: 45, jobs: 1200 },
  { name: 'Backend Dev', salary: 42, jobs: 3200 },
  { name: 'Frontend Dev', salary: 38, jobs: 2800 },
  { name: 'Data Analyst', salary: 40, jobs: 1500 },
  { name: 'DevOps', salary: 44, jobs: 950 },
  { name: 'Mobile Dev', salary: 41, jobs: 1800 },
];

// Mock data for programming languages
const languageData = [
  { name: 'Python', salary: 43, jobs: 4500 },
  { name: 'JavaScript', salary: 40, jobs: 5200 },
  { name: 'Java', salary: 45, jobs: 3800 },
  { name: 'C/C++', salary: 47, jobs: 2200 },
  { name: 'Go', salary: 48, jobs: 1400 },
  { name: 'R', salary: 41, jobs: 800 },
];

const colors = ['#0e96ea', '#38b0f8', '#7dcbfc', '#bae0fd', '#e0effe'];

const JobStats = () => {
  const [activeTab, setActiveTab] = useState('positions');
  const data = activeTab === 'positions' ? positionData : languageData;

  const formatSalary = (value: number) => `${value}M VND`;

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            IT Market Statistics in Vietnam
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore average salaries and number of open positions by role and technology
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs 
            defaultValue="positions" 
            onValueChange={setActiveTab}
            className="w-full animate-fade-in"
          >
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="positions" className="px-6">
                  Job Positions
                </TabsTrigger>
                <TabsTrigger value="languages" className="px-6">
                  Programming Languages
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="positions" className="animate-scale-in">
              <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold mb-6 text-center">
                  Average Salary by Position (million VND/month)
                </h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={positionData} margin={{ top: 5, right: 30, left: 20, bottom: 30 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis tickFormatter={formatSalary} />
                      <Tooltip formatter={(value) => [`${value}M VND`, 'Avg. Salary']} />
                      <Bar dataKey="salary" fill="#0e96ea" radius={[4, 4, 0, 0]}>
                        {positionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-6 text-center">
                    Number of Jobs Available
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {positionData.map((item, index) => (
                      <div key={index} className="stat-card flex flex-col items-center">
                        <div className="text-xl font-bold text-himlam-600">{item.jobs.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">{item.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="languages" className="animate-scale-in">
              <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold mb-6 text-center">
                  Average Salary by Language (million VND/month)
                </h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={languageData} margin={{ top: 5, right: 30, left: 20, bottom: 30 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis tickFormatter={formatSalary} />
                      <Tooltip formatter={(value) => [`${value}M VND`, 'Avg. Salary']} />
                      <Bar dataKey="salary" fill="#0e96ea" radius={[4, 4, 0, 0]}>
                        {languageData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-6 text-center">
                    Number of Jobs Available
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {languageData.map((item, index) => (
                      <div key={index} className="stat-card flex flex-col items-center">
                        <div className="text-xl font-bold text-himlam-600">{item.jobs.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">{item.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default JobStats;
