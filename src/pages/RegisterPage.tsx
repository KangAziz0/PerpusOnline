
import AuthLayout from "@/components/Layout/AuthLayout"
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
import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const registerFormSchema = z.object({
    fullname: z.string().min(6, "min 6 karakter").max(16, "max 16 karakter"),
    email: z.string().email("harus format Email"),
    password: z.string().min(8, "min 8 karakter"),
    confirm: z.string()
})

const FormInputText = [
    {
        type: "text",
        name: "fullname",
        placeholder: "Masukan Nama Lengkap",
        label: "Fullname"
    },
    {
        type: "email",
        name: "email",
        placeholder: "Masukan Email Anda",
        label: "Email"
    },
    {
        type: "password",
        name: "password",
        placeholder: "Masukan Password",
        label: "Password"
    },
    {
        type: "password",
        name: "confirm",
        placeholder: "Konfirmasi password",
        label: "Konfirmasi Password"
    },
]

type RegisterFormSchema = z.infer<typeof registerFormSchema>

export function RegisterPage() {
    const form = useForm<RegisterFormSchema>({
        resolver: zodResolver(registerFormSchema)
    })
    const { handleSubmit, control } = form

    const onSubmit = handleSubmit((values) => {
        console.log(values)
    })

    return (
        <AuthLayout>
            <Form {...form}>
                <Card className="w-full max-w-sm">
                    <form onSubmit={onSubmit}>
                        <CardHeader>
                            <CardTitle className="text-blue-700 font-bold text-4xl">Register</CardTitle>
                            <CardDescription>Please enter your credentials</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {FormInputText.map((values, index) => (
                                <FormField
                                    key={index}
                                    control={control}
                                    name={values.name}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{values.label}</FormLabel>
                                            <FormControl>
                                                <Input placeholder={values.placeholder} type={values.type} {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            ))}
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" variant="default" type="submit">Register</Button>
                        </CardFooter>
                        <p className="flex justify-center gap-2 mb-4">Already have account ? <Link to="/login" className="text-blue-700 font-bold">Sign In</Link> </p>
                    </form>
                </Card>
            </Form>
        </AuthLayout >
    )
}
