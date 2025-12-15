import { HealthCheck } from "./health-check";

export default function HealthPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-950">
      <HealthCheck />
    </main>
  );
}

