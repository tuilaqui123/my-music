export default function LibraryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="p-5">{children}</div>;
}
