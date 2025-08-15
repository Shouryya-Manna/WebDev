import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useMovieTicketMutations } from "@/api/mutations";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { eventSchema } from "@/schemas/Schema";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";

import { Calendar } from "@/components/ui/calendar";

const Event = () => {
  const { eventMutation } = useMovieTicketMutations();

  const form = useForm({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      event_name: "",
      event_date: new Date(),
      event_venue: "",
    },
  });

  function onSubmit(values) {
    eventMutation.mutate(values, {
      onSuccess: () => {
        toast.success("Event Created", {
          description: "Your event has been added successfully.",
        });
        form.reset();
      },
      onError: (err) => {
        toast.error("Failed to create event", {
          description: err.message || "Something went wrong.",
        });
      },
    });
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center bg-slate-300 m-20 p-10 rounded-3xl shadow-2xl min-w-52">
        <Card className="w-80 mb-6">
          <CardHeader>
            <CardTitle>Generate Event</CardTitle>
            <CardDescription>
              Describe the event name, date, and venue
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
                  name="event_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="event-name">Name</FormLabel>
                      <FormControl>
                        <Input
                          id="event-name"
                          type="text"
                          placeholder="Enter event name"
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
                  name="event_date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="event-date">Date</FormLabel>
                      <FormControl>
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={(date) => field.onChange(date)}
                          className="rounded-lg border"
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
                  name="event_venue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="event-venue">Venue</FormLabel>
                      <FormControl>
                        <Input
                          id="event-venue"
                          type="text"
                          placeholder="Enter event venue"
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

export default Event;
