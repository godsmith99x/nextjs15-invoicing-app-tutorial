import Container from "@/components/Container";

const Footer = () => {
  return (
    <header className="mt-6 mb-8">
      <Container className="flex justify-between text-sm">
        <p>Invoicipeda &copy; {new Date().getFullYear()}</p>
        <p>Created Godsmith with Next.js, Postgres, and Clerk</p>
      </Container>
    </header>
  );
};

export default Footer;
