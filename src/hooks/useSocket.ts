
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

export const useSocket = () => {

    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {
        const newSocket = io(process.env.NEXT_PUBLIC_SOCKET_SERVER_URL || "http://localhost:3000");

        newSocket.on("connect", () => {
            console.log("connected to socket io server");
        });

        newSocket.on("disconnect", () => {
            console.log("Disconnected");
        });

        setSocket(newSocket);

        return () => {
            newSocket.disconnect();
        };

    }, []);

    return socket;
}