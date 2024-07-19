const AuthLayout = (props : any) => {
    const {children} = props
    return (
        <div className="h-screen flex justify-center items-center">
           {children}
        </div>
    )
}
export default AuthLayout