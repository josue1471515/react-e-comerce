



import React, { Component } from 'react';
import { IoIosRemoveCircle } from "react-icons/io";

class Carousel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            img: [],
            imgHtmlIndicators: [],
            imgHtmlItem: [],
            count: 0,
            fieldVal: "",
            ignore:true

        }
        this.onChangeImg = this.onChangeImg.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.update = this.update.bind(this);

    }

    onChangeImg(e) {
        this.setState({
            img: e.target.value
        });
    }



    componentDidMount() {
        const imgSrc = this.props.arrayImg;
        var imgHtmlIndicators = [];
        var imgHtmlItem = [];
        var count = 0;
        if (imgSrc.lenfth > 0) {

            imgSrc.forEach(function (value) {
                let activeItem = '';
                let activeIndicators = '';

                if (count == 0) {
                    activeItem = "active";
                    activeIndicators = "active";
                }

                imgHtmlIndicators.push(<li data-target='#carouselExampleIndicators' key={count} data-slide-to={count} className={activeIndicators}  >
                    <img className="d-block " src={value} alt="First slide" />

                </li>);
                imgHtmlItem.push(<div className={"carousel-item " + activeItem} key={count} >
                    <img className="d-block w-100" src={value} alt="Second slide" />
                </div>);
                count++;
            });
            this.setState({
                imgHtmlIndicators: imgHtmlIndicators,
                imgHtmlItem: imgHtmlItem,
            });
        }

    }


    handleClick(id) {
        
        var idOrigin = id;
        let resetIndicators = [];
        let resetItems = [];
        const self = this;
        var sw = 0;
        var activeItem = '';
        var activeIndicators = '';
        for (let i = 0; i < this.state.imgHtmlIndicators.length; i++) {
            let value = this.state.imgHtmlIndicators[i];

            if (value.key != idOrigin) {
                if (sw < 2) {
                    activeItem = "active";
                    activeIndicators = "active";
                    sw=false;
                }else{
                    activeItem = "";
                    activeIndicators="";
                }
                    resetIndicators.push(<li data-target='#carouselExampleIndicators' key={value.key} data-slide-to={value.key} className={activeItem} >
                        <img className="d-block " src={value.props.children[0].props.src} alt="First slide" />
                        <a aria-label="Close" onClick={(e) => self.handleClick(value.key)} style={{ width: '50%', height: '50%' }} >
                            <IoIosRemoveCircle color="red" size="2em" />
                        </a>
                    </li>);
                    resetItems.push(<div className={"carousel-item "+ activeIndicators}  key={value.key} >
                        <img className="d-block w-100" src={value.props.children[0].props.src} alt="Second slide" />
                    </div>);
                    sw++;
            }
        }

        this.setState({
            imgHtmlIndicators: resetIndicators,
            imgHtmlItem: resetItems
        });
     
        console.log(resetItems);
        
        resetIndicators = [];
        resetItems = [];
    }

    componentWillReceiveProps(props) {

        const imgSrc = props.arrayImg;
        var imgHtmlIndicators = this.state.imgHtmlIndicators;
        var imgHtmlItem = this.state.imgHtmlItem;
        const self = this;
        var index = this.state.count;
        var img = this.state.img;
        img.push(imgSrc);
        for (let i = 0; i < imgSrc.length; i++) {
            let value = imgSrc[i];
            let activeItem = '';
            let activeIndicators = '';
            let contIndex = index;
            index++;

            if (imgHtmlIndicators.filter((el) => el.props.className == "active").length == 0) {
                activeItem = "active";
                activeIndicators = "active";
            }
            img.push()
            imgHtmlIndicators.push(<li data-target='#carouselExampleIndicators' key={contIndex} data-slide-to={contIndex} className={activeIndicators}  >
                <img className="d-block " src={value} alt="First slide" />
                <a aria-label="Close" onClick={(e) => self.handleClick(contIndex)} style={{ width: '50%', height: '50%' }} >
                    <IoIosRemoveCircle color="red" size="2em" />
                </a>
            </li>);
            imgHtmlItem.push(<div className={"carousel-item " + activeItem} key={ contIndex} >
                <img className="d-block w-100" src={value} alt="Second slide" />
            </div>);
        };
        this.setState({
            imgHtmlIndicators: imgHtmlIndicators,
            imgHtmlItem: imgHtmlItem,
            img : img,
            count: index
        });

        // passing img array
        this.props.onUpdate(img);
    }
    
    update (e){
        // debugger;
        // console.log(e.target.value);
        // this.props.onUpdate(e.target.value);
        // this.setState({fieldVal: e.target.value});
      };

    

    render() {
        const hasValues = this.state.imgHtmlIndicators.length; 

        return (
            <React.Fragment>
                <div className='form-group col-sm-3 ' hidden={hasValues > 0 ? false : true} style={{ marginTop: '30px', marginBottom: '50px' }} >
                
                    <div id="carouselExampleIndicators"  data-interval="false" className="carousel slide  "  data-ride="carousel">
                        <ol className="carousel-indicators mCustomScrollbar meartlab"  >
                            {this.state.imgHtmlIndicators}
                        </ol>
                        <div className="carousel-inner" id="imagesGenerated" >
                            {this.state.imgHtmlItem}
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
                    <div onClick={this.handleClick}>
                    <input id="ulrImg"   type="text"  onChange={this.update }   value={this.state.img}  ></input>
                    </div>
                </div>
            </React.Fragment>
        )
    };
}
export default Carousel;