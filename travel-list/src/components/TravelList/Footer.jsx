import React from "react";

const Footer = ({itemeCount , items}) => {
  const checkedItems = items.reduce((acc , current) => {
    return acc + (current.complete ? 1 : 0)
  }, 0)
  const percentage = itemeCount > 0 ? Math.floor((checkedItems / itemeCount)  * 100) : 0;
  return (
    <footer>
      <p>💼 You have {itemeCount} items on your list, and you already packed {checkedItems} ({percentage}%)</p>
    </footer>
  );
};

export default Footer;
