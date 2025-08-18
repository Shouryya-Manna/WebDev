import { z } from "zod";


export const eventSchema = z.object({
  event_name: z.string().min(4, "The minimum length of an event name must be 4 characters"),
  event_date: z.date({
    required_error: "Event date is required",
    invalid_type_error: "Invalid date format",
  }),
  event_venue: z.string().min(3, "The minimum length of venue must be 3 characters"),
});


export const ticketSchema = z.object({
  event_id: z.string().min(1, "Event must be selected"),
  name: z.string().min(4, "The minimum length of a username must be 4 characters"),
  age: z.coerce.number().min(18, "The minimum age must be 18"),

});


export const columns = [
  {
    accessorKey: "ticket_id",
    header: "Ticket ID",
  },
  {
    accessorKey: "name", 
    header: "Name",
  },
  {
    accessorKey: "age", 
    header: "Age",
  },
  {
    accessorKey: "event", 
    header: "Event",
  },
];


export default columns;