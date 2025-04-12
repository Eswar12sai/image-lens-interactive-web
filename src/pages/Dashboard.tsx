
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BuildingIcon, LogOutIcon } from "lucide-react";

const Dashboard = () => {
  const { currentUser, logout } = useAuth();

  return (
    <MainLayout>
      <div className="container py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-1">
              Welcome, {currentUser?.firstName}!
            </h1>
            <p className="text-muted-foreground">
              Manage your commercial real estate properties with LeaseLens
            </p>
          </div>
          <Button variant="outline" onClick={logout}>
            <LogOutIcon className="mr-2 h-4 w-4" />
            Log Out
          </Button>
        </div>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Your Properties</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center p-8 text-center">
              <div>
                <BuildingIcon className="h-12 w-12 text-muted-foreground mb-4 mx-auto" />
                <h3 className="text-xl font-medium mb-2">No properties yet</h3>
                <p className="text-muted-foreground mb-4">
                  Add your first commercial property to start managing it with LeaseLens
                </p>
                <Button>
                  Add Property
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
