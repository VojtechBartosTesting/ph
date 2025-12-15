"use client";

import { useEffect, useState } from "react";

export function StatusCheck() {
  const [isHealthy, setIsHealthy] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const checkStatus = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8000/", {
        method: "GET",
      });
      setIsHealthy(response.status === 200);
    } catch {
      setIsHealthy(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkStatus();
    const interval = setInterval(checkStatus, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-2xl max-w-md w-full">
      <h1 className="text-2xl font-bold text-white mb-6">
        API Status
      </h1>

      {isLoading && (
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-gray-400">Checking status...</span>
        </div>
      )}

      {!isLoading && isHealthy !== null && (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-4 h-4 rounded-full animate-pulse ${
                isHealthy ? "bg-green-500" : "bg-red-500"
              }`}
            />
            <span
              className={`font-medium ${
                isHealthy ? "text-green-400" : "text-red-400"
              }`}
            >
              {isHealthy ? "Online" : "Offline"}
            </span>
          </div>

          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex justify-between">
              <span className="text-gray-400">Status</span>
              <span className="text-white font-mono">
                {isHealthy ? "200 OK" : "Error"}
              </span>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={checkStatus}
        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors cursor-pointer"
      >
        Refresh
      </button>
    </div>
  );
}

