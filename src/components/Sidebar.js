import React from "react";

import { Container, Content, Text, List, ListItem } from "native-base";

const routes = ["Prayer Request", "Videos", "Pictures", "Contact Us", "About Us", "Directory"];

export default class SideBar extends React.Component {
    render() {
        return (
            <Container>
                <Content>
                    <Text 
                        style={{
                            paddingTop: 50,
                            paddingLeft: 20,
                            alignSelf: "stretch",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            Title
                    </Text>
                    <List
                        dataArray={routes}
                        style={{paddingTop: 20}}
                        renderRow={data => {
                            return (
                                <ListItem
                                    button
                                    onPress={() => {this.props.navigation.navigate(data); this.props.navigation.closeDrawer()}}>
                                    <Text>{data}</Text>
                                </ListItem>
                            );
                        }}
                    />
                </Content>
            </Container>
        );
    }
}