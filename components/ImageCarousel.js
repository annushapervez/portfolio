import React, { useState } from 'react';
import Image from 'next/image';
import { Box, IconButton, HStack } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

// ImageCarousel Component
const ImageCarousel = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isHoveringEnlarged, setIsHoveringEnlarged] = useState(false);

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === null ? 0 : (prevIndex + 1) % images.length
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === null ? images.length - 1 : (prevIndex === 0 ? images.length - 1 : prevIndex - 1)
    );
  };

  return (
    <Box position="relative" width="100%">
      {/* Thumbnail Images Row */}
      <Box
        display="flex"
        overflowX="auto"
        whiteSpace="nowrap"
        width="100%"
        onMouseLeave={() => !isHoveringEnlarged && setSelectedImageIndex(null)} // Hide enlarged image on mouse leave
      >
        {images.map((image, index) => (
          <Box
          key={index}
          position={index === 0 ? 'relative' : 'initial'} // Applies relative positioning only to the first image
          top={index === 0 ? '17px' : '0'} // Moves the first image down
          marginRight="10px" // Adjust spacing between images
          onMouseEnter={() => setSelectedImageIndex(index)} // Set selected image on hover
          cursor="pointer"
          transition="transform 0.2s" // Smooth transition for scale
          _hover={{ transform: 'scale(1.1)', zIndex: 10 }} // Scale up on hover and bring to front
          width="200px" // Fixed width to prevent layout shift
          height="200px" // Fixed height to prevent layout shift
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={200} // Adjust width as needed
              height={200} // Adjust height as needed
              style={{ objectFit: 'cover' }}
            />
          </Box>
        ))}
      </Box>

      {/* Enlarged Image Display */}
      {selectedImageIndex !== null && (
        <Box
          position="fixed"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          width="80vw" // Adjust width of the overlay area to be smaller
          height="80vh" // Adjust height of the overlay area to be smaller
          display="flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor="rgba(0, 0, 0, 0.8)" // Semi-transparent background
          zIndex={1000}
          borderRadius="8px"
          onMouseEnter={() => setIsHoveringEnlarged(true)} // Set hovering state on enter
          onMouseLeave={() => {
            setIsHoveringEnlarged(false);
            setSelectedImageIndex(null); // Close on leaving enlarged image
          }}
        >
          <Box
            position="relative"
            width="90%" // Adjust width of the enlarged image within the overlay
            height="90%" // Adjust height of the enlarged image within the overlay
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src={images[selectedImageIndex].src}
              alt={images[selectedImageIndex].alt}
              layout="fill"
              objectFit="contain" // Ensures the image fits within the container
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
  );
};

export default ImageCarousel;
