export const Image = ({ src, height, width, alt }) => {
    return (
        <img src={`/src/assets/images/${src}`} height={height} width={width} alt={alt} />
    )
}