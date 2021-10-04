

function UserConditionalRendering(props) {
    return (
        <div>
            <h1>Welcome back!</h1>
        </div>
    )
}

function GuestConditionalRendering(props) {
    return (
        <div>
            <h1>
                Please sign up!
            </h1>
        </div>
    )
}

function GuestConditional(props) {
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
        return <UserConditionalRendering />;
    }
    return <GuestConditionalRendering />;
}

export default GuestConditional
