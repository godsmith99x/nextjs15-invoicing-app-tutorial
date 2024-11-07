import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import StatusBadge from "@/components/StatusBadge";
import Link from "next/link";
import { db } from "@/db";
import { Invoices } from "@/db/schema";

export default async function Dashboard() {
  const invoices = await db.select().from(Invoices);
  return (
    <main className="flex flex-col justify-center gap-6 h-full text-center max-w-5xl mx-3 my-12">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Invoices</h1>
        <p>
          <Button className="inline-flex gap-2" variant="ghost" asChild>
            <Link href="/invoices/new">
              <CirclePlus className="h-4 w-4" />
              Create Invoice
            </Link>
          </Button>
        </p>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-left p-4">Date</TableHead>
            <TableHead className="text-left p-4">Customer</TableHead>
            <TableHead className="text-left p-4">Email</TableHead>
            <TableHead className="text-center p-4">Status</TableHead>
            <TableHead className="text-right p-4">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => {
            return (
              <TableRow key={invoice.id}>
                <TableCell className="font-medium text-left p-0">
                  <Link
                    href={`/invoices/${invoice.id}`}
                    className="font-semibold block p-4"
                  >
                    {new Date(invoice.timestamp).toLocaleDateString()}
                  </Link>
                </TableCell>
                <TableCell className="text-left p-0">
                  <Link
                    href={`/invoices/${invoice.id}`}
                    className="font-semibold block p-4"
                  >
                    Bob Belcher
                  </Link>
                </TableCell>
                <TableCell className="text-left p-0">
                  <Link href={`/invoices/${invoice.id}`} className="block p-4">
                    bob@bobsburgers.com
                  </Link>
                </TableCell>
                <TableCell className="text-center p-0">
                  <Link href={`/invoices/${invoice.id}`} className="block p-4">
                    <StatusBadge status={invoice.status} />
                  </Link>
                </TableCell>
                <TableCell className="text-right p-0">
                  <Link
                    href={`/invoices/${invoice.id}`}
                    className="font-semibold block p-4"
                  >
                    ${invoice.value}
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </main>
  );
}
