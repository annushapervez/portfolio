---
title: "Hamming Code"
slug: "hamming-code"
summary: "A MIPS assembly subroutine for 7-bit Hamming codes to handle error detection, correction, and data encoding with a user-friendly menu system."
---

## Overview
This project focuses on the development of a MIPS subroutine that implements error detection and correction using 7-bit Hamming codes. It allows users to input a Hamming code, check for single-bit errors, and retrieve the original 4-bit data word. Additionally, users can input 4-bit data and generate a 7-bit Hamming code. The subroutine is designed with separate functions for each operation, enhancing modularity and ensuring that the program avoids pseudo-instructions for optimized performance within MIPS architecture.

## What is a Hamming Code?
A Hamming code is a type of error-correcting code used in digital communication and data storage. Developed by Richard Hamming, it is designed to detect and correct single-bit errors in data transmissions, which helps ensure data integrity.

In a 7-bit Hamming code, 4 bits contain the actual data (called the data bits), while the remaining 3 bits are parity bits. These parity bits are strategically placed within the code to check combinations of data bits, forming a structure that can identify errors. When a single-bit error occurs, the parity bits help determine the exact position of the error, allowing it to be corrected. This makes Hamming codes especially useful in situations where data reliability is crucial, such as in computer memory, data storage, and network transmissions.

## Project Goals
- **✅ Enable Error Detection and Correction**: Develop a MIPS subroutine capable of detecting and correcting single-bit errors in 7-bit Hamming codes.
- **🍱 User-Friendly Menu System**: Implement an intuitive menu interface to allow users to input Hamming codes or data words, and perform various encoding and error-checking operations.
- **⚙️ Efficient Data Encoding**: Allow users to encode a 4-bit data word into a 7-bit Hamming code through optimized MIPS assembly subroutines.
- **🚨 Error Reporting**: Create functionality to identify and report any errors in a 7-bit Hamming code, ensuring accurate data transmission.
- **🧠 Deepen Architecture Knowledge**: Showcase my understanding of low-level computing and MIPS architecture by avoiding pseudo instructions and designing efficient subroutines for each operation.

## Tech Stack
- **Programming Language**: 
  - **MIPS Assembly**: Writing low-level code to implement Hamming code error detection and correction routines.
- **Development Environment**: 
  - **QtSPIM**: Used for assembling, simulating, and testing MIPS assembly code on the SPIM simulator.
- **Data Handling**: 
  - **Binary Input and Output**: Allowing user inputs and outputs to work directly with 7-bit Hamming codes and 4-bit data words for encoding and error checking.
- **Error Detection & Correction**: 
  - **Hamming Code Algorithm**: Implementing the 7-bit Hamming code logic to correct single-bit errors and extract valid data words.
- **Version Control**: 
  - Git and GitHub for source code management and collaboration.

##  Features 🌟
### Demo Video
<VideoPlayer src="/hamming.mp4" />

### Hamming Code Functionality
Users can enter a 7-bit Hamming code for validation, encoding, or error detection.
The system can extract the 4-bit data word encoded by a 7-bit Hamming code.
The program determines if there is an error in the provided 7-bit Hamming code and indicates the position of any detected error.

### Data Encoding
Users can enter a 4-bit data word, which the system encodes into a 7-bit Hamming code for error correction.

### User Interaction
A user-friendly menu allows users to select options for encoding, error detection, and data extraction, enhancing overall usability.
The application provides clear prompts for user input, ensuring users know what data is required.

### Memory Management
Utilizes specific memory addresses for data storage and manipulation, ensuring efficient management of user inputs and encoded outputs.
Strings are null-terminated to facilitate proper handling and display of data.

### Control Flow
The code utilizes conditional branching to navigate different options based on user input, ensuring responsive interactions.
Jumps to specific sections of code allow for modular design, making it easier to manage functionality like encoding and error detection.

### Output Display
The program can output error messages indicating the position of errors or confirm when no errors are detected, providing users with immediate feedback.

### Exit Functionality
Users can choose to quit the application through the menu, which is handled through a simple exit syscall.
