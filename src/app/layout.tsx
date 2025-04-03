import "./globals.css";
import Navbar from "./component/navbar/Navbar";
import NavHeader from "./component/navbar/NavHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` w-full`}>
        <NavHeader />
        <Navbar />

        {children}
      </body>
    </html>
  );
}
