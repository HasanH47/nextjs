"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center overflow-hidden relative">
      {/* Background animated circles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20">
          <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-6 animate-pulse">
            Hello World
          </h1>
          <p className="text-white/80 text-xl md:text-2xl font-light tracking-wide mb-8">
            Welcome to the beautiful universe of code
          </p>
          <div className="flex justify-center space-x-4">
            <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce"></div>
            <div
              className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-3 h-3 bg-indigo-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full animate-ping"></div>
        <div
          className="absolute -bottom-4 -right-4 w-6 h-6 bg-pink-400 rounded-full animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="star absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-twinkle"></div>
        <div
          className="star absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-twinkle"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="star absolute bottom-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-twinkle"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="star absolute bottom-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-twinkle"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-twinkle {
          animation: twinkle 3s infinite;
        }
      `}</style>
    </div>
  );
}
