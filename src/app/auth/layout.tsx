import { AuthProvider } from "@/components";
import { titleFont } from "../config/fonts";

export default function shopLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main className={`${titleFont.className}`}>
      <div>
        <AuthProvider>
         {children}
        </AuthProvider>
      </div> 
    </main>
  );
}