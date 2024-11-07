import { db } from "@/db";
import { Invoices } from "@/db/schema";
import { eq } from "drizzle-orm";
import StatusBadge from "@/components/StatusBadge";

export default async function InvoicePage(props: {
  params: Promise<{ invoiceId: string }>;
}) {
  const params = await props.params;
  const invoiceId = parseInt(params.invoiceId);

  if (isNaN(invoiceId)) {
    return (
      <main className="flex flex-col justify-center gap-6 h-full text-center max-w-5xl mx-3 my-12">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">Invalid Invoice ID</h1>
        </div>
      </main>
    );
  }

  const [invoice] = await db
    .select()
    .from(Invoices)
    .where(eq(Invoices.id, invoiceId))
    .limit(1);

  if (invoice === undefined) {
    return (
      <main className="flex flex-col justify-center gap-6 h-full text-center max-w-5xl mx-3 my-12">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">Invoice Not Found</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="h-full max-w-5xl mx-3 my-12">
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
    </main>
  );
}
