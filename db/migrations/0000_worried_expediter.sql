CREATE TYPE "public"."status" AS ENUM('draft', 'sent', 'paid', 'void', 'refunded', 'partial', 'uncollectible');--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "invoices" (
	"id" serial PRIMARY KEY NOT NULL,
	"timestamp" timestamp DEFAULT now() NOT NULL,
	"status" "status" NOT NULL,
	"value" integer NOT NULL,
	"description" text NOT NULL
);
