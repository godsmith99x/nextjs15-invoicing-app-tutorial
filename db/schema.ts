import {
  decimal,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const statusEnum = pgEnum("status", [
  "open",
  "paid",
  "partial",
  "uncollectible",
  "void",
]);

export const Invoices = pgTable("invoices", {
  id: serial("id").primaryKey().notNull(),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
  status: statusEnum("status").notNull(),
  value: decimal("value").notNull(),
  description: text("description").notNull(),
});
