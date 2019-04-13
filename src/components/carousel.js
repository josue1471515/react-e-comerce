

const React = require('react')
class Carousel extends React.Component {
    render() {
        return (
            <div className='form-group col-sm-5'>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators mCustomScrollbar meartlab">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active">
                            <img className="d-block " src="../../logo.svg" alt="First slide" />
                        </li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1">
                            <img className="d-block " src="../../logo.svg" alt="First slide" />
                        </li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2">
                            <img className="d-block" src="../../img/men_04.jpg" alt="First slide" />
                        </li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="../../logo.svg" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="../../logo.svg" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <figure>
                                <img className="d-block w-100" src="../../img/men_04.jpg" alt="Third slide"  />
                            </figure>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>

        )
    };
}
export default Carousel;