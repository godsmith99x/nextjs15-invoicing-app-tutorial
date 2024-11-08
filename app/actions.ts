"use server";

import { db } from "@/db";
import { Invoices, StatusEnum } from "@/db/schema";
import { redirect } from "next/navigation";

export async function createInvoiceRecord(formData: FormData) {
  const value = parseFloat(String(formData.get("value"))).toFixed(2);
  const description = String(formData.get("description"));

  if (isNaN(parseFloat(value))) {
    console.error(`Value ${value} is not a number`);
    return;
  }

  const submissionResults = await db
    .insert(Invoices)
    .values({
      value,
      description,
      status: StatusEnum.Open,
    })
    .returning({ id: Invoices.id });

  redirect(`/invoices/${submissionResults[0].id}`);
}
