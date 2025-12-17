"use client";

export default function UnauthorizedPage() {
  return (
    <div className="min-h-[60vh] flex flex-direction: column items-center justify-center text-center px-4">
      <h1 className="text-3xl font-bold mb-4">Access Denied</h1>
      <p className="text-gray-600 mb-4">
        You don&apos;t have permission to view this page. If you believe this is
        a mistake, please contact an administrator.
      </p>
      <a
        href="/"
        className="mt-4 inline-block px-6 py-2 rounded-full bg-[var(--color-primary)] text-white font-semibold hover:opacity-90"
      >
        Go to Home
      </a>
    </div>
  );
}
