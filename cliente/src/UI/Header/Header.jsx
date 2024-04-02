import { AppBar, InputBase, Toolbar } from "@mui/material";
import { useState } from "react";
//import logo from "../imagenes/logoLUXURY.png";
import logo from "../../imagenes/logoLUXURY.png"
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";

const Header = () => {
  const [mobile, setMobile] = useState(false);

  const displayDesktop = () => (
    <Toolbar className="toolbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="searchContainer">
        <InputBase fullWidth placeholder="Search here..." />
        <SearchIcon className="searchIcon" />
      </div>
    </Toolbar>
  );

  return (
    <AppBar className="appBar" sx={{ backgroundColor: "#004d40" }}>
      {mobile ? null : displayDesktop()}
    </AppBar>
  );
};

export default Header;



// import {AppBar, InputBase, Toolbar} from "@mui/material";
// import {  styled } from "@mui/material/styles"
// //import { makeStyles } from "@mui/styles";
// import { useState } from "react"
// import logo from "../imagenes/logoLUXURY.png";
// import SearchIcon from '@mui/icons-material/Search';

// //import styled from "@emotion/styled";

// const StyledToolbar = styled(Toolbar)(({theme})=>({
//   toolbar: {
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
      
//         },
//   logo:{
//           height:"30px",
//           margin: theme.spacing(1,0,0,2),
//           objectFit: "contain",
//         },
//   input:{
//           height:"30px",
//           margin: theme.spacing(1,0,0,2),
//           objectFit: "contain",
//   }      
// }))

// const Header = () => {
//     const [mobile, setMobile] = useState(false);

//     // const classes = useStyle()

//     const displayMobile = () =>{ }
//     const displayDesktop = () =>{
//       return(   
//         // <Toolbar className={classes.toolbar}>
//         //   <img src={logo} className={classes.logo}/>
//         // </Toolbar>     
//       <StyledToolbar>
//         <img src={logo} alt="Logo" style={{ maxWidth: "100px" }}/>
//         <InputBase fullWidth placeholder="Search here..."/>
//         <SearchIcon />
//         </StyledToolbar>
//       )
//     }
//   return (
//     <div>
//        <AppBar sx={{backgroundColor: "#004d40"}}> 
//       {
//       mobile ? displayMobile() : displayDesktop()
//     }
//       </AppBar>
//     </div>
//   )
// }
// export default Header
///*////////////////////////////

// const useStyle = makeStyles(({theme})=>({
//     toolbar: {
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
  
//     },
//     logo:{
//       height:"30px",
//       margin: theme.spacing(1,0,0,2),
//       objectFit: "contain",
//     }
//   }))



