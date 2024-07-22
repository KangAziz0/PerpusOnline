import { Button } from "../ui/button"

export const Main = () => {
    return (
        <main className={`flex h-screen bg-[url(../src/assets/buku.png)]  bg-center bg-cover`}>
            <div className="flex justify-center mt-10 w-full">
                <Button className="bg-orange-500 px-6 py-3 font-bold text-lg">Back To School</Button>
            </div>
        </main>
    )
}