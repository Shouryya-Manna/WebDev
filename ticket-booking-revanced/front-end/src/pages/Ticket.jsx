import React, { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { eventSchema, ticketSchema } from "@/schemas/Schema";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useMovieTicketMutations } from "@/api/mutations";
import { useMovieTicketQueries } from "@/api/Queries";

import { toast } from "sonner";

const Ticket = () => {
  const { events } = useMovieTicketQueries();
  const { ticketMutation } = useMovieTicketMutations();

  const form = useForm({
    resolver: zodResolver(ticketSchema),
    defaultValues: {
      event_id: "",
      user_name: "",
      user_age: 0,
    },
  });

  const onSubmit = (values) => {
    ticketMutation.mutate(
      values,

      {
        onSuccess: () => {
          toast.success("Ticket Created", {
            description: `Ticket for ${values.user_name} booked successfully`,
          });
        },
        onError: (err) => {
          toast.error("Failed to create ticket", {
            description: err.message || "Something went wrong.",
          });
        },
      }
    );
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" flex flex-col justify-center items-center bg-slate-300 m-20 p-28 rounded-3xl shadow-2xl mw-1/3 min-w-52 ">
        <Card className=" w-64 mb-11">
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
                      <FormLabel htmlFor="event">Event</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select a event" />
                        </SelectTrigger>
                        <SelectContent>
                          {events.data?.map((event) => (
                            <SelectItem
                              key={event.event_id}
                              value={event.event_id}
                            >
                              {event.event_name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <FormDescription />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="user_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="username">Name</FormLabel>
                      <FormControl>
                        <Input
                          id="username"
                          type="text"
                          placeholder="Enter username"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="user_age"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="userage">Age</FormLabel>
                      <FormControl>
                        <Input
                          id="userage"
                          type="number"
                          placeholder="Enter age"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription />
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
    </div>
  );
};

export default Ticket;
