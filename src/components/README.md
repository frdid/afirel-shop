# Components Documentation

This directory contains reusable Astro components for the Afirel Shop application.

## Component Structure

### Hero Components

#### `Hero.astro`
The main hero/banner section displayed at the top of the home page.

**Props:**
- `title` (string, optional): Main heading text. Default: "Welcome to Afirel Shop"
- `subtitle` (string, optional): Subtitle/description text
- `ctaPrimaryText` (string, optional): Primary call-to-action button text
- `ctaPrimaryLink` (string, optional): Primary CTA button URL
- `ctaSecondaryText` (string, optional): Secondary call-to-action button text
- `ctaSecondaryLink` (string, optional): Secondary CTA button URL

**Usage:**
```astro
<Hero 
  title="Welcome to <span class='text-green-600'>Afirel Shop</span>"
  subtitle="Your custom subtitle here"
  ctaPrimaryText="Browse Products"
  ctaPrimaryLink="/products"
/>
```

---

### Product Components

#### `ProductCard.astro`
Displays an individual product card with image, pricing, ratings, and action buttons.

**Props:**
- `product` (object, required): Product data object containing:
  - `id`: Product identifier
  - `data.name`: Product name
  - `data.brand`: Brand name
  - `data.price`: Current price
  - `data.originalPrice`: Original price (optional, for sale items)
  - `data.images`: Array of image objects with `url` and `alt`
  - `data.badge`: Badge text (optional, e.g., "New", "Hot")
  - `data.rating`: Product rating (optional)
  - `data.reviewCount`: Number of reviews (optional)
  - `data.inStock`: Boolean indicating stock availability
- `size` (string, optional): Card size - 'large' or 'small'. Default: 'large'

**Usage:**
```astro
<ProductCard product={productData} size="large" />
```

#### `FeaturedProductsSection.astro`
Section component that displays a grid of featured products using large product cards.

**Props:**
- `products` (array, required): Array of product objects

**Usage:**
```astro
<FeaturedProductsSection products={featuredProducts} />
```

#### `LatestProductsSection.astro`
Section component that displays a grid of latest products using small product cards, includes a "View All Products" button.

**Props:**
- `products` (array, required): Array of product objects

**Usage:**
```astro
<LatestProductsSection products={latestProducts} />
```

---

### Blog Components

#### `BlogCard.astro`
Displays an individual blog post card with image, metadata, and excerpt.

**Props:**
- `blog` (object, required): Blog post data object containing:
  - `slug`: Blog post URL slug
  - `data.title`: Post title
  - `data.description`: Post excerpt/description
  - `data.author`: Author name
  - `data.publishDate`: Publication date
  - `data.category`: Post category
  - `data.readTime`: Estimated read time
  - `data.image`: Object with `url` and `alt`
  - `data.featured`: Boolean indicating if post is featured (optional)

**Usage:**
```astro
<BlogCard blog={blogData} />
```

#### `LatestBlogsSection.astro`
Section component that displays a grid of latest blog posts, includes a "View All Blog Posts" button.

**Props:**
- `blogs` (array, required): Array of blog post objects

**Usage:**
```astro
<LatestBlogsSection blogs={latestBlogs} />
```

---

### Layout Components

#### `SectionHeader.astro`
Reusable section header component with title and optional subtitle.

**Props:**
- `title` (string, required): Section heading text
- `subtitle` (string, optional): Section description text

**Usage:**
```astro
<SectionHeader 
  title="Featured Products" 
  subtitle="Check out our top-selling items"
/>
```

#### `Header.astro`
Main site header with navigation (existing component).

#### `Footer.astro`
Main site footer (existing component).

#### `Navigation.astro`
Navigation menu component (existing component).

---

## Design Patterns

### Component Composition
Components follow a hierarchical structure:
- **Section components** (e.g., `FeaturedProductsSection`) compose multiple card components
- **Card components** (e.g., `ProductCard`, `BlogCard`) handle individual item display
- **Utility components** (e.g., `SectionHeader`) provide shared UI elements

### Props Pattern
All components use TypeScript interfaces for type-safe props:
```typescript
interface Props {
  propertyName: type;
  optionalProperty?: type;
}
```

### Styling
- Uses Tailwind CSS utility classes
- Maintains consistent color scheme (green-600 primary, gray-800 secondary)
- Implements hover states and transitions for interactive elements
- Responsive design with mobile-first approach

### Reusability
Components are designed to be:
- **Self-contained**: All styling and logic contained within the component
- **Configurable**: Accept props for customization
- **Composable**: Can be combined to build complex layouts
- **Maintainable**: Clear separation of concerns

---

## Benefits of Component-Based Structure

1. **Improved Readability**: Each component has a single, clear responsibility
2. **Easy Maintenance**: Changes to a component automatically apply everywhere it's used
3. **Reusability**: Components can be used across multiple pages
4. **Consistency**: Ensures uniform design and behavior across the application
5. **Testing**: Smaller components are easier to test in isolation
6. **Scalability**: Easy to add new features without affecting existing code

---

## Future Enhancements

Potential improvements:
- Add loading states for async operations
- Implement error boundaries
- Add animation variants
- Create additional card size variations
- Add accessibility (ARIA) attributes
- Implement component testing with Vitest