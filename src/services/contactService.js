import api from "../utils/api";

const sendMessage = async (obj) => {
  const {
    data,
    setLoading = () => {},
    setError = () => {},
    setIsMessageSent = () => {},
    reset = () => {},
  } = obj;
  try {
    setLoading(true);
    const response = await api.post("/api/messages/send", data);
    if (response.status === 200) {
      // Indicate that the message was sent successfully
      setIsMessageSent(true);
      reset();
    }
    return response.data;
  } catch (error) {
    console.error("Error sending message:", error);
    setError(error.message || "Error. Please try again later");
    throw error;
  } finally {
    setLoading(false);
  }
};

export default sendMessage;
