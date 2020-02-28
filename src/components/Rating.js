import React from 'react';

const Rating = (props) => {
    return (
        <div className="rating">
            <span className="max icon-link">
                <span className="icon icon-star"></span>
                <span className="icon icon-star"></span>
                <span className="icon icon-star"></span>
                <span className="icon icon-star"></span>
                <span className="icon icon-star"></span>

                <span className="score icon-link" style={{width: props.rating}}>
                    <span className="icon icon-star"></span>
                    <span className="icon icon-star"></span>
                    <span className="icon icon-star"></span>
                    <span className="icon icon-star"></span>
                    <span className="icon icon-star"></span>
                </span>
            </span>

        </div>
    );
}

export default Rating;