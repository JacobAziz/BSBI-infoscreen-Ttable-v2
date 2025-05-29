'use client';

import { Box, Image, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface BSBILogoProps {
  isLightBackground?: boolean;
}

export const BSBILogo = ({ isLightBackground = false }: BSBILogoProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Flex 
      direction="column"
      justifyContent="center" 
      alignItems="center"
      height={["160px", "220px", "260px"]}
      py={0}
      position="relative"
      zIndex={2}
      width="100%"
    >
      <Box 
        position="relative" 
        display="flex" 
        justifyContent="center" 
        alignItems="center"
        minHeight={["130px", "180px", "220px"]}
        width="100%"
      >
        {imageError ? (
          <Text 
            fontSize={["36px", "48px", "64px"]} 
            fontWeight="bold" 
            color={isLightBackground ? "black" : "white"}
            textAlign="center"
          >
            BSBI
          </Text>
        ) : (
          <Image 
            src="/images/BSBI-Logo.png" 
            alt="BSBI Logo" 
            height={["170px", "230px", "300px"]} 
            width="auto"
            objectFit="contain"
            filter={isLightBackground ? "none" : "brightness(0) invert(1)"}
            onError={() => setImageError(true)}
            display="block"
          />
        )}
      </Box>
    </Flex>
  );
}; 