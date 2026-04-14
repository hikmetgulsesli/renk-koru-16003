# Design System Document: Clinical Precision, Human Depth

## 1. Overview & Creative North Star
The vision for this design system is **"Clinical Precision, Human Depth."** We are moving beyond the sterile, "template-driven" look of traditional medical apps to create a high-end editorial experience. 

The system avoids the rigid, boxy constraints of standard UI by utilizing **intentional asymmetry** and **tonal layering**. We treat the screen not as a flat canvas, but as a deep, multi-dimensional space where information is revealed through light and depth. By combining the technical authority of a medical tool with the immersive engagement of a premium game, we create an environment where the user feels both cared for and empowered.

## 2. Colors & Surface Architecture
The palette is rooted in a deep, nocturnal navy, providing the ultimate canvas for high-contrast color testing.

### Surface Hierarchy & Nesting
To achieve a "Signature" look, we follow the **"No-Line" Rule**: 1px solid borders are strictly prohibited for sectioning. Boundaries are defined solely through background shifts or tonal transitions.
- **Base Layer:** Use `surface` (#0b1326) for the overall application background.
- **Structural Sections:** Use `surface-container-low` (#131b2e) for large background areas that need subtle separation.
- **Interactive Elements:** Use `surface-container-high` (#222a3d) or `highest` (#2d3449) for cards and modals to create a natural "lift."

### The "Glass & Gradient" Rule
To elevate the "medical-grade" feel, floating elements (like test plates or floating action buttons) should use **Glassmorphism**. 
- Apply `surface-container` with a `backdrop-blur` of 20px-40px. 
- **Signature Textures:** Main CTAs (Call to Actions) should not be flat. Use a subtle linear gradient from `primary` (#adc6ff) to `primary-container` (#4d8eff) at a 135-degree angle to provide a sense of "visual soul."

## 3. Typography
This system utilizes a dual-typeface strategy to balance editorial authority with functional clarity.

- **Display & Headlines (Manrope):** Chosen for its geometric precision and modern "medical-tech" aesthetic. Use `display-lg` and `headline-md` for high-impact moments, such as test results or welcome screens.
- **Body & Labels (Inter):** The industry standard for legibility. Use `body-lg` for instructions and `label-md` for micro-copy. 

**Turkish Language Note:** Ensure all typography accounts for Turkish characters (İ, ı, Ğ, ğ, Ü, ü, Ş, ş, Ö, ö, Ç, ç). Use "caps-lock" sparingly for labels to maintain a professional, non-aggressive tone.

## 4. Elevation & Depth
In this design system, depth is a functional tool, not just an ornament.

- **The Layering Principle:** Instead of shadows, stack surface tiers. A `surface-container-lowest` card sitting on a `surface-container-low` section creates a sophisticated, recessed feel.
- **Ambient Shadows:** When a shadow is required for a floating state, it must be "Ambient." Use a large blur (30px+) and low opacity (6%). The shadow color must be a tinted version of `on-surface` (#dae2fd) rather than pure black, ensuring the dark theme feels "airy" rather than heavy.
- **Ghost Borders:** If a boundary is required for accessibility, use the `outline-variant` (#424754) at 15% opacity. Never use 100% opaque borders.

## 5. Components

### Buttons (Butonlar)
- **Primary:** Large (min-height: 64px), high-contrast. Use the `primary` gradient. Text should be `on-primary`.
- **Secondary:** Use `surface-container-highest` with `on-surface` text. No border.
- **States:** On "Press," the button should scale to 96% size to provide a "gamified" tactile response.

### Color Test Plates (Renk Test Plakaları)
The heart of 'Renk Koru'. These must be perfectly circular, utilizing `rounded-full`. 
- Place plates on a `surface-container-lowest` background to make the colors "pop" with clinical focus.
- Use `display-sm` for any numbers inside the plates to ensure maximum legibility.

### Cards & Lists (Kartlar ve Listeler)
- **Forbid Dividers:** Do not use lines to separate list items. Use vertical whitespace (16px - 24px) or subtle shifts between `surface-container-low` and `surface-container-high`.
- **Roundedness:** Use `xl` (1.5rem) for main cards and `md` (0.75rem) for smaller interactive chips.

### Input Fields (Giriş Alanları)
- **Visuals:** Use a "filled" style with `surface-container-highest`.
- **Active State:** Instead of a thick border, use a 2px bottom-accent in `primary` blue.
- **Error State:** Use `error` (#ffb4ab) for text and helper icons, ensuring contrast meets WCAG AA standards.

## 6. Do's and Don'ts

### Do
- **Do** use generous whitespace (white space is "premium").
- **Do** use `secondary` (#4ae176) for "Success" or "Correct" feedback to reinforce the gamified loop.
- **Do** ensure all touch targets are at least 48x48px for medical accessibility.
- **Do** use Turkish terminology correctly: "Teste Başla" (Start Test), "Sonuçları Gör" (See Results), "Ayarlar" (Settings).

### Don't
- **Don't** use pure black (#000000). Always use the `surface` deep navy.
- **Don't** use standard 1px borders. Use tonal shifts.
- **Don't** cram information. If a screen feels full, split it into a step-by-step "wizard" flow.
- **Don't** use aggressive, fast animations. Use "Ease-in-out" with durations between 300ms-500ms to maintain a "calm medical" atmosphere.