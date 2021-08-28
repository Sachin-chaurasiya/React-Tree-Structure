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
        <div className="field-wrapper" style={{paddingLeft:flag?"26px":"0px"}}>
            <div className="field-child" style={{marginLeft:flag?"-26px":"0px"}}>
                <p className="field-child-icon" onClick={showChildrenHandler}>
                {getIcon()}   
                </p>   
                <p className="field-label"  >
                    <span style={{...getStyle(type),minWidth:"32px",textAlign:"center"}}>{type}</span>
                    <span className="field-label-name">{name}</span>
                </p>
            </div>    
            {flag && showChildren &&
            <div className="child-fields-wrapper">
            {(fields??[]).map((field,index)=><Field key={index} {...field} /> )} 
            </div>
            }
        </div>
    )
}

export default Field
