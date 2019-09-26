import React from "react";

export const Row = (props) => {
    return(
        <div className="row flex">
            {props.children}
        </div>
    )
}

export const Col = (props) => {
    return(
        <div className="col">
            {props.children}
        </div>
    )
}

export const Fl = ({ children, attrs }) => {
    const style = {
        width: attrs.width ? (!isNaN(attrs.width) ? attrs.width+"px" : attrs.width) : 'auto'
    }
    return(
        <div className="float-left" style={{...style}}>
            {children}
        </div>
    )
}

export const Box = ({attrs, children}) => {
    const style = {
        width: attrs.width ? (!isNaN(attrs.width) ? attrs.width+"px" : attrs.width) : 'auto'
    }
    return(
        <div className="box" style={{width: style.width}}>
            {children}
        </div>
    )
}

export const Button = ({attrs}) => {
    return(
        <a href={attrs.to} className="btn" title={attrs.title}>{attrs.title}</a>
    )
}