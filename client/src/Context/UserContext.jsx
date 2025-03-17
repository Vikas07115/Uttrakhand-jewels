import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/api/user", { credentials: "include" })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setUser(data.user);
                }
            })
            .catch((err) => console.log("User fetch error:", err));
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
