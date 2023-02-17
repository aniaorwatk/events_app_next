import '@/styles/general.scss';
import '@/styles/globals.css';
import { MainLayout } from '@/components/layout/main-layout';

export default function App({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  )
}
