import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center gap-6 h-screen text-center max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold">Invoicipedia</h1>
      <p>
        <Button asChild>
          <Link className="text-center" href="/dashboard">
            Sign In
          </Link>
        </Button>
      </p>
    </main>
  );
}