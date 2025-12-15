"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface HealthResponse {
  status: string;
  database: string;
}

async function fetchHealth(): Promise<HealthResponse> {
  const response = await axios.get<HealthResponse>(
    "http://localhost:8000/health"
  );
  return response.data;
}

export function HealthCheck() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["health"],
    queryFn: fetchHealth,
    refetchInterval: 5000,
  });

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-2xl max-w-md w-full">
      <h1 className="text-2xl font-bold text-white mb-6">
        FastAPI Health Check
      </h1>

      {isLoading && (
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-gray-400">Checking health...</span>
        </div>
      )}

      {isError && (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-red-500 rounded-full" />
            <span className="text-red-400 font-medium">Unhealthy</span>
          </div>
          <p className="text-gray-500 text-sm">
            {error instanceof Error ? error.message : "Connection failed"}
          </p>
        </div>
      )}

      {data && (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-emerald-400 font-medium capitalize">
              {data.status}
            </span>
          </div>

          <div className="bg-gray-800 rounded-lg p-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Status</span>
              <span className="text-white font-mono">{data.status}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Database</span>
              <span className="text-white font-mono">{data.database}</span>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => refetch()}
        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors cursor-pointer"
      >
        Refresh
      </button>
    </div>
  );
}

