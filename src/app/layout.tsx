// import "./globals.css";
// import Navbar from "./component/navbar/Navbar";
// import NavHeader from "./component/navbar/NavHeader";
// import Footer from "./component/footer/Footer";

// export const metadata = {
//   title: "Dashboard | Avyasha - Online Mock Test Platform in Nepal",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         style={{
//           background: "#fff",
//         }}
//       >
//         <Navbar />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }

import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar/Navbar";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

// export const metadata = {
//   title: "Chartered Management",
// };

export const metadata = {
  // generator: "Chartered Management",
  // applicationName: "",
  title: "Chartered Management",
  description:
    "Managing VAT and TAX documentation can be complicated and time-consuming — but it doesn't have to be. Our VAT/TAX Filing Documentation System is designed to make your tax processes seamless, accurate, and fully compliant with local regulations.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Chartered Management",
    "Chartered Accountant",
    "Portfolio Manager",
    "Bidur Dhungana",
  ],
  authors: [{ name: "Codequant", url: "https://codequant.io" }],
  creator: "Codequant",
  // publisher: "Sebastian Markbåge",
  // formatDetection: {
  //   email: false,
  //   address: false,
  //   telephone: false,
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className}`} style={{ background: "#fff" }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
