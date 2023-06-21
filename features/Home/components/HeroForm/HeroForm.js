import { Box, FormControl, Text, Input, Flex, Checkbox, Button } from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import jsPDF from "jspdf";
const HeroForm= () => {

    const {
        register, 
        handleSubmit,
    formState:{errors}
} = useForm()
const onSubmit = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "https://www.ialawfirm.com/docs/ARAG_Guidebook_Buying_A_Home.pdf";
    downloadLink.download = "guide.pdf";
    downloadLink.click();
  };
  


  /*const generatePDF = (data) => {
    
    const { name, email, phone } = data;
    const pdf = new jsPDF();
    pdf.text(`Name: ${name}`, 10, 10);
    pdf.text(`Email: ${email}`, 10, 20);
    pdf.text(`Phone: ${phone}`, 10, 30);
    return pdf.output("dataurlstring");
  };*/


    return ( 
       <Box 
        width="100%"
        padding="2rem"
        borderRadius="sm"
        backgroundColor="white"
        color="gray.700"
        >
            <Text
            fontSize="xl"
            fontWeight="bold">
                Free PDF Guide
            </Text>

            <Text fontSize="lg">Complete the form below to download your guide.</Text>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl>
                    <Input 
                    marginTop='1.3rem' 
                    id="name" 
                    type='text' 
                    placeholder="NAME" 
                    {...register('name',{required:true})}
                    />
                    {errors.name && (
                    <Text fontSize="xs" color="red.400">
                        {errors.name.type}
                        </Text>
                        )}

                        <Flex 
                        gap={{base:"0", sm: "1rem"}}
                        flexDirection={{base:"column",sm:"row"}}
                        >

                        
                    <Input 
                    marginTop='1.3rem' 
                    id="email" 
                    type='email' 
                    placeholder="E-MAIL" 
                    {...register('email',{required:true})}
                    />
                    {errors.email && (
                    <Text fontSize="xs" color="red.400">
                        {errors.email.type}
                        </Text>
                        )}

                    <Input 
                    marginTop='1.3rem' 
                    id="phone" 
                    type='text' 
                    placeholder="PHONE" 
                    {...register('phone',{required:true})}
                    />
                    {errors.phone && (
                    <Text fontSize="xs" color="red.400">
                        {errors.phone.type}
                        </Text>
                        )}

                    </Flex>
                    <Checkbox 
                    marginTop="1.3rem" 
                    id="gdpr" 
                    type="checkbox" 
                    placeholder="GDPR" 
                    {...register('gdpr',{required:true})}
                    >I consent to having this website store my submitted info
                    </Checkbox>
                    {errors.gdpr && (
                        <Text fontSize="xs" color="red.400">
                        {errors.gdpr.type}
                        </Text>
                    )}
                </FormControl>
                        <Button 
                        type="submit"
                        colorScheme="blue"
                        width="100%"
                        fontSize="xl"
                        padding="2rem"
                        marginTop="2rem"
                        >
                            Download Now
                        </Button>
            </form>
        </Box>
     );
};

export default HeroForm;