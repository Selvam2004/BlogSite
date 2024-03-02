import Blog from "./blog";
const blogs = [
    {
        id:1,
      name: "Theory of Relativity",
      content:
        "The theory of relativity usually encompasses two interrelated physics theories by Albert Einstein: special relativity and general relativity, proposed and published in 1905 and 1915, respectively.[1] Special relativity applies to all physical phenomena in the absence of gravity.",
      author: "Einstein",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT33dGHBrT4GQCB22_sEfqN1uv4ytd-K3pO0P1Xf19bnk4sAMcaRV8QlhPyrdV4aP7AYyg&usqp=CAU",
      time: "2 mins ago",
    },
    {
      id:2,
      name:"Labnol.Org, Amit Agarwal",
      content:"There’s a reason why we put Labnol #1 in this top blogs in India list. The reason is the guy behind it: Amit Agarwal.This famous blog was started by Amit Agarwal with a vision to spread the culture of blogging in India. Amit quit his job to become the first professional blogger from India.Amit holds a degree from IIT which is considered as the highest B.Tech degree in India. He is also listed in the Adsense success story by Google. Amit basically writes about How-to Guides and gives solutions for issues related to technology.Labnol is undoubtedly the best blogs in India where you can find technology simplified for you.",
      author:"Amit Agarwal",
      img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fipiccy.com%2Ffeature%2Ffree-online-photoshop&psig=AOvVaw0TxiZc19RDaiPRzWUa6k-J&ust=1697450763729000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCMi8_ofn94EDFQAAAAAdAAAAABAD",
      time:"now"
    }
  ];

  export default function Content(){  
    const arr=blogs.map((blog)=><Blog blog={blog}/>);
    return(
        arr
    );
  }