import { ReactNode } from 'react';
import { Swiper, SwiperProps } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';

interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
}

export default function Slider({ children, settings }: SliderProps) {
  return (
    <Swiper modules={[Pagination, A11y, Autoplay]} {...settings}>
      {children}
    </Swiper>
  );
}
