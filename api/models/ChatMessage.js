import mongoose from "mongoose";
mongoose.set('strictQuery', false);
const ChatMessageSchema = mongoose.Schema(
  {
    chatRoomId: String,
    sender: String,
    message: String,
  },
  { timestamps: true }
);

const ChatMessage = mongoose.model("ChatMessage", ChatMessageSchema);

export default ChatMessage;
