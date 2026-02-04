
import { Star, StarHalf } from "lucide-react";
import React from "react";

const Rating = ({rating}) => {
    return(
            <div className="book__ratings">
      {
        new Array(Math.floor((rating))).fill(0).map((_, index) => <Star key={index} />)
       }  

         {
        // Number.isInteger(book.rating) ? '' : <FontAwesomeIcon icon="star-half-alt" />
        !Number.isInteger(rating) && <StarHalf />
       } 
 
    </div> 
    )

}
export default Rating;