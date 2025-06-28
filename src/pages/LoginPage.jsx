import React, { useState, useEffect } from 'react';
import { FaUsers, FaCalendarAlt, FaDonate, FaTrash } from 'react-icons/fa';
import SuperAdminNavbar from '../components/SuperadminNavbar';

const SuperAdminPage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("access_token");

  const [activeTab, setActiveTab] = useState('users');
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [donations, setDonations] = useState([]);
  const [eventForm, setEventForm] = useState({ type: '', description: '', date: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [submitLoading, setSubmitLoading] = useState(false);

  useEffect(() => { fetchData(); }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const endpoints = { users: '/users', projects: '/projects', donations: '/donations' };
      const res = await fetch(`http://localhost:5555${endpoints[activeTab]}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (activeTab === 'users') setUsers(data);
      if (activeTab === 'projects') setProjects(data);
      if (activeTab === 'donations') setDonations(data);
    } catch {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteEvent = async (id) => {
    if (!window.confirm('Delete this event?')) return;
    await fetch(`http://localhost:5555/projects/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    setProjects(projects.filter(p => p.id !== id));
  };

  const handleEventSubmit = async (e) => {
    e.preventDefault();
    setSubmitLoading(true);
    try {
      await fetch('http://localhost:5555/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(eventForm)
      });
      setEventForm({ type: '', description: '', date: '' });
      fetchData();
    } catch {
      setError('Failed to create event');
    } finally {
      setSubmitLoading(false);
    }
  };

  const TabButton = ({ tab, icon: Icon, count }) => (
    <button onClick={() => setActiveTab(tab)} className={`px-4 py-2 rounded ${activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
      <Icon className="inline mr-2" /> {tab.charAt(0).toUpperCase() + tab.slice(1)} ({count})
    </button>
  );

  if (!user || user.role !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">Access Denied</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SuperAdminNavbar />
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <div className="flex gap-4 mb-6">
          <TabButton tab="users" icon={FaUsers} count={users.length} />
          <TabButton tab="projects" icon={FaCalendarAlt} count={projects.length} />
          <TabButton tab="donations" icon={FaDonate} count={donations.length} />
        </div>

        {error && <div className="text-red-600 mb-4">{error}</div>}
        {loading ? <div>Loading...</div> : (
          <div className="bg-white p-4 rounded shadow">
            {activeTab === 'users' && (
              <table className="w-full">
                <thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Role</th></tr></thead>
                <tbody>{users.map(u => (
                  <tr key={u.id} className="border-t">
                    <td>{u.id}</td><td>{u.first_name} {u.last_name}</td><td>{u.email}</td><td>{u.role}</td>
                  </tr>
                ))}</tbody>
              </table>
            )}

            {activeTab === 'projects' && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {projects.map(p => (
                    <div key={p.id} className="border p-4 rounded relative">
                      <h3 className="font-bold">{p.type}</h3>
                      <p>{p.description}</p>
                      <p className="text-sm text-gray-500">{p.date}</p>
                      <button onClick={() => handleDeleteEvent(p.id)} className="absolute top-2 right-2 text-red-500">
                        <FaTrash />
                      </button>
                    </div>
                  ))}
                </div>
                <form onSubmit={handleEventSubmit} className="space-y-4">
                  <input type="text" placeholder="Type" value={eventForm.type} onChange={e => setEventForm({ ...eventForm, type: e.target.value })} className="w-full border p-2 rounded" required />
                  <textarea placeholder="Description" value={eventForm.description} onChange={e => setEventForm({ ...eventForm, description: e.target.value })} className="w-full border p-2 rounded" required />
                  <input type="date" value={eventForm.date} onChange={e => setEventForm({ ...eventForm, date: e.target.value })} className="w-full border p-2 rounded" required />
                  <button type="submit" disabled={submitLoading} className="w-full bg-blue-600 text-white py-2 rounded">{submitLoading ? 'Posting...' : 'Post Event'}</button>
                </form>
              </>
            )}

            {activeTab === 'donations' && (
              <table className="w-full">
                <thead><tr><th>ID</th><th>Group</th><th>Type</th><th>Details</th></tr></thead>
                <tbody>{donations.map(d => (
                  <tr key={d.id} className="border-t">
                    <td>{d.id}</td><td>{d.group}</td><td>{d.type}</td><td>{d.type === 'money' ? `KES ${d.amount}` : d.details}</td>
                  </tr>
                ))}</tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SuperAdminPage;
