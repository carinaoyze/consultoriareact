import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import AuthContext from '../../contexts/AuthContext';
import { getUser } from '../../utils';

const UserCard = () => {
    const { logout } = useContext(AuthContext);

    return (
        <span className="text-white">
            Olá, <strong className="mr-1">{ getUser() }</strong>
            <i className="fas fa-user-circle mx-2"></i>
            <Button onClick={ () => logout() } variant="outline-danger">
                Sair
            </Button>
        </span>
    )
}

export default UserCard;
