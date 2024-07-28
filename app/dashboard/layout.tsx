import Sidebar from "./(components)/sidebar";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Sidebar />
      <div className="p-4 sm:ml-64">{children}</div>
    </div>
  );
}
