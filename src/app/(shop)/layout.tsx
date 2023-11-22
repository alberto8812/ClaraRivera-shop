import { TopMenu } from "@/components";

export default function shopLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main className="">
     <TopMenu/>
      {children}
    </main>
  );
}