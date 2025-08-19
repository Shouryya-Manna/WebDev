import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowUpDown} from "lucide-react"
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
  event: z.string()
});



export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "ticket_id",
    header: "Ticket ID",
    cell: ({ row }) => (
      <div className="">{row.getValue("ticket_id")}</div>
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "age",
    header: () => <div className="text-right">Age</div>,
    cell: ({ row }) => (
      <div className="text-right font-medium">{row.getValue("age")}</div>
    ),
  },
  {
    accessorKey: "event",
    header: "Event",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("event")}</div>
    ),
  },

  
]
export default columns;