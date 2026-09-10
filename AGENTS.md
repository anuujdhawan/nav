# Architecture & Conventions

## Blog Storage
- Source of truth: `data/blogs.json` (JSON array, editable at runtime)
- `src/lib/blogData.ts` reads/writes JSON via `fs` (server-only)
- **Server components** use `getAllBlogPosts()` / `getBlogPost(id)` — reads fresh JSON on each call
- **Client components** receive blog data as props from a server wrapper (never import `blogPosts` directly)
- **API routes** (`/api/blog/create`, `/edit`, `/delete`) use `saveBlogPosts()` — writes to JSON
- **Sitemap** (`/sitemap.xml`) is dynamic (`force-dynamic`) — always reflects current JSON
- After creating/editing/deleting a blog, changes are instantly visible in sitemap, individual pages, and blog listing (SSR re-reads JSON)

## Build & Deploy
- Build captures the JSON snapshot from `data/blogs.json`
- Production (Vercel): `data/blogs.json` filesystem may be read-only — API writes may fail
- For production, rebuild after blog CRUD, or switch to external storage (DB/KV)

## Key Files
- `src/lib/blogData.ts` — types, JSON reader/writer, server-only helpers
- `data/blogs.json` — all blog posts
- `src/app/sitemap.ts` — dynamic sitemap (`force-dynamic`)
- `src/app/sitemap-image/route.ts` — dynamic image sitemap
- `src/app/api/blog/create/route.ts` — JSON-based create
- `src/app/api/blog/edit/route.ts` — JSON-based edit
- `src/app/api/blog/delete/route.ts` — JSON-based delete

## Client Component Pattern
```tsx
// page.tsx (server) — reads JSON, passes data to client
import { getAllBlogPosts } from '@/lib/blogData';
import BlogClient from './_components/BlogClient';

export default function Page() {
  const posts = getAllBlogPosts();
  return <BlogClient posts={posts} />;
}
```
