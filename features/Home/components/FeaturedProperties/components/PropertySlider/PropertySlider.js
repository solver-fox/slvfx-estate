"use client"
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination, A11y } from "swiper";
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import PropertyCard from "@/features/common/modules/PropertyCard";
import { useIsDesktop } from "@/features/common/Hooks/useIsDesktop";

const PropertySlider= ({featuredProperties}) => {
    const { isDesktop } = useIsDesktop();
    return ( 
    <Swiper 
    slidesPerView={isDesktop ? 2 : 1} 
    spaceBetween={10} 
    loop={true} 
    autoplay={{delay:2000   , disableOnInteraction:true}}
    pagination={{dynamicBullets: true}}
    modules={[Autoplay, Pagination,A11y]}
    >

{featuredProperties.map((property) => (
<SwiperSlide key={property.id}>
    <PropertyCard {...property}/>
</SwiperSlide>
))}
    </Swiper> 

     );
};

export default PropertySlider;