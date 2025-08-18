import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ticketSchema } from "@/schemas/Schema";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useMovieTicketMutations } from "@/api/mutations";
import { useMovieTicketQueries, useShowAllTicketsQueries } from "@/api/Queries";
import { toast } from "sonner";
import TableSchema from "@/schemas/TableSchema";
import ticketTableColumns from "../schemas/Schema";

const Ticket = () => {
  const { events } = useMovieTicketQueries();
  const { ticketMutation } = useMovieTicketMutations();
  const { tickets } = useShowAllTicketsQueries();

  const [selectedEventId, setSelectedEventId] = useState("");

  const form = useForm({
    resolver: zodResolver(ticketSchema),
    defaultValues: {
      event_id: "",
      user_name: "",
      user_age: 0,
    },
  });

  const onSubmit = (values) => {
    ticketMutation.mutate(values, {
      onSuccess: () => {
        toast.success("Ticket Created", {
          description: `Ticket for ${values.user_name} booked successfully`,
        });
        form.reset();
        tickets.refetch();
      },
      onError: (err) => {
        toast.error("Failed to create ticket", {
          description: err.message || "Something went wrong.",
        });
      },
    });
  };

  const filteredTickets =
    tickets.data?.filter(
      (ticket) => String(ticket.event_id) === String(selectedEventId)
    ) || [];

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center bg-slate-300 m-10 p-10 rounded-3xl shadow-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Generate Ticket</CardTitle>
            <CardDescription>
              Choose the event and fill the name and age
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <FormField
                  control={form.control}
                  name="event_id"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Event</FormLabel>
                      <Select
                        onValueChange={(value) => {
                          form.setValue("event_id", value);
                          setSelectedEventId(value);
                        }}
                        value={form.watch("event_id")}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select an event" />
                        </SelectTrigger>
                        <SelectContent>
                          {events.data?.map((event) => (
                            <SelectItem
                              key={event.event_id}
                              value={String(event.event_id)}
                            >
                              {event.event_name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="user_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter username"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="user_age"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Age</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter age"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="bg-pink-500 border-2 border-red-500 shadow-lg hover:bg-red-600"
                >
                  Submit
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
      <TableSchema columns={ticketTableColumns} data={filteredTickets} />
    </div>
  );
};

export default Ticket;
