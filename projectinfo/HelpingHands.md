---
title: "Helping Hands"
slug: "HelpingHands"
summary: "A web application that helps users discover volunteering opportunities in New York City based on their personal interests."
githubLink: "https://github.com/annushapervez/helpinghands"
deployLink: "https://annusha.tech"
---

## Overview
Helping Hands is a web application that matches volunteers with local opportunities based on their interests and proximity. Users can input their location or allow the app to detect it, and the system returns a list of opportunities sorted by distance. This project focuses on simplifying the volunteer search process by eliminating complex user profiles and highlighting a straightforward matching algorithm.

## Project Goals
- **Simplify Volunteer Matching**: Develop an intuitive platform that makes it easy for users to find volunteer opportunities based on location and interests.
- **Location-Based Filtering**: Implement a system that sorts and filters opportunities based on the user's current location, ensuring relevant and nearby matches.
- **Efficient Data Handling**: Leverage CSV files to store and process volunteer opportunities and zipcodes, making data management simple and flexible.
- **Promote Community Engagement**: Encourage volunteering by providing a streamlined and user-friendly experience for discovering local causes.
- **Build Technical Expertise**: Demonstrate my ability to create a full-stack application using modern web technologies, including Next.js, CSV parsing, and geolocation.

## Tech Stack
- **Frontend**: 
  - **Next.js**: A React-based framework used for building the user interface and handling server-side rendering.
- **Backend**: 
  - **Node.js**: Handling API requests and location-based filtering logic.
  - **CSV Parsing**: Using csv-parser (a streaming CSV parser for Node.js) to read and process data from CSV files containing volunteer opportunities.
- **Geolocation & Distance Calculation**:
  - **Browser Geolocation API**: For detecting the user's current location.
  - **Zipcode CSV File**: Distance between the user's location and opportunities is calculated using a CSV file containing ZIP codes and their corresponding latitude/longitude, rather than relying on an external API.
- **Hosting**: 
  - **Vercel**: Deploying the Next.js application with automatic scaling and global distribution.
- **Version Control**: 
  - **Git** and **GitHub** for source code management and collaboration.

## Features
### Location Detection
  - Users input their zip code or allow the app to automatically detect their location using the browser's Geolocation API.
  - Option to manually adjust the location in case of inaccuracies in automatic detection.

### Distance-Based Sorting
  - The app calculates the distance between the user's location and volunteer opportunities using a ZIP code CSV file with corresponding latitude and longitude data, allowing for accurate proximity-based sorting.
  - Visual indicators (like maps) to display distances clearly alongside opportunities.

### Opportunity Matching
  - Users are presented with volunteer opportunities that are sorted by distance and filtered by categories of interest.
  - Personalized recommendations based on user preferences and past activity.

### CSV-Based Data
  - Opportunities are stored in a CSV file, making it easy to manage, update, and parse volunteer data for the application.
  - Simple tools for administrators to add or modify opportunities without complex interfaces.

### Responsive Design
  - The application is fully responsive and optimized for different devices and screen sizes to provide a seamless experience across platforms.
  - Adaptive layouts ensure readability and functionality on mobile, tablet, and desktop devices.

### User-Friendly Interface
  - A clean and minimal interface allows users to quickly find and explore volunteer opportunities without distractions.
  - Intuitive navigation with categorized filters and a powerful search function for easy access to information.

### Social Sharing
  - Options for users to share opportunities on social media platforms, increasing awareness and participation in volunteering.
  - Encouragement for users to invite friends to join them in volunteering efforts.