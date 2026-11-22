// All the content of the portfolio lives here, so it is easy to update.

export const profile = {
  name: 'Eliot Ilazi',
  role: 'Websites, 3D tools and business apps',
  location: 'Nyon, Switzerland',
  photo: 'https://avatars.githubusercontent.com/eliotilazi',
  intro:
    'I design and deliver real web projects, from the first idea to the live website. I keep growing my development skills by building them.',
  languages: ['Albanian', 'French', 'English'],
  email: 'ilazieliot@gmail.com',
  github: 'https://github.com/eliotilazi',
  linkedin: 'https://www.linkedin.com/in/eliot-ilazi-8727a8382/',
}

export const about = [
  'Nine years as managing partner in a transport company taught me how a business really works: client relations, team management, invoicing and organisation.',
  'Today I use that experience to build web tools that solve concrete problems: a 3D configurator for custom furniture, a route planner for a transport company and websites for independent professionals.',
  'I am currently deepening JavaScript, React, Python and SQL, and I am open to remote work.',
]

export const projects = [
  {
    title: 'Online coffee shop in React',
    text: 'A complete online shop for a demo coffee roastery: catalogue with search and filters, product pages with size and grind options, a cart that remembers its content and respects the stock, and a checkout with validation. Prices follow Swiss rules, with two VAT rates and free delivery from CHF 50.',
    tech: ['React 18', 'Vite', 'Context + useReducer', 'Automated tests', 'GitHub Actions', 'GitHub Pages'],
    role: 'Design, React components and state management, shop rules (stock, promo code, VAT, delivery), tests and automatic deployment.',
    accent: 'shop',
    demo: 'https://eliotilazi.github.io/coffee-shop/',
    code: 'https://github.com/eliotilazi/coffee-shop',
  },
  {
    title: 'Van rental website with online booking',
    text: 'A complete 7-page website for a demo van rental company: fleet with filters, prices, FAQ with search, contact form and a 3-step booking. The price updates live with the real rules of the trade: half days, kilometres included, long rental discounts, insurance, opening hours and availability. In French, Albanian and English.',
    tech: ['JavaScript (ES modules)', 'HTML', 'CSS', 'Form validation', 'Automated tests', 'GitHub Pages'],
    role: 'Business rules based on my nine years in transport, the booking logic and pricing engine, the design, the three translations, tests and deployment.',
    accent: 'rental',
    demo: 'https://eliotilazi.github.io/van-rental/',
    code: 'https://github.com/eliotilazi/van-rental',
  },
  {
    title: 'Quote calculator for custom furniture',
    text: 'A live quote tool for a demo furniture workshop: kitchens, wardrobes, bedrooms, built-in units and terraces. The customer enters the dimensions and the finish level and gets an itemised estimate with installation, delivery and Swiss VAT, in French, Albanian or English.',
    tech: ['JavaScript (ES modules)', 'HTML', 'CSS', 'Automated tests', 'GitHub Pages'],
    role: 'Pricing model based on my work in custom furniture, the calculation engine, the three translations, tests and deployment.',
    accent: 'quote',
    demo: 'https://eliotilazi.github.io/quote-calculator/',
    code: 'https://github.com/eliotilazi/quote-calculator',
  },
  {
    title: '3D custom furniture configurator',
    text: 'An online tool that lets a client draw their room (dimensions, flooring, furniture) and see it in 3D directly in the browser.',
    tech: ['HTML', 'CSS', 'JavaScript', 'three.js', 'Cloudflare Pages'],
    role: 'Requirements, materials and rendering, testing on different room sizes, deployment.',
    accent: 'wood',
  },
  {
    title: 'Transport route planner',
    text: 'A web application to organise the delivery routes of a transport company: drivers, vehicles and schedules.',
    tech: ['Python', 'PostgreSQL (Neon)', 'Render'],
    role: 'Defining the needs from my own experience in transport, testing, putting it into production.',
    accent: 'route',
  },
  {
    title: 'Websites for independent professionals',
    text: 'Presentation websites for small businesses and freelancers: clear, fast and readable on mobile.',
    tech: ['HTML', 'CSS', 'Cloudflare Pages / Workers'],
    role: 'Design, content and publication.',
    accent: 'web',
  },
]

export const skills = ['HTML5', 'CSS3', 'JavaScript', 'React', 'three.js', 'Python', 'SQL', 'PostgreSQL', 'Git & GitHub', 'Cloudflare']

export const education = [
  { school: 'BSc (Honours) Computing and IT, The Open University (distance learning, in progress)', years: 'expected 2027' },
  { school: 'Compulsory schooling, Établissement secondaire de Nyon', years: '2004 – 2017' },
]
