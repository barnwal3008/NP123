import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Clock } from 'lucide-react';

const posts = [
  {
    id: 1,
    user: 'sarah_travels',
    avatar: '🌍',
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    caption: 'Golden hour at the coast ✨ Sometimes the best moments are unplanned.',
    likes: 842,
    time: '2h',
  },
  {
    id: 2,
    user: 'foodie_mike',
    avatar: '🍳',
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    caption: 'New recipe alert! 🔥 Homemade pasta from scratch. Swipe for the recipe →',
    likes: 1203,
    time: '4h',
  },
  {
    id: 3,
    user: 'design_daily',
    avatar: '🎨',
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    caption: 'Clean UI patterns that just work. Minimalism is the ultimate sophistication.',
    likes: 567,
    time: '6h',
  },
  {
    id: 4,
    user: 'techie_jane',
    avatar: '💻',
    image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    caption: 'Just shipped a new feature! The team really came together on this one 🚀',
    likes: 2104,
    time: '8h',
  },
];

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

export default function MockAppFeed({ sessionTime, intent }) {
  return (
    <div className="h-full bg-white flex flex-col">
      {/* Instagram-style header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100 bg-white sticky top-0 z-10">
        <span className="text-xl font-bold tracking-tight text-text" style={{ fontFamily: 'cursive' }}>
          Instagram
        </span>
        <div className="flex items-center gap-1.5">
          <div className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${
            sessionTime > 300 ? 'bg-red-50 text-red-600' :
            sessionTime > 120 ? 'bg-amber-50 text-amber-600' :
            'bg-primary-light text-primary'
          }`}>
            <Clock size={12} />
            {formatTime(sessionTime)}
          </div>
        </div>
      </div>

      {/* Intent reminder bar */}
      {intent && (
        <div className="px-4 py-2 bg-primary-light/50 border-b border-primary-light">
          <p className="text-xs text-primary font-medium">
            🎯 Your intent: {intent.label}
          </p>
        </div>
      )}

      {/* Stories bar */}
      <div className="flex gap-3 px-4 py-3 border-b border-gray-50 overflow-x-auto">
        {['Your Story', 'alex', 'maya', 'josh', 'nina', 'kai'].map((name, i) => (
          <div key={i} className="flex flex-col items-center gap-1 shrink-0">
            <div className={`w-14 h-14 rounded-full flex items-center justify-center text-lg ${
              i === 0 ? 'border-2 border-dashed border-gray-300 bg-gray-50' :
              'bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 p-[2px]'
            }`}>
              {i === 0 ? (
                <span className="text-gray-400 text-xl">+</span>
              ) : (
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-base">
                  {['👤', '🧑', '👩', '🧔', '👱'][i - 1]}
                </div>
              )}
            </div>
            <span className="text-[10px] text-text-secondary truncate max-w-[56px]">{name}</span>
          </div>
        ))}
      </div>

      {/* Feed Posts */}
      <div className="flex-1 overflow-y-auto">
        {posts.map((post) => (
          <div key={post.id} className="border-b border-gray-50">
            {/* Post header */}
            <div className="flex items-center justify-between px-3 py-2.5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-sm">
                  {post.avatar}
                </div>
                <span className="text-sm font-semibold text-text">{post.user}</span>
              </div>
              <MoreHorizontal size={16} className="text-text-secondary" />
            </div>

            {/* Post image */}
            <div
              className="w-full h-[280px] flex items-center justify-center"
              style={{ background: post.image }}
            >
              <span className="text-white/30 text-4xl">📷</span>
            </div>

            {/* Post actions */}
            <div className="flex items-center justify-between px-3 py-2.5">
              <div className="flex items-center gap-4">
                <Heart size={22} className="text-text hover:text-red-500 cursor-pointer transition-colors" />
                <MessageCircle size={22} className="text-text" />
                <Send size={22} className="text-text" />
              </div>
              <Bookmark size={22} className="text-text" />
            </div>

            {/* Post details */}
            <div className="px-3 pb-3">
              <p className="text-sm font-semibold text-text">{post.likes.toLocaleString()} likes</p>
              <p className="text-sm text-text mt-0.5">
                <span className="font-semibold">{post.user}</span>{' '}
                {post.caption}
              </p>
              <p className="text-xs text-text-secondary mt-1">{post.time} ago</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
