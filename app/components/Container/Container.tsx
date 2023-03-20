import React from 'react';
import { SafeAreaView, ViewProps} from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
// import { colors } from '../../Styles/Styles';
import CONSTANTS from '../../utils/constants';
import scale from '../../utils/scale';

// const {theme} = CONSTANTS;
const Container: React.FC<ViewProps> = (props: ViewProps) => {
    const {theme} = useSelector((state: RootState) => state.appSetting);
    return (
        <SafeAreaView {...props} style = {[{flex: 1, backgroundColor: theme.bg}, props.style]} />
    )
}

export default Container;
