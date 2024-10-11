import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchChatByProject, fetchChatMessage, sendMessage } from "@/Redux/Chat/Action";
import { useParams } from "react-router-dom";


function ChatBox() {
    const [message, setMessage] = useState("");
    const {auth,chat} = useSelector(store=>store)
    const {id} = useParams()
    const dispatch = useDispatch()
    const handleSendMessage = () => {
        dispatch(sendMessage(
           { senderId:auth.user?.id,
            projectId:id,
            content:message

           }
        ));
        setMessage("")
        console.log("message", message);
    };

    useEffect(()=>{
       dispatch(fetchChatByProject(id))
    },[])

    useEffect(()=>{
       dispatch(fetchChatMessage(chat.chat?.id))
    },[])

    useEffect(() => {
        console.log("Auth user:", auth.user); // Log the current auth user to check structure
        console.log("Chat messages:", chat.messages); // Log chat messages to verify structure
        dispatch(fetchChatMessage(chat.chat?.id));
    }, [chat.chat?.id]);
    
    const handleMessageChange = (e) => {
       
        setMessage(e.target.value);
    };

    return (
   
        <div className="sticky">
            <div className="border border-rose-700 rounded-lg bg-rose-dark-50">
                <h1 className="border-b border-rose-700 p-5 text-rose-200">Group Discussion</h1>
                <ScrollArea className="h-[25rem] w-full p-5 flex gap-3 flex-col">
  {chat.messages?.map((item) => {

    return item.sender.id?.toString() === auth.user?.id?.toString() ? (
      <div className="flex gap-2 mb-2 justify-end" key={item.id}>
        <div className="space-y-2 py-2 px-5 border border-rose-700 bg-rose-dark-100 rounded-se-2xl rounded-s-xl">
          <p className="text-rose-200">{item.sender.fullName}</p>
          <p className="text-blue-300">{item.content}</p>
        </div>
        <Avatar>
          <AvatarFallback className="bg-rose-600 text-rose-50">
            {item.sender.fullName[0]}
          </AvatarFallback>
        </Avatar>
      </div>
    ) : (
      <div className="flex gap-2 mb-2 justify-start" key={item.id}>
        <Avatar>
          <AvatarFallback className="bg-rose-600 text-rose-50">
            {item.sender.fullName[0]}
          </AvatarFallback>
        </Avatar>
        <div className="space-y-2 py-2 px-5 border border-rose-700 bg-rose-dark-100 rounded-ss-2xl rounded-e-xl">
          <p className="text-rose-200">{item.sender.fullName}</p>
          <p className="text-blue-300">{item.content}</p>
        </div>
      </div>
    );
  })}
</ScrollArea>




                <div className="relative p-0">
                    <Input
                        placeholder="Type a message..."
                        className="py-7 border-t border-rose-700 outline-none focus:outline-none focus:ring-0 rounded-none border-b-0 border-x-0 bg-rose-dark-50 text-gray-700"
                        value={message}
                        onChange={handleMessageChange}
                    />
                    <Button onClick={handleSendMessage} className="absolute right-2 top-3 rounded-full bg-rose-600 text-rose-50" size="icon" variant="ghost">
                        <PaperPlaneIcon />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ChatBox;
