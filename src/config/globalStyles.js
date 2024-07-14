export const globalStyles = `
  /* ============= GLOBAL CSS =============== */
  :root {
    /* Colors */
    --primary-color: #006400; /* Dark green */
    --primary-light-color: #228B22; /* Lighter shade of dark green */
    --primary-dark-color: #004d00; /* Darker shade of dark green */
    --background-color: #ffffff;
    --text-color: #000000;
    --border-color: #dddddd;
    --primary-color-hover: #228B22;

    /* Typography */
    --font-family: 'Arial, sans-serif';
    --font-size-base: 16px;
    --font-size-h1: 2em; /* 32px */
    --font-size-h2: 1.5em; /* 24px */
    --font-size-h3: 1.17em; /* 18.72px */
    --font-size-h4: 1em; /* 16px */
    --font-size-h5: 0.83em; /* 13.28px */
    --font-size-h6: 0.67em; /* 10.72px */
    --font-size-p: 1em; /* 16px */
    --font-size-small: 0.8em; /* 12.8px */
    --font-size-large: 1.25em; /* 20px */

    /* Layout */
    --padding-base: 1rem;
    --margin-base: 1rem;
    --border-radius: 4px;

    /* Common Tags */
    --section-padding: var(--padding-base);
    --main-padding: var(--padding-base);
    --before-content: ' ';
    --after-content: ' ';
    --transition: all 0.5s ease-in-out;
}
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 100%;
} 

body {
  background: var(--background-color);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 400;
  line-height: 1;
  color: var(--text-color);
}
p {
  margin: 0;
}
h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  font-family: var(--font-family);
  font-weight: 400;
  line-height: 1;
  text-transform: capitalize;
}

h1 {
  font-size: var(--font-size-h1);
}

h2 {
  font-size: var(--font-size-h2);
}

h3 {
  font-size: var(--font-size-h3);
}

h4 {
  font-size: var(--font-size-h4);
}

h5 {
  font-size: var(--font-size-h5);
}

small {
  font-size: var(--font-size-small);
}

a {
  text-decoration: none;
}

ul {
  list-style-type: none;
  padding: 0;
}

.img {
  width: 100%;
  display: block;
  object-fit: cover;
}
`;
