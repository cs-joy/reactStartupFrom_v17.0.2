import './Design/imgStyle.css';

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://img.freepik.com/premium-photo/cute-boy-pixar-style-cartoon-3d-illustration-generative-ai_808510-252.jpg',
    imageSize: 90,
    children: true,
    encoded: 'false'
};

export default function ImgaesManipulation() {
    return (
        <>
            <h2>
                {
                    user.children ? (
                        user.name
                    ) : (
                        user.encoded
                    )
                }
            </h2>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </>
    );
}