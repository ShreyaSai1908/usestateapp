function Counter(props) {
    
    props.setCountModifierfunction(1)

    return (
        <div>
            Value of Counter = {props.stateVariable}
        </div>
    );
}

export default Counter;
