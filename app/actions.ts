"use server";

import { db } from "@/db";
import { Invoices } from "@/db/schema";
import { redirect } from "next/navigation";

export async function createInvoiceRecord(formData: FormData) {
  const value = parseFloat(String(formData.get("value"))).toFixed(2);
  const description = String(formData.get("description"));

  const submissionResults = await db
    .insert(Invoices)
    .values({
      value,
      description,
      status: "open",
    })
    .returning({ id: Invoices.id });

  redirect(`/invoices/${submissionResults[0].id}`);
}
