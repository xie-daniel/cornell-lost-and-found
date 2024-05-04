import { signInWithGoogle } from '../../../backend/firebase';

const Login = () => (
    <center>
        <button onClick={signInWithGoogle}>Sign In with Google</button>;
    </center>
);

export default Login;
