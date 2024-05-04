import { WrappedComponentProps } from 'react-with-firebase-auth';
import { createComponentWithAuth } from '../../../backend/firebase.ts';
import { createContext, FC, useContext } from 'react';
import { User } from 'firebase/auth'; 

type AuthData = Omit<WrappedComponentProps, 'user'> & {
  user?: User | null;
};

const AuthUserContext = createContext<AuthData | undefined>(undefined);

interface AuthUserProviderProps extends WrappedComponentProps {
    children: React.ReactNode;
  }; 
  
const AuthUserProvider: FC<AuthUserProviderProps> = (props) => (
    <AuthUserContext.Provider value={props}>{props.children}</AuthUserContext.Provider>
  );

export default createComponentWithAuth(AuthUserProvider);

export const useAuth = () => {
  const context = useContext(AuthUserContext);
  if (!context) throw new Error('AuthUserContext has no value');
  return context;
};