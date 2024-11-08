import {
  decimal,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export enum StatusEnum {
  Open = "open",
  Paid = "paid",
  Partial = "partial",
  Uncollectible = "uncollectible",
  Void = "void",
}

export const statusEnum = pgEnum("status", [
  StatusEnum.Open,
  StatusEnum.Paid,
  StatusEnum.Partial,
  StatusEnum.Uncollectible,
  StatusEnum.Void,
]);

export const Invoices = pgTable("invoices", {
  id: serial("id").primaryKey().notNull(),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
  status: statusEnum("status").notNull(),
  value: decimal("value").notNull(),
  description: text("description").notNull(),
});
