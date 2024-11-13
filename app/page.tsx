import { Button } from "@/components/ui/button";
import Link from "next/link";
import Container from "@/components/Container";

export default function Home() {
  return (
    <main className="flex flex-col justify-center text-center my-20">
      <Container>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Invoicipedia
        </h1>
        <div>
          <Button asChild>
            <Link className="text-center" href="/dashboard">
              Sign In
            </Link>
          </Button>
        </div>
      </Container>
    </main>
  );
}
