import { useState, useEffect } from "react";

const useQoute = () => {
  const [qoute, setQoute] = useState();

  useEffect(() => {
    fetchQoute();
  }, []);

  async function fetchQoute() {
    const data = await fetch("https://api.quotable.io/quotes/random");
    const QouteData = await data.json();
    console.log(QouteData[0].content);
    setQoute(QouteData[0].content);
  }
  return qoute;
};

export default useQoute;
