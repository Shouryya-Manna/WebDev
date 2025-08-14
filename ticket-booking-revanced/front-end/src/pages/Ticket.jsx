import React, { useState } from "react";
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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useMovieTicketMutations } from "@/api/mutations";
import { useMovieTicketQueries } from "@/api/Queries";

import { toast } from "sonner";

const Ticket = () => {
  const { events } = useMovieTicketQueries();
  const { ticketMutation } = useMovieTicketMutations();
  const [selectedEventId, setSelectedEventId] = useState("");
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  function handleEvent(e) {
    setSelectedEventId(e);
  }

  function handleUserName(e) {
    setUserName(e.target.value);
  }

  function handleUserAge(e) {
    setUserAge(e.target.value);
  }

  function handleSubmit() {
    ticketMutation.mutate(
      {
        event_id: selectedEventId,
        user_name: userName,
        user_age: Number(userAge),
      },
      {
        onSuccess: () => {
          toast.success("Ticket Created", {
            description: `Ticket for ${userName} booked successfully`,
          });
        },
        onError: (err) => {
          toast.error("Failed to create ticket", {
            description: err.message || "Something went wrong.",
          });
        },
      }
    );
  }

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
            <Label htmlFor="event-name">Events</Label>
            <Select onValueChange={handleEvent}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a event" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {events.data?.map((data) => (
                    <SelectItem key={data.event_id} value={data.event_id}>
                      {data.event_name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Label htmlFor="username">Name</Label>
            <Input className="my-2" type="text" onChange={handleUserName} />

            <Label htmlFor="event-venue">Age</Label>
            <Input className="my-2" type="text" onChange={handleUserAge} />
          </CardContent>
        </Card>
        <Button
          className=" bg-pink-500 border-2 border-red-500 shadow-lg hover:bg-red-600"
          variant="default"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Ticket;
