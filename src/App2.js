import React from "react"
import './index2.css';
import Star from "./components/Star"
export default function App2() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    let pathImage = contact.isFavorite ? "../images2/star-filled.png" : "../images2/star-empty.png"

    function toggleFavorite() {
        setContact(prevContact=>{
            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
            
            
        })
        console.log("Toggle Favorite")
    }

    return (
        <main>
            <article className="card">
                <img src="./images2/user.png" className="card--image" />
                <div className="card--info">
                    <Star contact={contact} handleClick={toggleFavorite}/>
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}
// export default function App2() {
//     const [contact, setContact] = React.useState({
//         firstName: "John",
//         lastName: "Doe",
//         phone: "+1 (719) 555-1212",
//         email: "itsmyrealname@example.com",
//         isFavorite: true
//     })
//     let pathImage = contact.isFavorite ? "../images2/star-filled.png" : "../images2/star-empty.png"

//     function toggleFavorite() {
//         setContact(prevContact=>{
//             return {
//                 ...prevContact,
//                 isFavorite: !prevContact.isFavorite
//             }
            
            
//         })
//         console.log("Toggle Favorite")
//     }

//     return (
//         <main>
//             <article className="card">
//                 <img src="./images2/user.png" className="card--image" />
//                 <div className="card--info">
//                     <img
//                         src={`${pathImage}`}
//                         className="card--favorite"
//                         onClick={toggleFavorite}
//                     />
//                     <h2 className="card--name">
//                         {contact.firstName} {contact.lastName}
//                     </h2>
//                     <p className="card--contact">{contact.phone}</p>
//                     <p className="card--contact">{contact.email}</p>
//                 </div>

//             </article>
//         </main>
//     )
// }
