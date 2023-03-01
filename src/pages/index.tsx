import Head from "next/head";
import MainLayout from "@/layouts/MainLayout";
import { HeroSection } from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Room | Homepage</title>
        <meta name="description" content="Frontendmentor Challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/favicon-32x32.png" />
      </Head>
      <MainLayout>
        <HeroSection />
      </MainLayout>
    </>
  );
}
