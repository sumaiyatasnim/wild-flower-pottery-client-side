import { Button, CircularProgress, Container, TextField } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const AddProducts = () => {
    const { user, isLoading } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/addProducts', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
                console.log(res)
            })
    }
    return (
        <Container sx={{ display: "flex" }}>
            {(isLoading) &&
                <CircularProgress />}

            <Container>
                <h1 className="register-header-text">Add Products</h1>

                {/* <Grid item sx={{ mt: 8 }} xs={12} md={6}> */}

                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        sx={{ width: "75%", m: 1 }}
                        id="standard-basic"
                        label="name"
                        name="name"
                        {...register("name")}
                        variant="standard"
                    />
                    <TextField
                        sx={{ width: "75%", m: 1 }}
                        id="standard-basic"
                        label="description"
                        type="text"
                        name="description"
                        {...register("description")}
                        variant="standard"
                    />
                    <TextField
                        sx={{ width: "75%", m: 1 }}
                        id="standard-basic"
                        label="price"
                        type="number"
                        name="price"
                        {...register("price")}
                        variant="standard"
                    />
                    <TextField
                        sx={{ width: "75%", m: 1 }}
                        id="standard-basic"
                        label="Image URL"
                        type="text"
                        name="image"
                        {...register("image")}
                        variant="standard"
                    />



                    {/* {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))} */}

                    <Button
                        sx={{ width: "75%", m: 1 }}
                        type="submit"
                        variant="contained"
                    >
                        Add Products
                    </Button>
                </form>
            </Container>
        </Container>
    );
};

export default AddProducts;