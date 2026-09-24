import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk();

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="ko" className={hankenGrotesk.className}>
			<body>{children}</body>
		</html>
	);
}
