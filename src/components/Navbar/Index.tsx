"use client"


import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { FiMenu } from "react-icons/fi";
import { NavMenu } from "./components/NavigationMenu";
import { CommandDialogDemo } from "./components/InputSearch";
import { BiBookmark , BiBook } from "react-icons/bi";


export function Navbar() {
    return (
        <div className="flex py-2 lg:px-10 w-full lg:justify-between border-b-[1px]">
            <div className="flex gap-10">
                <span className="font-bold text-blue-500 text-2xl hidden lg:block">PerpusOnline</span>
                <NavMenu /></div>
            <div className="flex px-4 lg:justify-center gap-4">
                <CommandDialogDemo />
                <Button size="sm" variant="ghost" className="hidden lg:block">
                    <Link to="/login">Log In</Link>
                </Button>
                <Button size="sm" className="bg-blue-500 hidden lg:block" variant="default">
                    <Link to="/register">Sign Up</Link>
                </Button>
                <BiBook className="text-2xl mt-2 lg:hidden"/>
                <BiBookmark className="text-2xl mt-2 lg:hidden"/>
                <FiMenu className="text-2xl mt-2 lg:hidden" />
            </div>
        </div>
    )
}

