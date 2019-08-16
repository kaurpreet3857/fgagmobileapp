import React from 'react';

import { Image } from 'react-native';

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
	Button,
	View
} from "native-base";

import commonStyles from '../commonStyles';
import styles from './styles';

class Directory extends React.Component {

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
					
					<Title style={commonStyles.headerStyle}>Directory</Title>
					
					<Right />
				</Header>
				<Content padder>
					<Body>
						<View>
							<Image source={require('../../images/pastor-linson.jpeg')} style={styles.pastorImage}/>
							<Text>Pastor Linson P Samuel</Text>
						</View>
						<View>
							<Image source={require('../../images/pastor-lindsey.jpeg')} style={styles.pastorImage}/>
							<Text>Pastor Lyndse Jonnes</Text>
						</View>
						<View>
							<Image source={require('../../images/pastor-sammy.jpeg')} style={styles.pastorImage}/>
							<Text>Pastor Sammy Thangiah</Text>
						</View>
						<View>
							<Image source={require('../../images/pastor-sam.jpeg')} style={styles.pastorImage}/>
							<Text>Pastor Sam U</Text>
						</View>
						<View>
							<Image source={require('../../images/pastor-vijay.jpeg')} style={styles.pastorImage}/>
							<Text>Pastor Vijay Malhar</Text>
						</View>
					</Body>
				</Content>
			</Container>
		);
	}
}

export default Directory;