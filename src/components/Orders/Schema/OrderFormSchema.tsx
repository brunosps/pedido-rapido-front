import * as yup from 'yup';

export const OrderFormSchema = yup.object().shape({
    name: yup.string().required('Nome Obrigatório'),
    table_number: yup.number().required('Número da Mesa Obrigatório'),
    order_items: yup.array().of(
        yup.object().shape({
            product_id: yup.number().required("product required"),
            product_name: yup.string(),
            quantity: yup.number().required("quantity required"),
            price: yup.number().required("quantity required"),
        })
    )
})
