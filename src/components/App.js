import React from 'react';

import SearchBar from './SearchBar';
import axios from '../Api/unsplash';
import ImageList from './ImageList';

class App extends React.Component{
    state={images:[]};
    SearchTerm = async (term) => {
       const reponse= await axios.get('/search/photos',{
            params:{
              query:term,
            },
            
        })
      //  console.log(this);
        //Here, "this" refers to onSubmit prop and not to the App instance hence throws error.
        //To resolve the error, Regular SearchTerm function is converted into arrow function
        this.setState({images:reponse.data.results});
        
    }
    render(){
    return (
    <div className="ui container" style={{marginTop:'30px'}}>
        <SearchBar onSubmit={this.SearchTerm}/>
        <ImageList picture={this.state.images}/>
        Found : {this.state.images.length} images
    </div>
    );
    }
}
export default App;
