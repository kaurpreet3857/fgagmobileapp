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

class About extends React.Component {

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
					<Body>
						<Title>About Us</Title>
					</Body>
					<Right />
				</Header>
				<Content padder>
					<Card>
						<CardItem>
							<Body>
								<Text>about</Text>
							</Body>
						</CardItem>
					</Card>
				</Content>
			</Container>
		);
	}
}

export default About;