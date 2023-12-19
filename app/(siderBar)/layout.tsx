import Menu from "./_component/menu";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Menu />
      {children}
    </>
  );
}
