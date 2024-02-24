import { type PageProps } from "$fresh/server.ts";
import { Footer } from "../components/Footer.tsx";
import { Header } from "../components/Header.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>kaihei-frontend</title>
        <link rel="stylesheet" href="/styles.css" />
        <script
          src="https://cdn.jsdelivr.net/npm/@twemoji/api@latest/dist/twemoji.min.js"
          crossorigin="anonymous"
        >
        </script>
      </head>
      <body className="h-dvh w-screen px-44 py-6">
        <Header />
        <div className="flex h-full w-full items-center">
          <Component />
        </div>
        <Footer />

        <script>
          twemoji.parse(document.body);
        </script>
      </body>
    </html>
  );
}
