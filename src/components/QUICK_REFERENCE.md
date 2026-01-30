# Component Quick Reference Guide

## 🚀 Quick Start

### Import Components
```astro
---
import Hero from '../components/Hero.astro';
import ProductCard from '../components/ProductCard.astro';
import BlogCard from '../components/BlogCard.astro';
import SectionHeader from '../components/SectionHeader.astro';
import FeaturedProductsSection from '../components/FeaturedProductsSection.astro';
import LatestProductsSection from '../components/LatestProductsSection.astro';
import LatestBlogsSection from '../components/LatestBlogsSection.astro';
---
```

## 📦 Component Cheat Sheet

### Hero
```astro
<Hero 
  title="Welcome to My Shop"
  subtitle="Your tagline here"
  ctaPrimaryText="Shop Now"
  ctaPrimaryLink="/products"
  ctaSecondaryText="Learn More"
  ctaSecondaryLink="/about"
/>
```
**Use for:** Page headers, landing sections

---

### SectionHeader
```astro
<SectionHeader 
  title="Section Title" 
  subtitle="Optional description text"
/>
```
**Use for:** Section headings throughout your pages

---

### ProductCard

**Large variant (for featured/highlighted products):**
```astro
<ProductCard product={productData} size="large" />
```

**Small variant (for grids/listings):**
```astro
<ProductCard product={productData} size="small" />
```

**Product data structure:**
```typescript
{
  id: "product-slug",
  data: {
    name: "Product Name",
    brand: "Brand Name",
    price: 99.99,
    originalPrice: 129.99,  // optional
    images: [{ url: "/path", alt: "desc" }],
    badge: "New",           // optional
    rating: 4.5,            // optional
    reviewCount: 123,       // optional
    inStock: true
  }
}
```

**Use for:** Product displays, grids, featured items

---

### BlogCard
```astro
<BlogCard blog={blogData} />
```

**Blog data structure:**
```typescript
{
  slug: "blog-post-slug",
  data: {
    title: "Post Title",
    description: "Post excerpt...",
    author: "Author Name",
    publishDate: new Date("2024-01-01"),
    category: "Category",
    readTime: "5 min read",
    image: { url: "/path", alt: "desc" },
    featured: true  // optional
  }
}
```

**Use for:** Blog listings, related posts, recent articles

---

### FeaturedProductsSection
```astro
<FeaturedProductsSection products={featuredProducts} />
```
**Props:** Array of 3 product objects
**Use for:** Highlighting featured/top products

---

### LatestProductsSection
```astro
<LatestProductsSection products={latestProducts} />
```
**Props:** Array of 6 product objects
**Use for:** Showing newest products with "View All" CTA

---

### LatestBlogsSection
```astro
<LatestBlogsSection blogs={latestBlogs} />
```
**Props:** Array of 5 blog objects
**Use for:** Displaying recent blog posts with "View All" CTA

---

## 🎨 Styling Reference

### Colors
- **Primary:** `green-600`, `green-700`
- **Secondary:** `gray-800`, `gray-900`
- **Success:** `green-500`
- **Danger:** `red-500`
- **Warning:** `yellow-400`
- **Info:** `blue-500`

### Common Classes
```css
/* Containers */
.container mx-auto

/* Buttons */
.bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700

/* Cards */
.bg-white rounded-xl shadow-lg hover:shadow-xl

/* Grids */
.grid grid-cols-1 md:grid-cols-3 gap-8
```

---

## 📋 Common Patterns

### Full Page Layout
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Hero from '../components/Hero.astro';
import FeaturedProductsSection from '../components/FeaturedProductsSection.astro';
import { getCollection } from 'astro:content';

const products = await getCollection('products');
const featured = products.filter(p => p.data.featured).slice(0, 3);
---

<BaseLayout pageTitle="My Page">
  <Hero title="Page Title" subtitle="Description" />
  <FeaturedProductsSection products={featured} />
</BaseLayout>
```

### Custom Product Grid
```astro
---
import ProductCard from '../components/ProductCard.astro';
const products = await getProducts();
---

<section class="py-16 px-4">
  <div class="container mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {products.map(product => (
        <ProductCard product={product} size="large" />
      ))}
    </div>
  </div>
</section>
```

### Custom Blog Grid
```astro
---
import BlogCard from '../components/BlogCard.astro';
const blogs = await getBlogs();
---

<section class="py-16 px-4">
  <div class="container mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map(blog => (
        <BlogCard blog={blog} />
      ))}
    </div>
  </div>
</section>
```

---

## 🔧 Troubleshooting

### Component not rendering?
- ✅ Check import path is correct
- ✅ Verify required props are passed
- ✅ Ensure data structure matches expected format

### Styles not applying?
- ✅ Tailwind CSS is configured
- ✅ Check class names are correct
- ✅ Verify no conflicting styles

### TypeScript errors?
- ✅ Check prop types match interface
- ✅ Ensure all required props are provided
- ✅ Use optional chaining for optional props (`data.rating ?? 0`)

---

## 💡 Tips & Tricks

### Conditional Rendering
```astro
{product.data.badge && (
  <span class="badge">{product.data.badge}</span>
)}
```

### Custom CTA Colors
```astro
<!-- Green primary -->
<a class="bg-green-600 hover:bg-green-700">Shop Now</a>

<!-- Gray secondary -->
<a class="bg-gray-800 hover:bg-gray-900">Learn More</a>

<!-- Outlined -->
<a class="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
  View More
</a>
```

### Responsive Grids
```astro
<!-- 1 col mobile, 2 tablet, 3 desktop -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<!-- 2 col mobile, 3 tablet, 6 desktop -->
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Size | Classes |
|------------|------|---------|
| Mobile | < 768px | default |
| Tablet | ≥ 768px | `md:` |
| Desktop | ≥ 1024px | `lg:` |
| Wide | ≥ 1280px | `xl:` |

---

## ✅ Component Checklist

When creating a new page:
- [ ] Import BaseLayout
- [ ] Import required components
- [ ] Fetch data from content collections
- [ ] Pass props to components
- [ ] Test responsive design
- [ ] Check accessibility
- [ ] Verify links work

---

## 📚 More Info

- **Full Documentation:** `src/components/README.md`
- **Refactoring Details:** `REFACTORING_SUMMARY.md`
- **Component Structure:** `COMPONENT_STRUCTURE.md`

---

**Version:** 1.0.0
**Last Updated:** December 2024