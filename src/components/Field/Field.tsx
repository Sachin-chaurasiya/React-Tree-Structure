import React,{useState,useCallback} from "react"
import { getStyle } from "../../Utils/FieldUtils";

import "./fields.css"

type FieldProps={
    name:string;
    type:string;
    fields?:Array<FieldProps>
}

const Field = ({name,type,fields}:FieldProps) => {
    const [showChildren,setShowChildren]=useState<boolean>(false);
    const flag=(fields??[]).length>0

    const showChildrenHandler=useCallback(()=>{
      setShowChildren(!showChildren)
    },[showChildren,setShowChildren])

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
            {(fields??[]).map((field,index)=><Field key={index} {...field} /> )} 
            </div>
            }
        </div>
    )
}

export default Field
