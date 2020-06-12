import React from 'react'
import image from "./image/myImage.jpg";
import Pic from "./Pic.js"
import List from './listThings.js';
import ListItems from './ListItems.js'
function Component() {
    const skillItems = ListItems.map(Item => <List key={Item.id}  Ihave={Item} />);
    console.log(skillItems);
    const title  =  '"Hello ,"';
    const a = '"My Experiance ,"';
    const info =
    '\n I\'m  hamza kamel \n i\'m software Engineer , I love coding \n i was sarted my journey when I was at university  '
    + ', Becaus that ... \n '; 

    const myExperiance1 = "1 -  C# : develpment Application in (Console and Windows Application ) \n"+
    "like my graduation project ('CFG generator tools')  \n";
    const myExperiance2  = "2 - NodeJs : development  (Backend) website just for training when i was trainer with WTM companey by 'Express framework' and 'MongoDB' , create real time chat website by using socketio and react  ,and some knowledge in NestJs frame work.";
    const myExperiance3 = "3 - React : I am not one of the people who love design, coordination etc ... but I had to learn (specifically) to be aware of what is happening on both sides (Back/front)end) " ;
    return(
        <>


        <div className="container "> 
            
            <div className="photo">

            </div>
            <div className="bio-container bkPhoto">
                <div className="bio">
                    <div className="title"> {title}  </div>
                    <p>
                        <h2 className="bio_font"> {info}</h2>
                       
                    </p><br></br>
                       <div className="title">{a}</div>

                    <p  className="bio_font">
                        {myExperiance1}
                    </p>
                    <p className="bio_font">
                                   {myExperiance2}
                    </p>
                    <p className="bio_font">
                                   {myExperiance3}
                    </p>


                    <div className="title"> Another  </div>
                      {skillItems}
                </div>
               

            </div>
           

        </div>
    
        
       
 </>
 
    );
}

export default Component;