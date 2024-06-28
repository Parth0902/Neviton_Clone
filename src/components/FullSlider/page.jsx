import React, { useEffect,useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import './style.css'; // Make sure your styles are set as described
import { MoveRight,MoveLeft } from 'lucide-react';

export default function FullSlider({ data }) {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  // Reinitialize the carousel when images have loaded and data changes
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi, data]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla flex flex-col gap-[60px]" >
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {data.map((item, index) => (
            <div className="embla__slide flex justify-center" key={index}>
              <Image
                src={item.src}
                width={item.width*.5}
                height={item.height*.3}
                alt=""
                className='rounded-2xl'
              />
            </div>
          ))}
        </div>
      </div>
      <div className='w-full flex justify-between px-[150px]'>
        <MoveLeft size={48} color="#060505" onClick={scrollPrev} className='cursor-pointer'/>
        <MoveRight size={48} color="#060505" onClick={scrollNext} className='cursor-pointer'/>
      </div>
    </div>
  );
}
