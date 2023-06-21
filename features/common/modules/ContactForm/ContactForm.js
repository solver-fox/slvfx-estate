import { Box, Button, Checkbox, FormControl, Input, Text, Textarea, useToast } from "@chakra-ui/react";
import { Form, useForm } from "react-hook-form";
import { useState } from "react";
const ContactForm= () => {
    const {
        register, 
        handleSubmit,
    formState:{errors}
} = useForm()

const toast = useToast();
const [name, setName] = useState("");

const onSubmit = (data) => {
    console.log(data);
    setName(data.name);
    showToast();
  };

  const showToast = () => {
    toast({
      title: `Dear ${name}`,
      description: "Your message has been received. We will reply to you shortly.",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  };


    return ( 
       <Box
       width="100%"
       borderRadius="sm"
       backgroundColor="white"
       color="gray.700"
       >
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
                <Input 
                marginTop="1.3"
                id="name"
                type="text"
                placeholder="NAME"
                {...register("name",{required: true})}
                />

<Input 
                marginTop="1.3"
                id="email"
                type="text"
                placeholder="EMAIL"
                {...register("email",{required: true})}
                />

<Input 
                marginTop="1.3"
                id="phone"
                type="text"
                placeholder="PHONE"
                {...register("phone",{required: true})}
                />

        <Textarea 
        marginTop="1.3rem"
        id="message"
        type="textarea"
        placeholder="MESSAGE"{...register("message", {required:true})}
        />
        <Checkbox 
        marginTop="1.3rem"
        id="gdpr"
        type="checkbox"
        placeholder="GDPR"
        {...register("gdpr", {required:true})}

    
        >
            <Text
            fontSize="0.8rem"
            color="gray.500"
            >
            I consent to having this website store my details for further communication
            </Text>
        </Checkbox>
            </FormControl>

            <Button 
            type="submit" 
            colorScheme="blue" 
            fontSize="xl"
            padding="2rem"
            marginTop="2rem"
            >SEND MESSAGE</Button>
        </form>
       </Box>
     );
};

export default ContactForm;