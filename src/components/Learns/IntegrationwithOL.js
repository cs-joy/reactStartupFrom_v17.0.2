const Button = props => {
    const { kind, ...other } = props;
    const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
    return <button className={className} {...other} />;
};

const New = () => {
    return (
        <div>
            <Button kind="primary" onClick={() => console.log("you clicked me!")}>
                {'React World!'}
            </Button>
        </div>
    );
};

export default New