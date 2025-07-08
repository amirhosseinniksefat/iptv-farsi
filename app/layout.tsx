// app/layout.tsx

export const metadata = {
  title: 'تلویزیون آنلاین فارسی',
  description: 'پخش زنده کانال‌های فارسی با استفاده از iptv-org',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <head />
      <body style={{ fontFamily: "sans-serif", backgroundColor: "#000", color: "#fff", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}