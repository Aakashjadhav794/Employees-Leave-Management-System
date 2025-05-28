import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Profile = () => {
  const navigate = useNavigate();

  // Get employee data from localStorage or fallback
  const employee = JSON.parse(localStorage.getItem("employee")) || {};

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("employee");
    navigate("/login");
  };

  return (
    <>
      <style>{`
        .profile {
          padding: 40px 60px;
          font-family: 'Segoe UI', sans-serif;
          background: #f1f5f9;
          min-height: 100vh;
        }
        .profile h1 {
          font-size: 2.2rem;
          margin-bottom: 30px;
          color: #1e293b;
        }
        .profile-card {
          background: white;
          display: flex;
          align-items: flex-start;
          gap: 30px;
          padding: 30px;
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
          margin-bottom: 40px;
        }
        .profile-card img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #e2e8f0;
        }
        .profile-card .info {
          flex: 1;
        }
        .profile-card .info h2 {
          margin: 0;
          font-size: 1.6rem;
          color: #0f172a;
        }
        .profile-card .info p {
          margin: 6px 0;
          color: #475569;
        }
        .stats {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
        }
        .stat {
          background: white;
          padding: 24px;
          border-radius: 14px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
          flex: 1 1 200px;
          text-align: center;
        }
        .stat h3 {
          font-size: 1rem;
          color: #64748b;
          margin-bottom: 10px;
        }
        .stat p {
          font-size: 2rem;
          font-weight: 700;
          color: #1e293b;
        }
        .logout-button-container {
          text-align: center;
          margin-top: 30px;
        }
      `}</style>

      <div className="profile">
        <h1>Employee Profile</h1>

        <div className="profile-card">
          {employee.empimage ? (
                    <img
                      src={`http://localhost:5000/${employee.empimage}`}
                      alt={employee.fullName}
                      style={{ width: 160, height: 200, borderRadius: "50%" }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/40";
                      }}
                    />
                  ) : (
                    "N/A"
                  )}
          <div className="info">
            <h2>Name: {employee.fullName || "John Doe"}</h2>
            <p><strong>Department:</strong> {employee.department || "Engineering"}</p>
            <p><strong>Designation: </strong>{employee.designation || "Frontend Developer"}</p>
            <p><strong>Email:</strong> {employee.email || "john.doe@example.com"}</p>
            <p><strong>Phone:</strong> {employee.phone || "N/A"}</p>
            <p><strong>Address:</strong> {employee.address || "Bangalore, India"}</p>
            <p><strong>Join Date:</strong> {new Date(employee.joiningDate || "2022-04-10").toLocaleDateString()}</p>
          </div>
        </div>

        <div className="stats">
          <div className="stat">
            <h3>Total Leaves</h3>
            <p>{employee.totalLeaves ?? 24}</p>
          </div>
          <div className="stat">
            <h3>Leaves Taken</h3>
            <p>{employee.leavesTaken ?? 8}</p>
          </div>
          <div className="stat">
            <h3>Active Projects</h3>
            <p>{employee.activeProjects ?? 3}</p>
          </div>
          <div className="stat">
            <h3>Leave Balance</h3>
            <p>
              {(employee.totalLeaves ?? 24) - (employee.leavesTaken ?? 8)}
            </p>
          </div>
        </div>

        <div className="logout-button-container">
          <Button variant="contained" color="error" onClick={handleLogout} >
            Logout
          </Button>
        </div>
      </div>
    </>
  );
};

export default Profile;
