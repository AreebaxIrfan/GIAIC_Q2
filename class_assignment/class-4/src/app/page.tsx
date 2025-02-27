import Image from "next/image";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Card name="Areeba" roll={234} day="wednesday" address="Karachi" email="xyz@email.com" time={"2pm to 3pm"} />
      <Card name="Areej" roll={234} day="Friday" address="Sindh" email="ijk@email.com" time={"7pm to 9pm"} />
      <Card name="Aroob" roll={234} day="Sunday" address="Lahore" email="pqy@email.com" time={"2pm to 3pm"} />
      <Card name="Afaq" roll={234} day="Saturday" address="Karachi" email="abc@email.com" time={"7pm to 9pm"} />

      <Footer />
    </>
  );
}
