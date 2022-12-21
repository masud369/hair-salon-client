import React from "react";
import bannerimg from "../../../images/bannerimg.png";
const Banner = () => {
    
  return (
    <div className="border-bottom" style={{backgroundColor:"#998623"}}>
      <div className="container text-color">
        <div className="row">
          <div className="col-md-8" style={{marginTop:'100px'}}>
            
            <h1 className="mt-5">
              WHEN YOU LOOK GOOD,
              <br />
              YOU FEEL GOOD.
            </h1>
            <h4 className="my-5">
              At our mens grooming salon we offer the very best in men's hair
              cuts delivered by expert mens hairdressers
            </h4>
          </div>
          <div className="col-md-4">
            <img src={bannerimg} style={{height:'80vh'}} className="img-fluied" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
