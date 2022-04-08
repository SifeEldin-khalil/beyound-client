const Header = ({text, color}) => {
  return (
    <header>
      <h2
      style={{ 
        margin: '15px',
        padding: '5px 20px',
        color: color,
      }}
      >
        {text}
      </h2>
    </header>
  )
}

Header.defaultProps = {
  color: 'grey'
}
export default Header