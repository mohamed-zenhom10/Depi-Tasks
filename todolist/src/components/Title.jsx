import React, { useEffect, useState } from "react";
import { MdOutlineCheckCircle } from "react-icons/md";

const Title = () => {
  const [dateSettings, setDateSettings] = useState({
    day: "",
    month: "",
    year: "",
  });

  useEffect(() => {
    const date = new Date();
    const getDate = async () => {
      try {
        setDateSettings({
          day: date.getDate(),
          month: date.getMonth() + 1,
          year: date.getFullYear(),
        });
      } catch (error) {
        console.log(error);
      }
    };
    getDate();
  }, []);
  return (
    <div className="title">
      <h1>
        <MdOutlineCheckCircle /> My Tasks
      </h1>
      <div className="date">
        {dateSettings.month}/{dateSettings.day}/{dateSettings.year}
      </div>
    </div>
  );
};

export default Title;
