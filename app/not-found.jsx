import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center mt-10">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-4xl font-bold mb-4">There was a problem</h2>
      <p className="text-lg mb-4">We could not find the page you were looking for</p>
      <p className="text-lg">
        Go back to the<Link href="/"> Dashboard</Link>
      </p>
    </main>
  );
}

