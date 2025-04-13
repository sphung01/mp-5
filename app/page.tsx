import URLShortenForm from "@/components/URLShortenForm";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center">
      <h1>Hello and welcome to my URL Shortener Website</h1>
        <URLShortenForm />
    </div>
  );
}
