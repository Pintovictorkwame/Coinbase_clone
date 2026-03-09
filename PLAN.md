# Coinbase Clone Implementation Plan

This plan outlines the steps to build a high-fidelity Coinbase clone using **React**, **TypeScript**, and **Tailwind CSS**.

## 1. Design Tokens & Visual Identity

Based on research of the **Coinbase Design System (CDS)**:

### Colors (Tailwind Configuration)
- **Primary Blue:** `#0052FF` (Used for CTAs, Logo, Links)
- **Background (Light):** `#FFFFFF`
- **Background (Dark):** `#0A0B0D` (Woodsmoke)
- **Success:** `#00D180`
- **Warning:** `#FFC801`
- **Error:** `#FF7900`
- **Neutral Grays:** A range of grays for borders and secondary text.

### Typography
- **Primary Font:** `Inter` or `Geist` (as high-quality fallbacks for Coinbase Sans).
- **Monospace:** `DM Mono` or system mono for price data.

### Components
- **Buttons:** 
  - Rounded corners (`rounded-full` or `rounded-lg`).
  - Strong shadows on hover.
  - Consistent padding (e.g., `px-6 py-3`).
- **Cards:** Subtle borders, soft shadows, and white/dark backgrounds.

## 2. Technical Stack
- **Framework:** React (Vite)
- **Styling:** Tailwind CSS (v4)
- **Icons:** Lucide React (similar to CoinbaseIcons)
- **Animations:** Framer Motion (for smooth transitions)

## 3. Implementation Steps

### Phase 1: Setup & Configuration
- Initialize Vite project with React and TypeScript.
- Install Tailwind CSS and configure the color palette.
- Set up project structure (components, hooks, layout).

### Phase 2: Core Components
- **Navbar:** Sticky, responsive, with "Get Started" button.
- **Hero Section:** Large heading, subtext, and email signup.
- **Price Table:** Live-look data table for cryptocurrencies.
- **Footer:** Multi-column layout with links and legal info.

### Phase 3: Layout & Sections
- Implement the "Manage your portfolio" section.
- Create the "Secure storage" and "Insurance" info blocks.
- Add responsive behaviors (mobile vs. desktop).

### Phase 4: Final Polish
- Add hover effects and animations.
- Implement Light/Dark mode toggle (optional but recommended).
- Final audit against coinbase.com for visual accuracy.

## 4. Assets
- **Logo:** SVGs for Coinbase logo.
- **Images:** High-quality screenshots or SVG illustrations representing the platform features.
