import MainLayout from "@/components/Layout/MainLayout";
import { Main } from "@/components/Main/Index";
import { Navbar } from "@/components/Navbar/Index";


export function HomePage() {
    return (
        <MainLayout>
            <Navbar />
            <Main />
        </MainLayout>
    )
}