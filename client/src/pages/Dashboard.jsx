import { useAuth } from '../context/AuthContext';

const StatCard = ({ label, value, icon, color }) => (
  <div className={`rounded-2xl p-6 border ${color} transition-transform hover:-translate-y-1 duration-200`}>
    <div className="flex items-center justify-between mb-4">
      <span className="text-2xl">{icon}</span>
      <span className="text-3xl font-black text-gray-900 dark:text-white">{value}</span>
    </div>
    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</p>
  </div>
);

const Dashboard = () => {
  const { user } = useAuth();
  const initials = user?.name?.split(' ').map(n => n[0]).join('').toUpperCase() || 'U';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 py-10">

        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-xl font-black shadow-lg">
              {initials}
            </div>
            <div>
              <h1 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">
                Good day, {user?.name?.split(' ')[0]}. 👋
              </h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-gray-500 dark:text-gray-400">{user?.email}</span>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                  user?.role === 'admin'
                    ? 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400'
                    : 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400'
                }`}>
                  {user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1)}
                </span>
              </div>
            </div>
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-bold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
            </svg>
            New Post
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <StatCard label="Total Posts" value="0" icon="📝" color="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800" />
          <StatCard label="Published" value="0" icon="🌍" color="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800" />
          <StatCard label="Total Views" value="0" icon="👁️" color="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-black text-gray-900 dark:text-white">Your Posts</h2>
                <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">0 posts</span>
              </div>
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <p className="text-gray-900 dark:text-white font-bold mb-1">No posts yet</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Your published posts will appear here.</p>
                <button className="px-5 py-2.5 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-bold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200">
                  Write your first post
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
              <h3 className="text-sm font-black text-gray-900 dark:text-white mb-4 uppercase tracking-wider">Quick Actions</h3>
              <div className="space-y-2">
                {[
                  { icon: '✍️', label: 'Write a post', sub: 'Coming Week 2' },
                  { icon: '🔖', label: 'Saved drafts', sub: 'Coming Week 2' },
                  { icon: '⚙️', label: 'Edit profile', sub: 'Coming Week 3' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer group">
                    <span className="text-lg">{item.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white transition-colors">{item.label}</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black dark:bg-gray-900 rounded-2xl border border-gray-800 p-5">
              <h3 className="text-sm font-black text-white mb-1">Project Progress</h3>
              <p className="text-gray-400 text-xs mb-4">GLA University — Group 7</p>
              <div className="space-y-2">
                {[
                  { label: 'Authentication', done: true },
                  { label: 'Blog Post CRUD', done: false },
                  { label: 'Admin Panel', done: false },
                  { label: 'Deployment', done: false },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${item.done ? 'bg-green-500' : 'bg-gray-700'}`}>
                      {item.done && (
                        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className={`text-xs ${item.done ? 'text-gray-300 line-through' : 'text-gray-500'}`}>{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-gray-800 rounded-full h-1.5">
                <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '25%' }}></div>
              </div>
              <p className="text-gray-500 text-xs mt-1">25% complete</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
