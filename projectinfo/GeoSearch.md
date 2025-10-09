---
title: "Geo Search"
slug: "GeoSearch"
summary: "Internship project: a data-informed, multi-brand store-locator that lets users search and filter by store type/address, created for leadership to quickly identify optimal purchase locations."
githubLink: "https://github.com/annushapervez/GeoSearch"
deployLink: "https://total-by-wireless-query.vercel.app/"
---

## Overview
**Geo Search** is a web application I built during my internship to visualize retail locations on an interactive map and make store discovery fast and intuitive. Users can filter by store type (e.g., Total by Wireless, Rainbow, Rent-A-Center, Cricket, MetroPCS, Boost Mobile) and search by address. The app uses **React**, **Leaflet** for map rendering, and **Leaflet.markercluster** for grouping nearby markers, improving clarity in dense areas. Internally, leadership used the tool to **quickly identify optimal purchase locations** by scanning clusters, gaps, and proximity to target areas.

## Project Goals
- **User goal:** Make it simple to find the right store quickly (search + filter, clear markers, responsive UI).
- **Business goal:** Provide spatial visibility across multiple brands to inform operations and **prioritize optimal purchase locations**.
- **Data goal:** Normalize and validate location data for accurate geocoding and consistent map rendering.

## Key Functions
1. **Interactive Map:** Leaflet map with custom icons per store type for quick visual scanning.
2. **Category Filters:** Toggle brand/store types to compare footprints and reduce noise.
3. **Address Search:** Enter any address and jump to the relevant area to find nearby stores.
4. **Marker Clustering:** Aggregate nearby points for performance and visual clarity at wider zooms.
5. **Data Normalization:** Parse and clean CSV data (via **PapaParse**) to standardize fields (brand, address, coords).

## Product & Analytics Lens
- **Primary use cases**
  - End-users: “Find the nearest store that matches my need.”
  - Leadership/ops: “Visualize coverage to **shortlist optimal purchase locations**, spot clusters/gaps, and compare brand footprints.”
- **KPI concepts (for future tracking)**
  - Time-to-find (from page load to first valid result)
  - Search success rate (valid address → visible results)
  - Filter usage and brand mix
  - Map interaction depth (zoom/drag events)
- **Decision support**
  - Rapidly scan **high-density** or **underserved** areas
  - Compare overlapping brand footprints to guide purchase prioritization
  - Proximity checks around target regions or strategic addresses

## Tech Stack
- **Frontend:** React, Next.js  
- **Mapping:** Leaflet, React-Leaflet, Leaflet.markercluster  
- **Data Parsing:** PapaParse  
- **Styling:** CSS

## Features 🌟
- **Custom Icons:** Distinct icons per store type for at-a-glance recognition.  
- **Responsive UI:** Optimized for desktop and mobile viewing.  
- **Home Button:** Quick reset to the default NYC view.  
- **Real-time Filtering:** Updates results instantly as users change filters/search.  
- **Informative Popups:** Store name and address on marker click for fast triage.
