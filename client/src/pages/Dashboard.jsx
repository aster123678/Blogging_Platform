import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            👋 Welcome, {user?.name}!
          </h1>
          <p className="text-gray-500 mt-1">
            Role: <span className="capitalize font-medium text-blue-600">{user?.role}</span>
          </p>
          <p className="text-gray-400 text-sm mt-1">{user?.email}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-center">
            <p className="text-3xl font-bold text-blue-600">0</p>
            <p className="text-gray-600 mt-1">My Posts</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
            <p className="text-3xl font-bold text-green-600">0</p>
            <p className="text-gray-600 mt-1">Published</p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-5 text-center">
            <p className="text-3xl font-bold text-purple-600">0</p>
            <p className="text-gray-600 mt-1">Drafts</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6 mt-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">📝 Quick Actions</h2>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            + Create New Post
          </button>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mt-6">
          <p className="text-yellow-700 text-sm font-medium">🚧 Blog post CRUD features coming in Week 2!</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
