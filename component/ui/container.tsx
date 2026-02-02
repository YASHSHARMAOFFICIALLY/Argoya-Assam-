import React from "react";
import {cn} from '@/lib/utlis'
export const Container = ({className,children}:{
    className?:string;
    children:React.ReactNode;
})=>{
    return(
    <div className={cn(' w-full max-w-7xl px-4 mx-auto',className)}>{children}</div>
    )
}