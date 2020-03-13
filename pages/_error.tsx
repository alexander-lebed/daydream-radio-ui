import ErrorLayout from '../layouts/ErrorPage';

interface Props {
  errorCode: number;
}

const ErrorPage = (props: Props) => {
    switch (props.errorCode) {
      case 200: // Also display a 404 if someone requests /_error explicitly
      case 404:
        return <ErrorLayout text={'Houston, we have a problem. The page is lost'} />;
      case 500:
        return <ErrorLayout text={'Houston, we have a problem. Something happend with the server'} />;
      default:
        return <ErrorLayout text={`Houston, we have a problem`} />;
    }
};

ErrorPage.getInitialProps = ({res, xhr}) => {
  const errorCode = res ? res.statusCode : (xhr ? xhr.status : null);
  return {errorCode}
}

export default ErrorPage;