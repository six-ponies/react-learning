require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

var imgDatas = require('../data/imgDatas.json');

imgDatas = (function(imgDataArr) {
    for (var i = 0, j = imgDataArr.length; i < j; i++) {
        var singleImgData = imgDataArr[i];
        singleImgData.url = require('../images/' + imgDataArr[i].fileName);
        imgDataArr[i] = singleImgData;
    }
    return imgDataArr;

})(imgDatas);

class AppComponent extends React.Component {
    render() {
        return (
            // <div className="index">
            //     <img src={yeomanImage} alt="Yeoman Generator" />
            //     <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
            <section className = "stage" >
                <section className="img-sec"></section> 
                <nav className="controller-nav"></nav>
            </section>
            // </div>


        );
    }
}

AppComponent.defaultProps = {};

export default AppComponent;