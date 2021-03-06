import React from "react";
import { tickets } from "../dummyData.js";
import CategoriesContext from "../contexts/appContext";
import axios from "axios";
import { Link } from "react-router-dom";

import TicketCard from "../components/TicketCard";

const BASE_URL = "http://gir-mondaycrm.netlify.app//.netlify/functions/api/v1";
//process.env.REACT_APP_BASE_API;

const Dashboard = () => {
  const [tickets, setTickets] = React.useState(null);
  const { categories, setCategories } = React.useContext(CategoriesContext);

  React.useEffect(() => {
    async function fetchTickets() {
      const response = await axios.get(`${BASE_URL}/tickets`);
      const dataObject = response.data.data;
      const arrayOfKey = Object.keys(dataObject);
      const arrayOfData = Object.keys(dataObject).map((key) => dataObject[key]);

      const newTickets = arrayOfData.map((ticket, index) => {
        return {
          ...ticket,
          documentId: arrayOfKey[index],
        };
      });

      setTickets(newTickets);
    }
    fetchTickets();
  }, []);

  React.useEffect(() => {
    setCategories([...new Set(tickets?.map(({ category }) => category))]);
  }, [tickets]);

  const colors = ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5"];
  console.log(tickets);
  console.log(categories);
  return (
    <div className="dashboard">
      <h1>My Projects</h1>
      <div className="ticket-container">
        {tickets &&
          categories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 style={{ marginBottom: "5px", marginTop: "5px" }}>
                {uniqueCategory}
              </h3>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((ticketfiltered, ticketIndex) => (
                  <TicketCard
                    key={ticketfiltered.documentId}
                    color={colors[ticketIndex] || colors[0]}
                    ticket={ticketfiltered}
                  />
                ))}
            </div>
          ))}
        {!tickets && <h3>Loading...</h3>}
        {tickets && tickets?.length == 0 && (
          <h3>
            No ticket found, please{" "}
            <Link to="/ticket">
              <a>create new ticket</a>
            </Link>
          </h3>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
