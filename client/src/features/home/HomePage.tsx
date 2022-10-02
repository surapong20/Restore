import React, { useEffect } from "react";
import Slider from "react-slick";
import { useAppDispatch } from "../../app/store/configureStore";
import { setscreen } from "./homeSlice";

export default function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setscreen());

    return () => {
      dispatch(setscreen());
    };
  }, [dispatch]);

  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        {[1, 2, 3, 4, 5].map((item) => (
          <img src="https://picsum.photos/200/300" key={item} height="500px" />
        ))}
      </Slider>
    </div>
  );
}
