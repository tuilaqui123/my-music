export default function PersonalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="p-5">{children}</div>;
}
