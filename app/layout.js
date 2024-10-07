import localFont from "next/font/local";
import "./globals.css";



export const metadata = {
  title: "NextJs Dashboard UI",
  description: "simple UI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
