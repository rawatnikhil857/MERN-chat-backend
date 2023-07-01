import mongoose from "mongoose";
mongoose.set('strictQuery', false);
const ChatRoomSchema = mongoose.Schema(
  {
    members: Array,
  },
  { timestamps: true }
);

const ChatRoom = mongoose.model("ChatRoom", ChatRoomSchema);

export default ChatRoom;
