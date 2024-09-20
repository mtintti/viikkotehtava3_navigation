import { Appbar } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';

export default function CustomNavigationBar({ route, options, navigation, back }) {
    const title = getHeaderTitle(options, route.name);

    return (
        <Appbar.Header>
            {back ? (
                <Appbar.BackAction onPress={navigation.goBack} /> ) : (null)}
            <Appbar.Content title={route.name} />
            {route.name === 'Home' && (
                <Appbar.Action
                    icon="arrow-right"
                    onPress={() => navigation.navigate('Second')}
                />
            )}
        </Appbar.Header>
    );
}