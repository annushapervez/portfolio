---
title: "SyeLabs"
slug: "SyeLabs"
summary: "An editorial site for a tech-education platform built around mentorship, conferences, and home labs."
githubLink: "https://github.com/annushapervez/SyeLabs"
deployLink: "https://syelabs.com/"

---

## Overview

SyeLabs is a tech learning hub and community platform that bridges discovery, access, and growth for emerging technologists through mentorship, conferences, and home labs. I built the platform's website end-to-end with React, Vite, and Framer Motion, working closely on visual identity, interaction design, and content architecture. The site leans into an editorial aesthetic with a warm cream, terracotta, and rust palette paired with Playfair Display serif typography, giving the brand a considered, magazine-like feel rather than the typical tech-startup look.

## Project Goals

The site needed to do more than introduce SyeLabs. It needed to feel like a place worth spending time in. The goals were to translate the brand's editorial design direction into a fluid, animated browsing experience, make conference sessions and home lab content easy to explore through filterable, preview-driven grids, and build a foundation that could grow alongside the platform as new programs and resources were added.

## Tech Stack

- **Frontend**: React, React Router
- **Animation**: Framer Motion, Lenis (smooth scroll)
- **Build Tooling**: Vite
- **Linting**: ESLint
- **Deployment**: Vercel

## Features 🌟

- **Animated Hero Sections**: Scroll-triggered, word-by-word headline reveals across every page using Framer Motion.
- **Dynamic Navigation**: A navbar that adapts between light and dark themes based on scroll position and hero visibility, with hide-on-scroll-down behavior.
- **Filterable Content Grid**: A category-based grid system (used for both conferences and home lab content) with hover-driven title and video previews.
- **Hover Video Previews**: Grid cards play muted video previews on hover, with crossfade title transitions for added context.
- **Page Transitions**: Smooth, animated route transitions powered by a custom layout wrapper.
- **Scroll-Driven Gradients**: Custom CSS gradients and sticky sections that shift in color and tone as the user scrolls.
- **Responsive Design**: Layouts that adapt cleanly across desktop, tablet, and mobile breakpoints.