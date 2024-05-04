import { ChakraProvider } from '@chakra-ui/react';
import AuthUserProvider from '../components/AuthUserProvider';
import type { AppProps } from 'next/app';
import { signInWithGoogle, signOut } from '../../../backend/firebase';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AuthUserProvider signInWithApple={ () => undefined } 
      signInWithEmailAndPassword={() => undefined }
      signInAnonymously={() => undefined }
      signInWithFacebook={() => undefined }
      signInWithGithub={() => undefined }
      signInWithGoogle={() => signInWithGoogle}
      signInWithPhoneNumber={() => undefined }
      signInWithTwitter={() => undefined }
      signOut={signOut}
      createUserWithEmailAndPassword={() => undefined }
      setError={() => undefined }
      loading>
        <Component {...pageProps} />
      </AuthUserProvider>
    </ChakraProvider>
  );
}

export default App;