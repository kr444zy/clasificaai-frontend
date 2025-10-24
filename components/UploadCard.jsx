export default function UploadCard() {
  return (
    <div className="p-6 border rounded-2xl shadow bg-white dark:bg-gray-800">
      <p>📦 Subí tu archivo (PDF, Word, Excel, etc.)</p>
      <input type="file" className="mt-2" />
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">Analizar</button>
    </div>
  );
}