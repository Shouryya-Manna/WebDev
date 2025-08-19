import React from "react";
import { useSelectedTicket } from "@/stores/Ticket";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TicketDetails = () => {
  const { selectedTicket, clearTicket } = useSelectedTicket();
  const navigate = useNavigate();

  if (!selectedTicket) {
    return <div>No ticket selected!</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <Card className=" m-4 shadow-lg">
        <CardHeader>
          <CardTitle>Ticket Details</CardTitle>
          <CardDescription>
            This shows the details of the user for an event
          </CardDescription>
        </CardHeader>
        <CardContent>
          <b>Ticket ID:</b> {selectedTicket.ticket_id}
        </CardContent>
        <CardContent>
          <b>Name:</b> {selectedTicket.name}
        </CardContent>
        <CardContent>
          <b>Age:</b> {selectedTicket.age}
        </CardContent>
        <CardContent>
          <b>Event:</b> {selectedTicket.event}
        </CardContent>
      </Card>

      <Button
        onClick={() => {
          clearTicket();
          navigate("/table");
        }}
      >
        Back
      </Button>
    </div>
  );
};

export default TicketDetails;
