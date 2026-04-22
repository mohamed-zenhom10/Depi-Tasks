import React, { useState } from 'react'
import Header from './Header'
import Input from './Input'
import List from './List'
import Footer from './Footer'

const TravelList = () => {

  const [data , setData] = useState({
    count: 1,
    input: "",
  })

  const [items , setItems] = useState([]);

  const [itemeCount , setItemsCount] = useState(0);

  const addNewItem = () => {

    if(data.input == "") {
      alert("Please fill the field");
      return;
    }
    const newItem = {
      id: Date.now(),
      count: data.count,
      text: data.input,
      complete: false,
    }

    setItems([...items , newItem]);
    setItemsCount(itemeCount + 1);

    setData({
      count:1,
      input: ""
    });
  }

  const deleteItem = (id) => {
    setItems(items.filter((item) => {
      return item.id != id
    }));
    setItemsCount(itemeCount - 1);
  }

  const updateItemStatus = (id) => {
    setItems(items.map((item) => {
      return item.id === id ? {...item , complete : !item.complete} : item
    }));
  }

  const deleteAll = () => {
    const confrimMsg = confirm("Are You Sure !");
    if(confrimMsg) {
      setItems([]);
      setItemsCount(0);
    }
  }

  return (
    <>
      <Header />
      <Input data={data} setData={setData} addNewItem={addNewItem}/>
      <List items={items} deleteAll={deleteAll} deleteItem={deleteItem} updateItemStatus={updateItemStatus}/>
      <Footer itemeCount={itemeCount} items={items}/>
    </>
  )
}

export default TravelList
