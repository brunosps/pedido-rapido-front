import { SearchIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useProducts } from '../../../../services/hooks/useProducts';
import GetProductsService from '../../../../services/products';
import ListItems from './ListItems';


const ProductList = ({preAppendTargetList}) => {

  const items = [];
  const [list, setList] = useState(items);

  
  const {
    control,
    register,
    handleSubmit,
    getValues,
    reset,
    formState,
    setValue
  } = useForm({});

  const handleSearch: SubmitHandler<any> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log("data", values)
    getProducts(values.search)
  }

  const getProducts = (search) => {
    GetProductsService(search).then(response => {
      setList(response.data.products)
    })
  }

  const addToTargetList = (item, quantity) => {
    preAppendTargetList({
      "product_id": item.id,
      "product_name": item.name,
      "quantity": quantity,
      "price": item.price * quantity * 100,
      "comment": ""
    })
  }

  useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser
    getProducts("");
  }, []);


  return (
    <>
      <Box
        as='form'
        flex='1'
        bg='white'
        p='2'
        onSubmit={handleSubmit(handleSearch)}
      >
        <Flex>
          <IconButton type="submit" aria-label="Search database" icon={<SearchIcon />} />
          <Input placeholder="Procurar por produtos"  {...register('search')} />
        </Flex>
        <ListItems items={list} addFunction={addToTargetList} />
      </Box>
    </>
  )
}

export default ProductList;