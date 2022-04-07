import React from "react";
import { Link } from "react-router-dom";
import AvatarDisplay from "./AvatarDisplay";
import StatusDisplay from "./StatusDisplay";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import DeleteBlock from "./DeleteBlock";

const TicketCard = ({ color, ticket }) => {
  return (
    <div className="ticket-card">
      <div
        className="ticket-color"
        style={{ backgroundColor: `${color}` }}
      ></div>
      <Link to={`/ticket/${ticket.documentId}`} className="link">
        <h4>{ticket.title}</h4>
        <AvatarDisplay avatar={ticket.avatar} />
        <StatusDisplay status={ticket.status} />
        <PriorityDisplay priority={ticket.priority} />
        <ProgressDisplay progress={ticket.process} />
      </Link>
      <DeleteBlock documentId={ticket.documentId} />
    </div>
  );
};

export default TicketCard;
