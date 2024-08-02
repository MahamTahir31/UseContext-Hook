import React, { useState } from "react";

import UserContext from "./UserContext";

const UserContextProvider = ({children}) => { // children is a generic name which means jo bh ap k pas arha usey as it is agey pass kr do
    const [user, setUser] = React.useState(null)
    return (
        <>
            <UserContext.Provider value={{user, setUser}}> {/* value --> prop */}

                {children}
            </UserContext.Provider>
        </>
    )
}

export default UserContextProvider;