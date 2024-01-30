import { Button, View } from "react-native";

interface CButtonProps {
  title: string;
  handler: () => void;
}

const CButton: React.FC<CButtonProps> = ({
  title = "Your text here",
  handler,
}) => {
  return (
    <View>
      <Button title={title} onPress={handler} />
    </View>
  );
};

export default CButton;
