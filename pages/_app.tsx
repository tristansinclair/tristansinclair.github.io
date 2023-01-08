import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useRef } from "react";
import { TLDRHeader } from "../components-tldr/TldrHeader";

function usePrevious(value: any) {
  let ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default function App({ Component, pageProps, router }: AppProps) {
  let previousPathname = usePrevious(router.pathname);
  return (
    <>
      <Component previousPathname={previousPathname} {...pageProps} />
    </>
  );
}
