ALTER TABLE "public"."invoices" ALTER COLUMN "status" SET DATA TYPE text;--> statement-breakpoint
DROP TYPE "public"."status";--> statement-breakpoint
CREATE TYPE "public"."status" AS ENUM('draft', 'open', 'paid', 'partial', 'refunded', 'sent', 'uncollectible', 'void');--> statement-breakpoint
ALTER TABLE "public"."invoices" ALTER COLUMN "status" SET DATA TYPE "public"."status" USING "status"::"public"."status";