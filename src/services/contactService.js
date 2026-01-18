import api from "../utils/api";

const sendMessage = async (
  messageData,
  SetLoadingState = () => {},
  setError = () => {},
  setIsMessageSent = () => {},
) => {
  try {
    SetLoadingState(true);
    const response = await api.post("/api/messages/send", messageData);
    if (response.status === 200) {
      setIsMessageSent(true); // Indicate that the message was sent successfully
    }
    return response.data;
  } catch (error) {
    console.error("Error sending message:", error);
    setError(error.message || "Error. Please try again later");
    throw error;
  } finally {
    SetLoadingState(false);
  }
};

export default sendMessage;
