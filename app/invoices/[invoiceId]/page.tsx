import { db } from "@/db";
import { Invoices } from "@/db/schema";
import { eq } from "drizzle-orm";
import StatusBadge from "@/components/StatusBadge";
import { notFound } from "next/navigation";
import Container from "@/components/Container";

export default async function InvoicePage(props: {
  params: Promise<{ invoiceId: string }>;
}) {
  const params = await props.params;
  const invoiceId = parseInt(params.invoiceId);

  if (isNaN(invoiceId)) {
    throw new Error("Invalid invoice ID");
  }

  const [invoice] = await db
    .select()
    .from(Invoices)
    .where(eq(Invoices.id, invoiceId))
    .limit(1);

  if (!invoice) {
    notFound();
  }

  return (
    <main className="flex h-full my-12">
      <Container>
        <div className="flex justify-between mb-8">
          <h1 className="flex items-center gap-3 text-3xl font-bold">
            Invoice {invoiceId}
            <StatusBadge status={invoice.status} />
          </h1>
          <p></p>
        </div>

        <p className="text-3xl mb-3">${invoice.value}</p>

        <p className="text-lg mb-8">{invoice.description}</p>

        <h2 className="font-bold text-lg mb-4">Billing Details</h2>

        <ul className="grid gap-2">
          <li className="flex gap-4">
            <strong className="block w-28 flex-shrink-0 font-medium text-sm">
              Invoice ID
            </strong>
            <span>{invoice.id}</span>
          </li>
          <li className="flex gap-4">
            <strong className="block w-28 flex-shrink-0 font-medium text-sm">
              Invoice Date
            </strong>
            <span>{new Date(invoice.timestamp).toLocaleDateString()}</span>
          </li>
          <li className="flex gap-4">
            <strong className="block w-28 flex-shrink-0 font-medium text-sm">
              Billing Name
            </strong>
            <span></span>
          </li>
          <li className="flex gap-4">
            <strong className="block w-28 flex-shrink-0 font-medium text-sm">
              Billing Email
            </strong>
            <span></span>
          </li>
        </ul>
      </Container>
    </main>
  );
}
