import React, { useMemo, useState } from "react";
import {
  Search,
  Filter,
  Eye,
  Phone,
  MapPin,
  Clock3,
  CheckCircle2,
  ChefHat,
  Bike,
  XCircle,
} from "lucide-react";

const ordersData = [
  {
    id: "#ORD-1001",
    customer: "Aman Verma",
    phone: "+91 9876543210",
    items: ["Chicken Biryani", "Coke"],
    total: "₹349",
    payment: "Paid",
    status: "Preparing",
    time: "10:25 AM",
    address: "Vijay Nagar, Indore",
  },
  {
    id: "#ORD-1002",
    customer: "Riya Sharma",
    phone: "+91 9123456780",
    items: ["Butter Chicken", "Naan"],
    total: "₹429",
    payment: "Paid",
    status: "Delivered",
    time: "10:40 AM",
    address: "Palasia, Indore",
  },
  {
    id: "#ORD-1003",
    customer: "Vikas Patel",
    phone: "+91 9988776655",
    items: ["Veg Fried Rice"],
    total: "₹259",
    payment: "COD",
    status: "Pending",
    time: "11:05 AM",
    address: "Bhawarkuan, Indore",
  },
  {
    id: "#ORD-1004",
    customer: "Neha Singh",
    phone: "+91 9090909090",
    items: ["Masala Dosa", "Cold Coffee"],
    total: "₹199",
    payment: "Paid",
    status: "Out for Delivery",
    time: "11:20 AM",
    address: "Sudama Nagar, Indore",
  },
  {
    id: "#ORD-1005",
    customer: "Rohit Jain",
    phone: "+91 9871234567",
    items: ["Veg Noodles", "Spring Roll"],
    total: "₹315",
    payment: "Paid",
    status: "Cancelled",
    time: "11:40 AM",
    address: "Rajendra Nagar, Indore",
  },
];

const statusTabs = [
  "All",
  "Pending",
  "Preparing",
  "Out for Delivery",
  "Delivered",
  "Cancelled",
];

const getStatusStyle = (status) => {
  switch (status) {
    case "Pending":
      return "bg-amber-100 text-amber-700";
    case "Preparing":
      return "bg-orange-100 text-orange-700";
    case "Out for Delivery":
      return "bg-blue-100 text-blue-700";
    case "Delivered":
      return "bg-emerald-100 text-emerald-700";
    case "Cancelled":
      return "bg-red-100 text-red-700";
    default:
      return "bg-slate-100 text-slate-700";
  }
};

const getStatusIcon = (status) => {
  switch (status) {
    case "Pending":
      return <Clock3 size={14} />;
    case "Preparing":
      return <ChefHat size={14} />;
    case "Out for Delivery":
      return <Bike size={14} />;
    case "Delivered":
      return <CheckCircle2 size={14} />;
    case "Cancelled":
      return <XCircle size={14} />;
    default:
      return <Clock3 size={14} />;
  }
};

export default function Orders() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  const filteredOrders = useMemo(() => {
    return ordersData.filter((order) => {
      const matchesStatus =
        activeTab === "All" ? true : order.status === activeTab;

      const matchesSearch =
        order.id.toLowerCase().includes(search.toLowerCase()) ||
        order.customer.toLowerCase().includes(search.toLowerCase()) ||
        order.phone.toLowerCase().includes(search.toLowerCase());

      return matchesStatus && matchesSearch;
    });
  }, [search, activeTab]);

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <p className="text-sm text-slate-500 font-medium">Orders Management</p>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
            Restaurant Orders
          </h1>
          <p className="text-slate-500 mt-1">
            Track, manage, and update all incoming orders.
          </p>
        </div>

        <div className="flex gap-3 flex-wrap">
          <button className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 font-medium hover:border-orange-400 hover:text-orange-500 transition">
            Export
          </button>
          <button className="bg-orange-500 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-orange-600 transition shadow-sm">
            Create Order
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4">
        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
          <p className="text-sm text-slate-500">Total Orders</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-2">248</h3>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
          <p className="text-sm text-slate-500">Pending</p>
          <h3 className="text-2xl font-bold text-amber-600 mt-2">18</h3>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
          <p className="text-sm text-slate-500">Preparing</p>
          <h3 className="text-2xl font-bold text-orange-600 mt-2">26</h3>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
          <p className="text-sm text-slate-500">Delivered</p>
          <h3 className="text-2xl font-bold text-emerald-600 mt-2">181</h3>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
          <p className="text-sm text-slate-500">Cancelled</p>
          <h3 className="text-2xl font-bold text-red-600 mt-2">23</h3>
        </div>
      </div>

      {/* Search + Filter */}
      <div className="bg-white rounded-3xl p-4 md:p-5 border border-slate-100 shadow-sm">
        <div className="flex flex-col xl:flex-row xl:items-center gap-4 justify-between">
          <div className="relative w-full xl:max-w-md">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search by order id, customer, phone..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-400"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 px-4 py-3 rounded-2xl border border-slate-200 bg-white hover:border-orange-400 hover:text-orange-500 transition">
              <Filter size={16} />
              Filters
            </button>

            <select className="px-4 py-3 rounded-2xl border border-slate-200 bg-white outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-400">
              <option>Today</option>
              <option>This Week</option>
              <option>This Month</option>
            </select>
          </div>
        </div>

        {/* Status Tabs */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar mt-5">
          {statusTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2.5 rounded-full whitespace-nowrap text-sm font-medium transition ${
                activeTab === tab
                  ? "bg-orange-500 text-white shadow"
                  : "bg-slate-100 text-slate-700 hover:bg-orange-100 hover:text-orange-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100">
          <h2 className="text-lg md:text-xl font-bold text-slate-900">
            Recent Orders
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            {filteredOrders.length} order(s) found
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden xl:block overflow-x-auto">
          <table className="w-full min-w-[1100px]">
            <thead>
              <tr className="bg-slate-50 text-left text-sm text-slate-500">
                <th className="px-5 py-4 font-semibold">Order</th>
                <th className="px-5 py-4 font-semibold">Customer</th>
                <th className="px-5 py-4 font-semibold">Items</th>
                <th className="px-5 py-4 font-semibold">Amount</th>
                <th className="px-5 py-4 font-semibold">Payment</th>
                <th className="px-5 py-4 font-semibold">Status</th>
                <th className="px-5 py-4 font-semibold">Time</th>
                <th className="px-5 py-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order, index) => (
                <tr
                  key={index}
                  className="border-t border-slate-100 hover:bg-slate-50 transition"
                >
                  <td className="px-5 py-4">
                    <p className="font-semibold text-slate-900">{order.id}</p>
                    <p className="text-sm text-slate-500">{order.address}</p>
                  </td>

                  <td className="px-5 py-4">
                    <p className="font-medium text-slate-800">{order.customer}</p>
                    <p className="text-sm text-slate-500">{order.phone}</p>
                  </td>

                  <td className="px-5 py-4">
                    <div className="space-y-1">
                      {order.items.map((item, i) => (
                        <p key={i} className="text-sm text-slate-600">
                          • {item}
                        </p>
                      ))}
                    </div>
                  </td>

                  <td className="px-5 py-4 font-semibold text-slate-900">
                    {order.total}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        order.payment === "Paid"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {order.payment}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${getStatusStyle(
                        order.status
                      )}`}
                    >
                      {getStatusIcon(order.status)}
                      {order.status}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-slate-600">{order.time}</td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <button className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 hover:bg-orange-100 hover:text-orange-600 transition flex items-center justify-center">
                        <Eye size={16} />
                      </button>
                      <button className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 hover:bg-emerald-100 hover:text-emerald-600 transition flex items-center justify-center">
                        <Phone size={16} />
                      </button>
                      <button className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 hover:bg-blue-100 hover:text-blue-600 transition flex items-center justify-center">
                        <MapPin size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile / Tablet Cards */}
        <div className="xl:hidden p-4 space-y-4">
          {filteredOrders.map((order, index) => (
            <div
              key={index}
              className="border border-slate-100 rounded-2xl p-4 bg-slate-50"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-bold text-slate-900">{order.id}</h3>
                  <p className="text-sm text-slate-500 mt-1">{order.customer}</p>
                </div>

                <span
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${getStatusStyle(
                    order.status
                  )}`}
                >
                  {getStatusIcon(order.status)}
                  {order.status}
                </span>
              </div>

              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <p>
                  <span className="font-medium text-slate-800">Phone:</span>{" "}
                  {order.phone}
                </p>
                <p>
                  <span className="font-medium text-slate-800">Items:</span>{" "}
                  {order.items.join(", ")}
                </p>
                <p>
                  <span className="font-medium text-slate-800">Amount:</span>{" "}
                  {order.total}
                </p>
                <p>
                  <span className="font-medium text-slate-800">Payment:</span>{" "}
                  {order.payment}
                </p>
                <p>
                  <span className="font-medium text-slate-800">Time:</span>{" "}
                  {order.time}
                </p>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <button className="flex-1 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-orange-400 hover:text-orange-500 transition font-medium">
                  View
                </button>
                <button className="flex-1 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-emerald-400 hover:text-emerald-500 transition font-medium">
                  Call
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}