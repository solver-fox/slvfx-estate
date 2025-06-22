import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Stack,
  Alert,
  AlertIcon,
  FormErrorMessage,
} from "@chakra-ui/react";
import DefaultLayout from "@/features/Layouts/DefaultLayout/DefaultLayout";

const Checkout = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCvv] = useState("");
  const [formErrors, setFormErrors] = useState({
    cardHolderName: false,
    cardNumber: false,
    expiration: false,
    cvv: false,
  });
  const handleProceed = () => {
    const errors = {};

    if (cardHolderName.trim() === "") {
      errors.cardHolderName = true;
    }
    if (
      cardNumber.trim() === "" ||
      !/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(cardNumber)
    ) {
      errors.cardNumber = true;
    }
    if (expiration.trim() === "") {
      errors.expiration = true;
    }
    if (cvv.trim() === "") {
      errors.cvv = true;
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      if (/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(cardNumber)) {
        setShowAlert(true);
      } else {
        alert("TRANSACTION FAILED!!!");
      }
    }
  };

  const formatCardNumber = (value) => {
    let formattedValue = value.replace(/\s/g, "");
    formattedValue = formattedValue.replace(/(\d{4})/g, "$1 ").trim();
    formattedValue = formattedValue.slice(0, 19);
    setCardNumber(formattedValue);
  };

  const formatExpiration = (value) => {
    let formattedValue = value.replace("/", "");
    formattedValue = formattedValue.replace(/(\d{2})/g, "$1/").trim();
    formattedValue = formattedValue.slice(0, 5);
    setExpiration(formattedValue);
  };

  return (
    <DefaultLayout>
      <Flex
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        position="relative"
      >
        <Box p={4}>
          {showAlert && (
            <Alert
              status="success"
              width="50%"
              textAlign="center"
              position="absolute"
              top={0}
            >
              <AlertIcon />
              SUCCESS!!! CONGRATULATIONS YOU HAVE PURCHASED YOUR PROPERTY
            </Alert>
          )}
          <Grid templateColumns="1fr" gap={6} maxWidth="container.sm" mx="auto">
            <GridItem>
              <Flex direction="column" align="center" mb={4}>
                <Box
                  as="h3"
                  fontSize="2xl"
                  fontWeight="bold"
                  mb={2}
                  color="black"
                >
                  SETTINGS
                </Box>
                <Box as="h6" fontSize="md" fontWeight="bold" color="black">
                  PAYMENTS
                </Box>
              </Flex>
              <form>
                <Stack spacing={4} mb={4}>
                  <FormControl>
                    <FormLabel fontWeight="bold" color="black">
                      SAVED CARDS:
                    </FormLabel>
                    <Flex align="center">
                      <Box
                        as="img"
                        src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                        alt="Mastercard"
                      />
                      <Input
                        type="text"
                        value="**** **** **** 3193"
                        isReadOnly
                      />
                      <Box as="a" color="blue.500" ml={2}></Box>
                    </Flex>
                  </FormControl>
                  <FormControl>
                    <Flex align="center">
                      <Box
                        as="img"
                        src="https://img.icons8.com/color/48/000000/visa.png"
                        alt="Visa"
                      />
                      <Input
                        type="text"
                        value="**** **** **** 4296"
                        isReadOnly
                      />
                      <Box as="a" color="blue.500" ml={2}></Box>
                    </Flex>
                  </FormControl>
                </Stack>
                <Stack spacing={4}>
                  <FormControl isInvalid={formErrors.cardHolderName}>
                    <FormLabel fontWeight="bold" color="black">
                      ADD NEW CARD:
                    </FormLabel>
                    <Input
                      type="text"
                      placeholder="CARD HOLDER'S NAME"
                      value={cardHolderName}
                      onChange={(e) => setCardHolderName(e.target.value)}
                      required
                    />
                    {formErrors.cardHolderName && (
                      <FormErrorMessage>
                        This field is required
                      </FormErrorMessage>
                    )}
                  </FormControl>
                  <Grid templateColumns="1fr 1fr 1fr" columnGap={4}>
                    <FormControl isInvalid={formErrors.cardNumber}>
                      <FormLabel fontWeight="bold" color="black">
                        CARD NUMBER
                      </FormLabel>
                      <Input
                        type="text"
                        placeholder="1234 5678 1234 5678"
                        value={cardNumber}
                        onChange={(e) => formatCardNumber(e.target.value)}
                        required
                      />
                      {formErrors.cardNumber && (
                        <FormErrorMessage>
                          This field is required
                        </FormErrorMessage>
                      )}
                    </FormControl>
                    <FormControl isInvalid={formErrors.expiration}>
                      <FormLabel fontWeight="bold" color="black">
                        EXPIRE
                      </FormLabel>
                      <Input
                        type="text"
                        placeholder="MM/YYYY"
                        value={expiration}
                        onChange={(e) => formatExpiration(e.target.value)}
                        required
                      />
                      {formErrors.expiration && (
                        <FormErrorMessage>
                          This field is required
                        </FormErrorMessage>
                      )}
                    </FormControl>
                    <FormControl isInvalid={formErrors.cvv}>
                      <FormLabel fontWeight="bold" color="black">
                        CVV
                      </FormLabel>
                      <Input
                        type="password"
                        placeholder="CVV"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value.slice(0, 3))} // Limit CVV length to 3 digits
                        required
                      />
                      {formErrors.cvv && (
                        <FormErrorMessage>
                          This field is required
                        </FormErrorMessage>
                      )}
                    </FormControl>
                  </Grid>
                </Stack>
                <Flex justifyContent="center">
                  <Button
                    colorScheme="green"
                    size="lg"
                    mt={4}
                    isFullWidth
                    onClick={handleProceed}
                  >
                    PROCEED
                  </Button>
                </Flex>
              </form>
            </GridItem>
          </Grid>
        </Box>
      </Flex>
    </DefaultLayout>
  );
};

export default Checkout;
