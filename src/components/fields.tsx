import React,{useState,useCallback} from "react"

import "./fields.css"

type FieldProps={
    name:string;
    type:string;
    fields?:Array<FieldProps>
}

const Fields = ({name,type,fields}:FieldProps) => {
    const [showChildren,setShowChildren]=useState<boolean>(false);
    const flag=(fields??[]).length>0

    const showChildrenHandler=useCallback(()=>{
      setShowChildren(!showChildren)
    },[showChildren,setShowChildren])

    const getStyle=(type:string)=>{
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

    const getIcon=()=>{
     return flag && (showChildren?<i className="fas fa-minus-circle"/>:<i className="fas fa-plus-circle"/>)
    }

    return (
        <div className="fields-wrapper" style={{paddingLeft:flag?"26px":"0px"}}>
            <div className="child" style={{display:"flex",gap:"4px",marginLeft:flag?"-26px":"0px"}}>
                <p className="child-icon" onClick={showChildrenHandler}>
                {getIcon()}   
                </p>   
                <p style={{display:"flex",gap:"4px"}} >
                    <span style={{...getStyle(type),minWidth:"32px",textAlign:"center"}}>{type}</span>
                    <span style={{padding:"4px 6px"}}>{name}</span>
                </p>
            </div>    
            {flag && showChildren &&
            <div style={{display:"flex",flexDirection:"column",marginTop:"-24px"}}>
            {(fields??[]).map((field,index)=><Fields key={index} {...field} /> )} 
            </div>
            }
        </div>
    )
}

export default Fields
