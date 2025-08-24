# PayloadCMS API Documentation

## Base URL
```
http://localhost:3001/api
```

## Authentication
- **Admin endpoints**: Require authentication
- **Public endpoints**: No authentication needed

## Collections

### Pages
```
GET    /api/pages              # List all published pages
GET    /api/pages/:id          # Get specific page
GET    /api/pages?locale=en    # Get English content
GET    /api/pages?locale=es    # Get Spanish content
POST   /api/pages              # Create page (admin only)
PUT    /api/pages/:id          # Update page (admin only)
DELETE /api/pages/:id          # Delete page (admin only)
```

### Media
```
GET    /api/media              # List all images
POST   /api/media              # Upload image (admin only)
GET    /media/:filename        # Access image files
```

### Contacts
```
GET    /api/contacts           # List contacts (admin only)
POST   /api/contacts           # Submit contact form (public)
PUT    /api/contacts/:id       # Update contact status (admin only)
```

## Content Blocks

Your pages use a flexible block system with these types:
- **hero** - Hero sections with title, subtitle, button, background image
- **features** - Feature lists with icons and descriptions
- **testimonials** - Customer reviews with ratings and photos
- **cta** - Call-to-action sections with primary/secondary buttons

## Multi-Language Support

All localized fields support English (en) and Spanish (es):
```
GET /api/pages/homepage?locale=en  # English content
GET /api/pages/homepage?locale=es  # Spanish content
```

## Example Response

```json
{
  "docs": [
    {
      "id": "64f1a2b3c4d5e6f7g8h9i0j1",
      "title": "Homepage",
      "slug": "homepage",
      "metaTitle": "Best SaaS Solution | TechFlow",
      "metaDescription": "Transform your business with AI-powered automation",
      "layout": [
        {
          "blockType": "hero",
          "title": "Transform Your Business Today",
          "subtitle": "Boost productivity by 300%",
          "buttonText": "Get Started",
          "buttonLink": "#contact",
          "backgroundImage": {
            "url": "/media/hero-bg.jpg",
            "alt": "Modern office with technology",
            "sizes": {
              "thumbnail": "/media/hero-bg-400x300.jpg",
              "hero": "/media/hero-bg-1920x1080.jpg"
            }
          }
        }
      ],
      "status": "published"
    }
  ]
}
```