import auth from './auth';
import account from './account';
import product from './product';
import { ProductDescription } from '../../components';

const AccessControll = {
    ...auth,
    ...account,
    ...product,
    ...ProductDescription,
        
};

export default AccessControll;