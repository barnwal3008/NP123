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
    caption: 'New recipe alert! 🔥 Homemade pasta from scratch.',
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
    caption: 'Just shipped a new feature! The team really came together 🚀',
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
    <div className="h-full bg-white flex flex-col overflow-hidden">
      {/* Instagram header */}
      <div className="flex items-center justify-between px-3.5 py-[6px] border-b border-black/[0.04] bg-white shrink-0">
        <span className="text-[18px] font-bold tracking-tight text-text" style={{ fontFamily: "'Georgia', serif", fontStyle: 'italic' }}>
          Instagram
        </span>
        <div className={`flex items-center gap-1 px-2 py-[3px] rounded-full text-[10px] font-semibold transition-colors duration-500 ${
          sessionTime > 300 ? 'bg-red-50 text-red-500' :
          sessionTime > 120 ? 'bg-amber-50 text-amber-500' :
          'bg-gray-50 text-text-secondary/70'
        }`}>
          <Clock size={10} strokeWidth={2.5} />
          {formatTime(sessionTime)}
        </div>
      </div>

      {/* Intent reminder */}
      {intent && (
        <div className="px-3.5 py-[5px] bg-primary-light/30 border-b border-primary-light/40 shrink-0">
          <p className="text-[10px] text-primary/70 font-medium truncate">
            🎯 Intent: <span className="font-semibold text-primary/90">{intent.label}</span>
          </p>
        </div>
      )}

      {/* Stories */}
      <div className="flex gap-3 px-3.5 py-2 border-b border-black/[0.03] overflow-x-auto hide-scrollbar shrink-0">
        {['You', 'alex', 'maya', 'josh', 'nina'].map((name, i) => (
          <div key={i} className="flex flex-col items-center gap-[3px] shrink-0">
            <div className={`w-[48px] h-[48px] rounded-full flex items-center justify-center ${
              i === 0 ? 'border-[1.5px] border-dashed border-gray-200 bg-gray-50/60' :
              'p-[1.5px] bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]'
            }`}>
              {i === 0 ? (
                <span className="text-gray-300 text-sm">+</span>
              ) : (
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-[13px]">
                  {['👤', '🧑', '👩', '🧔'][i - 1]}
                </div>
              )}
            </div>
            <span className="text-[9px] text-text-secondary/60 font-medium">{name}</span>
          </div>
        ))}
      </div>

      {/* Feed Posts */}
      <div className="flex-1 overflow-y-auto thin-scrollbar min-h-0">
        {posts.map((post) => (
          <div key={post.id} className="border-b border-black/[0.03]">
            {/* Post header */}
            <div className="flex items-center justify-between px-3 py-2">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-[28px] h-[28px] rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-[11px] shrink-0">
                  {post.avatar}
                </div>
                <span className="text-[12px] font-semibold text-text truncate">{post.user}</span>
              </div>
              <MoreHorizontal size={14} className="text-text-secondary/40 shrink-0" />
            </div>

            {/* Post image */}
            <div
              className="w-full aspect-square flex items-center justify-center"
              style={{ background: post.image }}
            >
              <span className="text-white/15 text-4xl">📷</span>
            </div>

            {/* Post actions */}
            <div className="flex items-center justify-between px-3 py-1.5">
              <div className="flex items-center gap-4">
                <Heart size={20} strokeWidth={1.7} className="text-text" />
                <MessageCircle size={20} strokeWidth={1.7} className="text-text" />
                <Send size={19} strokeWidth={1.7} className="text-text" />
              </div>
              <Bookmark size={20} strokeWidth={1.7} className="text-text" />
            </div>

            {/* Post details */}
            <div className="px-3 pb-2.5">
              <p className="text-[12px] font-semibold text-text">{post.likes.toLocaleString()} likes</p>
              <p className="text-[12px] text-text mt-0.5 leading-[1.35] line-clamp-2">
                <span className="font-semibold">{post.user}</span>{' '}
                {post.caption}
              </p>
              <p className="text-[10px] text-text-secondary/40 mt-1 font-medium">{post.time} ago</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
