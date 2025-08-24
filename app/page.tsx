import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 text-white px-6">
      {/* Headline */}
      <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg text-center">
        Welcome to Your Dashboard Hub
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl mb-8 max-w-2xl text-center opacity-90">
        Manage, create, and explore dashboards with ease.  
        Start building your personalized workspace today.
      </p>

      {/* Button */}
      <Link href="/DashboardList">
        <button className="px-8 py-4 bg-white text-blue-700 font-semibold text-lg rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300 hover:shadow-2xl">
          Create Dashboards
        </button>
      </Link>
    </div>
  );
}
