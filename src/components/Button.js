const Button = ({text, textColor, color, onClick}) => {
  return (
    <button 
    style={{ 
      margin: '15px',
      padding: '5px 20px',
      fontSize: '20px',
      borderRadius: '10px',
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