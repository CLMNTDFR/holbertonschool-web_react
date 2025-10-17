import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "./utils";

/**
 * Composant Notifications
 * Affiche une liste de notifications avec bouton de fermeture
 */
const Notifications = () => {
  return (
    <div className="Notifications">
      <button
        style={{
          backgroundColor: "transparent",
          border: "none",
          fontSize: "1rem",
          cursor: "pointer",
          position: "absolute",
          right: 20,
          top: 25,
        }}
        aria-label="Close"
        onClick={() => console.log("Close button has been clicked")}
      >
        X
      </button>

      <p>Here is the list of notifications</p>

      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
};

export default Notifications;
