import { useAuth } from '../context/AuthContext';

const AdminPanel = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h1 className="text-2xl font-bold text-red-700">🔐 Admin Panel</h1>
          <p className="text-gray-500 mt-1">
            Logged in as: <strong>{user?.email}</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl shadow p-5">
            <h2 className="font-semibold text-gray-700 mb-2">👥 Manage Users</h2>
            <p className="text-gray-400 text-sm">Coming in Week 3...</p>
          </div>
          <div className="bg-white rounded-xl shadow p-5">
            <h2 className="font-semibold text-gray-700 mb-2">📄 Manage Posts</h2>
            <p className="text-gray-400 text-sm">Coming in Week 3...</p>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mt-6">
          <p className="text-yellow-700 text-sm font-medium">🚧 Full admin features coming in Week 3!</p>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
