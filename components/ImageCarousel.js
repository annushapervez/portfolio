import React, { useState } from 'react';
import Image from 'next/image';
import { Box, IconButton, HStack } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useBreakpointValue } from '@chakra-ui/react';

const ImageCarousel = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null); // Start with null
  const [isHoveringEnlarged, setIsHoveringEnlarged] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <Box position="relative" width="100%">
      {isMobile ? (
        <Box display="flex" justifyContent="center" alignItems="center" width="100%">
          <IconButton
            aria-label="Previous Image"
            icon={<ChevronLeftIcon />}
            onClick={prevImage}
            colorScheme="blue"
            size="sm"
          />
          <Box width="70vw" height="70vw" position="relative" mx="4">
            <Image
              src={images[selectedImageIndex]?.src || images[0].src} // Fallback to the first image if none is selected
              alt={images[selectedImageIndex]?.alt || images[0].alt} // Fallback to the first image if none is selected
              layout="fill"
              objectFit="contain"
            />
          </Box>
          <IconButton
            aria-label="Next Image"
            icon={<ChevronRightIcon />}
            onClick={nextImage}
            colorScheme="blue"
            size="sm"
          />
        </Box>
      ) : (
        <Box position="relative" width="100%">
          <Box
            display="flex"
            overflowX="auto"
            whiteSpace="nowrap"
            width="100%"
          >
            {images.map((image, index) => (
              <Box
                key={index}
                position={index === 0 ? 'relative' : 'initial'} // Applies relative positioning only to the first image
                top={index === 0 ? '17px' : '0'} // Moves the first image down               
                marginRight="10px" // Adjust spacing between images
                onMouseEnter={() => setSelectedImageIndex(index)} // Set selected image on hover
                onClick={() => setSelectedImageIndex(index)} // Open enlarged view on click
                cursor="pointer"
                transition="transform 0.2s"
                _hover={{ transform: 'scale(1.1)', zIndex: 10 }}
                width="200px"
                height="200px"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={200}
                  height={200}
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            ))}
          </Box>

          {selectedImageIndex !== null && (
            <Box
              position="fixed"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              width="80vw"
              height="80vh"
              display="flex"
              justifyContent="center"
              alignItems="center"
              backgroundColor="rgba(0, 0, 0, 0.8)"
              zIndex={1000}
              borderRadius="8px"
              onMouseEnter={() => setIsHoveringEnlarged(true)}
              onMouseLeave={() => {
                setIsHoveringEnlarged(false);
                setSelectedImageIndex(null); // Close on leaving enlarged image
              }}
            >
              <Box
                position="relative"
                width="90%"
                height="90%"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Image
                  src={images[selectedImageIndex].src}
                  alt={images[selectedImageIndex].alt}
                  layout="fill"
                  objectFit="contain"
                />
                <HStack position="absolute" top="50%" width="100%" justifyContent="space-between" zIndex={10}>
                  <IconButton
                    aria-label="Previous Image"
                    icon={<ChevronLeftIcon />}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent click from closing the enlarged view
                      prevImage();
                    }}
                    colorScheme="blue"
                  />
                  <IconButton
                    aria-label="Next Image"
                    icon={<ChevronRightIcon />}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent click from closing the enlarged view
                      nextImage();
                    }}
                    colorScheme="blue"
                  />
                </HStack>
              </Box>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default ImageCarousel;
