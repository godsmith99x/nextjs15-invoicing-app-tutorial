"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createInvoiceRecord } from "@/app/actions";
import { SyntheticEvent, useState, startTransition } from "react";
import SubmitButton from "@/components/SubmitButton";

export default function NewInvoices() {
  const [state, setState] = useState("ready");

  async function handleOnSubmit(event: SyntheticEvent) {
    event.preventDefault();
    if (state === "pending") return;
    setState("pending");
    const data = event.target as HTMLFormElement;
    startTransition(async () => {
      const formData = new FormData(data);
      await createInvoiceRecord(formData);
    });
  }

  return (
    <main className="flex flex-col justify-center gap-6 h-full max-w-5xl mx-auto my-12 mx-3">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Create a New Invoice</h1>
      </div>
      <form
        action={createInvoiceRecord}
        onSubmit={handleOnSubmit}
        className="grid gap-4 max-w-xs"
      >
        <div>
          <Label htmlFor="name" className="block font-semibold text-sm mb-2">
            Billing Name
          </Label>
          <Input id="name" name="name" type="text" />
        </div>
        <div>
          <Label htmlFor="email" className="block font-semibold text-sm mb-2">
            Billing Email
          </Label>
          <Input id="email" name="email" type="email" />
        </div>
        <div>
          <Label htmlFor="value" className="block font-semibold text-sm mb-2">
            Value
          </Label>
          <Input id="value" name="value" type="text" />
        </div>
        <div>
          <Label
            htmlFor="description"
            className="block font-semibold text-sm mb-2"
          >
            Description
          </Label>
          <Textarea id="description" name="description"></Textarea>
        </div>
        <div>
          <SubmitButton />
        </div>
      </form>
    </main>
  );
}
