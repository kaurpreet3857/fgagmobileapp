import React from 'react';
import {
	Container,
	Header,
	Title,
	Left,
	Icon,
	Right,
	Body,
	Content,
	Text,
	Card,
	CardItem,
	Button
} from "native-base";

import commonStyles from '../commonStyles';

class Pictures extends React.Component {

	render() {
		
		return (
			<Container>
				<Header>
					<Left>
						<Button
							transparent
							onPress={() => this.props.navigation.openDrawer()}>
							<Icon name="menu" />
						</Button>
					</Left>
					
					<Title style={commonStyles.headerStyle}>Pictures</Title>

					<Right />
				</Header>
				<Content padder>
					<Card>
						<CardItem>
							<Body>
								<Text>Pictures</Text>
							</Body>
						</CardItem>
					</Card>
				</Content>
			</Container>
		);
	}
}

export default Pictures;