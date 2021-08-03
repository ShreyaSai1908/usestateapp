function Counter(props) {
    
    props.setModifierfunction(1)

    return (
        <div>
            Value of Counter = {props.stateVariable}
        </div>
    );
}

export default Counter;
