import UploadCard from '../components/UploadCard';
import ThemeToggle from '../components/ThemeToggle';
export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6 p-8">
      <h1 className="text-4xl font-bold">ClasificaAI</h1>
      <p className="text-gray-500">Subí tu archivo y obtené la clasificación arancelaria automáticamente.</p>
      <UploadCard />
      <ThemeToggle />
    </main>
  );
}