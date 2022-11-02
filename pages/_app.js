import { SessionProvider } from "next-auth/react"
import {ChakraProvider} from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react'
import {RecoilRoot} from "recoil";
import useSpotify from "../hooks/useSpotify";

import '/globals.css'
import {useEffect} from "react";

//!MAYBE NEEDED
const colors = {

    styles : {
        global : {
            'body' : {
                background : 'red'
            }
        }
    }

}
const theme = extendTheme({ colors })



function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <RecoilRoot>
            <SessionProvider session={session}>
                <ChakraProvider theme={theme}>
                    <Component {...pageProps} />
                </ChakraProvider>
            </SessionProvider>
        </RecoilRoot>
    )
}
export default MyApp
