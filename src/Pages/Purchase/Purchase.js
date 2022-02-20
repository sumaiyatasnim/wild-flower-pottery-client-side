// import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material';
// import { Box } from '@mui/system';
// import React, { useEffect, useState } from 'react';
// import { Container } from 'react-bootstrap';
// import { useForm } from 'react-hook-form';
// import { useParams } from 'react-router-dom';
// import useAuth from '../../hooks/useAuth';
// import Navigation from '../Shared/Navigation/Navigation';

// const Purchase = () => {
//     const { productId } = useParams();
//     const [product, setProduct] = useState({});
//     const { user } = useAuth();
//     const { name, price, description, image } = product;
//     const { register, handleSubmit, reset, formState: { errors } } = useForm();

//     useEffect(() => {
//         fetch(`https://limitless-reef-99253.herokuapp.com/allProducts/${productId}`)
//             .then(res => res.json())
//             .then(data => setProduct(data))
//     }, []);

//     const onSubmit = data => {
//         const myOrder = product;
//         data.order = myOrder;
//         data.email = user?.email;


//         console.log('my order', myOrder)
//         fetch('https://limitless-reef-99253.herokuapp.com/myOrders', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         })
//             .then(res => res.json())
//             .then(result => {
//                 if (result.insertedId) {
//                     alert('You have booked the product');

//                     reset();
//                     console.log(result);
//                 }

//             })
//     }

//     return (
//         <div>

//             <Navigation></Navigation>
//             <Box>
//                 <Typography
//                     sx={{ textAlign: "center", mt: 5, color: "warning.main" }}
//                     variant="h2"
//                     component="div"
//                     gutterBottom
//                 >
//                     Purchase
//                 </Typography>

//                 <Container>
//                     <Grid container spacing={2}>
//                         <Grid item xs={12} md={6}>
//                             <Box >
//                                 <Card>
//                                     <CardActionArea>
//                                         <CardMedia
//                                             component="img"
//                                             height="100%"
//                                             width="100%"
//                                             image={image}

//                                         />
//                                         <CardContent sx={{ textAlign: "start" }}>
//                                             <Typography gutterBottom variant="h5" component="div">
//                                                 Name: {name}
//                                             </Typography>

//                                             <Typography gutterBottom variant="h5" component="div">
//                                                 Price:$ {price}
//                                             </Typography>
//                                             <Typography variant="body2" color="text.secondary">
//                                                 {description}
//                                             </Typography>
//                                         </CardContent>
//                                     </CardActionArea>
//                                     <CardActions></CardActions>
//                                 </Card>
//                             </Box>
//                         </Grid>
//                         <Grid item xs={12} md={6}>
//                             <Box>
//                                 <Container>
//                                     <form onSubmit={handleSubmit(onSubmit)}>
//                                         <TextField
//                                             // required
//                                             sx={{ width: "90%", m: 1 }}
//                                             disabled
//                                             id="outlined-basic"
//                                             label={user?.displayName}
//                                             name="customerName"
//                                             {...register("customerName")} required
//                                             variant="outlined"
//                                         />
//                                         <TextField
//                                             sx={{ width: "90%", m: 1 }}
//                                             disabled
//                                             id="outlined-basic"
//                                             label={user.email}
//                                             {...register("email")} required
//                                             type="email"
//                                             variant="outlined"
//                                         />
//                                         <TextField
//                                             required
//                                             sx={{ width: "90%", m: 1 }}
//                                             id="filled-basic"
//                                             label="phone"
//                                             type="number"
//                                             name="phone"
//                                             {...register("phone")}
//                                             variant="filled"
//                                         />
//                                         <TextField
//                                             required
//                                             sx={{ width: "90%", m: 1 }}
//                                             id="filled-basic"
//                                             label="city"
//                                             name="city"
//                                             {...register("city")}
//                                             variant="filled"
//                                         />
//                                         <TextField
//                                             required
//                                             sx={{ width: "90%", m: 1 }}
//                                             id="filled-basic"
//                                             label="Post-Code"
//                                             name="postCode"
//                                             {...register("postCode")}
//                                             variant="filled"
//                                         />
//                                         <TextField
//                                             required
//                                             sx={{ width: "90%", m: 1 }}
//                                             id="filled-basic"
//                                             label="Country"
//                                             name="country"
//                                             {...register("country")}
//                                             variant="filled"
//                                         />


//                                         <Button
//                                             sx={{
//                                                 width: "90%",
//                                                 m: 1,
//                                                 color: "warning.main",
//                                                 border: 1,
//                                             }}
//                                             type="submit"
//                                             variant="Outlined"
//                                         >
//                                             Purchase
//                                         </Button>
//                                     </form>
//                                 </Container>
//                             </Box>
//                         </Grid>
//                     </Grid>
//                 </Container>
//             </Box>
//         </div>
//     );
// };

// export default Purchase;

import { Button, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';

const Purchase = () => {

    const { productId } = useParams();
    const { user } = useAuth();
    const [product, setProduct] = useState({});
    const [orderData, setOrderData] = useState({});

    const { name, price, description, image } = product;

    useEffect(() => {
        fetch(`https://limitless-reef-99253.herokuapp.com/allProducts/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    const handelOrderField = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrderData = { ...orderData };
        newOrderData[field] = value;
        setOrderData(newOrderData);
    };

    const date = new Date();
    const currentDate = date.toLocaleDateString();
    // Add Purchased data to database 
    const onSubmitOrder = (e) => {
        const order = {
            ...orderData,
            Image: product.image,
            date: currentDate,
            status: "Pending",
            Name: name,
            Price: price,
            customerName: user.displayName,
            email: user?.email,
        };
        axios
            .post("https://limitless-reef-99253.herokuapp.com/myOrders", order)
            .then((res) => {
                if (res.data.insertedId) {
                    alert('You have booked the product')

                }
            });
        e.preventDefault()
    };

    return (
        <div>
            <Navigation></Navigation>
            <Box>
                {/* <Typography
                    sx={{ textAlign: "center", mt: 5, color: "warning.main" }}
                    variant="h2"
                    component="div"
                    gutterBottom
                >
                    Purchase
                </Typography> */}

                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box >
                                <Card>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="100%"
                                            width="100%"
                                            image={image}
                                            alt="green iguana"
                                        />
                                        <CardContent sx={{ textAlign: "start" }}>
                                            <Typography gutterBottom variant="h6" component="div">
                                                Name: {name}
                                            </Typography>

                                            <Typography gutterBottom variant="p" component="div">
                                                Price:${price}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions></CardActions>
                                </Card>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Container>
                                    <form onSubmit={onSubmitOrder}>
                                        <TextField
                                            // required
                                            sx={{ width: "90%", m: 1 }}
                                            disabled
                                            id="outlined-basic"
                                            label={user?.displayName}
                                            name="customerName"
                                            onBlur={handelOrderField}
                                            variant="outlined"
                                        />
                                        <TextField
                                            sx={{ width: "90%", m: 1 }}
                                            disabled
                                            id="outlined-basic"
                                            label={user.email}
                                            type="email"
                                            variant="outlined"
                                        />
                                        <TextField
                                            required
                                            sx={{ width: "90%", m: 1 }}
                                            id="filled-basic"
                                            label="Phone"
                                            type="number"
                                            name="phone"
                                            onBlur={handelOrderField}
                                            variant="filled"
                                        />
                                        <TextField
                                            required
                                            sx={{ width: "90%", m: 1 }}
                                            id="filled-basic"
                                            label="City"
                                            name="city"
                                            onBlur={handelOrderField}
                                            variant="filled"
                                        />
                                        <TextField
                                            required
                                            sx={{ width: "90%", m: 1 }}
                                            id="filled-basic"
                                            label="Post-Code"
                                            name="postCode"
                                            onBlur={handelOrderField}
                                            variant="filled"
                                        />
                                        <TextField
                                            required
                                            sx={{ width: "90%", m: 1 }}
                                            id="filled-basic"
                                            label="Country"
                                            name="country"
                                            onBlur={handelOrderField}
                                            variant="filled"
                                        />
                                        <TextField

                                            sx={{ width: "90%", m: 1 }}
                                            disabled
                                            id="outlined-basic"
                                            label={currentDate}
                                            name="customerName"
                                            onBlur={handelOrderField}
                                            variant="outlined"
                                        />

                                        <Button
                                            sx={{
                                                width: "90%",
                                                m: 1,
                                                color: "warning.main",
                                                border: 1,
                                            }}
                                            type="submit"
                                            variant="Outlined"
                                        >
                                            Book now
                                        </Button>
                                    </form>
                                </Container>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default Purchase;