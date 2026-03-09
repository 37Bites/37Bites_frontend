import React, { useMemo, useState } from "react";
import {
  Search,
  Users,
  Phone,
  Mail,
  MapPin,
  Eye,
  Star,
  ShoppingBag,
  Filter,
  UserPlus,
} from "lucide-react";

const customersData = [
  {
    id: "CUST-1001",
    name: "Aman Verma",
    phone: "+91 9876543210",
    email: "aman@gmail.com",
    location: "Vijay Nagar, Indore",
    totalOrders: 24,
    totalSpent: "₹8,450",
    rating: 4.8,
    status: "Active",
  },
  {
    id: "CUST-1002",
    name: "Riya Sharma",
    phone: "+91 9123456780",
    email: "riya@gmail.com",
    location: "Palasia, Indore",
    totalOrders: 18,
    totalSpent: "₹6,120",
    rating: 4.6,
    status: "Active",
  },
  {
    id: "CUST-1003",
    name: "Vikas Patel",
    phone: "+91 9988776655",
    email: "vikas@gmail.com",
    location: "Bhawarkuan, Indore",
    totalOrders: 9,
    totalSpent: "₹2,980",
    rating: 4.2,
    status: "Inactive",
  },
  {
    id: "CUST-1004",
    name: "Neha Singh",
    phone: "+91 9090909090",
    email: "neha@gmail.com",
    location: "Sudama Nagar, Indore",
    totalOrders: 31,
    totalSpent: "₹11,300",
    rating: 4.9,
    status: "VIP",
  },
  {
    id: "CUST-1005",
    name: "Rohit Jain",
    phone: "+91 9871234567",
    email: "rohit@gmail.com",
    location: "Rajendra Nagar, Indore",
    totalOrders: 14,
    totalSpent: "₹4,760",
    rating: 4.4,
    status: "Active",
  },
];

const filters = ["All", "Active", "Inactive", "VIP"];

const getStatusStyle = (status) => {
  switch (status) {
    case "Active":
      return "bg-emerald-100 text-emerald-700";
    case "Inactive":
      return "bg-slate-100 text-slate-700";
    case "VIP":
      return "bg-orange-100 text-orange-700";
    default:
      return "bg-slate-100 text-slate-700";
  }
};

export default function Customers() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCustomers = useMemo(() => {
    return customersData.filter((customer) => {
      const matchesFilter =
        activeFilter === "All" ? true : customer.status === activeFilter;

      const q = search.toLowerCase();
      const matchesSearch =
        customer.name.toLowerCase().includes(q) ||
        customer.phone.toLowerCase().includes(q) ||
        customer.email.toLowerCase().includes(q) ||
        customer.id.toLowerCase().includes(q);

      return matchesFilter && matchesSearch;
    });
  }, [search, activeFilter]);

  const stats = {
    total: customersData.length,
    active: customersData.filter((c) => c.status === "Active").length,
    vip: customersData.filter((c) => c.status === "VIP").length,
    orders: customersData.reduce((sum, c) => sum + c.totalOrders, 0),
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
        <div>
          <p className="text-sm text-slate-500 font-medium">Customer Management</p>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
            Customers
          </h1>
          <p className="text-slate-500 mt-1">
            Manage customer records, activity, and loyalty.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 font-medium hover:border-orange-400 hover:text-orange-500 transition">
            Export
          </button>
          <button className="bg-orange-500 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-orange-600 transition shadow-sm inline-flex items-center gap-2">
            <UserPlus size={18} />
            Add Customer
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
          <p className="text-sm text-slate-500">Total Customers</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-2">{stats.total}</h3>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
          <p className="text-sm text-slate-500">Active Customers</p>
          <h3 className="text-2xl font-bold text-emerald-600 mt-2">{stats.active}</h3>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
          <p className="text-sm text-slate-500">VIP Customers</p>
          <h3 className="text-2xl font-bold text-orange-600 mt-2">{stats.vip}</h3>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
          <p className="text-sm text-slate-500">Total Orders</p>
          <h3 className="text-2xl font-bold text-blue-600 mt-2">{stats.orders}</h3>
        </div>
      </div>

      {/* Search + Filters */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-4 md:p-5 space-y-4">
        <div className="flex flex-col xl:flex-row xl:items-center gap-4 justify-between">
          <div className="relative w-full xl:max-w-md">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search by name, phone, email, id..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-400"
            />
          </div>

          <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl border border-slate-200 bg-white hover:border-orange-400 hover:text-orange-500 transition">
            <Filter size={16} />
            Filters
          </button>
        </div>

        <div className="flex gap-3 overflow-x-auto no-scrollbar">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setActiveFilter(item)}
              className={`px-4 py-2.5 rounded-full whitespace-nowrap text-sm font-medium transition ${
                activeFilter === item
                  ? "bg-orange-500 text-white shadow"
                  : "bg-slate-100 text-slate-700 hover:bg-orange-100 hover:text-orange-600"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden xl:block bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100">
          <h2 className="text-lg md:text-xl font-bold text-slate-900">
            Customer List
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            {filteredCustomers.length} customer(s) found
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1100px]">
            <thead>
              <tr className="bg-slate-50 text-left text-sm text-slate-500">
                <th className="px-5 py-4 font-semibold">Customer</th>
                <th className="px-5 py-4 font-semibold">Contact</th>
                <th className="px-5 py-4 font-semibold">Location</th>
                <th className="px-5 py-4 font-semibold">Orders</th>
                <th className="px-5 py-4 font-semibold">Spent</th>
                <th className="px-5 py-4 font-semibold">Rating</th>
                <th className="px-5 py-4 font-semibold">Status</th>
                <th className="px-5 py-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer) => (
                <tr
                  key={customer.id}
                  className="border-t border-slate-100 hover:bg-slate-50 transition"
                >
                  <td className="px-5 py-4">
                    <p className="font-semibold text-slate-900">{customer.name}</p>
                    <p className="text-sm text-slate-500">{customer.id}</p>
                  </td>

                  <td className="px-5 py-4">
                    <p className="text-slate-700">{customer.phone}</p>
                    <p className="text-sm text-slate-500">{customer.email}</p>
                  </td>

                  <td className="px-5 py-4 text-slate-600">{customer.location}</td>

                  <td className="px-5 py-4 font-semibold text-slate-900">
                    {customer.totalOrders}
                  </td>

                  <td className="px-5 py-4 font-semibold text-slate-900">
                    {customer.totalSpent}
                  </td>

                  <td className="px-5 py-4">
                    <span className="inline-flex items-center gap-1 text-amber-500 font-semibold">
                      <Star size={14} fill="currentColor" />
                      {customer.rating}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                        customer.status
                      )}`}
                    >
                      {customer.status}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <button className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 hover:bg-orange-100 hover:text-orange-600 transition flex items-center justify-center">
                        <Eye size={16} />
                      </button>
                      <button className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 hover:bg-emerald-100 hover:text-emerald-600 transition flex items-center justify-center">
                        <Phone size={16} />
                      </button>
                      <button className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 hover:bg-blue-100 hover:text-blue-600 transition flex items-center justify-center">
                        <Mail size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile / Tablet Cards */}
      <div className="xl:hidden space-y-4">
        {filteredCustomers.map((customer) => (
          <div
            key={customer.id}
            className="bg-white rounded-3xl border border-slate-100 shadow-sm p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-bold text-slate-900 text-lg">{customer.name}</h3>
                <p className="text-sm text-slate-500 mt-1">{customer.id}</p>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                  customer.status
                )}`}
              >
                {customer.status}
              </span>
            </div>

            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-center gap-2 text-slate-600">
                <Phone size={15} className="text-orange-500" />
                {customer.phone}
              </div>

              <div className="flex items-center gap-2 text-slate-600 break-all">
                <Mail size={15} className="text-orange-500" />
                {customer.email}
              </div>

              <div className="flex items-center gap-2 text-slate-600">
                <MapPin size={15} className="text-orange-500" />
                {customer.location}
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="rounded-2xl bg-slate-50 p-3">
                  <div className="flex items-center gap-2 text-slate-500 text-xs">
                    <ShoppingBag size={14} />
                    Orders
                  </div>
                  <p className="font-bold text-slate-900 mt-1">
                    {customer.totalOrders}
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-3">
                  <div className="flex items-center gap-2 text-slate-500 text-xs">
                    <Users size={14} />
                    Spent
                  </div>
                  <p className="font-bold text-slate-900 mt-1">
                    {customer.totalSpent}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 text-amber-500 font-semibold pt-2">
                <Star size={14} fill="currentColor" />
                {customer.rating}
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <button className="flex-1 py-2.5 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition font-medium">
                View
              </button>
              <button className="flex-1 py-2.5 rounded-xl border border-slate-200 bg-white hover:border-orange-400 hover:text-orange-500 transition font-medium">
                Contact
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}