import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-20 bg-black">
      <Link href={`/`}>
        <h2 className="text-4xl text-white font-semibold p-4">URL Shortener Website</h2>
      </Link>
    </header>
  );
}