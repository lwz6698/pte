import React from 'react';
import { Menu, Icon, Col, Row } from 'antd';
import '../../../node_modules/antd/dist/antd.css';
import './NavBar.css';

const {SubMenu} = Menu;

export class NavBar extends React.Component {
    state = {
        current: 'home'
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({current: e.key});
    };

    render() {
        return (
            <Menu onClick={
                    this.handleClick
                }
                selectedKeys={
                    [this.state.current]
                }
                mode="horizontal">
                <Menu.Item key="home">
                    <Icon type="home"/>
                    PTE-Learning
                </Menu.Item>
                <SubMenu title={
                    <span className="practice-submenu-wrapper">PTE Practice</span>
                }>
                    <Row>                       
                        <Col className="gutter-row" span={5}>
                            <Row>
                                <p>
                                    <strong>Speaking</strong>
                                </p>
                            </Row>
                            <Row className = "practice-item">
                                    <a href="/" rel="noopener noreferrer" target="_blank">
                                        Read Aloud
                                    </a>
                            </Row>
                            <Row className = "practice-item">
                                    <a href="/" rel="noopener noreferrer" target="_blank">
                                        Repeat Scentence
                                    </a>
                            </Row>
                            <Row className = "practice-item">
                                    <a href="/" rel="noopener noreferrer" target="_blank">
                                        Describe Image
                                    </a>
                
                            </Row> 
                            <Row className = "practice-item">
                                    <a href="/" rel="noopener noreferrer" target="_blank">
                                        Answer Short Question
                                    </a>
                            </Row> 
                        </Col>                     
                        <Col className="gutter-row" span={5}>
                            <Row>
                                <p>
                                    <strong>Writing</strong>
                                </p>
                            </Row>
                            <Row className = "practice-item">
                                <a href="/" rel="noopener noreferrer" target="_blank">
                                    Summarize Wirtten Test
                                </a>
                            </Row>
                            <Row className = "practice-item">
                                    <a href="/" rel="noopener noreferrer" target="_blank">
                                        Write Essay
                                    </a>
                            </Row>
                        </Col>
                        <Col className="gutter-row" span={7}>
                            <Row> 
                                <p>
                                    <strong>Reading</strong>
                                </p>
                            </Row>
                            <Row className = "practice-item">
                                <a href="/" rel="noopener noreferrer" target="_blank">
                                    Multiple Choice (Single)
                                </a>
                            </Row>
                            <Row className = "practice-item">
                                <a href="/" rel="noopener noreferrer" target="_blank">
                                    Multiple Choice (Multiple)
                                </a>             
                            </Row>
                            <Row className = "practice-item">
                                <a href="/" rel="noopener noreferrer" target="_blank">
                                    Re-order Paragraphs
                                </a>
                            </Row> 
                            <Row className = "practice-item">
                                <a href="/" rel="noopener noreferrer" target="_blank">
                                    Fill in Blanks - Reading
                                </a>
                            </Row> 
                            <Row className = "practice-item"> 
                                <a href="/" rel="noopener noreferrer" target="_blank">
                                    Fill in Blanks - Reading & Writing
                                </a>
                            </Row> 
                        </Col>
                        <Col className="gutter-row" span={7}>
                            <Row> 
                                <p>
                                    <strong>Listening</strong>
                                </p>
                            </Row>
                            <Row className = "practice-item">
                                <a href="/" rel="noopener noreferrer" target="_blank">
                                    Summarize Spoken Text
                                </a>
                            </Row>
                            <Row className = "practice-item">
                                <a href="/" rel="noopener noreferrer" target="_blank">
                                    Multiple Choice (Multiple)
                                </a>
                            </Row>
                            <Row className = "practice-item">
                                <a href="/" rel="noopener noreferrer" target="_blank">
                                    Multiple Choice (Single)
                                </a>
                            </Row> 
                            <Row className = "practice-item">
                                <a href="/" rel="noopener noreferrer" target="_blank">
                                    Hight Correct Summary
                                </a>
                            </Row> 
                            <Row className = "practice-item">
                                <a href="/" rel="noopener noreferrer" target="_blank">
                                    Select Missing Word
                                </a>
                            </Row>
                            <Row className = "practice-item">
                                <a href="/" rel="noopener noreferrer" target="_blank">
                                    Fill in the Blanks
                                </a>
                            </Row>
                            <Row className = "practice-item">
                                <a href="/" rel="noopener noreferrer" target="_blank">
                                    Hight Incorrect Words
                                </a>
                            </Row>
                            <Row className = "practice-item">
                                <a href="/" rel="noopener noreferrer" target="_blank">
                                    Write From Dictinction
                                </a>
                            </Row>
                        </Col>
                    </Row>
                    </SubMenu>
                <Menu.Item key="alipay">
                    <a href="https://ant.design" rel="noopener noreferrer" target="_blank">
                        Navigation Four - Link
                    </a>
                </Menu.Item> 
        </Menu>     
        );
    }
}



