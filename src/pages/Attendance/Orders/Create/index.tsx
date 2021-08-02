
import { Box, } from "@chakra-ui/react";
import React from "react";
import { Header } from "../../../../components/Header";
import OrderFormPage from "../../../../components/Orders/OrderFormPage";
import withAuth from "../../../../components/withAuth";


function CreateOrder() {
    return (
        <Box>
            <Header />

            <OrderFormPage/>

        </Box>
    )
}

export default withAuth(CreateOrder, "waiter");