import React from 'react';

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source, mode } = props;

    return (
        <div className='my-3'>
            <div className={`card ${mode === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
                <span className="badge rounded-pill bg-danger" style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>{source}</span>
                <img src={imageUrl ? imageUrl : "https://static.toiimg.com/thumb/msid-110811695,width-1070,height-580,imgsize-374300,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-body-secondary">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target='_blank' rel='noreferrer' className="btn btn-sm btn-primary bg-dark">Read More</a>
                </div>
            </div>
        </div>
    );
}

export default NewsItem;
