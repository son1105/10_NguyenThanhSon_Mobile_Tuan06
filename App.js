import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Button, Image, ScrollView } from 'react-native';

export default function App() {
    const arr = [
        {
            id: '1',
            img: 'caNauLau.jpg',
            name: 'Ca nấu lẩu, nấu mì mini',
            shopName: 'Devang'
        },
        {
            id: '1',
            img: 'caNauLau.jpg',
            name: 'Ca nấu lẩu, nấu mì mini',
            shopName: 'Devang'
        },
        {
            id: '1',
            img: 'caNauLau.jpg',
            name: 'Ca nấu lẩu, nấu mì mini',
            shopName: 'Devang'
        },
        {
            id: '1',
            img: 'caNauLau.jpg',
            name: 'Ca nấu lẩu, nấu mì mini',
            shopName: 'Devang'
        },
        {
            id: '1',
            img: 'caNauLau.jpg',
            name: 'Ca nấu lẩu, nấu mì mini',
            shopName: 'Devang'
        },
        {
            id: '1',
            img: 'caNauLau.jpg',
            name: 'Ca nấu lẩu, nấu mì mini',
            shopName: 'Devang'
        },
        {
            id: '1',
            img: 'caNauLau.jpg',
            name: 'Ca nấu lẩu, nấu mì mini',
            shopName: 'Devang'
        },
        {
            id: '1',
            img: 'caNauLau.jpg',
            name: 'Ca nấu lẩu, nấu mì mini',
            shopName: 'Devang'
        },
        {
            id: '1',
            img: 'caNauLau.jpg',
            name: 'Ca nấu lẩu, nấu mì mini',
            shopName: 'Devang'
        },
        {
            id: '1',
            img: 'caNauLau.jpg',
            name: 'Ca nấu lẩu, nấu mì mini',
            shopName: 'Devang'
        }
    ]
    return (
        <View style={styles.container} >
            <View style={styles.header}>

            </View>
            <View style={styles.body}>
                <View style={{height:"8%"}}>
                <Text style={styles.support}>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
                </View>
                <ScrollView style={{height:'90%'}} >
                <FlatList
                    data={arr}
                    renderItem={({ item }) =>
                        <View style={styles.item}>
                            <Image style={styles.img} source={require(`./assets/${item.img}`)} />
                            <View style={styles.text}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.shop}>Shop {item.shopName}</Text>
                            </View>
                            <Button style={{ backgroundColor: '#F31111' }} title='Chat'></Button>
                        </View>
                    }
                />
                </ScrollView>
            </View>
            <View style={styles.footer}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        backgroundColor: '#1BA9FF',
    },
    body: {
        flex: 10,
    },
    support: {
        fontSize: 15,
        marginTop: 17,
        marginBottom: 12
    },
    item: {
        flex: 1,
        backgroundColor: '#f9c2ff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 3
    },
    img: {
        width: 100,
        height: 100
    },
    shop: {
        color: '#FF0E0E',
    },
    footer: {
        flex: 1,
        backgroundColor: '#1BA9FF'
    }
});