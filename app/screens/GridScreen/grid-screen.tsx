import * as React from 'react'
import { View, StyleSheet, ViewStyle, TextStyle, TouchableHighlight } from "react-native"
import { SectionGrid } from 'react-native-super-grid'
import { NavigationScreenProps } from 'react-navigation'
import { Screen } from '../../components/screen'
import { Text } from '../../components/text'
import { Wallpaper } from '../../components/wallpaper'
import { Header } from '../../components/header'
import { color, spacing } from '../../theme'

const FULL: ViewStyle = { flex: 1 }
const BOLD: TextStyle = { fontWeight: 'bold' }

const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4]
}

const GRID_VIEW: ViewStyle = {
  marginTop: 20,
  flex: 1
}

const ITEM_NAME: TextStyle = {
  fontSize: 16,
  color: '#fff',
  fontWeight: '600'
}

const ITEM_CODE: TextStyle = {
  color: '#fff',
  fontSize: 12,
  fontWeight: '600'
}

const styles = StyleSheet.create({
  itemContainer: {
    borderRadius: 5,
    height: 150,
    justifyContent: 'flex-end',
    padding: 10
  }
})

const SECTION_HEADER: TextStyle = {
  flex: 1,
  fontSize: 15,
  fontWeight: '600',
  alignItems: 'center',
  backgroundColor: '#636e72',
  color: 'white',
  padding: 10
}
const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[5] - 1,
  paddingHorizontal: 0
}
const HEADER_TITLE: TextStyle = {
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: 'center',
  letterSpacing: 1.5
}

export interface GridScreenProps extends NavigationScreenProps<{}> {}

export class GridScreen extends React.Component<GridScreenProps, {}> {
  goBack = () => this.props.navigation.goBack(null)

  render () {
    const items = [
      { name: 'TURQUOISE', code: '#1abc9c' },
      { name: 'EMERALD', code: '#2ecc71' },
      { name: 'PETER RIVER', code: '#3498db' },
      { name: 'AMETHYST', code: '#9b59b6' },
      { name: 'WET ASPHALT', code: '#34495e' },
      { name: 'GREEN SEA', code: '#16a085' },
      { name: 'NEPHRITIS', code: '#27ae60' },
      { name: 'BELIZE HOLE', code: '#2980b9' },
      { name: 'WISTERIA', code: '#8e44ad' },
      { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
      { name: 'SUN FLOWER', code: '#f1c40f' },
      { name: 'CARROT', code: '#e67e22' },
      { name: 'ALIZARIN', code: '#e74c3c' },
      { name: 'CLOUDS', code: '#ecf0f1' },
      { name: 'CONCRETE', code: '#95a5a6' },
      { name: 'ORANGE', code: '#f39c12' },
      { name: 'PUMPKIN', code: '#d35400' },
      { name: 'POMEGRANATE', code: '#c0392b' },
      { name: 'SILVER', code: '#bdc3c7' },
      { name: 'ASBESTOS', code: '#7f8c8d' },
    ];

    // onPress = () => {
    //   this.setState({
    //     count: this.state.count+1
    //   })
    // }

    return (
      <View style={FULL}>
        <Wallpaper />
        <Screen style={CONTAINER} backgroundColor={color.transparent} preset="scrollStack">
          <Header
            headerTx="gridScreen.pageInfo"
            leftIcon="back"
            onLeftPress={this.goBack}
            style={HEADER}
            titleStyle={HEADER_TITLE}
          />
          <SectionGrid
            itemDimension={90}
            sections={[
              {
                title: 'ALGEBRA',
                data: items.slice(0, 4)
              },
              {
                title: 'TRIGONOMETRY',
                data: items.slice(6, 12)
              },
              {
                title: 'GEOMETRY',
                data: items.slice(12, 20)
              }
            ]}
            style={GRID_VIEW}
            renderItem={({ item, section, index }) => (
              <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                  <Text style={ITEM_NAME}>{item.name}</Text>
                  <Text style={ITEM_CODE}>{item.code}</Text>
              </View>
            )}
            renderSectionHeader={({ section }) => (
              <Text style={SECTION_HEADER}>{section.title}</Text>
            )}
          />
        </Screen>
      </View>
    )
  }
}
