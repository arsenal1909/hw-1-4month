// import img from '../src/assets/img/без.jpg'
const Card = ({img , title , price , oldPrise , deseprition}) => {
    return (
        <div className="card">
             <img src={img} />

            <h1>{title}</h1>
            <p>{deseprition}</p>
            <div>
                <b>{price}$</b>
                <span>{oldPrise}$</span>
            </div>
            <button type="button">add to card</button>
        </div>

    )

}

export default Card