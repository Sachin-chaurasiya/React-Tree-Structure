export const getStyle=(type:string)=>{
    switch (type) {
        case "record":
            return {border:"2px solid orange",padding:"4px 6px",color:"orange"}
            
        case "string":
            return {border:"2px solid blue",padding:"4px 6px",color:"blue"}

        case "int":
            return {border:"2px solid green",padding:"4px 6px",color:"green"}
            
        default:
            return {border:"2px solid #21243d",padding:"4px 6px"}
    }
}