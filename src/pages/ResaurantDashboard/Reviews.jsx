import React, { useMemo, useState } from "react";
import {
  Search,
  Star,
  Filter,
  MessageSquare,
  Eye,
  ThumbsUp,
  Flag,
} from "lucide-react";

const reviewsData = [
  {
    id: "REV-1001",
    customer: "Aman Verma",
    orderId: "#ORD-2001",
    dish: "Chicken Biryani",
    rating: 5,
    review:
      "Amazing taste and very fast delivery. Packaging was also very premium.",
    date: "06 Mar 2026",
    status: "Published",
  },
  {
    id: "REV-1002",
    customer: "Riya Sharma",
    orderId: "#ORD-2002",
    dish: "Butter Chicken",
    rating: 4,
    review:
      "Taste was very good, but naan could have been softer. Overall nice experience.",
    date: "06 Mar 2026",
    status: "Published",
  },
  {
    id: "REV-1003",
    customer: "Vikas Patel",
    orderId: "#ORD-2003",
    dish: "Veg Fried Rice",
    rating: 3,
    review:
      "Quantity was okay, but food arrived a little cold. Can be improved.",
    date: "05 Mar 2026",
    status: "Needs Attention",
  },
  {
    id: "REV-1004",
    customer: "Neha Singh",
    orderId: "#ORD-2004",
    dish: "Masala Dosa",
    rating: 5,
    review:
      "Crispy dosa and perfect chutney. Loved it. Will order again for sure.",
    date: "05 Mar 2026",
    status: "Published",
  },
  {
    id: "REV-1005",
    customer: "Rohit Jain",
    orderId: "#ORD-2005",
    dish: "Veg Noodles",
    rating: 2,
    review:
      "Noodles were too oily and taste was average. Delivery timing was good though.",
    date: "04 Mar 2026",
    status: "Reported",
  },
];

const ratingFilters = ["All", "5 Star", "4 Star", "3 Star", "2 Star", "1 Star"];

const getStatusStyle = (status) => {
  switch (status) {
    case "Published":
      return "bg-emerald-100 text-emerald-700";
    case "Needs Attention":
      return "bg-amber-100 text-amber-700";
    case "Reported":
      return "bg-red-100 text-red-700";
    default:
      return "bg-slate-100 text-slate-700";
  }
};

const renderStars = (rating) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={14}
          className={
            star <= rating
              ? "text-amber-400 fill-amber-400"
              : "text-slate-300"
          }
        />
      ))}
    </div>
  );
};

export default function Reviews() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredReviews = useMemo(() => {
    return reviewsData.filter((review) => {
      const q = search.toLowerCase();

      const matchesSearch =
        review.customer.toLowerCase().includes(q) ||
        review.orderId.toLowerCase().includes(q) ||
        review.dish.toLowerCase().includes(q) ||
        review.review.toLowerCase().includes(q);

      const matchesRating =
        activeFilter === "All"
          ? true
          : review.rating === Number(activeFilter.charAt(0));

      return matchesSearch && matchesRating;
    });
  }, [search, activeFilter]);

  const stats = {
    total: reviewsData.length,
    avgRating: (
      reviewsData.reduce((sum, item) => sum + item.rating, 0) / reviewsData.length
    ).toFixed(1),
    published: reviewsData.filter((item) => item.status === "Published").length,
    attention: reviewsData.filter((item) => item.status === "Needs Attention").length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
        <div>
          <p className="text-sm text-slate-500 font-medium">Review Management</p>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
            Customer Reviews
          </h1>
          <p className="text-slate-500 mt-1">
            Monitor customer feedback and improve restaurant experience.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 font-medium hover:border-orange-400 hover:text-orange-500 transition">
            Export
          </button>
          <button className="bg-orange-500 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-orange-600 transition shadow-sm">
            Respond to Reviews
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
          <p className="text-sm text-slate-500">Total Reviews</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-2">{stats.total}</h3>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
          <p className="text-sm text-slate-500">Average Rating</p>
          <h3 className="text-2xl font-bold text-amber-500 mt-2">{stats.avgRating}</h3>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
          <p className="text-sm text-slate-500">Published</p>
          <h3 className="text-2xl font-bold text-emerald-600 mt-2">{stats.published}</h3>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
          <p className="text-sm text-slate-500">Needs Attention</p>
          <h3 className="text-2xl font-bold text-amber-600 mt-2">{stats.attention}</h3>
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
              placeholder="Search by customer, order id, dish..."
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
          {ratingFilters.map((item) => (
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
            Reviews List
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            {filteredReviews.length} review(s) found
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1200px]">
            <thead>
              <tr className="bg-slate-50 text-left text-sm text-slate-500">
                <th className="px-5 py-4 font-semibold">Customer</th>
                <th className="px-5 py-4 font-semibold">Order</th>
                <th className="px-5 py-4 font-semibold">Dish</th>
                <th className="px-5 py-4 font-semibold">Rating</th>
                <th className="px-5 py-4 font-semibold">Review</th>
                <th className="px-5 py-4 font-semibold">Date</th>
                <th className="px-5 py-4 font-semibold">Status</th>
                <th className="px-5 py-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredReviews.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-slate-100 hover:bg-slate-50 transition"
                >
                  <td className="px-5 py-4">
                    <p className="font-semibold text-slate-900">{item.customer}</p>
                    <p className="text-sm text-slate-500">{item.id}</p>
                  </td>

                  <td className="px-5 py-4 text-slate-600">{item.orderId}</td>

                  <td className="px-5 py-4 text-slate-700 font-medium">{item.dish}</td>

                  <td className="px-5 py-4">{renderStars(item.rating)}</td>

                  <td className="px-5 py-4 max-w-[320px]">
                    <p className="text-sm text-slate-600 line-clamp-2">{item.review}</p>
                  </td>

                  <td className="px-5 py-4 text-slate-600">{item.date}</td>

                  <td className="px-5 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <button className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 hover:bg-orange-100 hover:text-orange-600 transition flex items-center justify-center">
                        <Eye size={16} />
                      </button>
                      <button className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 hover:bg-emerald-100 hover:text-emerald-600 transition flex items-center justify-center">
                        <ThumbsUp size={16} />
                      </button>
                      <button className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 hover:bg-red-100 hover:text-red-600 transition flex items-center justify-center">
                        <Flag size={16} />
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
        {filteredReviews.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl border border-slate-100 shadow-sm p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-bold text-slate-900 text-lg">{item.customer}</h3>
                <p className="text-sm text-slate-500 mt-1">{item.orderId}</p>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                  item.status
                )}`}
              >
                {item.status}
              </span>
            </div>

            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <MessageSquare size={15} className="text-orange-500" />
                {item.dish}
              </div>

              <div>{renderStars(item.rating)}</div>

              <p className="text-slate-600 leading-relaxed">{item.review}</p>

              <p className="text-slate-500">{item.date}</p>
            </div>

            <div className="mt-4 flex gap-2">
              <button className="flex-1 py-2.5 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition font-medium">
                View
              </button>
              <button className="flex-1 py-2.5 rounded-xl border border-slate-200 bg-white hover:border-orange-400 hover:text-orange-500 transition font-medium">
                Reply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}