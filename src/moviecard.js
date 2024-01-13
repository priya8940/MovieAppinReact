import React from "react";
// import './index.css';
class MovieCard extends React.Component{
    constructor(){
        super();  
        this.state={
            name:"priya",
            city:"jhansi",

            title:"The Avengers",
            plot:"THE MOVIE IS ABOUT SUPERNATURAL POWERS",
            rating:8.9,
            price:199,
            stars:0,

        }
    
    }
    addStars=()=>{
        //form1
        // this.setState({
        //   stars:this.state.stars+0.5
        // })

        //form2
        this.setState((prevState)=>{
          return{
            stars:prevState.stars+0.5
          }
        })
      // this.state.stars+=0.5;
      // console.log("this.state.stars:",this.state.stars);
    }
    decStars=()=>{
      this.setState({
        stars:this.state.stars-0.5
      })
    }
    handleFav=()=>{

    }
    addCart=()=>{

    }
  render(){
    const {title,plot,price,rating,stars}=this.state;
    return(
        <>
        <h1 className="heading">Hey this is the first heading</h1>
        <h2>hey this is {this.state.name}</h2>
        <h2>lives in city {this.state.city}</h2>


        <div className="main">
          <div className="movie-card">
            <div className="left">
              <img alt="poster" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn4Cf3OlH7_HKKFjoNIvhUnIwU1crEohf7NA&usqp=CAU"/>
            </div>
             <div className="right">
                <div className="title">{title}</div>
                <div className="plot">{plot}</div>
                <div className="price">Rs. {price} </div>
                <div className="footer">
                  <div className="rating">{rating}
                  </div>
                  <div className="star-dis">
                      <img className="star-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/43/43625.png" onClick={this.decStars}/>
                      <img alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="stars" />
                      <img className="star-btn" alt="increase"src="https://cdn-icons-png.flaticon.com/128/748/748113.png"onClick={this.addStars} />
                      <span  className="star-count">{stars}</span>   
                  </div>
                  <div className="buttonss">
                  <button className="unfev-button" onClick={this.handleFav}>unfevourate</button>
                  <button className="fev-button" onClick={this.handleFav}>fevourate</button> 
                  <button className="cart" onClick={this.addCart}>Add your cart</button>
                  </div>
               </div>
            </div>
           </div>
        </div>

        </>

    )
  }
}
export default MovieCard;