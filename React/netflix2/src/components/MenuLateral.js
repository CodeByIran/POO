import './MenuLateral.css';
import { FaHome } from 'react-icons/fa';
import { FaCreditCard } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';
import { FaLaptop } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';

function MenuLateral() {
    return (
        <div className='menu-lateral'>
            {/* Add your menu content here */}
            <a className='link selecionado'> Visão Geral </a>
            <FaHome /> 
            <a className='link'> Assinatura </a>
            <FaCreditCard />
            <a className='link'> Segurança </a>
            <FaCheckCircle /> 
            <a className='link'> Aparelhos   </a>
            <FaLaptop /> 
            <a className='link'> Perfis</a>
            <FaUser /> 
        </div>
    );
}

export default MenuLateral;