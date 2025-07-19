export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-red-500 mb-4">Tailwind Test Page</h1>
      <div className="w-full h-px bg-red-500 mb-4" style={{backgroundColor: 'red', height: '1px', width: '100%'}}></div>
      <div className="bg-blue-500 text-white p-4 rounded-lg">
        Blue Box with Tailwind Classes
      </div>
      <div className="mt-4 bg-green-500 w-32 h-32"></div>
      <p className="text-lg text-gray-700 mt-4">This is a test paragraph with Tailwind classes.</p>
    </div>
  );
}