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
export function DeploymentCard({ serviceName, status, lastUpdated, onRefresh }: DeploymentCardProps & { onRefresh: () => void }) {
  
  const [isLoading, setIsLoading] = useState(false);

const handleRefresh = async () => {
  setIsLoading(true);
  await onRefresh();
  setIsLoading(false);
};


  // Step 4: Decide the color based on status
  const statusColor = 
    status === "running" ? "green" : 
    status === "failed" ? "red" : 
    "yellow";

  // Step 5: Return the HTML (called JSX)
  return (
    <div style={{ 
      border: "1px solid #e5e7eb", 
      padding: "16px", 
      marginBottom: "12px",
      borderRadius: "6px",
      backgroundColor: "white",
      boxShadow: "0 1px 2px rgba(0,0,0,0.05)"
    }}>

      <h3>{serviceName}</h3>
      <p>
        Status: <span style={{ 
          color: statusColor === "green" ? "#065f46" : statusColor === "red" ? "#7f1d1d" : "#78350f",
          backgroundColor: statusColor === "green" ? "#d1fae5" : statusColor === "red" ? "#fee2e2" : "#fef3c7",
          padding: "4px 8px",
          borderRadius: "4px",
          fontSize: "12px",
          fontWeight: "500"
        }}>{status}</span>

      </p>
      <p>Last updated: {lastUpdated}</p>
        <button 
          onClick={handleRefresh}
          disabled={isLoading}
          style={{ 
            backgroundColor: isLoading ? "#e5e7eb" : "#f3f4f6",
            color: "#1f2937",
            border: "1px solid #d1d5db",
            borderRadius: "4px",
            padding: "8px 12px",
            fontSize: "14px",
            fontWeight: "500",
            cursor: isLoading ? "not-allowed" : "pointer",
            transition: "background-color 0.2s ease",
            marginTop: "12px"
          }}
        >
          {isLoading ? "Loading..." : "Refresh"}
        </button>


    </div>
  );

}