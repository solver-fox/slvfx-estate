import { getProperties } from "@/features/common/api/getProperties";
import FeaturedProperties from "@/features/Home/components/FeaturedProperties/FeaturedProperties";
import HeroBanner from "@/features/Home/components/HeroBanner/HeroBanner";
import MeetTheTeam from "@/features/Home/components/MeetTheTeam/MeetTheTeam";
import Partners from "@/features/Home/components/Partners/Partners";
import Testimonials from "@/features/Home/components/Testimonials/Testimonials";
import DefaultLayout from "@/features/Layouts/DefaultLayout/DefaultLayout";


export default function Home({featuredProperties}) { 
  return (
    <>
      <DefaultLayout>
        <HeroBanner/>
        <FeaturedProperties featuredProperties={featuredProperties} />
        <MeetTheTeam/>
        <Partners/>
        <Testimonials/>
        </DefaultLayout>
    </>
  );
}


export async function getStaticProps(){
  const properties = await getProperties(5)
  return {
    props: { featuredProperties: properties }
  };
}