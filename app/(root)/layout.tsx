import Navbar from "@/components/navbar/navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-12">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
