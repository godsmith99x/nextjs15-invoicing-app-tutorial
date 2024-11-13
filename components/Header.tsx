import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Container from "@/components/Container";
import Link from "next/link";

const Header = () => {
  return (
    <header className="mt-3">
      <Container>
        <div className="flex justify-between items-center gap-6 py-2">
          <Link className="font-bold" href="/dashboard">
            Invoicipedia
          </Link>
          <div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
