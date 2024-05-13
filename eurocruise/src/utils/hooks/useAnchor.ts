import { useEffect } from "react"
import { Link, LinkProps } from "react-scroll"

interface AnchorProps extends LinkProps{anchor:string,path:string}
export const Anchor =({anchor,path,children} :AnchorProps)=>{
    useEffect(()=>{
    },[])
    return(
        <Link> {children} </Link>
    )

}
