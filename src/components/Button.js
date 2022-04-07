const Button = ({text, textColor, color, onClick}) => {
  return (
    <button 
    style={{ 
      padding: '1vw',
      fontSize: '2.5vw',
      borderRadius: '1vw',
      color: textColor,
      backgroundColor: color
    }}
    onClick={onClick}
    > 
    {text} 
    </button>
  )
}

Button.defaultProps = {
  text: 'Search',
  color: 'green',
  textColor: 'white'
}

export default Button