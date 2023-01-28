import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>MeshCat Studio Preview</title>
        <meta name="description" content="Created by Nux" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="bg-red-50 text-4xl">Hello World</h1>
    </>
  )
}
