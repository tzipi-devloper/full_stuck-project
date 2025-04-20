import { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { Box, TextField, Button, Typography, Paper, Snackbar, Alert } from '@mui/material';
import { zodResolver } from '@hookform/resolvers/zod';
import schema from './AuthSchema';
import type {User} from './authTypes';
import { useCreateUserMutation } from './authAPI';
const AuthForm = () => {
    const [createUser] = useCreateUserMutation(); 
    const { register, handleSubmit, reset, formState: { errors } } = useForm<User>({
        mode: 'onChange',
        resolver: zodResolver(schema),
    });
    const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
    const onSubmit: SubmitHandler<User> = async (data) => {
        try {
            const { confirmPassword, ...dataWithoutConfirmPassword } = data;
            console.log(dataWithoutConfirmPassword);
            const result = await createUser(dataWithoutConfirmPassword).unwrap();
            console.log('User created successfully:', result);
            setOpenSnackbar(true); 
        } catch (error) {
            console.error('Error creating user:', error);
            alert('שגיאה ביצירת המשתמש');
        }
        reset(); 
    };
    const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#f0f2f5'
            }}
        >
            <Paper elevation={3} sx={{ padding: 3, width: '400px' }}>
                <Typography variant="h5" component="h1" gutterBottom>
                    Registration Form
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        fullWidth
                        label="Username"
                        variant="outlined"
                        margin="normal"
                        {...register("name")}
                    />
                    {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        type="email"
                        {...register("email")}
                    />
                    {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
                    <TextField
                        fullWidth
                        label="phone"
                        variant="outlined"
                        margin="normal"
                        type="tel"
                        {...register("phone")}
                    />
                    {errors.phone && <p style={{ color: "red" }}>{errors.phone.message}</p>}
                    <TextField
                        fullWidth
                        label="Password"
                        variant="outlined"
                        margin="normal"
                        type="password"
                        {...register("password")}
                    />
                    {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
                    <TextField
                        fullWidth
                        label="Confirm Password"
                        variant="outlined"
                        margin="normal"
                        type="password"
                        {...register("confirmPassword")}
                    />
                     {errors.confirmPassword && <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>}
                  
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ marginTop: 2 }}
                    >
                        Register
                    </Button>
                </form>
            </Paper>

            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                    The user has been created successfully!
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default AuthForm;
