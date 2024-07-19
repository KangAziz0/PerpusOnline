

const MainLayout = (props:any) => {
  const  {children} = props 
    return (
        <div className="h-screen flex flex-col">
            {children}
        </div>
    )
}
export default MainLayout