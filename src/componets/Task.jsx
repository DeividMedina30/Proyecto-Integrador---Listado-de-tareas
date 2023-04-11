
export const Task = (props) => {
    const { name, state } = props;
    if(state == "completed"){
        return(
            <div>
                <input type= "checkbox" checked />{name}
            </div>
        );
    }else if( state == "to do"){
        return(
            <div>
                <input type= "checkbox" />{name}
            </div>
        );   
    }else{
        return(
            <del>Undefined Task<br /></del>
        );
    }
};
