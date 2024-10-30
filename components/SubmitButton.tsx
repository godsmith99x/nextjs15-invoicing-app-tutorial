"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { Loader } from "lucide-react";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button className="relative w-full font-semibold">
      <span className={pending ? "text-transparent" : ""}>Submit</span>
      {pending && (
        <span className="absolute items-center justify-center text-gray-400">
          <Loader className="animate-spin" />
        </span>
      )}
    </Button>
  );
};

export default SubmitButton;
