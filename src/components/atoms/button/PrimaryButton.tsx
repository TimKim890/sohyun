import {Button} from "@chakra-ui/react"
export const PrimaryButton = (props) => {
    const {children, onClick} = props
    return(
        <Button bg="teal.400" color="white" _hover={{opacity: 0.8}} onClick={onClick}>{children}</Button>
    )
}