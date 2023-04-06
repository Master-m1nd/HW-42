const picture = '../../images/image.jpg'

function Aside({title, description, info, text}) {
    return(
    <>
        <div className="picture" style={{backgroundImage:`url(${picture})`}}>
            <div className='container'>
                <h2 className="title">{title}</h2>
                <p className="description">{description}</p>
                <small className="small info">{info}</small>
                <small className="small text">{text}</small>
            </div> 
        </div>    
    </>
    )
}

export default Aside;