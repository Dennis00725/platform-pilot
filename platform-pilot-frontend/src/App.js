import React from 'react';
import { DeploymentCard } from './DeploymentCard';
import './App.css';

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>🚀 PlatformPilot Dashboard</h1>
      <p>Monitoring Volvo Services</p>
      <hr />
      
      <DeploymentCard 
        serviceName="Payment Service"
        status="running"
        lastUpdated="2 mins ago"
      />
      
      <DeploymentCard 
        serviceName="Chat Service"
        status="failed"
        lastUpdated="30 mins ago"
      />
      
      <DeploymentCard 
        serviceName="Analytics Service"
        status="pending"
        lastUpdated="Just now"
      />
    </div>
  );
}

export default App;