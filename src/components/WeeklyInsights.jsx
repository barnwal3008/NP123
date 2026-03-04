import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, Area, AreaChart,
} from 'recharts';
import { TrendingDown, TrendingUp, AlertCircle, Lightbulb, Target, Clock, Zap } from 'lucide-react';

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
  { name: 'No intent', value: 10, color: '#e8eaed' },
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

export default function WeeklyInsights({ onRestart }) {
  return (
    <div className="h-full bg-surface overflow-y-auto">
      {/* Header */}
      <div className="bg-white px-5 pt-4 pb-5 border-b border-surface-dark">
        <h1 className="text-xl font-bold text-text">Your Weekly Phone Patterns</h1>
        <p className="text-sm text-text-secondary mt-0.5">Feb 24 – Mar 2, 2026</p>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 mt-4">
          <div className="bg-primary-light rounded-2xl p-3 text-center">
            <Target size={18} className="text-primary mx-auto mb-1" />
            <p className="text-lg font-bold text-primary">62%</p>
            <p className="text-[10px] text-primary/70 font-medium">Aligned</p>
          </div>
          <div className="bg-warn-light rounded-2xl p-3 text-center">
            <Clock size={18} className="text-warn mx-auto mb-1" />
            <p className="text-lg font-bold text-warn">35</p>
            <p className="text-[10px] text-warn/70 font-medium">Drifts</p>
          </div>
          <div className="bg-accent-light rounded-2xl p-3 text-center">
            <Zap size={18} className="text-accent mx-auto mb-1" />
            <p className="text-lg font-bold text-accent">-18%</p>
            <p className="text-[10px] text-accent/70 font-medium">vs last wk</p>
          </div>
        </div>
      </div>

      <div className="px-5 py-4 flex flex-col gap-4">
        {/* Drift Frequency Chart */}
        <div className="bg-white rounded-2xl p-4 border border-surface-dark">
          <h3 className="text-sm font-semibold text-text mb-3">Drift Frequency</h3>
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={driftData} barSize={24}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#5f6368' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#5f6368' }} axisLine={false} tickLine={false} width={25} />
              <Tooltip
                contentStyle={{
                  borderRadius: '12px',
                  border: '1px solid #e8eaed',
                  fontSize: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
              />
              <Bar dataKey="drifts" fill="#aecbfa" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Intent Alignment Pie */}
        <div className="bg-white rounded-2xl p-4 border border-surface-dark">
          <h3 className="text-sm font-semibold text-text mb-3">Time Spent vs Intent Alignment</h3>
          <div className="flex items-center gap-4">
            <ResponsiveContainer width={120} height={120}>
              <PieChart>
                <Pie
                  data={alignmentData}
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={55}
                  paddingAngle={3}
                  dataKey="value"
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
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-xs text-text-secondary">
                    {item.name} — <span className="font-semibold text-text">{item.value}%</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Weekly Trend */}
        <div className="bg-white rounded-2xl p-4 border border-surface-dark">
          <h3 className="text-sm font-semibold text-text mb-3">Alignment Trend (4 weeks)</h3>
          <ResponsiveContainer width="100%" height={120}>
            <AreaChart data={weeklyTrend}>
              <defs>
                <linearGradient id="alignGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#34a853" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#34a853" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="week" tick={{ fontSize: 11, fill: '#5f6368' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#5f6368' }} axisLine={false} tickLine={false} width={25} />
              <Tooltip
                contentStyle={{
                  borderRadius: '12px',
                  border: '1px solid #e8eaed',
                  fontSize: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
              />
              <Area type="monotone" dataKey="aligned" stroke="#34a853" fill="url(#alignGrad)" strokeWidth={2} />
              <Line type="monotone" dataKey="total" stroke="#e8eaed" strokeWidth={2} dot={false} strokeDasharray="4 4" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Insights */}
        <div className="bg-white rounded-2xl p-4 border border-surface-dark">
          <h3 className="text-sm font-semibold text-text mb-3">Key Insights</h3>
          <div className="flex flex-col gap-3">
            {insights.map((insight, i) => {
              const Icon = insight.icon;
              return (
                <div key={i} className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-full ${insight.bgColor} flex items-center justify-center shrink-0`}>
                    <Icon size={16} className={insight.iconColor} />
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed pt-1.5">
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
          className="w-full py-3 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary/90 transition-all active:scale-[0.98] mb-2"
        >
          Restart Demo
        </button>
      </div>
    </div>
  );
}
