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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useMovieTicketMutations } from "@/api/mutations";

const Event = () => {

  const {eventMutation} = useMovieTicketMutations();
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventVenue, setEventVenue] = useState("");


   function handleEventName(e) {
    setEventName(e.target.value);
  }

  function handleEventDate(e) {
    setEventDate(e.target.value);
  }

  function handleEventVenue(e) {
    setEventVenue(e.target.value);
  }

    function handleSubmit() {
    eventMutation.mutate({
      event_name: eventName,
      event_date: eventDate,
      event_venue: eventVenue,
    });
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" flex flex-col justify-center items-center bg-slate-300 m-20 p-28 rounded-3xl shadow-2xl mw-1/3 min-w-52 ">
        <Card className=" w-64 mb-11">
          <CardHeader>
            <CardTitle>Generate Event</CardTitle>
            <CardDescription>
              Describe the event name, date and venue
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Label htmlFor="event-name">Name</Label>
            <Input className="my-2" type="text" onChange={handleEventName}/>

            <Label htmlFor="event-date">Date</Label>
            <Input className="my-2" type="date" onChange={handleEventDate} />

            <Label htmlFor="event-venue">Venue</Label>
            <Input className="my-2" type="text" onChange={handleEventVenue}/>
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

export default Event;
