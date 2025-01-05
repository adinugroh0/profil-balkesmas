import React, { useState } from "react";

const ChatBox: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { user: userMessage, bot: "" }]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: userMessage }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1].bot = data.result;
          return updated;
        });
      } else {
        throw new Error(data.error || "Failed to fetch AI response.");
      }
    } catch (error) {
      console.error("Error fetching AI response:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className="flex flex-col">
              <div className="font-bold text-gray-700">You: {msg.user}</div>
              <div className="ml-4 text-gray-600">Bot: {msg.bot}</div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="mt-4 flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-lg"
            placeholder="Ask me anything..."
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg"
            disabled={isLoading}>
            {isLoading ? "Loading..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
