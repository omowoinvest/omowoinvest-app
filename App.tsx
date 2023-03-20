import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import MainApp from './app/MainApp/MainApp';
import { store } from './app/store/store';
import { Provider } from 'react-redux';
import CustomLoader from './app/components/CustomLoader/CustomLoader';
import AlertModal from './app/components/Modals/AlertModal';
import { useFonts } from 'expo-font';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  let [fontsLoaded] = useFonts({
    'Inter-Light': require('./assets/fonts/Inter-Light.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-Thin': require('./assets/fonts/Inter-Thin.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
  });

  return (
    <>
      {fontsLoaded ? (
        <Provider store={store}>
          <MainApp />
          <CustomLoader />
          <AlertModal />
        </Provider>
      ) : (null)}
    </>
  );
}
