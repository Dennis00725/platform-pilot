// Step 1: Import React (gives us access to React features)
import React from 'react';
import { useState } from 'react';

// Step 2: Define what inputs this component needs (Props)
interface DeploymentCardProps {
  serviceName: string;      // The name of the service (e.g., "Payment Service")
  status: "running" | "failed" | "pending";  // One of these 3 options
  lastUpdated: string;      // When was it last updated (e.g., "2 mins ago")
}

// Step 3: Create the component function
export function DeploymentCard({ serviceName, status, lastUpdated }: DeploymentCardProps) {
  
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = () => {
  setIsLoading(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
};

  // Step 4: Decide the color based on status
  const statusColor = 
    status === "running" ? "green" : 
    status === "failed" ? "red" : 
    "yellow";

  // Step 5: Return the HTML (called JSX)
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", marginBottom: "12px" }}>
      <h3>{serviceName}</h3>
      <p>
        Status: <span style={{ color: statusColor, fontWeight: "bold" }}>{status}</span>
      </p>
      <p>Last updated: {lastUpdated}</p>

      <button 
  onClick={handleRefresh}
  disabled={isLoading}
  style={{ padding: "8px 16px", cursor: isLoading ? "not-allowed" : "pointer" }}
>
  {isLoading ? "Loading..." : "Refresh"}
</button>

    </div>
  );
}