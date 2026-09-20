import React, { useState, useEffect } from 'react';
import { DeploymentCard } from './DeploymentCard';
import './App.css';

function App() {
  const [deployments, setDeployments] = useState([]);

  // Fetch deployments from backend when component loads
  useEffect(() => {
    fetchDeployments();
  }, []);

  const fetchDeployments = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/deployments');
      const data = await response.json();
      setDeployments(data);
    } catch (error) {
      console.error('Error fetching deployments:', error);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>🚀 PlatformPilot Dashboard</h1>
      <p>Monitoring Volvo Services</p>
      <hr />
      
        {deployments.map((deployment) => (
          <DeploymentCard 
            key={deployment.id}
            serviceName={deployment.serviceName}
            status={deployment.status}
            lastUpdated={deployment.lastUpdated}
            onRefresh={fetchDeployments}
          />
        ))}

    </div>
  );
}

export default App;
