import { Layout, Row, Col } from "antd"
import styled from 'styled-components'
import RegistrationForm from "./RegistrationForm"
import LoginForm from "./LoginForm"
import { Title } from "../../components/Title"
import UserTable from './UserTable'

const { Header, Content } = Layout

const RowStyled = styled(Row)`
    justify-content: center;
`
const ColStyled = styled(Col)`
    padding: 36px;
`

function Lab1() {
    return (
        <>
            <Header>
                <Title>Lab 1 - User Identification</Title>
            </Header>
            <Content>
                <Row>
                    <Col span={12} >
                        <RowStyled>
                            <RegistrationForm />
                        </RowStyled>
                        <RowStyled>
                            <LoginForm />
                        </RowStyled>
                    </Col>
                    <ColStyled span={12}>
                        <UserTable />
                    </ColStyled>
                </Row>
            </Content>
        </>
    )
}

export default Lab1
