import ' @component/styles/globals.css';
import { GlobalStylesWrapper } from ' @component/styles/index.styles';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalStylesWrapper>
      <Component {...pageProps} />
    </GlobalStylesWrapper>
  );
}
