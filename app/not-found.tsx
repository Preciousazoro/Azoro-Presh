export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen text-white bg-black">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-lg mb-6">Page not found</p>
        <a
          href="/"
          className="px-4 py-2 bg-red-500 rounded hover:bg-red-600"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}