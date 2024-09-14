import { Text, View } from "react-native";

interface Details {
    name: string;
    age: number;
}

const Profile = ({
    name,
    age,
}: Details) => {
    return (
        <View>
            <Text>Halo, nama ku {name}!</Text>
            <Text>Umur ku, {age} tahun.</Text>
        </View>
    );
};

export default Profile;