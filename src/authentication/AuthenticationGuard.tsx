import { withAuthenticationRequired } from "@auth0/auth0-react";

type AuthenticationGuardProps = {
    components: React.ReactNode | any;
}

const AuthenticationGuard: React.FC<AuthenticationGuardProps> = ({components}) => {
    const Component = withAuthenticationRequired(components, {
        onRedirecting: () => <div>Redirecting you to the login page</div>,
    })

    return (
        <Component />
    );
};

export default AuthenticationGuard;