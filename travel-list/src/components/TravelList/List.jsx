import React from "react";

const List = ({ items , deleteAll , deleteItem , updateItemStatus}) => {
  return (
    <div className="list">
      <div className="list-items">
        {items.map((item, index) => (
          <div className="list-item" key={index}>
            <input type="checkbox" onClick={() => updateItemStatus(item.id)}/>
            <p className={`${item.complete ? "complete" : ""}`}>{item.count} | {item.text}</p>
            <button onClick={() => deleteItem(item.id)}>❌</button>
          </div>
        ))}
      </div>
      <div className="actions">
        <select>
          <option value="order">Sort By Input Order</option>
          <option value="desc">Sort By Description</option>
          <option value="status">Sort By Status</option>
        </select>
        <button onClick={deleteAll}>Clear List</button>
      </div>
    </div>
  );
};

export default List;
