import { NextPage } from "next"
import { ReactElement, ReactNode } from "react"

export type User_Profile = {
    username: string,
    email?: string,
    loggedIn?: boolean
}

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
  }