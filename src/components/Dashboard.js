import React from "react";
import OpenConversation from "./OpenConversation";
import Sidebar from "./Sidebar";
import { useConversations } from "./contexts/ConversationsProvider";
import "./css/dashboard.css";

export default function Dashboard({ id }) {
  const { selectedConversation } = useConversations();
  return (
    <div className="flex">
      <Sidebar id={id} />
      {selectedConversation && <OpenConversation />}
    </div>
  );
}
