 import { NavLink } from 'react-router-dom'
 import { home, explore, twitter, notifications, messages, bookmarks, lists, profile, more } from './icon.js'
 import './LeftPane.css'

// const LeftPane = () => {
//   return (
//     <div className="left-pane">
//       <div className="container">
//         <header>{twitter}</header>

//         <nav>
//           <NavLink to="/" activeClassName="selected">
//             <span>{home} Home</span>
//           </NavLink>
//           <NavLink to="/explore" activeClassName="selected">
//             <span>{explore} Explore</span>
//           </NavLink>
//           <NavLink to="/notifications" activeClassName="selected">
//             <span>{notifications} Notifications</span>
//           </NavLink>
//           <NavLink to="/messages" activeClassName="selected">
//             <span>{messages} Messages</span>
//           </NavLink>
//           <NavLink to="/bookmarks" activeClassName="selected">
//             <span>{bookmarks} Bookmarks</span>
//           </NavLink>
//           <NavLink to="/lists" activeClassName="selected">
//             <span>{lists} Lists</span>
//           </NavLink>
//           <NavLink to="/profile" activeClassName="selected">
//             <span>{profile} Profile</span>
//           </NavLink>
//           <button className="more">
//             <span>{more} More</span>
//           </button>
//         </nav>

//         <button className="tweet">Tweet</button>

//         <footer>
//           <button className="account">
//             <div className="photo">
//               <img
              
//                 src="https://pbs.twimg.com/profile_images/1393551558210633732/KYsC54go_normal.jpg"
//               />
//             </div>
//             <div>
//               <div className="name">Irfan</div>
//               <div className="username">@irfan897</div>
//             </div>
//           </button>
//         </footer>
//       </div>
//     </div>
//   )
// }

// export default LeftPane


import React from 'react'

const Leftpane = ({children}) => {
  const menuItem=[
    {
      path:"/twitter",
      icon:twitter
  },
    {
        path:"/home",
        name:"Home",
        icon:home
    },
   
    {
        path:"/explore",
        name:"Explore",
        icon:explore
    },
    {
        path:"/notifications",
        name:"Notification",
        icon:notifications
    },
    {
        path:"/messages",
        name:"Messages",
        icon:messages
    },
    {
        path:"/bookmarks",
        name:"Bookmarks",
        icon:bookmarks
    },
    {
        path:"/lists",
        name:"Lists",
        icon:lists
    },
    {
        path:"/profile",
        name:"Profile",
        icon:profile
    },
    {
        path:"/more",
        name:"More",
        icon:more
    }

]
  return (
    <div className="container">
      

      <div className="leftpannel">
      {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link">
                           <div className="icon">{item.icon}</div>
                           <div className="link_text">{item.name}</div>
                       </NavLink>
                   ))
       }
 <button className="tweet">Tweet</button>

<footer>
   <button className="account">
     <div className="photo">
       <img
         alt='my image'
         src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Elon_Musk_%283017880307%29.jpg"
       />
     </div>
     <div>
       <div className="name">Irfan</div>
       <div className="username">@irfan897</div>
     </div>
   </button>
 </footer>
      </div>
     
      <main>{children}</main>
           
    </div>

  )
}

export default Leftpane


