import { AppBar, Button, TextField, Toolbar } from '@mui/material'
const Addblog = (props) => {
  return (
    <div>
      <h1>BLOG</h1>
      <TextField label="Name" variant="outlined"/><br></br><br></br>
      <TextField label="Discription" variant="outlined"/><br></br><br></br>
      <TextField label="author name" variant="outlined"/><br></br><br></br>
      <Button variant="contained" style={{backgroundColor:"yellow",color:"black"}}>SUBMIT</Button>&nbsp;&nbsp;
      <Button variant="contained" style={{backgroundColor:"yellow",color:"black"}} href="/hom">PREVIOUS</Button>
      
    </div>
  )
}

export default Addblog
