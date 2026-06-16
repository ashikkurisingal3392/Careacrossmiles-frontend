export default function PageLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/70 backdrop-blur-sm z-50">
      <div className="animate-spin h-12 w-12 border-4 border-green-500 border-t-transparent rounded-full"></div>
    </div>
  );
}