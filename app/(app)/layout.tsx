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
        <div className="pb-16">{children}</div>
        <BottomTabNavigator />
      </body>
    </html>
  );
}
