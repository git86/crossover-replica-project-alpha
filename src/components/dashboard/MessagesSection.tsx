
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const MessagesSection = () => {
  const [activeConversation, setActiveConversation] = useState<number | null>(1);
  
  // Mock conversations data
  const conversations = [
    {
      id: 1,
      with: "Sarah Johnson",
      role: "Hiring Manager at Tech Innovations",
      lastMessage: "Thanks for your interest! I'd like to schedule an interview...",
      timestamp: "10:32 AM",
      unread: true
    },
    {
      id: 2,
      with: "Michael Chen",
      role: "Recruiter at Global Solutions",
      lastMessage: "Your application has been received. We'll review it shortly...",
      timestamp: "Yesterday",
      unread: false
    },
    {
      id: 3,
      with: "USS Agency Team",
      role: "Support",
      lastMessage: "Here are some tips to help you prepare for your upcoming assessment...",
      timestamp: "Nov 10",
      unread: false
    }
  ];
  
  // Mock messages for the active conversation
  const messages = [
    {
      id: 1,
      from: "Sarah Johnson",
      content: "Hi there! I've reviewed your application for the Senior Frontend Developer position and I'm impressed with your background.",
      timestamp: "10:30 AM",
      isSender: false
    },
    {
      id: 2,
      from: "Sarah Johnson",
      content: "Thanks for your interest! I'd like to schedule an interview for next week. Would you be available on Tuesday at 2pm EST?",
      timestamp: "10:32 AM",
      isSender: false
    },
    {
      id: 3,
      from: "Me",
      content: "Hello Sarah! Thank you for considering my application. Yes, I'm available on Tuesday at 2pm EST for the interview.",
      timestamp: "10:45 AM",
      isSender: true
    }
  ];

  return (
    <div className="h-[600px] flex">
      {/* Conversations List */}
      <div className="w-1/3 border-r overflow-y-auto">
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Messages</h2>
          <div className="space-y-2">
            {conversations.map((convo) => (
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
        </div>
      </div>
      
      {/* Message Content */}
      <div className="w-2/3 flex flex-col">
        {activeConversation ? (
          <>
            {/* Conversation Header */}
            <div className="p-4 border-b">
              <div className="font-semibold">
                {conversations.find(c => c.id === activeConversation)?.with}
              </div>
              <div className="text-sm text-gray-500">
                {conversations.find(c => c.id === activeConversation)?.role}
              </div>
            </div>
            
            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div 
                  key={message.id}
                  className={`flex ${message.isSender ? "justify-end" : "justify-start"}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.isSender 
                        ? "bg-crossover-blue text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {!message.isSender && (
                      <div className="font-medium text-sm mb-1">{message.from}</div>
                    )}
                    <div>{message.content}</div>
                    <div className={`text-xs mt-1 ${message.isSender ? "text-blue-100" : "text-gray-500"}`}>
                      {message.timestamp}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Message Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input 
                  type="text"
                  placeholder="Type a message..."
                  className="flex-grow rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Button>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Send
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-grow flex items-center justify-center text-gray-500">
            Select a conversation to view messages
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagesSection;
