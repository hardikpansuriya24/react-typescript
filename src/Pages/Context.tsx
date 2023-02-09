

import React, { createContext, PropsWithChildren, useEffect, useState } from 'react'
import Axios, { AxiosResponse } from 'axios'

export const myContext = createContext<any>({})
export default function Context(props: PropsWithChildren<any>) {
  const [user,setUser] = useState<any>()
  useEffect(() => {
    Axios.get("http://localhost:4000/user", { withCredentials: true }).then((res: AxiosResponse) => {
      setUser(res.data);
    })
  }, []);

  return (
    <myContext.Provider value={user}>{props.children}</myContext.Provider>
    )
}