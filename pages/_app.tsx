import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactNode, useState } from "react";
import React from "react";
import {
  Session,
  createBrowserSupabaseClient,
} from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { supabase } from "../lib/initSupabase";

type GetLayout = (page: ReactNode) => ReactNode;

type Page<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: GetLayout;
};

type MyAppProps<P = {}> = AppProps<P> & {
  Component: Page<P>;
};

const defaultGetLayout: GetLayout = (page: ReactNode): ReactNode => page;

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  // const getLayout = Component.getLayout ?? defaultGetLayout;
  // const [supabase] = useState(() => createBrowserSupabaseClient());

  return (
    <>
      <SessionContextProvider
        supabaseClient={supabase}
        initialSession={pageProps.initialSession}
      >
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </SessionContextProvider>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default MyApp;

// import "../styles/globals.css";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer } from "react-toastify";
// import type { NextPage } from "next";
// import type { AppProps } from "next/app";
// import { ReactNode, useState } from "react";
// import React from "react";
// import {
//   Session,
//   createBrowserSupabaseClient,
// } from "@supabase/auth-helpers-nextjs";
// import { SessionContextProvider } from "@supabase/auth-helpers-react";
// import { supabase } from "../lib/initSupabase";

// type GetLayout = (page: ReactNode) => ReactNode;

// type Page<P = {}, IP = P> = NextPage<P, IP> & {
//   getLayout?: GetLayout;
// };

// type MyAppProps<P = {}> = AppProps<P> & {
//   Component: Page<P>;
// };

// const defaultGetLayout: GetLayout = (page: ReactNode): ReactNode => page;

// function MyApp({
//   Component,
//   pageProps,
// }: AppProps<{
//   initialSession: Session;
// }>) {

//   const getLayout = Component.getLayout ?? defaultGetLayout;
//   // const [supabase] = useState(() => createBrowserSupabaseClient());

//   return (
//     <>
//       <SessionContextProvider
//         supabaseClient={supabase}
//         initialSession={pageProps.initialSession}
//       >
//         {/* eslint-disable-next-line react/jsx-props-no-spreading */}
//         <Component {...pageProps} />
//       </SessionContextProvider>
//       <ToastContainer
//         position="top-center"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="colored"
//       />
//     </>
//   );
// }

// export default MyApp;
