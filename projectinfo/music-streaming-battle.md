---
title: "Who’s Winning the Music Streaming Battle?"
slug: "music-streaming-battle"
summary: "Data-informed Tableau dashboard comparing premium adoption, conversion, engagement, and audience mix across major streaming platforms—built to practice product analytics and data storytelling."
tableauLink: "https://public.tableau.com/app/profile/annusha.pervez/viz/WhosWinningtheMusicStreamingBattleportfolio/WhosWinningtheMusicStreamingBattle?publish=yes"

---

## Overview
**Who’s Winning the Music Streaming Battle?** is a multi-view Tableau dashboard exploring how leading streaming platforms differ on **profitability (premium adoption), conversion (free → premium), engagement**, and **audience distribution**. It uses a **sample survey dataset** (not market share) to illustrate how data, design, and narrative come together to answer product-shaped questions like *“Which platforms convert best?”* and *“Where do users spend more time?”*  

The build emphasizes **data storytelling** (reference bands, annotations, guided captions) and **interactive analysis** (platform filters, info tooltips, parameter controls) so stakeholders can quickly move from **descriptive metrics** to **actionable hypotheses**.

## Project Goals
- **User goal:** Provide a clean, guided exploration of platform differences with intuitive interactions and clear definitions.
- **Business/PM goal:** Frame questions a product or growth team would ask—conversion, engagement, and audience mix—to inform positioning, experiments, and roadmap bets.
- **Analytics goal:** Demonstrate end-to-end analysis: metric design, data cleaning, visual encoding, and narrative context.

## Key Views & Functions
1. **Profitability (Premium Share):** Bar view with an **average reference band** and annotations to compare premium adoption across platforms.  
2. **Within-Platform Conversion:** 100% bars showing **premium vs. free** mix per platform to highlight conversion effectiveness.  
3. **Does Paying Mean Playing More?** A scatter/bumps view to compare **listening time** (or similar engagement proxy) between free and premium cohorts by platform.  
4. **Engagement Panels:** Side-by-side charts (e.g., **repeat-song ratio** and **avg minutes per session/day**) to show different engagement patterns.  
5. **Relevancy & Distribution:** Audience mix across platforms plus an **age/segment area chart** to reveal demographic consistency or gaps.  

> **Interaction design:** platform selector, helpful info buttons, fixed axes where appropriate, dynamic reference lines/bands, and responsive layout.

## Product & Analytics Lens
- **Primary use cases**
  - **PM/Growth:** Compare **premium adoption** and **free→premium conversion** to prioritize acquisition or monetization experiments.
  - **Content/Engagement:** Identify which platforms sustain **longer sessions** or **repeat listening** to inform content and feature bets.
  - **Marketing:** Read **audience distribution** and **age coverage** to tailor campaigns and partnerships.

- **North-star & guardrail KPIs (as modeled in the sample)**
  - **Premium Share** (profitability proxy)
  - **Within-Platform Conversion** (% premium within each platform)
  - **Engagement Intensity** (e.g., avg minutes/day or per session)
  - **Repeat Behavior** (repeat-song ratio as stickiness proxy)
  - **Audience Coverage** (distribution across platforms/ages)

- **Example decisions this supports**
  - Choose platforms for **co-marketing** based on audience mix.
  - Prioritize **premium feature investments** where conversion is close to average but engagement lags.
  - Target **segment gaps** (ages/regions) surfaced in the area chart.

## Metrics & Definitions (sample dataset)
- **Premium Share:** Premium users / total users (across sample).  
- **Within-Platform Conversion:** Premium / total users **within** each platform.  
- **Engagement Proxies:** Avg minutes, session counts, or repeat ratio depending on fields provided in the dataset.  
- **Audience Distribution:** Share of users by platform; optional filters for generation/age.

> This is a **sample survey**—figures illustrate methods and storytelling, not market share. Labels and captions clearly note this throughout the dashboard.

## Data & Methodology
- **Source:** Public survey dataset (sample, non-representative).  
- **Cleaning & Prep:** Handle nulls/outliers, normalize platform labels, derive premium/free flags, compute ratios/aggregates.  
- **Modeling:** Calculated fields for **reference bands/lines**, cohort splits (free vs premium), and per-platform comparisons.  
- **Validation:** Sanity checks across totals and percentages; consistent axis scales for fair comparisons.

## Tech Stack
- **Visualization:** Tableau (fixed-width layout, guided story sections)  
- **Data Prep:** Tableau calculated fields; optional light prep in CSV/Excel/Python if needed  
- **Design:** Custom color palette, annotations, parameter-driven filters, informative tooltips

## Features 🌟
- **Guided narrative** with section headers (Profitability, Engagement, Relevancy) and **context boxes**.  
- **Reference bands/lines** to benchmark platforms against the **sample average**.  
- **Parameter & filter controls** (platform and cohort) with **persistent axes** for fair cross-view reading.  
- **Interactive tooltips & info buttons** that explain metric definitions and caveats.  
- **Responsive storytelling** tuned for a 1200-px canvas and readable on smaller screens.
