import { Flex, Box, Link as StyledLink, Image } from 'rebass/styled-components'
import { Link } from 'react-router-dom'



export const NavBar = () => {

    return (
        <Flex bg='black' color='white' justifyContent='center'>
            <Flex px={2} width='100%' alignItems='center'>
                <Link component={StyledLink} variant="nav" to='/'>
                    React Query CRUD
                </Link>
                <Box mx='auto' />
                <Link component={StyledLink} variant="nav" to='/create-book'>
                    + Add new biik
                </Link>
            </Flex>
        </Flex>
    )
}