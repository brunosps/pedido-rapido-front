import { Button } from '@chakra-ui/react'

interface PaginationItemProps {
    number: number;
    isCurrent?: boolean;
    onPageChange: (page: number) => void;
}


export function PaginationItem({
    isCurrent = false,
    onPageChange,
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
            onClick={() => onPageChange(number)}
        >
            {number}
        </Button>
    )
}