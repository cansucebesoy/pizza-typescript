import React, { useState } from "react";
import Header from "../../components/Header/Header";
import OrderInfo from "../../components/OrderInfo/OrderInfo";
import SizeSelection from "../../components/SizeSelection/SizeSelection";
import Toppings from "../../components/Toppings/Toppings";
import OrderNote from "../../components/OrderNote/OrderNote";
import Checkout from "../../components/Checkout/Checkout";
import CustomerName from "../../components/CustomerName/CustomerName";
import Footer from "../../components/Footer/Footer";

const Order = () => {
  const [size, setSize] = useState("");
  const [dough, setDough] = useState("");
  const [toppings, setToppings] = useState([]);
  const [name, setName] = useState("");
  const [note, setNote] = useState("");

  const orderSummary = {
    size,
    dough,
    toppings,
    name,
    note,
    toppingsCost: toppings.length * 5,
    pizzaCost: 85.5,
  };

  return (
    <div>
      <Header />
      <OrderInfo />
      <SizeSelection setSize={setSize} setDough={setDough} dough={dough} />
      <Toppings toppings={toppings} setToppings={setToppings} />
      <CustomerName name={name} setName={setName} />
      <OrderNote setNote={setNote} />
      <Checkout orderSummary={orderSummary} />
      <Footer />
    </div>
  );
};
export default Order;
