function Header(props){

    console.log(props.userName);
    return(
        <header className='header'>
            <h1 className='header__title'>Bonjour <span className='user-name'>{props.userName}</span></h1>
            <p className='header__text'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </header>
    )
}

export default Header;