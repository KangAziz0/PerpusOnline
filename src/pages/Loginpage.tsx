import AuthLayout from "@/components/Layout/AuthLayout";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const loginFormSchema = z.object({
    username: z.string().min(6, "Username Minimal 6 Karakter").max(16, "Username Maximal 16 Karakter"),
    password: z.string().min(8, "Password Minimal 8 Karakter")
})

type LoginFormSchema = z.infer<typeof loginFormSchema>

export function LoginPage() {
    const { register, handleSubmit, formState } = useForm<LoginFormSchema>({
        resolver: zodResolver(loginFormSchema)
    });

    const onSubmit = handleSubmit((values) => {
        alert(`username : ${values.username} || password ${values.password}`)
    });
    return (
        <AuthLayout>
            <Card className="w-full max-w-sm">
                <form onSubmit={onSubmit}>
                    <CardHeader>
                        <CardTitle className="text-blue-700 font-bold text-4xl">Login</CardTitle>
                        <CardDescription>Please enter your credentials</CardDescription>
                    </CardHeader>
                    <CardContent>

                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="username">Username</Label>
                                <Input id="username" placeholder="Ganjar Sugianto" typeof="text" {...register("username")} />
                                {formState.errors.username && (
                                    <p className="text-red-500">{formState.errors.username.message}</p>
                                )}
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" placeholder="********" typeof="password" {...register("password")} />
                                {formState.errors.password && (
                                    <p className="text-red-500">{formState.errors.password.message}</p>
                                )}
                            </div>
                        </div>

                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" variant="default" type="submit">Login</Button>
                    </CardFooter>
                    <p className="flex justify-center gap-2 mb-4">Don't Have a account ? <Link to="/register" className="text-blue-700 font-bold">Sign Up</Link> </p>
                </form>
            </Card>
        </AuthLayout >
    )
}
