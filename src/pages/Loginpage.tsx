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
export function LoginPage() {
    return (
        <AuthLayout>
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-blue-700 font-bold text-4xl">Login</CardTitle>
                    <CardDescription>Please enter your credentials</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" placeholder="example@example.com" typeof="email" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" placeholder="********" typeof="password" />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button className="w-full" variant="default">Login</Button>
                </CardFooter>
                <p className="flex justify-center gap-2 mb-4">Don't Have a account ? <Link to="/register" className="text-blue-700 font-bold">Sign Up</Link> </p>
            </Card>
        </AuthLayout>
    )
}
