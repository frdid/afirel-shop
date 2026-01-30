# Component Structure Diagram

## Visual Hierarchy

```
src/pages/index.astro (Main Entry Point)
│
├── BaseLayout
│   └── Contains: Header, Navigation, Footer
│
└── Page Content
    │
    ├── 1. Hero
    │   └── Props: title, subtitle, CTA buttons
    │
    ├── 2. FeaturedProductsSection
    │   ├── SectionHeader
    │   │   └── Props: title, subtitle
    │   └── ProductCard (×3)
    │       └── Props: product, size="large"
    │
    ├── 3. LatestProductsSection
    │   ├── SectionHeader
    │   │   └── Props: title, subtitle
    │   ├── ProductCard (×6)
    │   │   └── Props: product, size="small"
    │   └── View All Button
    │
    └── 4. LatestBlogsSection
        ├── SectionHeader
        │   └── Props: title, subtitle
        ├── BlogCard (×5)
        │   └── Props: blog
        └── View All Button
```

## Component Dependencies

```
index.astro
│
├── imports Hero.astro
├── imports FeaturedProductsSection.astro
│   ├── imports SectionHeader.astro
│   └── imports ProductCard.astro
│
├── imports LatestProductsSection.astro
│   ├── imports SectionHeader.astro
│   └── imports ProductCard.astro
│
└── imports LatestBlogsSection.astro
    ├── imports SectionHeader.astro
    └── imports BlogCard.astro
```

## Component Tree by Type

### Layout Components
```
BaseLayout (existing)
├── Header (existing)
├── Navigation (existing)
└── Footer (existing)
```

### Page Components
```
index.astro
├── Data Fetching Layer
│   ├── getCollection('products')
│   └── getCollection('blog')
│
└── Rendering Layer
    ├── Hero
    ├── FeaturedProductsSection
    ├── LatestProductsSection
    └── LatestBlogsSection
```

### Reusable Components
```
Hero.astro
├── Hero Section
├── Title (with HTML support)
├── Subtitle
└── CTA Buttons (Primary + Secondary)

SectionHeader.astro
├── Section Title (h2)
└── Section Subtitle (optional)

ProductCard.astro
├── Variant: Large
│   ├── Product Image
│   ├── Badges (New, Sale)
│   ├── Brand
│   ├── Product Name
│   ├── Rating Stars
│   ├── Price (with original price)
│   └── Add to Cart Button
│
└── Variant: Small
    ├── Product Image
    ├── Badge
    ├── Brand
    ├── Product Name
    ├── Price
    └── Add to Cart Button

BlogCard.astro
├── Blog Image
├── Read Time Badge
├── Featured Badge (optional)
├── Category Tag
├── Publish Date
├── Blog Title
├── Description Excerpt
├── Author Name
└── Read More Link
```

### Section Components (Compositions)
```
FeaturedProductsSection.astro
├── Container
├── SectionHeader
└── Grid (3 columns)
    └── ProductCard (large) × 3

LatestProductsSection.astro
├── Container (with bg-gray-50)
├── SectionHeader
├── Grid (6 columns on lg, 3 on md, 2 on mobile)
│   └── ProductCard (small) × 6
└── View All Products CTA

LatestBlogsSection.astro
├── Container
├── SectionHeader
├── Grid (3 columns on lg, 2 on md, 1 on mobile)
│   └── BlogCard × 5
└── View All Blog Posts CTA
```

## Data Flow

```
Content Collections (Astro Content Layer)
│
├── products/
│   └── *.md files
│       └── Frontmatter: name, brand, price, images, etc.
│
└── blog/
    └── *.md files
        └── Frontmatter: title, author, publishDate, etc.

↓ getCollection()

index.astro (Data Layer)
│
├── Filter & Sort Products
│   ├── featuredProducts (top 3)
│   └── latestProducts (top 6)
│
└── Filter & Sort Blogs
    └── latestBlogs (top 5)

↓ Props

Components (Presentation Layer)
│
├── FeaturedProductsSection
│   └── products={featuredProducts}
│
├── LatestProductsSection
│   └── products={latestProducts}
│
└── LatestBlogsSection
    └── blogs={latestBlogs}

↓ Render

ProductCard / BlogCard
└── Individual Items
```

## Component Relationships

### Composition Pattern
```
Container Components (Sections)
    └── compose → Card Components
        └── use → Utility Components (SectionHeader)
```

### Reusability Matrix
```
Component              | Can be reused in
-----------------------|----------------------------------
Hero                   | Any page (customizable)
SectionHeader          | Any section needing a title
ProductCard            | Product pages, search, deals
BlogCard               | Blog listing, related posts
FeaturedProductsSection| Home, category pages
LatestProductsSection  | Home, dashboard
LatestBlogsSection     | Home, sidebar
```

## File Structure

```
afirel-shop/
│
├── src/
│   ├── pages/
│   │   └── index.astro (46 lines) ← REFACTORED
│   │
│   ├── components/
│   │   ├── README.md (194 lines) ← NEW
│   │   │
│   │   ├── Hero.astro (44 lines) ← NEW
│   │   ├── SectionHeader.astro (15 lines) ← NEW
│   │   │
│   │   ├── ProductCard.astro (125 lines) ← NEW
│   │   ├── BlogCard.astro (79 lines) ← NEW
│   │   │
│   │   ├── FeaturedProductsSection.astro (38 lines) ← NEW
│   │   ├── LatestProductsSection.astro (50 lines) ← NEW
│   │   └── LatestBlogsSection.astro (52 lines) ← NEW
│   │
│   └── layouts/
│       └── BaseLayout.astro (existing)
│
├── REFACTORING_SUMMARY.md ← NEW
└── COMPONENT_STRUCTURE.md ← THIS FILE
```

## Styling Architecture

### Tailwind Classes Used

**Colors:**
- Primary: `green-600`, `green-700`
- Secondary: `gray-800`, `gray-900`
- Accent: `blue-500`, `red-500`, `yellow-400`
- Neutral: `gray-50`, `gray-100`, `gray-300`, `gray-500`, `gray-600`

**Layout:**
- Container: `container mx-auto`
- Padding: `py-16 px-4`, `p-6`, `p-4`
- Grids: `grid grid-cols-1 md:grid-cols-3 gap-8`

**Effects:**
- Shadows: `shadow-lg`, `shadow-md`, `shadow-xl`
- Rounded: `rounded-lg`, `rounded-xl`, `rounded-full`
- Transitions: `transition-colors duration-200`, `transition-shadow duration-300`
- Hover: `hover:scale-105`, `hover:bg-green-700`

## Best Practices Implemented

✅ **Single Responsibility Principle**
   - Each component has one clear purpose

✅ **DRY (Don't Repeat Yourself)**
   - Reusable components eliminate duplication

✅ **Props-Based Configuration**
   - Components are flexible and customizable

✅ **Type Safety**
   - TypeScript interfaces for all props

✅ **Responsive Design**
   - Mobile-first approach with breakpoints

✅ **Accessibility**
   - Semantic HTML elements
   - Alt text for images
   - Proper heading hierarchy

✅ **Performance**
   - Optimized images
   - Minimal CSS
   - Component-level optimization possible

✅ **Maintainability**
   - Clear component boundaries
   - Comprehensive documentation
   - Consistent naming conventions

## Component Size Guidelines

| Component | Lines | Complexity | Reusability |
|-----------|-------|------------|-------------|
| Hero | 44 | Low | High |
| SectionHeader | 15 | Very Low | Very High |
| ProductCard | 125 | Medium | Very High |
| BlogCard | 79 | Low | High |
| FeaturedProductsSection | 38 | Low | High |
| LatestProductsSection | 50 | Low | Medium |
| LatestBlogsSection | 52 | Low | Medium |

**Legend:**
- **Lines:** Total lines of code
- **Complexity:** Low = simple logic, Medium = conditional rendering
- **Reusability:** How likely it is to be used elsewhere

## Future Component Candidates

Components that could be extracted in future refactoring:

1. **PriceDisplay.astro** - Handle price formatting with original price
2. **RatingStars.astro** - Reusable star rating component
3. **Badge.astro** - Standardized badge component
4. **CTAButton.astro** - Consistent call-to-action buttons
5. **ProductGrid.astro** - Generic product grid layout
6. **BlogGrid.astro** - Generic blog grid layout
7. **ImageWithOverlay.astro** - Image with overlay badges
8. **LoadingSkeleton.astro** - Loading state components

---

**Last Updated:** December 2024
**Status:** Production Ready ✅