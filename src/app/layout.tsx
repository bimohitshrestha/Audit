import "./globals.css";
import Navbar from "./component/navbar/Navbar";
import NavHeader from "./component/navbar/NavHeader";
import Footer from "./component/footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          background: "#fff",
        }}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
