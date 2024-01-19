 import React, { Component } from "react";
import MovieCard from "./moviecard";
 
class MovieList extends Component{
    constructor(){
        super();  
        this.state={
            movies:[
                {   
                    id:1,
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
                    id:2,
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
                    id:3,
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
    handleIncStars=(movie)=>{
        const {movies}=this.state;
        const mid=movies.indexOf(movie);
        if(movies[mid].stars>=5){
            return;
        }
        movies[mid].stars+=0.5;
      this.setState({
        movies:movies
      })
    }
    render(){
        return(
            <>
            <h1>MOVIE LIST</h1>
            {
            this.state.movies.map(
                (movie)=>{ return <MovieCard movieData={movie} 
                addStars={this.handleIncStars}
                key={movie.id}
                />}
            )}
              {/* <MovieCard data={this.state}/> */}
              
            </>
        )
    }
}
export default MovieList;
