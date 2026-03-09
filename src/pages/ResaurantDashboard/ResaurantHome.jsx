import React from "react";
import {
  Store,
  ShoppingBag,
  IndianRupee,
  Star,
  Clock3,
  TrendingUp,
  ChefHat,
  Users,
  ArrowUpRight,
  CircleDot,
  Plus,
  Eye,
  Bell,
} from "lucide-react";

const stats = [
  {
    title: "Total Orders",
    value: "1,248",
    change: "+12.5%",
    icon: ShoppingBag,
  },
  {
    title: "Revenue",
    value: "₹84,560",
    change: "+18.2%",
    icon: IndianRupee,
  },
  {
    title: "Customers",
    value: "892",
    change: "+9.4%",
    icon: Users,
  },
  {
    title: "Rating",
    value: "4.8",
    change: "+0.3",
    icon: Star,
  },
];

const recentOrders = [
  {
    id: "#ORD-1001",
    customer: "Aman Verma",
    item: "Chicken Biryani",
    amount: "₹349",
    status: "Preparing",
  },
  {
    id: "#ORD-1002",
    customer: "Riya Sharma",
    item: "Butter Chicken",
    amount: "₹429",
    status: "Delivered",
  },
  {
    id: "#ORD-1003",
    customer: "Vikas Patel",
    item: "Veg Fried Rice",
    amount: "₹259",
    status: "Pending",
  },
  {
    id: "#ORD-1004",
    customer: "Neha Singh",
    item: "Masala Dosa",
    amount: "₹199",
    status: "Delivered",
  },
];

const topDishes = [
  {
    name: "Chicken Biryani",
    orders: 320,
    price: "₹349",
    image:
      "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Butter Chicken",
    orders: 265,
    price: "₹429",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Masala Dosa",
    orders: 198,
    price: "₹199",
    image:
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=400&q=80",
  },
];

const quickActions = [
  { title: "Add New Item", icon: Plus },
  { title: "View Orders", icon: Eye },
  { title: "Send Offer", icon: Bell },
];

const getStatusClass = (status) => {
  switch (status) {
    case "Delivered":
      return "bg-emerald-100 text-emerald-700";
    case "Preparing":
      return "bg-orange-100 text-orange-700";
    case "Pending":
      return "bg-amber-100 text-amber-700";
    default:
      return "bg-slate-100 text-slate-700";
  }
};

export default function ResaurantHome() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">
      {/* Page Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <div>
          <p className="text-sm text-slate-500 font-medium">Dashboard Overview</p>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
            Welcome back, Restaurant Admin 👋
          </h1>
          <p className="text-slate-500 mt-1">
            Here’s what’s happening with your restaurant today.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="btn-outline">View Reports</button>
          <button className="btn-primary">+ Add Product</button>
        </div>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition p-5"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-slate-500">{stat.title}</p>
                  <h3 className="text-2xl font-bold text-slate-900 mt-2">
                    {stat.value}
                  </h3>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center">
                  <Icon size={22} />
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm">
                <span className="text-emerald-600 font-semibold">{stat.change}</span>
                <span className="text-slate-500">vs last week</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="xl:col-span-2 space-y-6">
          {/* Orders Table */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between p-5 border-b border-slate-100">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Recent Orders</h2>
                <p className="text-sm text-slate-500 mt-1">
                  Latest customer orders and their statuses
                </p>
              </div>

              <button className="text-orange-600 font-semibold hover:text-orange-700 transition">
                View All
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="text-left text-sm text-slate-500 border-b border-slate-100">
                    <th className="px-5 py-4 font-semibold">Order ID</th>
                    <th className="px-5 py-4 font-semibold">Customer</th>
                    <th className="px-5 py-4 font-semibold">Item</th>
                    <th className="px-5 py-4 font-semibold">Amount</th>
                    <th className="px-5 py-4 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order, index) => (
                    <tr
                      key={index}
                      className="border-b last:border-b-0 border-slate-100 hover:bg-slate-50 transition"
                    >
                      <td className="px-5 py-4 font-semibold text-slate-800">
                        {order.id}
                      </td>
                      <td className="px-5 py-4 text-slate-600">{order.customer}</td>
                      <td className="px-5 py-4 text-slate-600">{order.item}</td>
                      <td className="px-5 py-4 font-semibold text-slate-900">
                        {order.amount}
                      </td>
                      <td className="px-5 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusClass(
                            order.status
                          )}`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Popular Dishes */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Top Selling Dishes</h2>
                <p className="text-sm text-slate-500 mt-1">
                  Best performing items from your menu
                </p>
              </div>

              <button className="text-orange-600 font-semibold hover:text-orange-700 transition">
                Manage Menu
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {topDishes.map((dish, index) => (
                <div
                  key={index}
                  className="rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 hover:shadow-md transition"
                >
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-slate-900">{dish.name}</h3>
                    <p className="text-sm text-slate-500 mt-1">
                      {dish.orders} orders placed
                    </p>

                    <div className="flex items-center justify-between mt-4">
                      <span className="text-orange-600 font-bold text-lg">
                        {dish.price}
                      </span>
                      <button className="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center hover:bg-orange-500 hover:text-white transition">
                        <ArrowUpRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          {/* Restaurant Status */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Restaurant Status</h2>
                <p className="text-sm text-slate-500 mt-1">
                  Live overview of your store
                </p>
              </div>

              <div className="flex items-center gap-2 text-emerald-600 text-sm font-semibold">
                <CircleDot size={16} />
                Open
              </div>
            </div>

            <div className="mt-5 space-y-4">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-orange-50">
                <div className="flex items-center gap-3">
                  <Store className="text-orange-600" size={20} />
                  <span className="font-medium text-slate-700">Store Name</span>
                </div>
                <span className="font-semibold text-slate-900">37BITES</span>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50">
                <div className="flex items-center gap-3">
                  <Clock3 className="text-slate-600" size={20} />
                  <span className="font-medium text-slate-700">Opening Hours</span>
                </div>
                <span className="font-semibold text-slate-900">10 AM - 11 PM</span>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50">
                <div className="flex items-center gap-3">
                  <ChefHat className="text-slate-600" size={20} />
                  <span className="font-medium text-slate-700">Active Menu Items</span>
                </div>
                <span className="font-semibold text-slate-900">48</span>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50">
                <div className="flex items-center gap-3">
                  <TrendingUp className="text-slate-600" size={20} />
                  <span className="font-medium text-slate-700">Today Growth</span>
                </div>
                <span className="font-semibold text-emerald-600">+15.2%</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5">
            <h2 className="text-xl font-bold text-slate-900">Quick Actions</h2>
            <p className="text-sm text-slate-500 mt-1">
              Fast shortcuts for daily tasks
            </p>

            <div className="mt-5 space-y-3">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <button
                    key={index}
                    className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-orange-50 hover:text-orange-600 transition"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                        <Icon size={18} />
                      </div>
                      <span className="font-medium">{action.title}</span>
                    </div>
                    <ArrowUpRight size={18} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Performance Card */}
          <div className="rounded-3xl p-5 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white shadow-lg">
            <p className="text-sm text-orange-100">This Week Performance</p>
            <h3 className="text-3xl font-bold mt-2">+24.8%</h3>
            <p className="text-sm text-orange-100 mt-2">
              Your restaurant is performing better than last week.
            </p>

            <button className="mt-5 px-4 py-2 rounded-xl bg-white text-orange-600 font-semibold hover:bg-orange-50 transition">
              View Insights
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}