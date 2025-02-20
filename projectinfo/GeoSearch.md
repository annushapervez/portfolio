---
title: "Geo Search"
slug: "GeoSearch"
summary: "A dynamic store locator application that visualizes store locations on an interactive map, allowing users to search and filter by store type and address. This project was commissioned to provide an efficient solution for locating stores across multiple categories."
githubLink: "https://github.com/annushapervez/total"
---

## Overview
Geo Search is a web application designed to help users locate stores on an interactive map. It supports filtering by store type (e.g., Total by Wireless, Rainbow Store, Rent a Center, Cricket, Metro PCs, Boost Mobile) and searching by address. The application uses React, Leaflet for map rendering, and MarkerCluster for grouping nearby markers. This project was commissioned to provide an efficient solution for locating stores across multiple categories.

## Project Goals
- Provide an intuitive interface for users to locate stores on a map.
- Enable filtering of stores by type (e.g., Total by Wireless, Rainbow Store, etc.).
- Allow users to search for stores by address.
- Display store locations with custom icons and popups for additional details.

## Key Functions
1. **Interactive Map**: Renders store locations on a Leaflet map with custom icons for each store type.
2. **Filtering by Store Type**: Users can filter stores by selecting a specific type (e.g., Cricket, Boost Mobile).
3. **Search by Address**: Users can search for stores by entering an address.
4. **Marker Clustering**: Groups nearby markers into clusters for better visualization at higher zoom levels.
5. **Dynamic Data Parsing**: Parses CSV data to extract store information and geocode coordinates.

## Tech Stack
- **Frontend**: React, Next.js
- **Mapping**: Leaflet, React-Leaflet, Leaflet.MarkerCluster
- **Data Parsing**: PapaParse
- **Styling**: CSS

## Features 🌟
- **Custom Icons**: Each store type has a unique icon for easy identification.
- **Responsive Design**: The map and interface are optimized for all screen sizes.
- **Home Button**: Resets the map view to the default location (New York City).
- **Dynamic Filtering**: Updates the map in real-time based on user-selected filters and search queries.
- **Popup Details**: Displays store name and address when a marker is clicked.