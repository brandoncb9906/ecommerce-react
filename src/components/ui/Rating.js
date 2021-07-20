import React from "react";

export const Raiting = (props) => {
  const { raiting, numReviews } = props;

  return (
    <div className="raiting">
      <span>
        <i
          className={
            raiting >= 1
              ? "fa fa-star"
              : raiting >= 0.5
              ? "fa fa-star-half-o"
              : "fa fa-star-o"
          }
        />
      </span>
      <span>
        <i
          className={
            raiting >= 2
              ? "fa fa-star"
              : raiting >= 1.5
              ? "fa fa-star-half-o"
              : "fa fa-star-o"
          }
        />
      </span>
      <span>
        <i
          className={
            raiting >= 3
              ? "fa fa-star"
              : raiting >= 2.5
              ? "fa fa-star-half-o"
              : "fa fa-star-o"
          }
        />
      </span>
      <span>
        <i
          className={
            raiting >= 4
              ? "fa fa-star"
              : raiting >= 3.5
              ? "fa fa-star-half-o"
              : "fa fa-star-o"
          }
        />
      </span>
      <span>
        <i
          className={
            raiting >= 5
              ? "fa fa-star"
              : raiting >= 4.5
              ? "fa fa-star-half-o"
              : "fa fa-star-o"
          }
        />
      </span>
      <span>{numReviews + " reviews"}</span>
    </div>
  );
};
