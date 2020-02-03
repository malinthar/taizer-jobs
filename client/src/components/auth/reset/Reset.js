import React,{Component} from 'react';
import {resetpwd} from '../../../store/actions/authActions'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withTheme,makeStyles} from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link' ;
import {Link as RouterLink}  from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    //position: 'center',
   // marginLeft: theme.spacing(22),
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(5, 0, 2),
   },
   header: {
    marginTop: theme.spacing(8),
    //align:'center'
   },
 }));
const AvatarTemp=()=>{
  const classes = useStyles();
   return ( <Avatar   className={classes.avatar}>
    <LockOutlinedIcon />
  </Avatar>)
}
const HeaderTemp=()=>{
 const classes = useStyles();
 return(<Typography component="h1" variant="h5" className={classes.header}>
             Forgot Password
       </Typography>)
}
const SubButttonTemp=()=>{
 const  classes=useStyles();
  return(
    <Button 
    type="submit"
    fullWidth
    variant="contained"
    color="primary"
    className={classes.button}
  >  Reset Password!
  </Button>
  )
}
class Reset extends Component{   
    state={
      email:''
    }
    
    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.resetpwd(this.state)
    }
    handleChange=(e)=>{
      this.setState({
        [e.target.id]:e.target.value
      })
    }
    handleChangeEmail=(e)=>{
      this.setState({
        [e.target.id]:e.target.value.toLowerCase()
      })
      console.log(this.state.email)
    }
    
   render(){
     if(this.props.reset) {
        return (<Redirect to='/'></Redirect>)
     }  
     return(
       <div>
       <Container component="main" maxWidth="xs">
       <CssBaseline />
        <div align="center" display="flex"    flexDirection="column" mt={8}>
         <AvatarTemp></AvatarTemp>
         <HeaderTemp></HeaderTemp>
         </div>
         <div mt={2}>
            <form onSubmit={this.handleSubmit}>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={this.handleChangeEmail}
              />
                <SubButttonTemp></SubButttonTemp>
            </form>
            </div>
         </Container>
       </div>
     )
   }
}

const mapDispatchToProps=(dispatch)=>{
   return{
     resetpwd:(email)=>dispatch(resetpwd(email))
   }
}
const mapStateToProps=(state)=>{
  return{
    reset:state.auth.resetgen,
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (withTheme(Reset))
