
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const MessagesSection = () => {
  const [activeConversation, setActiveConversation] = useState<number | null>(null);
  
  // Empty state - no conversations
  const conversations = [];

  return (
    <div className="h-[600px] flex">
      {/* Conversations List */}
      <div className="w-1/3 border-r overflow-y-auto">
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Messages</h2>
          {conversations.length > 0 ? (
            <div className="space-y-2">
              {conversations.map((convo: any) => (
                <button
                  key={convo.id}
                  onClick={() => setActiveConversation(convo.id)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    activeConversation === convo.id
                      ? "bg-blue-50"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="font-medium">{convo.with}</div>
                    <div className="text-xs text-gray-500">{convo.timestamp}</div>
                  </div>
                  <div className="text-sm text-gray-500">{convo.role}</div>
                  <div className="text-sm mt-1 truncate">
                    {convo.unread && (
                      <span className="inline-block w-2 h-2 bg-crossover-blue rounded-full mr-2"></span>
                    )}
                    {convo.lastMessage}
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <MessageCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-700 mb-2">No Messages Yet</h3>
              <p className="text-gray-500">
                You don't have any messages yet. Messages from recruiters and hiring managers will appear here.
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* Message Content */}
      <div className="w-2/3 flex flex-col">
        <div className="flex-grow flex items-center justify-center text-gray-500">
          Select a conversation to view messages
        </div>
      </div>
    </div>
  );
};

export default MessagesSection;
