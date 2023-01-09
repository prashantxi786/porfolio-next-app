import React, { useEffect } from 'react'
import ProfileCard from "../Components/ProfileCard"
import {Box,Text, Container, Flex,Grid,GridItem} from "@chakra-ui/react"
import axios from 'axios'
import Projects from '../pages/projects'
const Sidebar = () => {
  
  const [data,setData]=React.useState([])
  useEffect(()=>{
    axios.get('https://api.github.com/search/repositories?q=user:prashantxi786+fork:true&sort=updated&per_page=10&type=Repositories')
    .then((res)=>setData(res.data.items))
  })
  return (
    <Flex  boxShadow='base' p='6' rounded='md' bg='white'>
      <Container  boxShadow='base' p='6' rounded='md' bg='white' w={[200, 400, 400]} >
        <ProfileCard/> 
        <Flex flexWrap="wrap" gap="2" w="" h="20" >
          <Text bgColor="teal.200" fontWeight="bold" fontSize="10" h="7" w="15">TYPESCRIPT</Text>
          <Text bgColor="teal.200" fontWeight="bold" fontSize="10" h="7" w="15">REACT.JS</Text>
          <Text bgColor="teal.200" fontWeight="bold" fontSize="10" h="7" w="15">NODE.JS</Text>
          <Text bgColor="teal.200" fontWeight="bold" fontSize="10" h="7" w="15">DENO</Text>
          <Text bgColor="teal.200" fontWeight="bold" fontSize="10" h="7" w="15">MONGODB</Text>
          <Text bgColor="teal.200" fontWeight="bold" fontSize="10" h="7" w="15">GIT</Text>
          <Text bgColor="teal.200" fontWeight="bold" fontSize="10" h="7" w="15">REACTNATIVE</Text>
          <Text bgColor="teal.200" fontWeight="bold" fontSize="10" h="7" w="15">CHAKRA-UI</Text>
          <Text bgColor="teal.200" fontWeight="bold" fontSize="10" h="7" w="15">CSS</Text>
          <Text bgColor="teal.200" fontWeight="bold" fontSize="10" h="7" w="15">ANTD</Text>
          <Text bgColor="teal.200" fontWeight="bold" fontSize="10" h="7" w="15">TAILWIND</Text>
          <Text bgColor="teal.200" fontWeight="bold" fontSize="10" h="7" w="15">MUI</Text>
        </Flex>
      </Container>
      <Container>
      <Container  boxShadow='base' p='6' rounded='md' bg='white'>
        <Text mb="5" fontSize='xl' textAlign="center">Projects</Text>
    <Grid templateColumns='repeat(2, 1fr)' gap={6}>
        {data.map((el)=>
        <GridItem w="200" key={el.id} boxShadow='base' p='6' rounded='md' bg='white'>
        <Text fontWeight="bold">{el.name}</Text>
        <Box display={"flex"} gap="5">
            <Text>Star : {el.stargazers_count}</Text>
            <Text>Forks : {el.forks}</Text>
        </Box>
</GridItem>)}
    
    </Grid>
    </Container>
      </Container>
    </Flex>
  )
}


export default Sidebar