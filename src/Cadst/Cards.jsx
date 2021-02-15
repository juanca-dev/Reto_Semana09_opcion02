import React,{Component} from 'react';
import Card from './CardUI';
import img1 from '../assets/flores01.jpg';
import img2 from '../assets/flores02.jpg';
import img3 from '../assets/flores03.jfif';
import img4 from '../assets/flores04.jfif';
import img5 from '../assets/flores05.jfif';
import img6 from '../assets/flores06.jfif';
import img7 from '../assets/flores07.jfif';
import img8 from '../assets/flores08.jfif';
import img9 from '../assets/flores09.png';
import img10 from '../assets/flores10.jpg';
import img11 from '../assets/flores11.jfif';
import img12 from '../assets/flores12.jfif';
 
 class Cards extends Component{
     constructor(props){
         super(props);
         this.state={};
     }
     render(){
         
       
         return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="Rosas" />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2}title="Clavel" />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3} title="Peonías"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img4} title="Amapola"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img5} title="Azucenas"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img6} title=" Lilis"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img7} title="Rosa banksiae."/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img8} title="Dalias"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img9} title="Floreros Tulipanes"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img10} title="Claveles"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img11} title="Asters"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img12} title="Geranio"/>
                    </div>
                </div>
            </div>
         );
     }
 }
export default Cards;