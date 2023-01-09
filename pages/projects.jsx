import React, { useEffect } from 'react'
import { Grid,GridItem,Container,Box,Text} from "@chakra-ui/react"
import Link from "next/link"
import axios from "axios"
const Projects = ({data}) => {
    
    
  return (
    <Container  boxShadow='base' p='6' rounded='md' bg='white'>
        <Text mb="5" fontSize='xl' textAlign="center">Projects</Text>
    <Grid templateColumns='repeat(2, 1fr)' gap={6}>
        {data.map((el)=>
        <GridItem w="200" key={el.id} boxShadow='base' p='6' rounded='md' bg='white'>
        <Link href={el.html_url}><Text fontWeight="bold">{el.name}</Text></Link>
        <Box display={"flex"} gap="5">
            <Text>Star : {el.stargazers_count}</Text>
            <Text>Forks : {el.forks}</Text>
        </Box>
</GridItem>)}
    
    </Grid>
    </Container>
  )
}
export async function getServerSideProps(context) {
    let res=await axios.get(`https://api.github.com/search/repositories?q=user:prashantxi786+fork:true&sort=updated&per_page=10&type=Repositories`)
    let data=await res.data.items
    return {
      props: {data}, // will be passed to the page component as props
    }
  }
export default Projects