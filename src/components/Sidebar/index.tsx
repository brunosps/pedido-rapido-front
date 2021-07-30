
import { Box, Stack } from '@chakra-ui/react'
import { RiFileCopyFill, RiDashboardLine, RiUser3Line, RiClipboardLine, RiDraftLine } from 'react-icons/ri'
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'

export function Sidebar() {
    return (
        <Box as='aside' w='64' mr='8'>
            <Stack spacing='12' align='flex-start'>

                <NavSection title='GERAL'>
                    <NavLink icon={RiDashboardLine} href='/dashboard'>Painel de Controle</NavLink>
                    <NavLink icon={RiFileCopyFill} href='/pedidos'>Pedidos</NavLink>
                </NavSection>

                <NavSection title='ADMIN'>
                    <NavLink icon={RiUser3Line} href='/users'>Funcionários</NavLink>
                </NavSection>

                <NavSection title='COZINHA'>
                    <NavLink icon={RiClipboardLine} href='/cozinha/pedidos'>Pedidos em Andamento</NavLink>
                </NavSection>

                <NavSection title='ATENDENTE'>
                    <NavLink icon={RiDraftLine} href='/atendente/pedidos'>MANIPULAR PEDIDOS</NavLink>
                </NavSection>

            </Stack>
        </Box>
    )
}