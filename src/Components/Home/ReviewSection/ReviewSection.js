import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import reviewimg1 from "../../images/istockphoto-146795152-612x612.jpg";
import reviewimg2 from "../../images/istockphoto-482907157-612x612.jpg";
import reviewimg3 from "../../images/istockphoto-495422285-612x612.jpg";
import ReviewCards from "../ReviewCards/ReviewCards";
const ReviewSection = () => {
  // const reviews = [
  //   {
  //     title: "Nash Patrik",
  //     status: "CEO, manpol",
  //     description:
  //       "Lorem ipsum dolor sit, officia ipsam odio vero, deserunt praesentium obcaecati eos magnam velit maiores numquam assumenda consectetur corrupti explicabo.",
  //     ratingPoint: "5",
  //     image: reviewimg1,
  //   },
  //   {
  //     title: "Mirim Barron",
  //     status: "CEO, manpol",
  //     description:
  //       "Lorem ipsum dolor sit, officia ipsam odio vero, deserunt praesentium obcaecati eos magnam velit maiores numquam assumenda consectetur corrupti explicabo.",
  //     ratingPoint: "5",
  //     image: reviewimg2,
  //   },
  //   {
  //     title: "Bari Malon",
  //     status: "CEO, manpol",
  //     description:
  //       "Lorem ipsum dolor sit,officia ipsam odio vero, deserunt praesentium obcaecati eos magnam velit maiores numquam assumenda consectetur corrupti explicabo.",
  //     ratingPoint: "5",
  //     image: reviewimg3,
  //   },
    
  // ];
  const [loggedinUser,setLoggedinUser] = useContext(UserContext);
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
      fetch("https://hairsalon-server.onrender.com/getReviews")
      .then(res=>res.json())
      .then(result=>setReviews(result))
    },[])
    console.log(loggedinUser.email)
  return (
    <div className="bg-color container-padding">
      <div className="container">
        <h1 className="text-center my-5 title-color">Testimonials </h1>
        <div className="row">
          {reviews.map((review) => (
            <ReviewCards review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
