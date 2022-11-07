import "./Info.css"

const Info = (props) => {
console.log(props.element)
  return (
    <div className={props.index%2===0?"infoArticle":"infoArticle OddArticle"}>
        <div className="infoArticledesc">
            <h2>{props.element.h}</h2>
            <p>{props.element.p}</p>
        </div>
        <img src={props.element.img} alt="img"/>
    </div>
  )
}

export default Info