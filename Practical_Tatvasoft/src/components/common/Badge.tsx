import React from "react";

interface BadgeProps {
  status: string;
}

const Badge = ({ status }: BadgeProps) => {
  return (
    <div
      className="badge badge-success"
      style={{ backgroundColor: `${status === "active" ? "green" : "red"}` }}
    >
      {status === "active" ? "Active" : "Inactive"}
    </div>
  );
};

export default Badge;
