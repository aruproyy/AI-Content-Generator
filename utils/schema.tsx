import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const aiOutput=pgTable('AIOutput',{
    id:serial('id').primaryKey(),
    formData:varchar('formData'),
    aiResponse: text('aiResponse'),
    templateSlug:varchar('templateSlug').notNull(),
    createdBy: varchar('createdBy'),
    createdAt: varchar('createdAt')
})