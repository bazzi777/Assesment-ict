import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
    return (
        <div>

            <AppBar style={{ background: "yellow" }}>
              
            <Toolbar>
            <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/06/attachment_130821073-e1656602175641.jpeg?auto=format&q=60&fit=max&w=930" height="40px"/>

            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>Blog Dashboard</Typography> 
                <h2></h2>&nbsp;&nbsp;&nbsp;&nbsp;
               
                <Link to='/hom'>
                        <Button variant="contained" style={{ backgroundColor: "yellow", color:"black"}}>HOME</Button>
                </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/ss'>
                    <Button variant="contained" style={{backgroundColor:"yellow",color:"black"}}>Add Blog Links</Button>
                </Link>
               
                &nbsp;
               
            </Toolbar>
        </AppBar>
        <img src="https://images-platform.99static.com/X2baBGXWdAIJP-ruTBTUgX2w3UY=/219x18:737x536/500x500/top/smart/99designs-contests-attachments/110/110664/attachment_110664641" height="400px"/>
        </div >
    )
}

export default navbar