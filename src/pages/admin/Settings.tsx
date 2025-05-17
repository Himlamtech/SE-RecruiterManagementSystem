
import { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { ChevronRight, Save } from "lucide-react";

const Settings = () => {
  const [accountForm, setAccountForm] = useState({
    name: "Admin User",
    email: "admin@example.com",
    company: "HimLam Jobs",
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    newApplications: true,
    jobUpdates: true,
    systemAlerts: false,
  });
  
  const [systemSettings, setSystemSettings] = useState({
    autoArchiveJobs: true,
    defaultJobDuration: "30",
    requireApproval: false,
    maintenanceMode: false,
  });

  const handleAccountUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Account settings saved successfully");
  };

  const handleNotificationUpdate = (key: string, value: boolean) => {
    setNotificationSettings({
      ...notificationSettings,
      [key]: value,
    });
    toast.success("Notification preferences updated");
  };

  const handleSystemUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("System settings updated successfully");
  };

  const toggleMaintenanceMode = () => {
    const newState = !systemSettings.maintenanceMode;
    setSystemSettings({
      ...systemSettings,
      maintenanceMode: newState,
    });
    
    if (newState) {
      toast.warning("Maintenance mode activated - site is now in read-only mode");
    } else {
      toast.success("Maintenance mode deactivated - site is back to normal");
    }
  };

  return (
    <AdminLayout title="Settings">
      <Tabs defaultValue="account" className="space-y-4">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="system">System Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>
                Update your account details and preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAccountUpdate} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name"
                    value={accountForm.name}
                    onChange={(e) => setAccountForm({...accountForm, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    type="email"
                    value={accountForm.email}
                    onChange={(e) => setAccountForm({...accountForm, email: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input 
                    id="company"
                    value={accountForm.company}
                    onChange={(e) => setAccountForm({...accountForm, company: e.target.value})}
                  />
                </div>
                <Button type="submit">
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current">Current Password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new">New Password</Label>
                  <Input id="new" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm">Confirm New Password</Label>
                  <Input id="confirm" type="password" />
                </div>
                <Button 
                  onClick={() => toast.success("Password updated successfully")}
                >
                  Update Password
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Configure how and when you receive notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-notifications">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications via email
                  </p>
                </div>
                <Switch 
                  id="email-notifications"
                  checked={notificationSettings.emailNotifications}
                  onCheckedChange={(value) => handleNotificationUpdate("emailNotifications", value)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="new-applications">New Applications</Label>
                  <p className="text-sm text-muted-foreground">
                    Get notified when a new candidate applies
                  </p>
                </div>
                <Switch 
                  id="new-applications"
                  checked={notificationSettings.newApplications}
                  onCheckedChange={(value) => handleNotificationUpdate("newApplications", value)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="job-updates">Job Updates</Label>
                  <p className="text-sm text-muted-foreground">
                    Get notified when jobs are modified
                  </p>
                </div>
                <Switch 
                  id="job-updates"
                  checked={notificationSettings.jobUpdates}
                  onCheckedChange={(value) => handleNotificationUpdate("jobUpdates", value)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="system-alerts">System Alerts</Label>
                  <p className="text-sm text-muted-foreground">
                    Important system notifications and alerts
                  </p>
                </div>
                <Switch 
                  id="system-alerts"
                  checked={notificationSettings.systemAlerts}
                  onCheckedChange={(value) => handleNotificationUpdate("systemAlerts", value)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="system" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Settings</CardTitle>
              <CardDescription>
                Configure global system settings and behaviors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSystemUpdate} className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="auto-archive">Auto-Archive Jobs</Label>
                    <p className="text-sm text-muted-foreground">
                      Automatically archive expired job listings
                    </p>
                  </div>
                  <Switch 
                    id="auto-archive"
                    checked={systemSettings.autoArchiveJobs}
                    onCheckedChange={(value) => setSystemSettings({...systemSettings, autoArchiveJobs: value})}
                  />
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label htmlFor="default-duration">Default Job Duration (days)</Label>
                  <Input 
                    id="default-duration"
                    type="number"
                    value={systemSettings.defaultJobDuration}
                    onChange={(e) => setSystemSettings({...systemSettings, defaultJobDuration: e.target.value})}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="require-approval">Require Job Approval</Label>
                    <p className="text-sm text-muted-foreground">
                      New job listings require admin approval before publishing
                    </p>
                  </div>
                  <Switch 
                    id="require-approval"
                    checked={systemSettings.requireApproval}
                    onCheckedChange={(value) => setSystemSettings({...systemSettings, requireApproval: value})}
                  />
                </div>
                <Separator />
                <Button type="submit">Save System Settings</Button>
              </form>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Maintenance Options</CardTitle>
              <CardDescription>
                System maintenance and advanced options
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Put site in read-only mode during maintenance
                  </p>
                </div>
                <Switch 
                  id="maintenance-mode"
                  checked={systemSettings.maintenanceMode}
                  onCheckedChange={toggleMaintenanceMode}
                />
              </div>
              <Separator />
              <div className="space-y-2">
                <Button 
                  variant="outline"
                  className="w-full justify-between"
                  onClick={() => toast.success("Database backup started")}
                >
                  <span>Backup Database</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline"
                  className="w-full justify-between"
                  onClick={() => toast.success("System logs downloaded")}
                >
                  <span>Download System Logs</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline"
                  className="w-full justify-between"
                  onClick={() => toast.success("Cache cleared successfully")}
                >
                  <span>Clear System Cache</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                These actions can affect system performance. Use with caution.
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </AdminLayout>
  );
};

export default Settings;
