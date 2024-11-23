interface Settings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  nextArrow: JSX.Element;
  prevArrow: JSX.Element;
}

export const settings: Settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <></>,
  prevArrow: <></>,
};
