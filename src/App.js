import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NoMatch from "./Components/NoMatch/NoMatch";
import Home from "./Components/Home/Home/Home";
import OurServices from "./Components/Home/OurServices/OurServices";
import Login from "./Components/Login/Login";
import { createContext, useState } from "react";
import PrivetRout from "./Components/PrivetRoute/PrivetRout";
import Book from "./Components/Book/Book";
import BookingList from "./Components/BookingList/BookingList";
import Review from "./Components/Review/Review";
import OrderList from "./Components/OrderList/OrderList";
import AddServices from "./Components/AddServices/AddServices";
import MakeAdmin from "./Components/MakeAdmin/MakeAdmin";

export const UserContext = createContext();
function App() {
  const [loggedinUser, setLoggedinUser] = useState({});
 
  return (
    <UserContext.Provider value={[loggedinUser, setLoggedinUser]}>
      <div className="">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<OurServices />} />
            <Route path="/dashboard/book" element={<PrivetRout/>}>
               <Route path="/dashboard/book" element={<Book />} />
            </Route>
            <Route path="/dashboard/bookingList" element={<PrivetRout/>}>
               <Route path="/dashboard/bookingList" element={<BookingList />} />
            </Route>
            <Route path="/dashboard/review" element={<PrivetRout/>}>
               <Route path="/dashboard/review" element={<Review />} />
            </Route>
            <Route path="/dashboard/orderList" element={<PrivetRout/>}>
               <Route path="/dashboard/orderList" element={<OrderList />} />
            </Route>
            <Route path="/dashboard/addServices" element={<PrivetRout/>}>
               <Route path="/dashboard/addServices" element={<AddServices />} />
            </Route>
            <Route path="/dashboard/makeAdmin" element={<PrivetRout/>}>
               <Route path="/dashboard/makeAdmin" element={<MakeAdmin />} />
            </Route>
            
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
