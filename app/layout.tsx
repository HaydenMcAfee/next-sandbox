import MUIThemeProvider from './theme-provider';
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MUIThemeProvider>{children}</MUIThemeProvider>
      </body>
    </html>
  );
}
