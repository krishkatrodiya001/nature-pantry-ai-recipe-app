import squirrelLogo from "../images/squirrel-logo.png"

export default function Header() {
    return (
        <header>
            <img src={squirrelLogo}/>
            <div className="header-text">
                <div className="title">Nature's Pantry</div>
                <div className="by">by Chef Puter</div>               
            </div>
        </header>
    )
}