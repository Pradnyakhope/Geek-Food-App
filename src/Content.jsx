
const Content = () => {
    return(
        <div>
          <section className="sec1">
            <div className="div4">
              <h2 className="heading">Let us find your <br/><strong className="head2">Forever Food</strong> </h2>
              <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer vel turpis vel velit convallis malesuada vel vel nunc. In hac habitasse platea dictumst.</p>
              <div className="div5">
                <button className='searchBtn'>Search now</button>
                <button className='infoBtn'>Know more</button>
              {/* <a href="/" className='searchBtn >Search Now</a>
              <a href="/"className='infoBtn' >Know more</a> */}
              </div>
            </div> 
          </section>
        <section className="sec2">
          <div className="houseImg">
            <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" className="img2" alt="house" />
          </div>
          <div className="houseInfo">
            <div className="description">
            <h1 className='head2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
              
            <p className='para2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quo repellendus voluptate dolore exercitationem, repellat saepe dolorum possimus illo reprehenderit sequi rem expedita recusandae architecto rerum? Nobis quod quaerat hic?</p>
            <a href="/" className="GetBtn">Get in Touch</a>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Content;