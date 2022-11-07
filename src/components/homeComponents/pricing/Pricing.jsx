import "./Pricing.css"
const Pricing = () => {
  return (
    <div className="pricing">
        <h2>Pricing Plans</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quae dolorem cumque eveniet molestiae facere accusantium nobis iusto incidunt sunt.</p>
        <div className="flex_row_sb">
            <div className="pricingCard">
                <div className="pricingCardheader">
                    <h2>Starter</h2>
                    <p>simple</p>
                </div>
                <h1><span>$</span>29</h1>
                <p>per month</p>
                <button>Get</button>
            </div>
            <div className="pricingCard standardcard">
                <div className="pricingCardheader">
                    <h2>Standard</h2>
                    <p>intermediate</p>
                </div>
                <h1><span>$</span>49</h1>
                <p>per month</p>
                <button>Get</button>
            </div>
            <div className="pricingCard">
               <div className="pricingCardheader" >
                    <h2>Premium</h2>
                    <p>advance</p>
                </div>
                <h1><span>$</span>89</h1>
                <p>per month</p>
                <button>Get</button>
            </div>
        </div>
    </div>
  )
}

export default Pricing