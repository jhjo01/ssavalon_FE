import { useState, useEffect } from "react";
import { API_END_POINT } from "../constants";
import axios from "axios";

export const useGetRoom = (url) => {
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const room = await axios.get(`${API_END_POINT}/${url}`);
        setRooms(room.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(true);
      }
    };

    fetchData();
  }, [url]);

  return { rooms, error, loading };
};
