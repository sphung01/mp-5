import URLShortenForm from "@/components/URLShortenForm";

export default async function Home() {
  return (
    <main className="flex flex-col items-center text-center space-y-6 bg-green-100 min-h-screen">
      <h2 className="text-3xl font-bold">
        URL Shortener
      </h2>
      <p className="text-lg w-100">
        Welcome to the URL Shortener website! Please submit any URLs that you want to shorten!
      </p>
      <URLShortenForm />
    </main>
  );
}
