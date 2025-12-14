import Link from "next/link"

export const metadata = {
  title: "Forums",
  description: "Join the HytaleHighlights community forums to discuss servers, share tips, and connect with players.",
}

const forumCategories = [
  { 
    name: "General Discussion", 
    description: "Chat about anything Hytale related",
    threads: 1234, 
    posts: 5678, 
    icon: "💬",
    lastPost: { title: "What features are you most excited for?", author: "DragonSlayer42", time: "2 hours ago" }
  },
  { 
    name: "Server Showcase", 
    description: "Promote your server and find new communities",
    threads: 456, 
    posts: 2345, 
    icon: "🏰",
    lastPost: { title: "New RPG server launching this weekend!", author: "ServerAdmin", time: "4 hours ago" }
  },
  { 
    name: "Technical Support", 
    description: "Get help with server issues and troubleshooting",
    threads: 234, 
    posts: 890, 
    icon: "🔧",
    lastPost: { title: "Connection timeout issues - SOLVED", author: "TechHelper", time: "1 day ago" }
  },
  { 
    name: "Guides & Tutorials", 
    description: "Learn tips, tricks, and strategies",
    threads: 123, 
    posts: 567, 
    icon: "📚",
    lastPost: { title: "Complete beginner's guide to Hytale", author: "ProGamer", time: "3 days ago" }
  },
  { 
    name: "Creative Corner", 
    description: "Share builds, art, and creative projects",
    threads: 345, 
    posts: 1890, 
    icon: "🎨",
    lastPost: { title: "My medieval castle build - feedback welcome!", author: "BuildMaster", time: "5 hours ago" }
  },
  { 
    name: "Off Topic", 
    description: "Discuss anything not related to Hytale",
    threads: 789, 
    posts: 3456, 
    icon: "🎮",
    lastPost: { title: "What other games are you playing?", author: "GamerDude", time: "12 hours ago" }
  },
]

const latestThreads = [
  { title: "Best PvP strategies for beginners", category: "Guides", author: "PvPMaster", replies: 42, views: 1250, time: "30 mins ago" },
  { title: "Looking for survival server recommendations", category: "General", author: "NewPlayer123", replies: 18, views: 340, time: "1 hour ago" },
  { title: "Bug report: Inventory issues", category: "Support", author: "BugHunter", replies: 5, views: 89, time: "2 hours ago" },
  { title: "Screenshot contest winners announced!", category: "Creative", author: "ModTeam", replies: 67, views: 2100, time: "4 hours ago" },
]

export default function ForumsPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-title">Community Forums</h1>
        <p className="page-subtitle">
          Connect with fellow players, share your experiences, and discuss all things Hytale.
        </p>
      </div>

      {/* Forum Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Threads", value: "3,181", icon: "📝" },
          { label: "Total Posts", value: "14,826", icon: "💬" },
          { label: "Members", value: "8,542", icon: "👥" },
          { label: "Online Now", value: "247", icon: "🟢" },
        ].map((stat) => (
          <div key={stat.label} className="content-card text-center">
            <div className="text-xl mb-1">{stat.icon}</div>
            <div className="text-xl font-bold text-gold">{stat.value}</div>
            <div className="text-xs text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Forum Categories */}
      <div className="content-section">
        <h2 className="section-title">Forum Categories</h2>
        <div className="space-y-3">
          {forumCategories.map((category) => (
            <Link
              key={category.name}
              href={`/forums/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="item-card flex items-start gap-4"
            >
              {/* Icon */}
              <div className="text-3xl flex-shrink-0">{category.icon}</div>
              
              {/* Category Info */}
              <div className="flex-1 min-w-0">
                <h3 className="item-card-title">{category.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{category.description}</p>
                <div className="text-xs text-muted-foreground">
                  {category.threads.toLocaleString()} threads • {category.posts.toLocaleString()} posts
                </div>
              </div>
              
              {/* Last Post */}
              <div className="hidden md:block text-right text-sm flex-shrink-0 max-w-[200px]">
                <div className="text-foreground truncate">{category.lastPost.title}</div>
                <div className="text-muted-foreground text-xs">
                  by {category.lastPost.author} • {category.lastPost.time}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Latest Threads */}
      <div className="content-section">
        <h2 className="section-title">Latest Discussions</h2>
        <div className="space-y-2">
          {latestThreads.map((thread, index) => (
            <div
              key={index}
              className="content-card flex items-center gap-4 py-3"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="item-card-badge text-xs">{thread.category}</span>
                  <span className="text-foreground truncate">{thread.title}</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  by {thread.author} • {thread.time}
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-4 text-xs text-muted-foreground">
                <span>💬 {thread.replies}</span>
                <span>👁️ {thread.views}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Box */}
      <div className="info-box">
        <div className="info-box-title">📢 Forum Rules</div>
        <div className="info-box-content">
          Please read and follow our community guidelines. Be respectful, no spam, 
          and keep discussions on-topic. Violations may result in warnings or bans.
        </div>
      </div>

      {/* Coming Soon Notice */}
      <div className="content-card text-center">
        <p className="text-muted-foreground">
          🚧 Full forum functionality coming soon! Stay tuned for our community launch.
        </p>
      </div>
    </div>
  )
}
