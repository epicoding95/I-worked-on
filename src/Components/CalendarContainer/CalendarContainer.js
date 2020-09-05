import React from "react";
import MyCalendar from "../Calendar/Calendar";
import InputForm from "../InputForm/InputForm";
import firebase from "../../firebase";
const CalendarContainer = () => {
  const [fireStoreData, setFireStoreData] = React.useState([]);
  const [more, setMore] = React.useState(0);
  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("calendar-days").get();
      const cleanData = data.docs.map(doc => doc.data());
      //all data from calendar-days collection
      setFireStoreData(cleanData);
    };
    fetchData();
  }, [more]);
  console.log("re-render");
  return (
    <>
      <InputForm setMore={setMore} />
      <MyCalendar fireStoreData={fireStoreData} />
    </>
  );
};

export default CalendarContainer;
