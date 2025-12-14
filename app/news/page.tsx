import Link from "next/link"

export const metadata = {
  title: "News",
  description: "Latest news and updates from the Hytale community and HytaleHighlights.",
}

const featuredArticle = {
  title: "Hytale Beta Announcement Expected Soon",
  excerpt: "The Hytale development team has been dropping hints about major announcements coming in the new year. Industry insiders suggest the long-awaited beta might finally be on the horizon. Here's everything we know so far and what it could mean for the community.",
  author: "HytaleHighlights Staff",
  date: "December 10, 2025",
  category: "Official News",
  readTime: "5 min read",
  image: "📰",
}

const articles = [
  {
    title: "Top 10 Most Anticipated Hytale Servers",
    excerpt: "Our community has voted! Check out the servers everyone is excited to join when Hytale launches.",
    author: "Community Team",
    date: "December 5, 2025",
    category: "Community",
    readTime: "4 min read",
  },
  {
    title: "Server Hosting Guide: Getting Started",
    excerpt: "Planning to host your own Hytale server? Our comprehensive guide covers everything you need to know.",
    author: "TechHelper",
    date: "November 28, 2025",
    category: "Guides",
    readTime: "8 min read",
  },
  {
    title: "Community Spotlight: Builder's Guild",
    excerpt: "Meet the talented builders who are already planning incredible creations for when Hytale arrives.",
    author: "Community Team",
    date: "November 20, 2025",
    category: "Spotlight",
    readTime: "3 min read",
  },
  {
    title: "Interview: What Server Owners Are Planning",
    excerpt: "We spoke with several server owners about their plans and expectations for the Hytale launch.",
    author: "HytaleHighlights Staff",
    date: "November 15, 2025",
    category: "Interviews",
    readTime: "6 min read",
  },
  {
    title: "Modding in Hytale: What We Know",
    excerpt: "A deep dive into Hytale's modding capabilities and what it means for server customization.",
    author: "ModMaster",
    date: "November 10, 2025",
    category: "Guides",
    readTime: "7 min read",
  },
  {
    title: "Weekly Community Roundup #42",
    excerpt: "The best community content, discussions, and highlights from this week.",
    author: "Community Team",
    date: "November 5, 2025",
    category: "Roundup",
    readTime: "4 min read",
  },
]

const categories = ["All", "Official News", "Community", "Guides", "Interviews", "Spotlight", "Roundup"]

export default function NewsPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-title">Latest News</h1>
        <p className="page-subtitle">
          Stay updated with the latest from Hytale and our community.
        </p>
      </div>

      {/* Category Filters */}
      <div className="filter-pills justify-center">
        {categories.map((cat, index) => (
          <button
            key={cat}
            className={`filter-pill ${index === 0 ? "active" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Article */}
      <Link href="/news/hytale-beta-announcement" className="block">
        <article className="content-card group">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-shrink-0 w-full md:w-48 h-32 bg-secondary rounded-lg flex items-center justify-center text-6xl">
              {featuredArticle.image}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="item-card-badge">{featuredArticle.category}</span>
                <span className="text-xs text-muted-foreground">Featured</span>
              </div>
              <h2 className="text-xl font-semibold text-foreground group-hover:text-gold transition-colors mb-2">
                {featuredArticle.title}
              </h2>
              <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                {featuredArticle.excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>{featuredArticle.author}</span>
                <span>•</span>
                <span>{featuredArticle.date}</span>
                <span>•</span>
                <span>{featuredArticle.readTime}</span>
              </div>
            </div>
          </div>
        </article>
      </Link>

      <div className="content-divider" />

      {/* Article Grid */}
      <div className="space-y-4">
        {articles.map((article, index) => (
          <Link
            key={index}
            href={`/news/${article.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
            className="block"
          >
            <article className="content-card group">
              <div className="flex items-center gap-2 mb-2">
                <span className="item-card-badge">{article.category}</span>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-gold transition-colors mb-2">
                {article.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-4">
                  <span>{article.author}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>
                <span>{article.readTime}</span>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pt-4">
        <button className="btn-secondary">
          Load More Articles
        </button>
      </div>

      {/* Newsletter Signup */}
      <div className="content-card text-center">
        <h3 className="text-lg font-semibold text-foreground mb-2">📬 Stay Updated</h3>
        <p className="text-muted-foreground text-sm mb-4">
          Subscribe to our newsletter for the latest Hytale news and updates.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="form-input flex-1"
          />
          <button className="btn-primary whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}
