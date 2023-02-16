export interface propiedades{
    children:React.ReactNode | React.ReactNode[];
};

export const Papi = (props:propiedades)=>{
    return(
        <div id="papi">
            {props.children}
        </div>
    );
};