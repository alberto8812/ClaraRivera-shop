
export default function shopLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main className="">
      <div>
         {children}
      </div> 
    </main>
  );
}