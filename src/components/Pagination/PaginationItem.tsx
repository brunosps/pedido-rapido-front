import { Button } from '@chakra-ui/react'

interface PaginationItemProps {
    number: number;
    isCurrent?: boolean;
}


export function PaginationItem({
    isCurrent = false,
    number
}: PaginationItemProps) {
    if (isCurrent) {
        return (
            <Button
                size='sm'
                fontSize='xs'
                width='4'
                colorScheme='teal'
                disabled
                _disabled={{
                    colorbg: 'teal',
                    cursor: 'default'
                }}
            >
                {number}
            </Button>
        )
    }

    return (
        <Button
            size='sm'
            fontSize='xs'
            width='4'
            bg='teal'
            _hover={{
                colorbg: 'teal'
            }}
        >
            {number}
        </Button>
    )
}