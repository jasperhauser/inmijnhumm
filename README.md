# In Mijn Humm Website

Website for In Mijn Humm, the psychology practice of Natascha Hauser Middelberg in Amsterdam.

## Running Locally

### Prerequisites

- Ruby 3.0+ (install via [Homebrew](https://brew.sh): `brew install ruby`)
- Bundler (`gem install bundler`)

### Setup

```bash
bundle install
```

### Development Server

```bash
bundle exec jekyll serve
```

The site will be available at **http://localhost:4000**

## Project Structure

```
├── _config.yml                 # Site configuration
├── _layouts/                   # Page templates
│   ├── default.html            # Base layout (head, nav, footer)
│   ├── home.html               # Homepage layout
│   └── page.html               # Standard content pages
├── _includes/                  # Reusable components
│   ├── head.html               # <head> with meta, SEO, styles
│   ├── nav-nl.html             # Dutch navigation
│   ├── nav-en.html             # English navigation
│   ├── footer-nl.html          # Dutch footer
│   ├── footer-en.html          # English footer
│   ├── schema-business.html    # Structured data for Google
│   └── analytics.html          # Google Analytics
├── _sass/                      # Stylesheets (Sass partials)
│   ├── _variables.scss         # Colors and CSS variables
│   └── ...
├── css/                        # CSS stylesheets
│   └── main.scss               # Main stylesheet
│   └── ...
├── index.html                  # Dutch homepage
├── over/                       # About page (Dutch)
├── vergoeding/                 # Reimbursement page (Dutch)
├── privacy/                    # Privacy page (Dutch)
├── aanmelden/                  # Registration page (Dutch)
└── en/                         # English versions of all pages
│   ├── index.html              # English homepage
│   ├── about/                  # About page (English)
│   ├── reimbursement/          # Reimbursement page (English)
│   ├── privacy/                # Privacy page (English)
│   └── register/               # Registration page (English)
```

## Editing Content

### Pages

Each page has **front matter** at the top (between `---` markers) that controls its behavior:

```yaml
---
layout: page              # Which template to use (home or page)
title: Page Title         # Browser tab title
description: ...          # Meta description for SEO
lang: nl                  # Language (nl or en)
lang_switch: /en/about/   # Link to other language version
---
```

The actual content goes below the front matter as regular HTML.

### Navigation & Footer

Edit the files in `_includes/`:
- `nav-nl.html` / `nav-en.html` for menu items
- `footer-nl.html` / `footer-en.html` for footer content

### Styles

Edit the Sass partials in `_sass/`. Jekyll automatically compiles them.

Common tasks:
- **Colors**: `_variables.scss`
- **Mobile layout**: `_responsive.scss`
- **Dark mode**: `_dark-mode.scss`

## Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch. GitHub Actions builds the Jekyll site and publishes it.

### Manual Deploy

Just push to main:

```bash
git add .
git commit -m "Your message"
git push
```

## Notes

- The `_site/` folder is the build output — don't edit or commit it
- Images go in `/images/`
- PDFs and documents go in `/docs/`
