import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Line, Area, AreaChart,
} from 'recharts';
import { TrendingDown, TrendingUp, AlertCircle, Lightbulb, Target, Clock, Zap, RotateCcw } from 'lucide-react';

const driftData = [
  { day: 'Mon', drifts: 5 },
  { day: 'Tue', drifts: 3 },
  { day: 'Wed', drifts: 7 },
  { day: 'Thu', drifts: 4 },
  { day: 'Fri', drifts: 6 },
  { day: 'Sat', drifts: 8 },
  { day: 'Sun', drifts: 2 },
];

const alignmentData = [
  { name: 'Aligned', value: 62, color: '#34a853' },
  { name: 'Drifted', value: 28, color: '#f9ab00' },
  { name: 'No intent', value: 10, color: '#dadce0' },
];

const weeklyTrend = [
  { week: 'W1', aligned: 45, total: 80 },
  { week: 'W2', aligned: 52, total: 75 },
  { week: 'W3', aligned: 58, total: 72 },
  { week: 'W4', aligned: 62, total: 68 },
];

const insights = [
  {
    icon: AlertCircle,
    iconColor: 'text-warn',
    bgColor: 'bg-warn-light',
    text: 'Most drift happens between 11 AM – 12 PM during work-from-home days',
  },
  {
    icon: TrendingUp,
    iconColor: 'text-red-500',
    bgColor: 'bg-red-50',
    text: 'Instagram sessions after meetings last 2× longer',
  },
  {
    icon: TrendingDown,
    iconColor: 'text-accent',
    bgColor: 'bg-accent-light',
    text: 'Your drift rate dropped 18% this week — great progress!',
  },
  {
    icon: Lightbulb,
    iconColor: 'text-primary',
    bgColor: 'bg-primary-light',
    text: 'Setting intent reduced average session length by 4 minutes',
  },
];

const tooltipStyle = {
  borderRadius: '10px',
  border: 'none',
  fontSize: '11px',
  boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
  padding: '8px 12px',
};

export default function WeeklyInsights({ onRestart }) {
  return (
    <div className="h-full bg-[#f5f6f8] overflow-y-auto thin-scrollbar">
      {/* Header */}
      <div className="bg-white px-5 pt-3 pb-5">
        <h1 className="text-[19px] font-bold text-text tracking-tight">Your Weekly Phone Patterns</h1>
        <p className="text-[12px] text-text-secondary/60 mt-0.5 font-medium">Feb 24 – Mar 2, 2026</p>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-2.5 mt-4">
          <div className="bg-primary-light/70 rounded-[16px] p-3 text-center">
            <Target size={16} strokeWidth={2} className="text-primary mx-auto mb-1.5" />
            <p className="text-[18px] font-bold text-primary leading-none">62%</p>
            <p className="text-[9px] text-primary/60 font-semibold mt-1 uppercase tracking-wider">Aligned</p>
          </div>
          <div className="bg-warn-light/70 rounded-[16px] p-3 text-center">
            <Clock size={16} strokeWidth={2} className="text-warn mx-auto mb-1.5" />
            <p className="text-[18px] font-bold text-warn leading-none">35</p>
            <p className="text-[9px] text-warn/60 font-semibold mt-1 uppercase tracking-wider">Drifts</p>
          </div>
          <div className="bg-accent-light/70 rounded-[16px] p-3 text-center">
            <Zap size={16} strokeWidth={2} className="text-accent mx-auto mb-1.5" />
            <p className="text-[18px] font-bold text-accent leading-none">-18%</p>
            <p className="text-[9px] text-accent/60 font-semibold mt-1 uppercase tracking-wider">vs last wk</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-3.5 flex flex-col gap-3">
        {/* Drift Frequency Chart */}
        <div className="bg-white rounded-[18px] p-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)] border border-black/[0.03]">
          <h3 className="text-[13px] font-semibold text-text mb-3">Drift Frequency</h3>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={driftData} barSize={20}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" vertical={false} />
              <XAxis dataKey="day" tick={{ fontSize: 10, fill: '#9aa0a6' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10, fill: '#9aa0a6' }} axisLine={false} tickLine={false} width={22} />
              <Tooltip contentStyle={tooltipStyle} cursor={{ fill: 'rgba(0,0,0,0.02)' }} />
              <Bar dataKey="drifts" fill="#aecbfa" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Intent Alignment Pie */}
        <div className="bg-white rounded-[18px] p-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)] border border-black/[0.03]">
          <h3 className="text-[13px] font-semibold text-text mb-3">Time Spent vs Intent Alignment</h3>
          <div className="flex items-center gap-5">
            <ResponsiveContainer width={110} height={110}>
              <PieChart>
                <Pie
                  data={alignmentData}
                  cx="50%"
                  cy="50%"
                  innerRadius={28}
                  outerRadius={50}
                  paddingAngle={4}
                  dataKey="value"
                  strokeWidth={0}
                >
                  {alignmentData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-col gap-2.5">
              {alignmentData.map((item) => (
                <div key={item.name} className="flex items-center gap-2.5">
                  <div className="w-[10px] h-[10px] rounded-[3px]" style={{ backgroundColor: item.color }} />
                  <span className="text-[11px] text-text-secondary/70">
                    {item.name} — <span className="font-semibold text-text">{item.value}%</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Weekly Trend */}
        <div className="bg-white rounded-[18px] p-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)] border border-black/[0.03]">
          <h3 className="text-[13px] font-semibold text-text mb-3">Alignment Trend (4 weeks)</h3>
          <ResponsiveContainer width="100%" height={110}>
            <AreaChart data={weeklyTrend}>
              <defs>
                <linearGradient id="alignGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#34a853" stopOpacity={0.2} />
                  <stop offset="100%" stopColor="#34a853" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" vertical={false} />
              <XAxis dataKey="week" tick={{ fontSize: 10, fill: '#9aa0a6' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10, fill: '#9aa0a6' }} axisLine={false} tickLine={false} width={22} />
              <Tooltip contentStyle={tooltipStyle} />
              <Area type="monotone" dataKey="aligned" stroke="#34a853" fill="url(#alignGrad)" strokeWidth={2} dot={{ r: 3, fill: '#34a853', strokeWidth: 0 }} />
              <Line type="monotone" dataKey="total" stroke="#e0e0e0" strokeWidth={1.5} dot={false} strokeDasharray="5 5" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Insights */}
        <div className="bg-white rounded-[18px] p-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)] border border-black/[0.03]">
          <h3 className="text-[13px] font-semibold text-text mb-3.5">Key Insights</h3>
          <div className="flex flex-col gap-3">
            {insights.map((insight, i) => {
              const Icon = insight.icon;
              return (
                <div key={i} className="flex items-start gap-3">
                  <div className={`w-[30px] h-[30px] rounded-[10px] ${insight.bgColor} flex items-center justify-center shrink-0`}>
                    <Icon size={14} strokeWidth={2} className={insight.iconColor} />
                  </div>
                  <p className="text-[11px] text-text-secondary/80 leading-[1.5] pt-[6px]">
                    {insight.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Restart Button */}
        <button
          onClick={onRestart}
          className="flex items-center justify-center gap-2 w-full py-[13px] bg-primary text-white rounded-[14px] text-[13px] font-semibold hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] shadow-[0_2px_8px_rgba(26,115,232,0.25)] mb-1"
        >
          <RotateCcw size={14} strokeWidth={2.2} />
          Restart Demo
        </button>
      </div>
    </div>
  );
}
