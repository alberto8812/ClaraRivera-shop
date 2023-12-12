import { getCategoryAndSubcategory } from "@/actions";
import { Footer, Sidebar, SidebarItemMobil, TopMenu } from "@/components";

export default async  function shopLayout({
 children
}: {
 children: React.ReactNode;
}) {

  const categoriesAnsubcategories= await getCategoryAndSubcategory();

  return (
    <main className="min-h-screen">
     <TopMenu categoriesSubcategories={categoriesAnsubcategories}/>
     <Sidebar/>
     <SidebarItemMobil/>
  
     <div className="px-0 ">
      {children}
      </div>
     <Footer/>
    </main>
  );
}