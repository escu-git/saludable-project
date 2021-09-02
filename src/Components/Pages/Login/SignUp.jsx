import React, {useCallback} from 'react';
import { withRouter } from 'react-router';
import { getFirebase } from '../../../firebase';
import {getFirestore} from '../../../firebase';
import {NavLink} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useAuth } from '../../../Contexts/AuthContext';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const SignUp = ({history}) => {
    const classes = useStyles();
    const firebase = getFirebase();
    const db = getFirestore();
    const auth = useAuth();
    const usersCollection = db.collection('users');

    const handleSignUp = useCallback(async event =>{
      event.preventDefault();
      const {username, address, firstName, lastName, treatment,personId, genre, email, phone,  password} = event.target.elements;
      const newUser = {
        username:username,
        name: firstName.value,
        surname:lastName.value,
        address:address,
        genre:genre,
        treatmentType:treatment,
        email: email.value,
        phone:phone.value,
        personId:personId
      }
      
      try{
        
        const database = await firebase
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        if(database){ usersCollection.add(newUser).then(({id})=>{
          auth.updateUserData(newUser);
        })
          history.push('/')}
      } catch(err){
        console.log(err)
      }
    },[history])

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSignUp}>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="address"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="personId"
                  label="Document"
                  name="personId"
                  autoComplete="Document"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <label for='treatment'>Treatment:</label>
              <select name='treatment'>
                <option value='obesity'>Obesity</option>
                <option value='anorexy'>Anorexy</option>
                <option value='bulimia'>Bulimia</option>
              </select>

              </Grid>
              <Grid item xs={12} sm={6}>
                <label for='male'>Male:</label>
                <input
                    type='radio'
                    name='genre'
                    id='genre'
                />
                <label for='female'>Female:</label>
                <input
                    type='radio'
                    name='genre'
                    id='genre'
                />
                <label for='other'>Other:</label>
                <input
                    type='radio'
                    name='genre'
                    id='genre'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="phone"
                  label="Phone"
                  name="phone"
                  autoComplete="phone"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive news, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <NavLink to='/signin' style={{color:'inherit'}}>
                  Already have an account? Sign in
                </NavLink>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
        </Box>
      </Container>
    );
}

export default withRouter(SignUp)
