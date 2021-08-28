const Img = ({ name }) => {
    const url = `https://source.unsplash.com/600x300/?${name}`;
    return <img src={url} alt="jibon" />;
};

export default Img;
