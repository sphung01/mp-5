import URLShortenForm from "@/components/URLShortenForm";

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center">
      <h2>Hello and welcome to my URL Shortener Website</h2>
      <URLShortenForm />
    </main>
  );
}
