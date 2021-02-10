import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Alert } from '@material-ui/lab';
import { withRouter } from 'react-router-dom';

const Copyright = () => {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link
        color='inherit'
        href='https://www.linkedin.com/in/md-abdullah-al-mamun-1503120142015/'
      >
        Mamun Shuvo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

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
  root: {
    marginBottom: '20px',
    width: '100%',
  },
}));

const Signup = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [promotions, setPromotions] = useState(false);
  const [errorMessege, setErrorMessege] = useState('');
  const [successmessege, setSuccessMessege] = useState('');

  let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    //Check all fields are empty or not
    if (!firstname && !lastname && !email && !password) {
      setErrorMessege('All Fields Required');
      //setEmpty(true);
    } else {
      //Every input is empty or not individually
      if (!firstname) {
        setErrorMessege('First Name is Required');
      } else {
        if (!lastname) {
          setErrorMessege('Last Name is Required');
        } else {
          if (!email) {
            setErrorMessege('Email is Required');
          } else {
            //Email Validation
            if (!email.match(emailRegex)) {
              setErrorMessege('Enter a Valid Email!!!!');
            } else {
              if (!password) {
                setErrorMessege('Password is Required');
              } else {
                setErrorMessege(false);
                setFirstName('');
                setLastName('');
                setEmail('');
                setPassword('');
                setPromotions(false);
                setSuccessMessege('Congratz!!! Go to Login');
                setTimeout(() => {
                  setSuccessMessege('');
                }, 2000);
              }
            }
          }
        }
      }
    }
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />

      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>

        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          {/* Error Messege Alert */}
          {errorMessege ? (
            <Alert className={classes.root} severity='error'>
              {errorMessege}
            </Alert>
          ) : (
            ''
          )}

          {/* Success Messege Alertt */}
          {successmessege ? (
            <Alert className={classes.root} severity='success'>
              {successmessege}
            </Alert>
          ) : (
            ''
          )}

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                value={firstname}
                onChange={(event) => setFirstName(event.target.value)}
                autoComplete='fname'
                name='firstName'
                variant='outlined'
                required
                fullWidth
                id='firstName'
                label='First Name'
                autoFocus
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                value={lastname}
                onChange={(event) => setLastName(event.target.value)}
                variant='outlined'
                required
                fullWidth
                id='lastName'
                label='Last Name'
                name='lastName'
                autoComplete='lname'
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                variant='outlined'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                variant='outlined'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    value={promotions}
                    onChange={() => setPromotions(!promotions)}
                    color='primary'
                  />
                }
                label='I want to receive inspiration, marketing promotions and updates via email.'
              />
            </Grid>
          </Grid>

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Sign Up
          </Button>

          <Grid container justify='flex-end'>
            <Grid item>
              <Link href='#' variant='body2'>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>

      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default withRouter(Signup);
