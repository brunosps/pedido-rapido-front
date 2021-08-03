import { Stack, Box, Text } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'

interface PaginationProps {
    page: number,
    length?: number,
    total_pages: number,
    total?: number,
    onPageChange: (page: number) => void,
}

const siblingsCount = 1

function generatePagesArray(from: number, to: number) {
    return [...new Array(to - from)].map((_, index) => {
        return from + index + 1;
    })
        .filter(page => page > 0)
}

export function Pagination({
    page = 1,
    total_pages,
    total,
    onPageChange,
}: PaginationProps) {

    const previousPages = page > 1
        ? generatePagesArray(page - 1 - siblingsCount, page - 1)
        : []

    const nextPages = page < total_pages
        ? generatePagesArray(page, Math.min(page + siblingsCount, total_pages))
        : []

    return (
        <Stack
            direction='row'
            spacing='6'
            mt='8'
            justify='space-between'
            align='center'
        >
            <Box>
                <strong>{total} Registros</strong>
            </Box>
            <Stack direction='row' spacing='2'>

                {page > (1 + siblingsCount) && (
                    <>
                        <PaginationItem onPageChange={onPageChange} number={1} />
                        {page > (2 + siblingsCount) && (
                            <Text color='gray.700' width='8' textAlign='center'>...</Text>
                        )}
                    </>
                )}

                {previousPages.length > 0 && previousPages.map(page => {
                    return <PaginationItem onPageChange={onPageChange} key={page} number={page} />
                })}

                <PaginationItem onPageChange={onPageChange} number={page} isCurrent />

                {nextPages.length > 0 && nextPages.map(page => {
                    return <PaginationItem onPageChange={onPageChange} key={page} number={page} />
                })}

                {(page + siblingsCount) < total_pages && (
                    <>
                        {(page + 1 + siblingsCount) < total_pages && (
                            <Text color='gray.700' width='8' textAlign='center'>...</Text>
                        )}
                        <PaginationItem onPageChange={onPageChange} number={total_pages} />
                    </>
                )}
            </Stack>
        </Stack>
    )
}