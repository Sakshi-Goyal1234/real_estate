import "./Header.css";

export default function Header()
{
    return(
        <>
        <section className="h-wrapper">
            <div className="h-container">
               <img src="/logo (1).png"  alt="fan" width={100}></img>
               <div className="h-menu">
                 <a >Residencies</a>
                 <a>Our Value</a>
                <a>Contact Us</a>
                <a>Get Started</a>
                <button className="button"><a >Contact</a></button>
               </div>
            </div>
        </section>
        </>
    );
}