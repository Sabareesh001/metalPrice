import './Card.css';
const Card = ({image,title,content})=>{
    return(
    <div className='cardContainer'>
        <div  className='cardImageContainer'>
            <img src={image}></img>
        </div>
        <h1>
            {title}
        </h1>
        <h1>
            {content}
        </h1>
    </div>)
}

export default Card;