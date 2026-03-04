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
      <div className="flex items-center justify-between px-4 py-2 border-b border-black/[0.04] bg-white/95 backdrop-blur-sm sticky top-0 z-10">
        <span className="text-[20px] font-bold tracking-tight text-text" style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontStyle: 'italic' }}>
          Instagram
        </span>
        <div className="flex items-center gap-2">
          <div className={`flex items-center gap-1.5 px-2.5 py-[5px] rounded-full text-[11px] font-semibold tracking-tight transition-colors duration-500 ${
            sessionTime > 300 ? 'bg-red-50 text-red-600 ring-1 ring-red-100' :
            sessionTime > 120 ? 'bg-amber-50 text-amber-600 ring-1 ring-amber-100' :
            'bg-gray-50 text-text-secondary ring-1 ring-gray-100'
          }`}>
            <Clock size={11} strokeWidth={2.5} />
            {formatTime(sessionTime)}
          </div>
        </div>
      </div>

      {/* Intent reminder bar */}
      {intent && (
        <div className="px-4 py-[7px] bg-primary-light/40 border-b border-primary-light/60">
          <p className="text-[11px] text-primary/80 font-medium tracking-tight">
            🎯 Your intent: <span className="font-semibold text-primary">{intent.label}</span>
          </p>
        </div>
      )}

      {/* Stories bar */}
      <div className="flex gap-[14px] px-4 py-3 border-b border-black/[0.03] overflow-x-auto hide-scrollbar">
        {['Your Story', 'alex', 'maya', 'josh', 'nina', 'kai'].map((name, i) => (
          <div key={i} className="flex flex-col items-center gap-[5px] shrink-0">
            <div className={`w-[58px] h-[58px] rounded-full flex items-center justify-center ${
              i === 0 ? 'border-[1.5px] border-dashed border-gray-200 bg-gray-50/80' :
              'p-[2px] bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]'
            }`}>
              {i === 0 ? (
                <span className="text-gray-300 text-lg font-light">+</span>
              ) : (
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-[15px]">
                  {['👤', '🧑', '👩', '🧔', '👱'][i - 1]}
                </div>
              )}
            </div>
            <span className="text-[10px] text-text-secondary/70 font-medium truncate max-w-[58px]">{name}</span>
          </div>
        ))}
      </div>

      {/* Feed Posts */}
      <div className="flex-1 overflow-y-auto thin-scrollbar">
        {posts.map((post) => (
          <div key={post.id} className="border-b border-black/[0.03]">
            {/* Post header */}
            <div className="flex items-center justify-between px-3.5 py-2.5">
              <div className="flex items-center gap-2.5">
                <div className="w-[32px] h-[32px] rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-[13px] ring-[0.5px] ring-black/5">
                  {post.avatar}
                </div>
                <span className="text-[13px] font-semibold text-text">{post.user}</span>
              </div>
              <MoreHorizontal size={16} className="text-text-secondary/50" />
            </div>

            {/* Post image */}
            <div
              className="w-full aspect-[4/3.5] flex items-center justify-center"
              style={{ background: post.image }}
            >
              <span className="text-white/20 text-5xl">📷</span>
            </div>

            {/* Post actions */}
            <div className="flex items-center justify-between px-3.5 py-2">
              <div className="flex items-center gap-[18px]">
                <Heart size={22} strokeWidth={1.7} className="text-text cursor-pointer hover:text-red-500 transition-colors duration-200" />
                <MessageCircle size={22} strokeWidth={1.7} className="text-text cursor-pointer hover:text-text-secondary transition-colors duration-200" />
                <Send size={21} strokeWidth={1.7} className="text-text cursor-pointer hover:text-text-secondary transition-colors duration-200" />
              </div>
              <Bookmark size={22} strokeWidth={1.7} className="text-text cursor-pointer hover:text-text-secondary transition-colors duration-200" />
            </div>

            {/* Post details */}
            <div className="px-3.5 pb-3">
              <p className="text-[13px] font-semibold text-text">{post.likes.toLocaleString()} likes</p>
              <p className="text-[13px] text-text mt-0.5 leading-[1.4]">
                <span className="font-semibold">{post.user}</span>{' '}
                <span className="font-normal">{post.caption}</span>
              </p>
              <p className="text-[11px] text-text-secondary/50 mt-1.5 font-medium">{post.time} ago</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
