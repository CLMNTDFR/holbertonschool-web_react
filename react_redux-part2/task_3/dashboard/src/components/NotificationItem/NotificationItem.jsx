import { memo } from 'react';
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  default: {
    color: "blue",
    "@media (max-width: 900px)": {
      width: "100%",
      borderBottom: "1px solid black",
      fontSize: "20px",
      padding: "10px 8px",
      listStyle: "none",
    },
  },
  urgent: {
    color: "red",
    "@media (max-width: 900px)": {
      width: "100%",
      borderBottom: "1px solid black",
      fontSize: "20px",
      padding: "10px 8px",
      listStyle: "none",
    },
  },
});

const NotificationItem = memo(function NotificationItem({ 
  type,
  value,
  markAsRead,
  id
}) {

  // Keep styling deterministic with a single type switch.
  const itemStyle = type === "urgent" ? styles.urgent : styles.default;

  return (
    <li
      className={css(itemStyle)}
      data-notification-type={type}
      // The parent decides how to mutate state on read.
      onClick={() => markAsRead(id)}
    >
      {value}
    </li>
  );
});

export default NotificationItem;
