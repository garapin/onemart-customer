import BottomTabNavigator from "@/components/BottomTabNavigator";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className={`${inter.className} max-w-screen-sm mx-auto`}>
          {children}
        </div>
        <BottomTabNavigator />
      </body>
    </html>
  );
}
