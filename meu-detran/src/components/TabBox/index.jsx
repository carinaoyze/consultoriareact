import React, { useContext } from 'react'
import { Tab, Nav, Col, Row } from 'react-bootstrap';
import AuthContext from '../../contexts/AuthContext';
import ModalLogin from '../Modals/ModalLogin';
import './tabbox.scss';

const TabBox = ({ activeTabKey, children }) => {
    return (
        <Tab.Container mountOnEnter={true} unmountOnExit={true} defaultActiveKey={ activeTabKey }>
            <Row>
                { children }
            </Row>
        </Tab.Container>
    )
}

const TabNav = ({ children }) => {
    return (
        <Col sm={3}>
            <Nav variant="pills" className="flex-column border overflow-hidden rounded">
                { children }
            </Nav>
        </Col>
    )
}

const TabLink = ({ text, tabKey, acessoProtegido }) => {
    const { autenticado } = useContext(AuthContext);
    return (
        <Nav.Item>
            <Nav.Link className="rounded-0 py-3 d-flex align-items-center justify-content-between" eventKey={ tabKey }>
                { text }
                { !autenticado && acessoProtegido && <i className="fas fa-lock"></i> }
                { autenticado && acessoProtegido && <i className="fas fa-lock-open"></i> }
            </Nav.Link>
        </Nav.Item>
    )
}

const TabContentContainer = ({ children }) => {
    return (
        <Col sm={9}>
            <Tab.Content>
                { children }
            </Tab.Content>
        </Col>
    )
}

const TabContent = ({ tabKey, children, acessoProtegido }) => {
    const { autenticado } = useContext(AuthContext);
    return (
        <Tab.Pane eventKey={ tabKey }>
            { ((acessoProtegido && autenticado) || !acessoProtegido) ? children : <ModalLogin showModal={true} hideBtnLogin={true} showCloseButton={false} /> }
        </Tab.Pane>
    )
}

TabBox.Nav = TabNav;
TabBox.Container = TabContentContainer;
TabBox.Content = TabContent;
TabBox.Link = TabLink;
TabBox.defaultProps = {
    activeTabKey: 0
}

export default TabBox;
