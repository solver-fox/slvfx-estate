import DefaultLayout from '@/features/Layouts/DefaultLayout/DefaultLayout';
import { getProperty } from '@/features/Property/api/getProperty';
import PropertyMatterPortEmbed from '@/features/Property/components/PropertyMatterPortEmbed/PropertyMatterPortEmbed';
import PropertyStats from '@/features/Property/components/PropertyStats/PropertyStats';
import PropertyThumbnailSlider from '@/features/Property/components/PropertyThumbnailSlider/PropertyThumbnailSlider';
import PropertyYoutubeEmbed from '@/features/Property/components/PropertyYoutubeEmbed/PropertyYoutubeEmbed';
import { usePropertyFormat } from '@/features/common/Hooks/usePropertyFormat';
import TextContentBox from '@/features/common/modules/TextContentBox/TextContentBox';
import { Badge, Box, Button, Flex, Grid, GridItem, SimpleGrid, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { TbMapPin } from 'react-icons/tb';

const PropertySingle = ({ property }) => {
  const router = useRouter();
  
  const {
    address,
    coverPhoto,
    propertyType,
    price,
    title,
    rooms,
    baths,
    purpose,
    sqSize,
    externalID,
    photos,
    description,
    coverVideo,
    panorama,
    amenities,
    furnished,
  } = usePropertyFormat(property);

  const handleBuyClick = () => {
    const { price } = property;
    router.push('/checkout');
  };

  return (
    <DefaultLayout>
      <Box backgroundColor="#f7f8f9" paddingY="3rem">
        <Grid templateColumns="repeat(6,1fr)" gap="5" maxWidth="1280px" margin="0 auto">
          <GridItem colSpan="6">
            <Text
              fontSize="3xl"
              fontWeight="medium"
              color="blue.800"
              textAlign={{ base: "center", sm: "left" }}
            >
              {propertyType} {title}
            </Text>
            <Flex
              fontSize="xl"
              color="blue.600"
              textAlign="center"
              alignItems="center"
              flexDirection={{ base: "column", sm: "row" }}
              gap="0.5rem"
              marginY={{ base: "1rem", sm: "0" }}
            >
              <TbMapPin />
              <Text fontWeight="light">
                {address} - ID:{externalID}
              </Text>
              <Badge colorScheme="green">{purpose}</Badge>
            </Flex>
          </GridItem>
          <GridItem colSpan={{ base: 6, sm: 3 }}>
            <PropertyThumbnailSlider photos={photos} />
          </GridItem>
          <GridItem colSpan={{ base: 6, sm: 3 }}>
            <PropertyStats rooms={rooms} baths={baths} price={price} sqSize={sqSize} />
            <TextContentBox title="Description">
              <Text fontWeight="light" color="gray.600" fontSize="1rem" noOfLines="4">
                {description}
              </Text>
            </TextContentBox>
            <TextContentBox title="Amenities">
              <SimpleGrid columns={{ base: "1", sm: "2" }} fontWeight="light" color="gray.600" fontSize="1rem">
                {amenities.length ? (
                  amenities.map((item) => <Text key={item}>{item}</Text>)
                ) : (
                  <Text>Please contact us for more info</Text>
                )}
              </SimpleGrid>
            </TextContentBox>
            <Flex justifyContent="center">
            <Button width="50%" colorScheme="blue" onClick={handleBuyClick} mt="2" _hover={{ bg: "green.500", color: "white" }}
            transition="background-color 0.3s">
              BUY NOW!
            </Button>
            </Flex>
          </GridItem>
          <GridItem colSpan={{ base: 6, sm: 3 }}>
            <TextContentBox title="Video Walkthrough">
              <PropertyYoutubeEmbed coverVideo={coverVideo} />
            </TextContentBox>
          </GridItem>
          <GridItem colSpan={{ base: 6, sm: 3 }}>
            <TextContentBox title="3D Virtual Walkthrough ">
              <PropertyMatterPortEmbed panorama={panorama} />
            </TextContentBox>
          </GridItem>
        </Grid>
      </Box>
    </DefaultLayout>
  );
};

export default PropertySingle;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const property = await getProperty(id);
  return {
    props: { property },
  };
}
