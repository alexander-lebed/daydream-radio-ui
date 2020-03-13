import { Container, MessageText, HomeLink } from "./styles";
import Link from 'next/link';

interface Props {
    text: string;
}

const ErrorPage = ({text}: Props) => {
    return (
        <Container>
            <MessageText>{text}</MessageText>
            <Link href='/'>
                <HomeLink href='/'>Back Home</HomeLink>
            </Link>
        </Container>
    );
};

export default ErrorPage;