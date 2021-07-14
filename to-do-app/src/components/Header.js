import Button from "./Button"


const Header = ({title, onAdd, showAdd}) => {
    return (
        <header className = 'header'>
            <h1 style={styling}> {title} </h1>
            <Button color='lightblue' text={!showAdd ? 'Add' : 'Close'} onClick = {onAdd} > </Button>
            
        </header>
    )
}

const styling = {
    color: 'lightblue',
}

export default Header
