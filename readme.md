# Critical Development — Agency Landing Page

A fully responsive, animated agency/portfolio landing page built entirely from scratch using HTML, CSS and vanilla JavaScript. This project was built by me, on my own, without any external help or templates — created back in 2023 purely as a learning exercise to practice front-end development, animation and responsive design.

---

## 🛠️ Tech Stack

- **HTML5** — semantic structure
- **CSS3** — custom properties (CSS variables), Flexbox, CSS Grid, `clamp()` for fluid typography/spacing, media queries
- **JavaScript (Vanilla)** — no frameworks, DOM manipulation, event handling
- **GSAP + ScrollTrigger** — scroll-based and load-in animations
- **RemixIcon** — icon library

No page builders, no CSS frameworks (like Bootstrap/Tailwind), no boilerplate templates — every class, animation and layout rule was written manually.

---

## 📄 Sections / Page Structure

1. **Header & Mobile Nav Drawer**
   - Fixed header with a slide-in navigation drawer for mobile
   - Hamburger/close icon toggle with an overlay backdrop
   - Auto-closes when a nav link is clicked

2. **Hero Section**
   - Animated heading, subheading and description with staggered load-in animation
   - Circular profile image with floating feature list (goals/highlights)
   - Client/brand logo strip

3. **About / Services**
   - Interactive service boxes (UI/UX, Marketing, App Dev, Graphic Design, Logo Design, Website Design, SEO/Branding)
   - Scroll-triggered reveal animation with elastic easing

4. **Leadership / Team Section**
   - Grid of team member photos with names and roles
   - Scale-in reveal animation synced to scroll position

5. **Stats / Counters**
   - Animated number counters (projects completed, happy clients, years of experience, team size)
   - Counts up automatically once the section enters the viewport

6. **Portfolio / Recent Work**
   - Responsive image grid with hover overlay showing project title and category
   - Smooth zoom + fade-in overlay effect on hover

7. **Free Trial CTA**
   - Simple call-to-action banner with animated heading

8. **Testimonials**
   - Fully working slider/carousel (previous/next buttons + clickable dots)
   - Client quote, photo, name and role per slide

9. **FAQ**
   - Accordion-style expandable questions (only one open at a time)
   - Smooth height-transition animation

10. **Contact**
    - Contact details (phone, email, location)
    - Working contact form with client-side validation (name, email format, minimum message length) and a success message on valid submit

11. **Newsletter**
    - Email subscription form with validation and feedback message

12. **Footer**
    - Closing credits/links section

---

## ⚙️ Key Functionalities

- Fully responsive across desktop, tablet, and mobile (fluid `clamp()`-based sizing + dedicated breakpoints)
- Scroll-triggered entrance animations throughout the page (GSAP ScrollTrigger, `scrub` based so animations tie directly to scroll position)
- Mobile navigation drawer with overlay and outside-click/close-icon handling
- Animated stat counters using `IntersectionObserver`
- Testimonial carousel with dot navigation, built with plain JS state (no library)
- FAQ accordion built with plain JS (toggle + collapse logic)
- Contact form validation (empty field checks, regex email validation, minimum message length)
- Newsletter form validation with inline feedback
- Custom fonts loaded via `@font-face` (Montserrat, Open Sans)

---

## 📌 Notes

This was a self-taught learning project — the goal was to practice building a complete, animated, production-style landing page layout from a blank file, including responsiveness and interactivity, without relying on any pre-built theme or template.