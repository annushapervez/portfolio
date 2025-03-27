import React, { useState } from 'react';
import Image from 'next/image';
import { Box, IconButton, HStack } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useBreakpointValue } from '@chakra-ui/react';

const ImageCarousel = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null); // Set to null initially
  const [setIsHoveringEnlarged] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex !== null ? (prevIndex + 1) % images.length : 0
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex !== null ? (prevIndex === 0 ? images.length - 1 : prevIndex - 1) : images.length - 1
    );
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
              src={images[selectedImageIndex]?.src || images[0].src} 
              alt={images[selectedImageIndex]?.alt || images[0].alt}
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
          <Box display="flex" overflowX="auto" whiteSpace="nowrap" width="100%">
            {images.map((image, index) => (
              <Box
                key={index}
                position={index === 0 ? 'relative' : 'initial'}
                top={index === 0 ? '17px' : '0'}
                marginRight="10px"
                onMouseEnter={() => setSelectedImageIndex(index)}
                onClick={() => setSelectedImageIndex(index)}
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
    width="60vw"
    height="60vh"
    display="flex"
    justifyContent="center"
    alignItems="center"
    backgroundColor="rgba(0, 0, 0, 0.8)"
    zIndex={1000}
    borderRadius="8px"
    onMouseLeave={() => setSelectedImageIndex(null)} // Close when leaving
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
            e.stopPropagation();
            prevImage();
          }}
          colorScheme="blue"
        />
        <IconButton
          aria-label="Next Image"
          icon={<ChevronRightIcon />}
          onClick={(e) => {
            e.stopPropagation();
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
