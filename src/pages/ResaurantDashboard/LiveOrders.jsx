import React, { useEffect, useMemo, useState } from "react";
import {
  Search,
  MapPin,
  Phone,
  Clock3,
  Bike,
  ChefHat,
  CheckCircle2,
  XCircle,
  RefreshCw,
  User,
  Store,
  CircleDot,
} from "lucide-react";

const initialOrders = [
  {
    id: "#ORD-2001",
    customer: "Aman Verma",
    phone: "+91 9876543210",
    address: "Vijay Nagar, Indore",
    items: ["Chicken Biryani", "Coke"],
    total: "₹349",
    payment: "Paid",
    status: "Pending",
    restaurant: "37BITES",
    rider: "Not Assigned",
    placedAt: "10:10 AM",
    eta: "25 mins",
  },
  {
    id: "#ORD-2002",
    customer: "Riya Sharma",
    phone: "+91 9123456780",
    address: "Palasia, Indore",
    items: ["Butter Chicken", "Butter Naan"],
    total: "₹429",
    payment: "Paid",
    status: "Preparing",
    restaurant: "37BITES",
    rider: "Not Assigned",
    placedAt: "10:18 AM",
    eta: "20 mins",
  },
  {
    id: "#ORD-2003",
    customer: "Vikas Patel",
    phone: "+91 9988776655",
    address: "Bhawarkuan, Indore",
    items: ["Veg Fried Rice"],
    total: "₹259",
    payment: "COD",
    status: "Out for Delivery",
    restaurant: "37BITES",
    rider: "Rohit Delivery",
    placedAt: "10:05 AM",
    eta: "10 mins",
  },
  {
    id: "#ORD-2004",
    customer: "Neha Singh",
    phone: "+91 9090909090",
    address: "Sudama Nagar, Indore",
    items: ["Masala Dosa", "Cold Coffee"],
    total: "₹199",
    payment: "Paid",
    status: "Delivered",
    restaurant: "37BITES",
    rider: "Ankit Rider",
    placedAt: "09:55 AM",
    eta: "Completed",
  },
  {
    id: "#ORD-2005",
    customer: "Rohit Jain",
    phone: "+91 9871234567",
    address: "Rajendra Nagar, Indore",
    items: ["Veg Noodles", "Spring Roll"],
    total: "₹315",
    payment: "Paid",
    status: "Cancelled",
    restaurant: "37BITES",
    rider: "Cancelled",
    placedAt: "10:22 AM",
    eta: "--",
  },
];

const statusFilters = [
  "All",
  "Pending",
  "Preparing",
  "Out for Delivery",
  "Delivered",
  "Cancelled",
];

const statusSteps = ["Pending", "Preparing", "Out for Delivery", "Delivered"];

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
      return <Clock3 size={15} />;
    case "Preparing":
      return <ChefHat size={15} />;
    case "Out for Delivery":
      return <Bike size={15} />;
    case "Delivered":
      return <CheckCircle2 size={15} />;
    case "Cancelled":
      return <XCircle size={15} />;
    default:
      return <CircleDot size={15} />;
  }
};

const getStepState = (currentStatus, step) => {
  const currentIndex = statusSteps.indexOf(currentStatus);
  const stepIndex = statusSteps.indexOf(step);

  if (currentStatus === "Cancelled") return "cancelled";
  if (stepIndex < currentIndex) return "done";
  if (stepIndex === currentIndex) return "current";
  return "upcoming";
};

export default function LiveOrders() {
  const [orders, setOrders] = useState(initialOrders);
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [lastUpdated, setLastUpdated] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setOrders((prev) =>
        prev.map((order) => {
          if (order.status === "Pending") {
            return Math.random() > 0.7
              ? { ...order, status: "Preparing", eta: "18 mins" }
              : order;
          }

          if (order.status === "Preparing") {
            return Math.random() > 0.75
              ? {
                  ...order,
                  status: "Out for Delivery",
                  rider: "Rohit Delivery",
                  eta: "12 mins",
                }
              : order;
          }

          if (order.status === "Out for Delivery") {
            return Math.random() > 0.8
              ? { ...order, status: "Delivered", eta: "Completed" }
              : order;
          }

          return order;
        })
      );

      setLastUpdated(new Date());
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchesFilter =
        activeFilter === "All" ? true : order.status === activeFilter;

      const q = search.toLowerCase();
      const matchesSearch =
        order.id.toLowerCase().includes(q) ||
        order.customer.toLowerCase().includes(q) ||
        order.phone.toLowerCase().includes(q) ||
        order.address.toLowerCase().includes(q);

      return matchesFilter && matchesSearch;
    });
  }, [orders, search, activeFilter]);

  const stats = {
    total: orders.length,
    pending: orders.filter((o) => o.status === "Pending").length,
    preparing: orders.filter((o) => o.status === "Preparing").length,
    outForDelivery: orders.filter((o) => o.status === "Out for Delivery").length,
    delivered: orders.filter((o) => o.status === "Delivered").length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
        <div>
          <p className="text-sm text-slate-500 font-medium">Orders Monitoring</p>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
            Live Orders
          </h1>
          <p className="text-slate-500 mt-1">
            Track all active restaurant orders in real time.
          </p>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-600">
            <RefreshCw size={16} className="text-orange-500" />
            Updated: {lastUpdated.toLocaleTimeString()}
          </div>

          <button className="bg-orange-500 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-orange-600 transition shadow-sm">
            Refresh Now
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
          <p className="text-sm text-slate-500">All Live Orders</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-2">{stats.total}</h3>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
          <p className="text-sm text-slate-500">Pending</p>
          <h3 className="text-2xl font-bold text-amber-600 mt-2">{stats.pending}</h3>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
          <p className="text-sm text-slate-500">Preparing</p>
          <h3 className="text-2xl font-bold text-orange-600 mt-2">{stats.preparing}</h3>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
          <p className="text-sm text-slate-500">Out for Delivery</p>
          <h3 className="text-2xl font-bold text-blue-600 mt-2">
            {stats.outForDelivery}
          </h3>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
          <p className="text-sm text-slate-500">Delivered</p>
          <h3 className="text-2xl font-bold text-emerald-600 mt-2">
            {stats.delivered}
          </h3>
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
              placeholder="Search by order id, customer, phone, address..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-400"
            />
          </div>

          <div className="text-sm text-slate-500">
            Showing <span className="font-semibold text-slate-800">{filteredOrders.length}</span> live order(s)
          </div>
        </div>

        <div className="flex gap-3 overflow-x-auto no-scrollbar">
          {statusFilters.map((status) => (
            <button
              key={status}
              onClick={() => setActiveFilter(status)}
              className={`px-4 py-2.5 rounded-full whitespace-nowrap text-sm font-medium transition ${
                activeFilter === status
                  ? "bg-orange-500 text-white shadow"
                  : "bg-slate-100 text-slate-700 hover:bg-orange-100 hover:text-orange-600"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Live Orders Grid */}
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6">
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
          >
            {/* Top */}
            <div className="p-5 border-b border-slate-100">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h2 className="text-xl font-bold text-slate-900">{order.id}</h2>
                    <span
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${getStatusStyle(
                        order.status
                      )}`}
                    >
                      {getStatusIcon(order.status)}
                      {order.status}
                    </span>
                  </div>

                  <p className="text-slate-500 mt-2 text-sm">
                    Placed at {order.placedAt} • ETA: {order.eta}
                  </p>
                </div>

                <div className="text-left lg:text-right">
                  <p className="text-sm text-slate-500">Order Total</p>
                  <p className="text-2xl font-bold text-orange-500">{order.total}</p>
                </div>
              </div>
            </div>

            {/* Middle */}
            <div className="p-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="space-y-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <User size={16} className="text-orange-500" />
                    <p className="font-semibold text-slate-900">Customer Info</p>
                  </div>

                  <p className="text-slate-800 font-medium">{order.customer}</p>
                  <p className="text-slate-500 text-sm mt-1">{order.phone}</p>
                  <p className="text-slate-500 text-sm mt-2">{order.address}</p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Store size={16} className="text-orange-500" />
                    <p className="font-semibold text-slate-900">Order Items</p>
                  </div>

                  <div className="space-y-2">
                    {order.items.map((item, i) => (
                      <p key={i} className="text-sm text-slate-600">
                        • {item}
                      </p>
                    ))}
                  </div>

                  <div className="mt-3 text-sm">
                    <span className="font-medium text-slate-700">Payment:</span>{" "}
                    <span
                      className={
                        order.payment === "Paid"
                          ? "text-emerald-600 font-semibold"
                          : "text-slate-600 font-semibold"
                      }
                    >
                      {order.payment}
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center gap-2 mb-4">
                  <Bike size={16} className="text-orange-500" />
                  <p className="font-semibold text-slate-900">Live Progress</p>
                </div>

                {order.status === "Cancelled" ? (
                  <div className="rounded-2xl bg-red-50 border border-red-100 p-4 text-red-600 font-medium">
                    This order has been cancelled.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {statusSteps.map((step, index) => {
                      const state = getStepState(order.status, step);

                      return (
                        <div key={step} className="flex items-start gap-3">
                          <div
                            className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                              state === "done"
                                ? "bg-emerald-500 text-white"
                                : state === "current"
                                ? "bg-orange-500 text-white"
                                : "bg-slate-200 text-slate-500"
                            }`}
                          >
                            {index + 1}
                          </div>

                          <div className="flex-1">
                            <p
                              className={`font-medium ${
                                state === "done"
                                  ? "text-emerald-600"
                                  : state === "current"
                                  ? "text-orange-600"
                                  : "text-slate-500"
                              }`}
                            >
                              {step}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                <div className="mt-5 pt-4 border-t border-slate-200">
                  <p className="text-sm text-slate-500">Assigned Rider</p>
                  <p className="font-semibold text-slate-900 mt-1">{order.rider}</p>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="px-5 pb-5 flex flex-wrap gap-3">
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition">
                <Phone size={16} />
                Call Customer
              </button>

              <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-blue-400 hover:text-blue-600 transition">
                <MapPin size={16} />
                Track Location
              </button>

              <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-emerald-400 hover:text-emerald-600 transition">
                <CheckCircle2 size={16} />
                Update Status
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}