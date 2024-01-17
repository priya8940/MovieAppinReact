 import React, { Component } from "react";
import MovieCard from "./moviecard";
// import MovieCard from "./moviecard";
class MovieList extends Component{
    constructor(){
        super();  
        this.state={
            // title:"The Avengers",
            // plot:"THE MOVIE IS ABOUT SUPERNATURAL POWERS",
            // rating:8.9,
            // price:199,
            // stars:0,
            // fav:false,
            // isInCart:false
            movies:[
                {
                    title:'The dark night',
                    plot:"Erths mighteist heroes come together and learn to fight",
                    rating:'8.0',
                    price:99,
                    stars:0,
                    fav:false,
                    isInCart:false,
                    poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn4Cf3OlH7_HKKFjoNIvhUnIwU1crEohf7NA&usqp=CAU"


                },
                {
                    title:'The dark night',
                    plot:"Erths mighteist heroes come together and learn to fight",
                    rating:'8.0',
                    price:99,
                    stars:0,
                    fav:false,
                    isInCart:false,
                    poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn4Cf3OlH7_HKKFjoNIvhUnIwU1crEohf7NA&usqp=CAU"


                },
                {
                    title:'The dark night',
                    plot:"Erths mighteist heroes come together and learn to fight",
                    rating:'8.0',
                    price:99,
                    stars:0,
                    fav:false,
                    isInCart:false,
                    poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn4Cf3OlH7_HKKFjoNIvhUnIwU1crEohf7NA&usqp=CAU"


                }
            ]

        }
    
    }
    render(){
        //const {title,plot,rating,price,stars,fav,isInCart,poster}=this.state.movies;
        return(
            <>
            <h1>MOVIE LIST</h1>
              {/* <MovieCard title={title}
                        plot={plot}
                        rating={rating}
                        price={price}
                        stars={stars}
                        fav={fav}
                        isInCart={isInCart}

              
              /> */}
              <MovieCard movies={this.state}/>
              
            </>
        )
    }
}
export default MovieList;


// class MovieList extends Component{
//     render(){
//         const {movies,addStars,decStars,toggleFav,togglCart}=this.props;
//         console.log(this.props);

//         return(
//             <>
//             {movies.map((movie)=> <MovieCard movies={movie}
//                                              addStars={addStars}
//                                              decStars={decStars}
//                                              toggleFav={toggleFav}
//                                              togglCart={togglCart}
//                                              key={movie.id}


//                                        />)}
//             </>
//         )
//     }
// }