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
    text: 'Most drift happens 11 AM – 12 PM on WFH days',
  },
  {
    icon: TrendingUp,
    iconColor: 'text-red-500',
    bgColor: 'bg-red-50',
    text: 'Post-meeting Instagram sessions last 2× longer',
  },
  {
    icon: TrendingDown,
    iconColor: 'text-accent',
    bgColor: 'bg-accent-light',
    text: 'Drift rate dropped 18% this week!',
  },
  {
    icon: Lightbulb,
    iconColor: 'text-primary',
    bgColor: 'bg-primary-light',
    text: 'Intent setting cut avg session by 4 min',
  },
];

const tooltipStyle = {
  borderRadius: '8px',
  border: 'none',
  fontSize: '10px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  padding: '6px 10px',
};

export default function WeeklyInsights({ onRestart }) {
  return (
    <div className="h-full bg-[#f5f6f8] overflow-y-auto thin-scrollbar">
      {/* Header */}
      <div className="bg-white px-4 pt-2 pb-3.5">
        <h1 className="text-[16px] font-bold text-text tracking-tight">Your Weekly Patterns</h1>
        <p className="text-[10px] text-text-secondary/50 mt-0.5 font-medium">Feb 24 – Mar 2, 2026</p>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-2 mt-3">
          <div className="bg-primary-light/60 rounded-xl py-2.5 px-2 text-center">
            <Target size={14} strokeWidth={2} className="text-primary mx-auto mb-1" />
            <p className="text-[16px] font-bold text-primary leading-none">62%</p>
            <p className="text-[8px] text-primary/50 font-semibold mt-0.5 uppercase tracking-wider">Aligned</p>
          </div>
          <div className="bg-warn-light/60 rounded-xl py-2.5 px-2 text-center">
            <Clock size={14} strokeWidth={2} className="text-warn mx-auto mb-1" />
            <p className="text-[16px] font-bold text-warn leading-none">35</p>
            <p className="text-[8px] text-warn/50 font-semibold mt-0.5 uppercase tracking-wider">Drifts</p>
          </div>
          <div className="bg-accent-light/60 rounded-xl py-2.5 px-2 text-center">
            <Zap size={14} strokeWidth={2} className="text-accent mx-auto mb-1" />
            <p className="text-[16px] font-bold text-accent leading-none">-18%</p>
            <p className="text-[8px] text-accent/50 font-semibold mt-0.5 uppercase tracking-wider">vs last wk</p>
          </div>
        </div>
      </div>

      <div className="px-3.5 py-3 flex flex-col gap-2.5">
        {/* Drift Frequency Chart */}
        <div className="bg-white rounded-2xl p-3.5 shadow-[0_1px_2px_rgba(0,0,0,0.03)] border border-black/[0.03]">
          <h3 className="text-[12px] font-semibold text-text mb-2">Drift Frequency</h3>
          <ResponsiveContainer width="100%" height={120}>
            <BarChart data={driftData} barSize={16}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" vertical={false} />
              <XAxis dataKey="day" tick={{ fontSize: 9, fill: '#9aa0a6' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 9, fill: '#9aa0a6' }} axisLine={false} tickLine={false} width={18} />
              <Tooltip contentStyle={tooltipStyle} cursor={{ fill: 'rgba(0,0,0,0.02)' }} />
              <Bar dataKey="drifts" fill="#aecbfa" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Intent Alignment Pie */}
        <div className="bg-white rounded-2xl p-3.5 shadow-[0_1px_2px_rgba(0,0,0,0.03)] border border-black/[0.03]">
          <h3 className="text-[12px] font-semibold text-text mb-2">Intent Alignment</h3>
          <div className="flex items-center gap-4">
            <ResponsiveContainer width={90} height={90}>
              <PieChart>
                <Pie
                  data={alignmentData}
                  cx="50%"
                  cy="50%"
                  innerRadius={22}
                  outerRadius={40}
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
            <div className="flex flex-col gap-2">
              {alignmentData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-sm shrink-0" style={{ backgroundColor: item.color }} />
                  <span className="text-[10px] text-text-secondary/60">
                    {item.name} <span className="font-semibold text-text">{item.value}%</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Weekly Trend */}
        <div className="bg-white rounded-2xl p-3.5 shadow-[0_1px_2px_rgba(0,0,0,0.03)] border border-black/[0.03]">
          <h3 className="text-[12px] font-semibold text-text mb-2">4-Week Trend</h3>
          <ResponsiveContainer width="100%" height={90}>
            <AreaChart data={weeklyTrend}>
              <defs>
                <linearGradient id="alignGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#34a853" stopOpacity={0.15} />
                  <stop offset="100%" stopColor="#34a853" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" vertical={false} />
              <XAxis dataKey="week" tick={{ fontSize: 9, fill: '#9aa0a6' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 9, fill: '#9aa0a6' }} axisLine={false} tickLine={false} width={18} />
              <Tooltip contentStyle={tooltipStyle} />
              <Area type="monotone" dataKey="aligned" stroke="#34a853" fill="url(#alignGrad)" strokeWidth={1.5} dot={{ r: 2.5, fill: '#34a853', strokeWidth: 0 }} />
              <Line type="monotone" dataKey="total" stroke="#e0e0e0" strokeWidth={1} dot={false} strokeDasharray="4 4" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Insights */}
        <div className="bg-white rounded-2xl p-3.5 shadow-[0_1px_2px_rgba(0,0,0,0.03)] border border-black/[0.03]">
          <h3 className="text-[12px] font-semibold text-text mb-2.5">Key Insights</h3>
          <div className="flex flex-col gap-2.5">
            {insights.map((insight, i) => {
              const Icon = insight.icon;
              return (
                <div key={i} className="flex items-center gap-2.5">
                  <div className={`w-[26px] h-[26px] rounded-lg ${insight.bgColor} flex items-center justify-center shrink-0`}>
                    <Icon size={12} strokeWidth={2} className={insight.iconColor} />
                  </div>
                  <p className="text-[10px] text-text-secondary/70 leading-[1.4] min-w-0">
                    {insight.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Restart */}
        <button
          onClick={onRestart}
          className="flex items-center justify-center gap-1.5 w-full py-[10px] bg-primary text-white rounded-xl text-[12px] font-semibold transition-all duration-150 active:scale-[0.98] shadow-[0_1px_6px_rgba(26,115,232,0.2)] mb-0.5"
        >
          <RotateCcw size={13} strokeWidth={2.2} />
          Restart Demo
        </button>
      </div>
    </div>
  );
}
