// import React, { Component } from 'react'
// import NewsItem from './NewsItem'
// import Spinner from './Spinner'
// import PropTypes from 'prop-types'

// export class News extends Component {

//     static defaultProps = {
//         country: 'in',
//         pageSize: 9,
//         category: 'general'
//     };

//     static propTypes = {
//         country: PropTypes.string,
//         pageSize: PropTypes.number,
//         category: PropTypes.string
//     };

//     capitalizeFirstLetter=(string)=>{
//         return string.charAt(0).toUpperCase() + string.slice(1);
//     }

//     constructor(props) {
//         super(props)
//         this.state={
//             articles : [],
//             loading : false,
//             page :1
//         }
//         document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`
//     }

//     // async updateNews(){
//     //     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bcd8fb6d4e0243eca04ef131e784b501&page=${this.state.page}&pageSize=${this.props.pageSize}`
//     //     this.setState({loading:true})
//     //     let data=await fetch(url)
//     //     let parsedData=await data.json()
//     //     // console.log(parsedData)
//     //     this.setState({articles: parsedData.articles, 
//     //         totalResults: parsedData.totalResults,
//     //         loading:false})
//     // }

//     async componentDidMount(){
//         this.props.setProgress(10);
//         let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`
//         this.setState({loading:true})
//         let data=await fetch(url)
//         this.props.setProgress(30);
//         let parsedData=await data.json()
//         this.props.setProgress(60);
//         // console.log(parsedData)
//         this.setState({articles: parsedData.articles, 
//             totalResults: parsedData.totalResults,
//             loading:false})
//             this.props.setProgress(100);
//         // this.updateNews();
//     }

//     handlePrevClick=async()=>{
//         this.props.setProgress(10);
//         let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
//         this.setState({loading:true})
//         let data=await fetch(url)
//         this.props.setProgress(30);
//         let parsedData=await data.json()
//         this.props.setProgress(60);
//         // console.log(parsedData)
//         this.setState({
//             page : this.state.page-1,
//             articles: parsedData.articles,
//             loading:false
//         })
//         this.props.setProgress(100);
//         // this.setState({page:this.state.page-1});
//         // this.updateNews();
//     }

//     handleNextClick=async()=>{
//         this.props.setProgress(10);
//         if(!(this.state.page+1> Math.ceil(this.state.totalResults/this.props.pageSize))){
//             let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
//             this.setState({loading:true})
//             let data=await fetch(url)
//             this.props.setProgress(30);
//             let parsedData=await data.json()
//             this.props.setProgress(60);
//             this.setState({
//                 page : this.state.page+1,
//                 articles: parsedData.articles,
//                 loading:false
//             })
//         }
//         this.props.setProgress(100);
//     }

//     render() {
//         return (

//             <div className='container my-3'>
//                 <h1 className='text-center my-4'>Top Headlines - {this.capitalizeFirstLetter(this.props.category)}</h1>
//                 {this.state.loading && <Spinner/>}
//                 <div className="row">
//                     {!this.state.loading && this.state.articles.map((element)=>{
//                         return <div className="col-md-4" key={element.url}>
//                         <NewsItem title={element.title?element.title.slice(0,50):""} description={element.description?element.description.slice(0,120):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
//                     </div>
//                     })}

//                 </div>
//                 <div className="container d-flex justify-content-between">
//                     <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Prev</button>
//                     <button disabled={this.state.page+1> Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
//                 </div>
//             </div>
//         )
//     }
// }

// export default News



//function based
import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

const News = ({ country, pageSize, category, setProgress, apiKey, mode }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(category)} - NewsMonkey`;
    const updateNews = async () => {
      setProgress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=1&pageSize=${pageSize}`;
      setLoading(true);
      const data = await fetch(url);
      setProgress(30);
      const parsedData = await data.json();
      setProgress(60);
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      setProgress(100);
    };
    updateNews();
  }, [country, category, apiKey, pageSize, setProgress]);

  const handlePrevClick = async () => {
    setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page - 1}&pageSize=${pageSize}`;
    setLoading(true);
    const data = await fetch(url);
    setProgress(30);
    const parsedData = await data.json();
    setProgress(60);
    setPage(page - 1);
    setArticles(parsedData.articles);
    setLoading(false);
    setProgress(100);
  };

  const handleNextClick = async () => {
    setProgress(10);
    if (!(page + 1 > Math.ceil(totalResults / pageSize))) {
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page + 1}&pageSize=${pageSize}`;
      setLoading(true);
      const data = await fetch(url);
      setProgress(30);
      const parsedData = await data.json();
      setProgress(60);
      setPage(page + 1);
      setArticles(parsedData.articles);
      setLoading(false);
    }
    setProgress(100);
  };

  return (
    <div className='container my-3'>
      <h1 className='text-center' style={{ margin: '35px 0px', marginTop: '90px', color: mode === 'dark' ? 'white' : 'black' }}>
        Top Headlines - {capitalizeFirstLetter(category)}
      </h1>
      {loading && <Spinner mode={mode} />}
      <div className="row">
        {!loading && articles.map((element) => {
          return (
            <div className="col-md-4" key={element.url}>
              <NewsItem 
                title={element.title ? element.title.slice(0, 50) : ""} 
                description={element.description ? element.description.slice(0, 120) : ""} 
                imageUrl={element.urlToImage} 
                newsUrl={element.url} 
                author={element.author} 
                date={element.publishedAt} 
                source={element.source.name}
                mode={mode} 
              />
            </div>
          )
        })}
      </div>
      <div className="container d-flex justify-content-between">
        <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}>← Prev</button>
        <button disabled={page + 1 > Math.ceil(totalResults / pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next →</button>
      </div>
    </div>
  );
};

News.defaultProps = {
  country: 'in',
  pageSize: 9,
  category: 'general',
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  setProgress: PropTypes.func,
  apiKey: PropTypes.string,
  mode: PropTypes.string,
};

export default News;
