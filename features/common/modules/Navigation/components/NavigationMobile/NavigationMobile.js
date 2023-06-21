import { Box, Flex, IconButton, Menu, MenuItem, MenuButton, MenuList, Text } from "@chakra-ui/react";
import {HiHomeModern} from "react-icons/hi2";
import Link from "next/link";
import { NavigationLinks, navigationLinks } from "../../navigationConsts";
import { HamburgerIcon } from "@chakra-ui/icons"; 

const NavigationMobile = () => {
    return (
      <Box color="blue.600" padding="2rem" backgroundColor="white" display={{base:"block",md:"none"}}
      >
       
          <Flex alignItems="center" justifyContent="space-between">
            <Link href="/">
            <Box display="flex" gap="2" alignItems="center">
                <HiHomeModern size="30"/>
              <Text fontSize="2xl" fontWeight="black">
                 HOMYZ
              </Text>
              </Box>
            </Link>
            <Menu>
              <MenuButton as={IconButton} arial-label="Options" icon={<HamburgerIcon/>} variant="outline"/>
              <MenuList>
           {navigationLinks.map((item) => (
            <NavigationLink key={item.title} {...item}/>
           ))}
           </MenuList>
           </Menu>
          
          </Flex>
        </Box>
    );
  };
  
  export default NavigationMobile;


  const NavigationLink = ({title,link,icon}) => {
    return(
      <Link href={link}>
        <MenuItem alignItems="center" gap="0.5rem">
          {icon}
          {title}
        </MenuItem>
      </Link>
    );
  };