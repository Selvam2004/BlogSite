//import 'bootstrap/dist/css/bootstrap.css';
export default function Blog({blog}){
    const {id,name,content,author,img,time}=blog;
    return(
        <div key={id} className="border border-success p-4">
        <h2>{name}</h2>   
        <img className="float-start m-2" alt={name} src={img}/>

        <input type="checkbox" id="check"/>
        <p className="ms-4 me-3">{content}</p>
        <p className="cont">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dignissimos nesciunt dolorem, omnis delectus est soluta, consequatur excepturi, atque dolore qui. Obcaecati laborum alias in veritatis dolorem modi explicabo quibusdam.
        </p>
        <label for="check"    title="click to view in full Screen">Read more...</label>
        <div className="clearfix"></div>
        <small className="ms-5 float-start">author:{author}</small>
        <small className="me-5 float-end">{time}</small>
        <div className="clearfix"></div>
        </div>
    );
} 